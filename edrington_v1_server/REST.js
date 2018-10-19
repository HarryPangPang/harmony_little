var mysql = require("mysql");
function REST_ROUTER(router,connection,md5) {
    var self = this;
    self.handleRoutes(router,connection,md5);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection,md5) {
    router.get("/",function(req,res){
        res.json({"Message" : "Hello World !"});
    });

    // 注册员工
    router.post("/employee_regist",function(req,res){
        var query = "INSERT INTO ??(??,??,??,??) VALUES (?,?,?,?)";
        var table = ["employee_login","employee_name","employee_mobile","employee_email","employee_password",req.body.employee_name, req.body.employee_mobile, req.body.employee_email, req.body.employee_password];
        query = mysql.format(query,table);


        var query_exist= "SELECT * from ?? WHERE ?? = ? OR ?? = ?";
        var table_exist=["employee_login","employee_mobile",req.body.employee_mobile,"employee_email",req.body.employee_email]
        query_exist = mysql.format(query_exist,table_exist);
      
        connection.query(query_exist,function(err,rows){
            if(err) {
                res.send(err)
            } else {
                    console.log(req.body)
                   if(rows == ''){
                    // res.send('注册成功')
                    connection.query(query,function(err,rows){
                        if(err) {
                            res.send(err)
                            // res.json({"Error" : true, "Message" : "Error executing MySQL query"});
                        } else {
                            res.json({"Error" : false, "Message" : "注册成功 !"});
                        }
                    });
                   }
                   else{
                       res.send('已经注册过')
                   }
 
            }
        });
    });

    // 员工登陆
    router.post("/employee_test",function(req,res){
        res.send('OK')
        // var query = "select * from ?? where ?? = ? and ?? = ?";
        // var table = ["employee_login","employee_mobile", req.body.employee_mobile, "employee_password", req.body.employee_password];
        // query = mysql.format(query,table);
        
        // connection.query(query,function(err,rows){
        //     if(err) {
        //         res.send(err)
        //         res.json({"Error" : true, "Message" : "Error executing MySQL query"});
        //     } else {
        //         res.send(rows)
        //         res.json({"Error" : false, "Message" : "Employee Registed !"});
        //     }
        // });
    });
    
    router.get("/users",function(req,res){
        var query = "SELECT * FROM ??";
        var table = ["user_login"];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Users" : rows});
            }
        });
    });

    router.get("/users/:user_id",function(req,res){
        var query = "SELECT * FROM ?? WHERE ??=?";
        var table = ["user_login","user_id",req.params.user_id];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Users" : rows});
            }
        });
    });
    router.put("/users",function(req,res){
        var query = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        var table = ["user_login","user_password",md5(req.body.password),"user_email",req.body.email];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Updated the password for email "+req.body.email});
            }
        });
    });
    router.delete("/users/:email",function(req,res){
        var query = "DELETE from ?? WHERE ??=?";
        var table = ["user_login","user_email",req.params.email];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Deleted the user with email "+req.params.email});
            }
        });
    });
}

module.exports = REST_ROUTER;