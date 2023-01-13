function links(value)
{
	window.location.assign(value);
}

const toClick = ["Introduction", "Projects", "Insights", "Targets", "← Back"];
let click;

document.querySelector('body').addEventListener('click', (event) => {
	click = event.target;
	if (toClick.includes(click.textContent))
	{
		if (click.textContent == "← Back")
		{
			links("Back.html");
		}
		else
		{
			links(click.textContent + ".html");
		}
	}
});
