
/**
 * This is a patch to revert mongoose to old .within & intersects syntax
 *
 */


module.exports = exports = function patchMongoose(mongoose) {
  Object.defineProperty(mongoose.Query.prototype, "within", {
    get : function () {
      return mongoose.Query.base.within.call(this);
    }
  });

  Object.defineProperty(mongoose.Query.prototype, "intersects", {
    get : function () {
      return mongoose.Query.base.intersects.call(this);
    }
  });
}
