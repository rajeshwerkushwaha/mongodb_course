var _0x2d80 = ["request", "bcrypt-nodejs", "MongoClient", "mongodb", "commander", "crypto", "If you are looking at this then SHAME ON YOU", "argv", "parse", "-d, --db [connection string]", "MongoDB database connection string.  Default is 'mongodb://localhost:27017/blog'", "mongodb://localhost:27017/blog", "option", "-p, --port [port]", "Webserver url.  Default is '3000'", "-h, --host [host]", "Webserver host.  Default is 'localhost'", "localhost", "db", "users", "collection", "sessions", "jar", "defaults", "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz", "", "random", "length", "floor", "substring", "use strict", "password", "compareSync", "email", "Email not set correctly in user document after creating an account on the signup page", "Password not set correctly in user document after creating an account on the signup page", "Could not find user document after creating an account on the signup page", "findOne", "name", "session", "value", "Session cookie not properly set after logging in", "Could not find session document after logging in", "username", "Username not set properly in session document after logging in", "Found session document after logging out", "form", "http://", "host", ":", "port", "/signup", "Failed to connect to blog at '", "': ", "cookies", "post", "/login", "/logout", "@", ".", "Blog did not validate due to error creating user!", "log", "message", "close", "Successfully created user", "Blog did not validate due to error logging out!", "Successfully logged out", "Blog did not validate due to error creating login session!", "Successfully logged in", "Blog validated successfully!", "aes256", "createDecipher", "hex", "utf8", "update", "final", "Your validation code is: ", "f03cddb056455ec3bafb0e092f033900a1acf3186580f86877d3495f1c418756", "P281UmGhqx1NiGqOgM87", "connect"];
var request = require(_0x2d80[0]);
var bcrypt = require(_0x2d80[1]);
var MongoClient = require(_0x2d80[3])[_0x2d80[2]];
var program = require(_0x2d80[4]);
var crypto = require(_0x2d80[5]);
var reprimand = _0x2d80[6];
program[_0x2d80[12]](_0x2d80[15], _0x2d80[16], _0x2d80[17])[_0x2d80[12]](_0x2d80[13], _0x2d80[14], 3000)[_0x2d80[12]](_0x2d80[9], _0x2d80[10], _0x2d80[11])[_0x2d80[8]](process[_0x2d80[7]]);
MongoClient[_0x2d80[79]](program[_0x2d80[18]], function(_0x9596x7, _0x9596x8) {
    if(_0x9596x7) {
        throw _0x9596x7;
    };
    var _0x9596x9 = _0x9596x8[_0x2d80[20]](_0x2d80[19]);
    var _0x9596xa = _0x9596x8[_0x2d80[20]](_0x2d80[21]);
    var _0x9596xb = request[_0x2d80[22]]();
    request = request[_0x2d80[23]]({
        "jar": _0x9596xb
    });

    function _0x9596xc(_0x9596xd) {
        var _0x9596xe = _0x2d80[24];
        _0x9596xd = _0x9596xd ? _0x9596xd : 32;
        var _0x9596xf = _0x2d80[25];
        for(var _0x9596x10 = 0; _0x9596x10 < _0x9596xd; _0x9596x10++) {
            var _0x9596x11 = Math[_0x2d80[28]](Math[_0x2d80[26]]() * _0x9596xe[_0x2d80[27]]);
            _0x9596xf += _0x9596xe[_0x2d80[29]](_0x9596x11, _0x9596x11 + 1);
        };
        return _0x9596xf;
    };

    function _0x9596x12(_0x9596x13, _0x9596x14, _0x9596x15, _0x9596x16) {
        _0x9596x9[_0x2d80[37]]({
            "_id": _0x9596x13
        }, function(_0x9596x7, _0x9596x17) {
            _0x2d80[30];
            if(_0x9596x7) {
                return _0x9596x16(_0x9596x7, null);
            };
            if(_0x9596x17) {
                if(bcrypt[_0x2d80[32]](_0x9596x14, _0x9596x17[_0x2d80[31]])) {
                    if(_0x9596x17[_0x2d80[33]] != _0x9596x15) {
                        _0x9596x16(new Error(_0x2d80[34]));
                    } else {
                        _0x9596x16(null);
                    };
                } else {
                    _0x9596x16(new Error(_0x2d80[35]));
                };
            } else {
                _0x9596x16(new Error(_0x2d80[36]));
            };
        });
    };

    function _0x9596x18(_0x9596x13, _0x9596x19, _0x9596x16) {
        _0x2d80[30];
        var _0x9596x1a;
        for(var _0x9596x10 = 0; _0x9596x10 < _0x9596x19[_0x2d80[27]]; _0x9596x10++) {
            if(_0x9596x19[_0x9596x10][_0x2d80[38]] === _0x2d80[39]) {
                _0x9596x1a = _0x9596x19[_0x9596x10][_0x2d80[40]];
            };
        };
        if(!_0x9596x1a) {
            _0x9596x16(Error(_0x2d80[41]));
            return;
        };
        _0x9596xa[_0x2d80[37]]({
            "_id": _0x9596x1a
        }, function(_0x9596x7, _0x9596x1b) {
            if(_0x9596x7) {
                return _0x9596x16(_0x9596x7);
            };
            if(!_0x9596x1b) {
                _0x9596x16(new Error(_0x2d80[42]));
                return;
            };
            if(_0x9596x1b[_0x2d80[43]] != _0x9596x13) {
                _0x9596x16(new Error(_0x2d80[44]));
                return;
            };
            _0x9596x16(null);
        });
    };

    function _0x9596x1c(_0x9596x1a, _0x9596x16) {
        _0x2d80[30];
        _0x9596xa[_0x2d80[37]]({
            "_id": _0x9596x1a
        }, function(_0x9596x7, _0x9596x1b) {
            if(_0x9596x7) {
                return _0x9596x16(_0x9596x7);
            };
            if(_0x9596x1b) {
                _0x9596x16(new Error(_0x2d80[45]));
                return;
            };
            _0x9596x16(null);
        });
    };

    function _0x9596x1d(_0x9596x13, _0x9596x14, _0x9596x15, _0x9596x16) {
        request[_0x2d80[55]](_0x2d80[47] + program[_0x2d80[48]] + _0x2d80[49] + program[_0x2d80[50]] + _0x2d80[51], function(_0x9596x1e, _0x9596x1f, _0x9596x20) {
            if(_0x9596x1e) {
                return _0x9596x16(Error(_0x2d80[52] + program[_0x2d80[48]] + _0x2d80[49] + program[_0x2d80[50]] + _0x2d80[53] + _0x9596x1e.toString()));
            };
            _0x9596x12(_0x9596x13, _0x9596x14, _0x9596x15, function(_0x9596x7) {
                if(_0x9596x7) {
                    return _0x9596x16(_0x9596x7);
                };
                _0x9596x18(_0x9596x13, _0x9596xb[_0x2d80[54]], _0x9596x16);
            });
        })[_0x2d80[46]]({
            "username": _0x9596x13,
            "password": _0x9596x14,
            "verify": _0x9596x14,
            "email": _0x9596x15
        });
    };

    function _0x9596x21(_0x9596x13, _0x9596x14, _0x9596x16) {
        request[_0x2d80[55]](_0x2d80[47] + program[_0x2d80[48]] + _0x2d80[49] + program[_0x2d80[50]] + _0x2d80[56], function(_0x9596x1e, _0x9596x1f, _0x9596x20) {
            if(_0x9596x1e) {
                return _0x9596x16(Error(_0x2d80[52] + program[_0x2d80[48]] + _0x2d80[49] + program[_0x2d80[50]] + _0x2d80[53] + _0x9596x1e.toString()));
            };
            _0x9596x18(_0x9596x13, _0x9596xb[_0x2d80[54]], _0x9596x16);
        })[_0x2d80[46]]({
            "username": _0x9596x13,
            "password": _0x9596x14
        });
    };

    function _0x9596x22(_0x9596x16) {
        var _0x9596x1a;
        for(var _0x9596x10 = 0; _0x9596x10 < _0x9596xb[_0x2d80[54]][_0x2d80[27]]; _0x9596x10++) {
            if(_0x9596xb[_0x2d80[54]][_0x9596x10][_0x2d80[38]] === _0x2d80[39]) {
                _0x9596x1a = _0x9596xb[_0x2d80[54]][_0x9596x10][_0x2d80[40]];
            };
        };
        request(_0x2d80[47] + program[_0x2d80[48]] + _0x2d80[49] + program[_0x2d80[50]] + _0x2d80[57], function(_0x9596x1e, _0x9596x1f, _0x9596x20) {
            if(_0x9596x1e) {
                return _0x9596x16(Error(_0x2d80[52] + program[_0x2d80[48]] + _0x2d80[49] + program[_0x2d80[50]] + _0x2d80[53] + _0x9596x1e.toString()));
            };
            _0x9596x1c(_0x9596x1a, _0x9596x16);
        });
    };
    var _0x9596x13 = _0x9596xc(20);
    var _0x9596x14 = _0x9596xc(10);
    var _0x9596x15 = _0x9596xc(10) + _0x2d80[58] + _0x9596xc(5) + _0x2d80[59] + _0x9596xc(3);
    _0x9596x1d(_0x9596x13, _0x9596x14, _0x9596x15, function(_0x9596x7) {
        if(_0x9596x7) {
            console[_0x2d80[61]](_0x2d80[60]);
            console[_0x2d80[61]](_0x9596x7[_0x2d80[62]]);
            return _0x9596x8[_0x2d80[63]]();
        };
        console[_0x2d80[61]](_0x2d80[64]);
        _0x9596x22(function(_0x9596x7) {
            if(_0x9596x7) {
                console[_0x2d80[61]](_0x2d80[65]);
                console[_0x2d80[61]](_0x9596x7[_0x2d80[62]]);
                return _0x9596x8[_0x2d80[63]]();
            };
            console[_0x2d80[61]](_0x2d80[66]);
            _0x9596x21(_0x9596x13, _0x9596x14, function(_0x9596x7) {
                if(_0x9596x7) {
                    console[_0x2d80[61]](_0x2d80[67]);
                    console[_0x2d80[61]](_0x9596x7[_0x2d80[62]]);
                    return _0x9596x8[_0x2d80[63]]();
                } else {
                    console[_0x2d80[61]](_0x2d80[68]);
                    console[_0x2d80[61]](_0x2d80[69]);

                    function _0x9596x23(_0x9596x24, _0x9596x25) {
                        var _0x9596x26 = _0x2d80[70];
                        var _0x9596x27 = crypto[_0x2d80[71]](_0x9596x26, _0x9596x25);
                        var _0x9596x28 = _0x9596x27[_0x2d80[74]](_0x9596x24, _0x2d80[72], _0x2d80[73]) + _0x9596x27[_0x2d80[75]](_0x2d80[73]);
                        return _0x9596x28;
                    };
                    console[_0x2d80[61]](_0x2d80[76] + _0x9596x23(_0x2d80[77], _0x2d80[78]));
                };
                _0x9596x8[_0x2d80[63]]();
            });
        });
    });
});