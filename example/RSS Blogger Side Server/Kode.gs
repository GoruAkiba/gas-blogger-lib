function doGet(e){
  var par = e.parameter;

  try{

    // declare Blogger properties
    const _id = "5400366567371891262"; // blog Id Obtain from blogger dashboard
    const _key = "Api_key";  // google API console credential see (https://console.cloud.google.com/apis/credentials) 
    var blog = new BloggerLib.Blog(_id,_key);

    //  OBTAIN METHOD FROM REQUEST
    var method = par.m;
    var id = par.id;
    if(!method) throw { code : 403, message : "method required!"}

    switch(method){
      case "getPosts":
        var res = blog.getPosts(id);
        return ContentService.createTextOutput(JSON.stringify(res,null,2));
      break;

      case "getPages":
        var res = blog.getPages(id);
        return ContentService.createTextOutput(JSON.stringify(res,null,2));
      break;

      case "getComments":
        var res = blog.getComments(id);
        return ContentService.createTextOutput(JSON.stringify(res,null,2));
      break;

      case "info":
        var res = blog.info;
        return ContentService.createTextOutput(JSON.stringify(res,null,2));
      break;

      default:
        throw { code: 404, message : "cant found the method"}
      break;
    }



  }catch(err){
    var err_ ={
      code : 500,
      message : err.message
    }
    return ContentService.createTextOutput(JSON.stringify(err.code? err : err_,null,2));
  }
}
