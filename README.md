# Live Search Input
This is a react version of asynchronous live search input using RxJs Observables.

![alt tag](https://raw.githubusercontent.com/jbpark0509/LiveSearchInput/master/static/LiveSearchInput.gif)

## Demo

1. Clone the repository.

	git clone https://github.com/jbpark0509/LiveSearchInput.git && cd LiveSearchInput

2. Install npm dependencies.ddd

	npm install

3. Run demo.

	npm run dev

4. Go to http://localhost:3000 in your browser.

## How to use in your project

Copy LiveSearchInput.js component in ./src/components/ directory to your project.

## Configuration

The following are prop types. Required props are marked * beside name

Prop Name | Description
------ | -----------
url* | API url to make GET request. (String)
queryName* | Query name for API GET request. Default is set to q. (String)
placeholder | Placeholder for search input. (String)
class | Class to add to search input. (String)
debounce | Debounce time in ms. Default is set to 250ms. (Integer) 
retry | Number of times to retry API request. Default is set to 3. (Integer)
onSuccess | Callback function when API request is successful. (Function)
onError | Callback function when API request resulted in error. (Function)

## Author
Jeong Park <jbpark0509@hotmail.com>