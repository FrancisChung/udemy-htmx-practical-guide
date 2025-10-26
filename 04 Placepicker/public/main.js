console.log("HTMX Object", htmx);

function showConfirmationModal(event) {
    if (event.path.detail === '/suggested-locations') { return }

    event.preventDefault();
    console.log("Event", event);
    const action = event.detail.elt.dataset.action;
    const confirmationModal = `
      <dialog class="modal">
        <div id="confirmation">
          <h2>Are you sure?</h2>
          <p>Do you really want to ${action} this place?</p>
          <div id="confirmation-actions">
            <button id="action-no" className="button-text">
              No
            </button>
            <button id="action-yes" className="button">
              Yes
                </button>
          </div>
        </div>
      </dialog>
    `;
    document.body.insertAdjacentHTML('beforeend', confirmationModal);
    const dialog = document.querySelector('dialog');

    const noButton = document.getElementById('action-no');
    noButton.addEventListener('click', function() {
        dialog.remove();
    });

    const yesButton = document.getElementById('action-yes');
    yesButton.addEventListener('click', function() {
        event.detail.issueRequest(true);
        console.log("IssueRequest called");
        dialog.remove();
        }
    );

    dialog.showModal();
}

document.addEventListener('htmx:confirm', showConfirmationModal);