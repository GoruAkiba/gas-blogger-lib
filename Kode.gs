/**
 * Main class function
 * @param {string} _id  blog id obtain from blogger dashboard
 * @param {string} _key google API console credential see (https://console.cloud.google.com/apis/credentials) 
 */
var Blog = function(_id,_key) {

  // your credential will stored here
  this.id = _id;
  this.key = _key;

  // this is Blogger Api vers 3
  this.gate = `https://www.googleapis.com/blogger/v3/blogs/${this.id}`;

  this.fetch = function fetch(url){
    const resApi = url + `?key=${this.key}`;

    try{
      var res = UrlFetchApp.fetch(resApi);
      var data = JSON.parse(res.getContentText());
      if(res.getResponseCode() !== 200){
        throw data;
      }
      return data;

    } catch(err){
      console.log(err.code)
      throw err;
    }
  }


  // request for blog profile
  var __profile = this.fetch(this.gate);

  // blog profile
  this.info = {
    blogName : __profile.name,
    blogDescription : __profile.description,
    blogUrl : __profile.url,
    blogCreated : __profile.published,
    blogLastUpdate : __profile.updated
  }

  /**
   * getPosts method
   * @param {string} id id of item
   */
  this.getPosts = function(id){
    var resApi = this.gate + `/posts${id?"/"+id:""}`;
    console.log(resApi);
    return this.fetch(resApi);
  }
  
  /**
   * getPages method
   * @param {string} id id of item
   */
  this.getPages = function(id){
    var resApi = this.gate + `/pages${id?"/"+id:""}`;
    console.log(resApi);
    return this.fetch(resApi);
  }

  /**
   * getComments method
   * @param {string} id id of item
   */
  this.getComments = function(id){
    var resApi = this.gate + `/comments${id?"/"+id:""}`;
    console.log(resApi);
    return this.fetch(resApi);
  }

  /**
   * debug things
   */
  this.test = function(){
    console.log(this.fetch(this.gate));
  }
}


/**
 * debug things
 */
function test(){
  var blog = new Blog("4310907317016963873","Api_key");
  console.log(blog.getPosts("2333517583612954717"));
}
