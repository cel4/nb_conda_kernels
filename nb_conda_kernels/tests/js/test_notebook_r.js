/* global casper */

var kernel_prefix = 'R [';

casper.notebook_test_kernel(kernel_prefix, function(){
  casper.screenshot.init("r-kernel");
  casper.viewport(1440, 900)
    .then(python_kernel_test);
});

function python_kernel_test(){
  this.screenshot("what");
  this.test.assertSelectorHasText('.kernel_indicator_name', kernel_prefix);
}
