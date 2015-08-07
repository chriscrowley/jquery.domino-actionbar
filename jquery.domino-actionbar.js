$(document).ready(function()
{
	// Requires jQuery
	if (window.jQuery)
	{
		// jQuery-UI is no longer a requirement
		/*if (jQuery.ui)
			$(".domino-action").button();*/
	
		$('.domino-action').click(function(event)
		{
			$(this).find('a').click();
			if (typeof $(this).find('a').attr('href') != 'undefined')
				if ($(this).find('a').attr('href') != '')
					window.location = $(this).find('a').attr('href');
			return false;
		});
		$('.domino-actionbar tr a').bind('click', function(e)
		{
			e.stopPropagation();
		});
	}
});
