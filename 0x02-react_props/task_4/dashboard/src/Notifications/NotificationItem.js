import React from 'react';

function NotificationItem({ type, html, value }) {
    return (
        <li data-notification-type={type}>
            <span dangerouslySetInnerHTML={{ __html: html }} />
            {value}
        </li>
    );
}

export default NotificationItem;