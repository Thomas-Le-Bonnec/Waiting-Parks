async function getDataFromAPI(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        if (response.ok) {
            const jsonData = await response.json();
            return jsonData;
        } else {
            console.error(`Failed to retrieve data from API. Status code: ${response.status}`);
            return null;
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}



function parseJSONData(jsonData) {
    const attractionsList = [];
    const currentTime = new Date();

    const lands = jsonData.lands || [];
    const rides = jsonData.rides || [];


    if (lands.length > 0) {
        lands.forEach(land => {
            (land.rides || []).forEach(ride => {
                const attractionName = ride.name;
                const waitTime = ride.wait_time;
                const lastUpdatedStr = ride.last_updated;

                if (attractionName && waitTime !== undefined && lastUpdatedStr) {
                    const lastUpdatedTime = new Date(lastUpdatedStr);
                    const timeSinceUpdate = currentTime - lastUpdatedTime;
                    const timeSinceUpdateSeconds = Math.round(timeSinceUpdate / 60000);

                    const attractionData = {
                        rideName: attractionName,
                        waitTime: waitTime,
                        timeSinceUpdateSeconds: timeSinceUpdateSeconds
                    };

                    attractionsList.push(attractionData);
                }
            });
        });
    } else if (rides.length > 0) {
        rides.forEach(ride => {
            const attractionName = ride.name;
            const waitTime = ride.wait_time;
            const lastUpdatedStr = ride.last_updated;

            if (attractionName && waitTime !== undefined && lastUpdatedStr) {
                const lastUpdatedTime = new Date(lastUpdatedStr);
                const timeSinceUpdate = currentTime - lastUpdatedTime;
                const timeSinceUpdateSeconds = Math.round(timeSinceUpdate / 60000);

                const attractionData = {
                    rideName: attractionName,
                    waitTime: waitTime,
                    timeSinceUpdateSeconds: timeSinceUpdateSeconds
                };

                attractionsList.push(attractionData);
            }
        });
    }

    return attractionsList;
}


async function getWaitingTimes(apiUrl) {
    try {
        const jsonData = await getDataFromAPI(apiUrl);

        if (jsonData) {
            return parseJSONData(jsonData);
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error loading data:", error);
        return null;
    }
}



export { getWaitingTimes };