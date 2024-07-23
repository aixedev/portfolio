import { useEffect, useState } from "react";
import { owner_id } from '../../config.json';

const useLanyard = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const ws = new WebSocket("wss://api.lanyard.rest/socket");
        // Lourity
        ws.onopen = () => {
            ws.send(JSON.stringify({
                op: 2,
                d: { subscribe_to_id: owner_id }
            }));
        };

        ws.onmessage = event => {
            const response = JSON.parse(event.data);
            if (response.t === "INIT_STATE" || response.t === "PRESENCE_UPDATE") {
                setUser(response.d);
            }
        };

        return () => {
            ws.close();
        };
    }, []);

    return user;
};

export default useLanyard;