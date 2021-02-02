export default function tw(...classes) {
	return classes.filter(Boolean).join(' ');
}
