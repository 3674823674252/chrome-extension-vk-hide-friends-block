var parent = document.getElementsByClassName('scroll_fix_wrap')[0];

var observer = new MutationObserver(function (mutations) {
	var addedNodes = mutation.addedNodes;

	[].forEach.call(addedNodes, function (node) {
		inspect(node);
	});
});

observer.observe(parent, {childList: true});

initRun();

function inspect(node) {
	if (node.id === 'profile_friends') {
		node.className += ' left_void';
	}

	if (node.id === 'profile_common_friends') {
		node.className += ' left_void';
	}

	if (node.className.indexOf('profile_rate_warning')) {
		node.className = ' left_void';
	}

	if (node.className.indexOf('rate_line')) {
		node.className = ' left_void';
	}

	if (node.id === 'profile_counts') {
		node.style.paddingBottom = '4px';
	}
};

function initRun() {
	[].forEach.call(document.querySelectorAll('#profile_friends'), function (el) {
		el.className += ' left_void';
	});
	
	[].forEach.call(document.querySelectorAll('#profile_common_friends'), function (el) {
		el.className += ' left_void';
	});

	var warning = document.querySelectorAll('.profile_rate_warning')

	if (warning[0]) {
		warning[0].className += ' left_void';
	}

	var rate = document.querySelectorAll('.rate_line');

	if (rate[0]) {
		rate[0].className += ' left_void';
	}

	var profile_counts = document.querySelectorAll('#profile_counts');

	if (profile_counts[0]) {
		profile_counts[0].style.paddingBottom = '4px';
	}
}