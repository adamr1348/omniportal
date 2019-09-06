import React from 'react';

const ClassListEntry = (props) => {
    return (
        <tr>
            {Object.values(props.class).map((item, index) => {
                return (
                    <td>
                        {item}
                    </td>
                )
            })}
        </tr>
    )
}

export default ClassListEntry;