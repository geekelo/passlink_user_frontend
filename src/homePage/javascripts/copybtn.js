import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';
import '../stylesheets/desktop/copybtn.css';

function CopyButton({ textToCopy }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = (e) => {
    e.preventDefault();
    // Create a temporary input element
    const tempInput = document.createElement('input');
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);

    // Select the text in the input element
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Set state to indicate that text has been copied
    setIsCopied(true);

    // Reset the "copied" state after a short delay
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  return (
    <div className="copybtnSection">
      <button className="copybtn" type="submit" onClick={handleCopyClick}>
        {isCopied
          ? (
            <span>
              <FontAwesomeIcon icon={faCheck} />
              &nbsp;
              Copied
            </span>
          )
          : (
            <span>
              <FontAwesomeIcon icon={faCopy} />
              &nbsp;
              Copy
            </span>
          )}
      </button>
    </div>
  );
}

CopyButton.propTypes = {
  textToCopy: PropTypes.string.isRequired,
};

export default CopyButton;
