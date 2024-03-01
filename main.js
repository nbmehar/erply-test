const selectAllCheckbox = document.getElementById('select-all');
const records = Array.from(document.querySelectorAll('[name=invoice]'));
selectAllCheckbox.indeterminate = true;

selectAllCheckbox.addEventListener('change', (e) => {
    if (e.target.checked) {
        records.forEach(record => record.checked = true);
    } else {
        records.forEach(record => record.checked = false);
    }
})

records.forEach(record => record.addEventListener('change', (e) => {
    if (e.target.checked) {
        selectAllCheckbox.indeterminate = true;
    } else {
        selectAllCheckbox.indeterminate = true;
    }
}))



