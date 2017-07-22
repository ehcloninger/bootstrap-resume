function getBaseUrl() {
    var re = new RegExp(/^.*\//);
    return re.exec(window.location.href);
}

document.write(
"<nav class='navbar navbar-default navbar-fixed-top'>" +
"	<div class='container'>" +
"		<div class='navbar-header'>" +
"			<button type='button' class='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar' aria-expanded='false' aria-controls='navbar'>" +
"               <span class='sr-only'> Toggle navigation </span> <span class='icon-bar'> </span> <span class='icon-bar'> </span> <span class='icon-bar'> </span>" +
"           </button>" +
"           <a class='navbar-brand' href='index.html'> Eric Cloninger </a> " +
"		</div>" +
"		<div id='navbar' class='collapse navbar-collapse'>" +
"			<ul class='nav navbar-nav'>" +
"				<li> <a href='#cover'> Cover Letter </a> </li>" +
"				<li> <a href='#experience'> Experience </a> </li>" +
"				<li> <a href='#communications'> Communications </a> </li>" +
"				<li> <a href='#skills'> Skills </a> </li>" +
"				<li> <a href='#community'> Community </a> </li>" +
"			</ul>" +
"			<ul class='nav navbar-nav navbar-right'>" +
"				<li> <a href='http://www.linkedin.com/in/ericcloninger/' target='_blank' title='LinkedIn'> <i class='fa fa-linkedin-square fa-lg'> </i> </a> </li>" +
"				<li> <a href='http://twitter.com/ericc' target='_blank'> <i class='fa fa-twitter-square fa-lg' title='Twitter'> </i> </a> </li>" +
"				<li> <a href='https://github.com/ehcloninger' target='_blank'> <i class='fa fa-github-alt fa-lg' title='Github'> </i> </a> </li>" +
"				<li> <a href='http://stackoverflow.com/users/296758/eric-cloninger' target='_blank'> <i class='fa fa-stack-overflow fa-lg' title='StackOverflow'> </i> </a> </li>" +
"				<li> <a href='mailto:&#101;&#114;&#105;&#99;&#99;&#64;&#112;&#111;&#98;&#111;&#120;&#46;&#99;&#111;&#109;'> <i class='fa fa-envelope-o fa-lg' title='E-Mail'> </i> </a> </li>" +
"			</ul>" +
"		</div>" +
"	</div>" +
"</nav>"
);