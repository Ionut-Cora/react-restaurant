import React from 'react';

function InvalidFeedback(props) {
  return (
    <div className="invalid-feedback">
        {props.message}
    </div>
  )
}

export default InvalidFeedback;