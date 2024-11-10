const fileInput = document.getElementById('fileInput');
const fileList = document.getElementById('fileList');

function uploadFile() {
    const file = fileInput.files[0];
    if (!file) {
        alert('Please select a file first.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const fileData = e.target.result;
        const fileName = file.name;

        const link = document.createElement('a');
        link.href = fileData;
        link.download = fileName;
        link.textContent = fileName;

        const listItem = document.createElement('div');
        listItem.appendChild(link);
        fileList.appendChild(listItem);
    };
    reader.readAsDataURL(file);
}
