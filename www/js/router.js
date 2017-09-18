define(["js/basicInfoModel"], function(BasicInfo) {
  var $ = Framework7.$;

  /**
   * Init router, that handle page events
   */
  function init() {
    $(document).on('pageBeforeInit', function (e) {
      var page = e.detail.page;

      if (page.name.startsWith("smart")) return;

      if (localStorage.getItem('auth-token') == null)
        load('login');
      else
        load(page.name, page.query);
    });
  }

	/**
	 * Load (or reload) controller from js code (another controller) - call it's init function
	 * @param controllerName
	 * @param query
	 */
	function load(controllerName, query) {
    var url = controllerName + ".html";
		require(['js/' + controllerName + '/'+ controllerName + 'Controller'], function(controller) {
      basicInfo = new BasicInfo()

			controller.init(basicInfo, query);

      $('.tab-link').each(function(index) {
        if ($(this).attr('href') == url)
          $(this).addClass('active');
        else
          $(this).removeClass('active');
      });
		});
	}

	return {
    init: init,
    load: load
  };
});
