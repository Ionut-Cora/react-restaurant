import React from 'react';

function InvalidFeedback(props) {
  return (
    <div class="invalid-feedback">
        {props.message}
    </div>
  )
}

export default InvalidFeedback;