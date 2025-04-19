const axios = require('axios');

module.exports.getAddressCoordinate = async (address) => {
   
        const apiKey = process.env.GOOGLE_MAPS_API;
        const encodedAddress = encodeURIComponent(address);
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${apiKey}`;
        try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            const location = response.data.results[0].geometry.location;
            return {
                ltd: location.lat,
                lng: location.lng
            };
        } else {
            throw new Error(`Geocoding API error: ${response.data.status}`);
        }
    } catch (error) {
        console.error('Error fetching coordinates:', error.message);
        throw error;
    }
};

module.exports.getDistanceTime=async (origin,destination)=>{
    if (!origin || !destination) {
        throw new Error('Origin and destination are required');
    }

    const apiKey = process.env.DISTANCE_METRIC_API_KEY; // Make sure your Google Maps API key is stored in env variable
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;


    try {
        const response = await axios.get(url);
        // console.log('Google Maps API Response:', JSON.stringify(response.data, null, 2));


        if (response.data.status === 'OK'){
            if(response.data.rows[ 0 ].elements[ 0 ].status === 'ZERO_RESULTS'){
                throw new Error('no routes found');
            }
            return response.data.rows[ 0 ].elements[ 0 ];
    } else{
        throw new Error('unable to fetch distance and time')
    }
    }
catch (err) {
        console.error('Error fetching distance and time:', err.message);
        throw err;
    }
}

module.exports.getAutoCompleteSuggestions = async (input) => {
    if (!input) {
        throw new Error('query is required');
    }

    const apiKey = process.env.PLACE_API_KEY;
    const url = `https://places.googleapis.com/v1/places:autocomplete?key=${apiKey}`;

    const body = {
        input: input
    };

    try {
        const response = await axios.post(url, body, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // console.log("Google Places API Response:", response.data); // ✅ Keep this for debugging

        if (response.data && response.data.suggestions) {
            // Extract required fields
            return response.data.suggestions.map(item => {
                const prediction = item.placePrediction;
                return {
                    placeId: prediction.placeId,
                    mainText: prediction.structuredFormat?.mainText?.text || '',
                    secondaryText: prediction.structuredFormat?.secondaryText?.text || ''
                };
            });
        } else {
            throw new Error('No suggestions found');
        }

    } catch (err) {
        console.error("API Fetch Error:", err.response?.data || err.message);
        throw new Error('Unable to fetch suggestions');
    }
};
