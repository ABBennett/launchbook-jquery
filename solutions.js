// Exercise: Find the top navbar by query for the element type, which is <nav>.
$('nav');
// Exercise: Find the sidebar on the right by using it's id.
$('#sidebar-right')
// Exercise: Find the "Pages" and "Groups" sections of the sidebar by using their class.
$('.pages')
$('.groups')
// Exercise: Find all of the comments on the page.
$('.comments p')
// Exercise: Find the first comment on the page.
$('.comments').first()
// Exercise: Find the last comment on the page.
$('.comments').last()

// Exercise: Find the fourth comment on the page.
$($('.comments')[3]);
// Exercise: Find one of the ads in the sidebar and use .hide() to hide it.
$($('.ads')[0]).hide();
// Exercise: Use .show() to make the ad that you hid in the previous step visible again.
$($('.ads')[0]).show();
// Exercise: Use .toggle() to toggle the display of the nav bar at the top of the page.
$('nav').toggle();
// Exercise: Use .attr() to change src attribute of one of the ads in the sidebar. Here's an image source if you need one: http://placebear.com/200/300.
var $textarea = $($('.ads img')[2]);
$textarea.attr('src', 'http://placebear.com/200/300');
// Exercise: Find Sam's post and change it's text to something incredible.
$($('p')[8]).text('8080808080808008080808808'); $('.post').last().text('808080808wwwwww0808008080808808');
// Exercise: Find the first post and use .addClass() to add the .post-liked class to it.
$('.post:first').addClass('post-liked')
// Exercise: Find the second post and use .removeClass() to remove the .post-liked class.
$('.post:nth-child(2)').removeClass('post-liked')
// Exercise: Find any post and use .toggleClass() to toggle the .post-liked class.
$('.post:first').toggleClass('post-liked')
