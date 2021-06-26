![GB_sources](https://4.bp.blogspot.com/-AbJ1au7SfYc/XEHifQKXZWI/AAAAAAAAA5I/beXM7mmhipUNkWUq0zwEmJjOtdg-XZoRgCK4BGAYYCw/s320/chanel%2Bart.png)

GAS Blogger Lib
================
> [GB_Sources](https://github.com/GoruAkiba)

google Appsscript public Blogger Api library.
eases user to access blogger component like posts, pages, comments
make it possible to create RSS in json version.

uwuuuuu (✧ω✧) 	☆ ～('▽^人) ヽ(*⌒▽⌒*)ﾉ

## Deployment

read our deployment detail at [here](https://script.google.com/macros/library/d/1CAJXhNUfgO918tIfHekp48Ywr8KqOE_ZcK5dvbIGctl57Z7iERBehH7C/2). Also  if you want to use our library you can adding using this project id:
```
1CAJXhNUfgO918tIfHekp48Ywr8KqOE_ZcK5dvbIGctl57Z7iERBehH7C
```

## Example
follow this code to init the project:
```
    const _id = "5400366567371891262"; // blog Id Obtain from blogger dashboard
    const _key = "Api_key";  // google API console credential see (https://console.cloud.google.com/apis/credentials) 
    var blog = new BloggerLib.Blog(_id,_key);

```
for the full example when it applied in side server can be seen [here](https://github.com/GoruAkiba/gas-blogger-lib/blob/master/example/RSS%20Blogger%20Side%20Server/Kode.gs) 

**Applied as sideserver and build frontend widget**
- Example when build in plain Html and Javascript, [here](https://github.com/GoruAkiba/gas-blogger-lib/blob/master/example/website/index.html)
- Example when build in [Vue.js](https://vuejs.org/) application, [here](https://github.com/GoruAkiba/gas-blogger-lib/blob/master/example/website/index.vue.html)

## Contributing

- [Fork it!](https://github.com/GoruAkiba/gas-blogger-lib/fork)
- Create your feature branch: ``git checkout -b my-new-feature``
- Commit your changes: ``git commit -am "Add some feature"``
- Push to the branch: ``git push origin my-new-feature``
- Submit a pull request :D

## Support
Joint our Discord Community
or buy me coffe, [☕ here](https://trakteer.id/gb-sources-santoso)

## Author
**GAS Blogger Lib** © [GB_Sources](https://github.com/GoruAkiba)<br>
Authored and Maintained by GB_Sources

> GitHub [@GB_Sources](https://github.com/GoruAkiba)