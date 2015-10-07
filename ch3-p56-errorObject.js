//try {
//  throw {
//    name: "MyErrorType",
//    message: "opps",
//    extra: "This was rather embarrassing"
////    remedy: genericErrorHandler
//  };
//} catch (e) {
//  console.log(e.extra);
//  
////  e.remedy();
//}


try {
  throw SyntaxError("Input is not a number");
} catch (e) {
  console.log(e.name);
}