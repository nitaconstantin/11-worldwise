CityList Component
Displays a list of cities from the context. Shows a loading spinner while data is being fetched and a message if no cities have been added. Each city is rendered using the CityItem component.
CountryList Component
Displays a list of unique countries from the cities context, showing a loading spinner while fetching and a message if no cities exist. Each country is rendered using the CountryItem component.
Form Component
Allows users to add a city by clicking on a map. Automatically fetches city and country data using reverse geocoding, including the country emoji. Users can set the visit date and add notes. Handles loading states and errors gracefully.
