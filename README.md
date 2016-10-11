# Live Search Input
This is a react version of asynchronous live search input using RxJs Observables.

![alt tag](https://raw.githubusercontent.com/jbpark0509/LiveSearchInput/master/static/LiveSearchInput.gif)

# Demo

1. Clone the repository.

	git clone <repo> && cd LiveSearchInput

2. Install dependencies.

	npm install

3. Run demo.

	npm run dev

4. Go to http://localhost:3000 in your browser

#How to use in your project

Copy LiveSearchInput.js component in ./src/components/ directory to your project.

## Configuration

The following are prop types.

Option | Description
------ | -----------
url | API url to make GET request. 
queryName | Query name for API GET request. Default is set to q.
placeholder | Placeholder for search input. 
class | Class to add to search input. 
debounce | Debounce time in ms. Default is set to 250ms. 
retry | Number of times to retry API request. Default is set to 3. 
onSuccess | Callback function when API request is successful.
onError | Callback function when API request resulted in error.

## Author
Jeong Park <jbpark0509@hotmail.com>