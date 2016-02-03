var express = require('express');
var multer = require('multer');
var fs = require("fs");
var exec = require('child_process').exec;

var app = express();
var completed = false;

app.use(multer({ dest: './uploads',

	rename: function(fieldname, filename) {
	   return 'haproxy-new';
	},

	onFileUploadStart: function(file) {
		console.log(file.originalname + 'loading...')
	},

	onFileUploadComplete: function(file) {
		console.log(file.originalname + ' uploaded to ' + file.path);
		completed = true;
		copyFile(file.path, '/etc/haproxy/haproxy.cfg', function(err) {
         if(err) {
            console.log('copy error: ' + err);            
         } else {
            console.log('\nhaproxy updated\n');
            exec('service haproxy restart', function (error, stdout, stderr) {
                console.log('stdout: ' + stdout);
                console.log('stderr: ' + stderr);
                console.log('error: ' + error);
                if (error !== null) {
                  console.log('exec error: ' + error);
                } else { 
                  console.log('restarted') 
                }
            });

         }
      });
	}
}));

function copyFile(source, target, cb) {
  var cbCalled = false;

  var rd = fs.createReadStream(source);
  rd.on("error", function(err) {
    done(err);
  });
  var wr = fs.createWriteStream(target);
  wr.on("error", function(err) {
    done(err);
  });
  wr.on("close", function(ex) {
    done();
  });
  rd.pipe(wr);

  function done(err) {
    if (!cbCalled) {
      cb(err);
      cbCalled = true;
    }
  }
}


app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.post('/api/files', function (req, res) {
	if (completed === true) {
		res.end('File uploaded. Step back to upload more.');
	}
});

app.listen(3000, function() {
	console.log("Magic happens on port 3000");
});
