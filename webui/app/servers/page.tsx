'use client'
import { useCallback, useEffect, useState } from 'react';
import { ServerData, GetAllServers } from '../../lib/servers';
import styles from './page.module.css'

interface ServerItem {
    key: string,
    data: ServerData,
    showDetails: boolean,
}

function ServerListDetails(props: {data: ServerData}) {
    return (
        <div className={styles.details_root}>
            I AM A PLACEHOLDER, RAAAAAH
            {props.data.http_redirect}
        </div>
    )
}

function ServerListItem(props: {data: ServerData, showDetails: boolean, toggleDetails: (id: number) => void}) {
    return (
        <div className={styles.server_root}>
            <div className={styles.server_header}>
                <div className={`${styles.server_header_elements} ${styles.server_name}`}>
                    Name: {props.data.name}
                </div>
                <div className={`${styles.server_header_elements} ${styles.server_hostname}`}>
                    Hostname: <input defaultValue={props.data.hostname} className={styles.server_hostname_input}></input>
                </div>
                <div className={`${styles.server_header_elements} ${styles.server_port}`}>
                    HTTP Port: {props.data.port}
                </div>
                <div className={`${styles.server_header_elements} ${styles.server_ssl_port}`}>
                    SSL Port: {props.data.ssl_port}
                </div>
                <div className={`${styles.server_header_elements} ${styles.server_redirect_http}`}>
                    Redirect HTTP: <input type="checkbox" defaultChecked={props.data.http_redirect}/>
                </div>
                <div>
                    <button onClick={() => props.toggleDetails(props.data.id)}>&gt;</button>
                </div>
            </div>
            {props.showDetails && <ServerListDetails key={`${props.data.id}_details`} data={props.data}/>}
        </div>
    )
}

export default function Servers() {
    const [data, setData] = useState([] as ServerItem[]);
    useEffect(() => {   
        GetAllServers().then(res => setData(res.map(x => {
            return {
                key: x.id.toString(),
                data: x,
                showDetails: false,
            }
        })));
    }, []);

    const toggleDetails = useCallback((id: number) => {
        setData(data.map(x => {
            if (x.data.id === id) {
                x.showDetails = !x.showDetails;
                return x;
            }
            return x;
        }));
    }, [data]);

    return (
        <main className={styles.page_root}>
            <div className={styles.server_list}>
                {data.map(x => <ServerListItem key={x.key} data={x.data} showDetails={x.showDetails} toggleDetails={toggleDetails}/>)}
                <div className={styles.server_list_footer}>
                    <button className={styles.server_list_add_btn}>+</button>
                </div>
            </div>
        </main>
    )
}