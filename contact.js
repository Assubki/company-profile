// Fungsi untuk mengirimkan formulir kontak
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman standar

    // Mengambil nilai dari inputan form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validasi form
    if (!name || !email || !message) {
        showFeedback('Harap isi semua kolom!', 'error');
        return;
    }

    // Tampilkan pesan sukses
    showFeedback('Pesan Anda telah dikirim. Terima kasih!', 'success');
    
    // Reset form
    document.getElementById('contact-form').reset();
});

// Fungsi untuk menampilkan feedback
function showFeedback(message, type) {
    const feedbackElement = document.getElementById('form-feedback');
    feedbackElement.textContent = message;
    
    // Menentukan warna feedback berdasarkan status
    feedbackElement.className = 'form-feedback ' + (type === 'success' ? 'success' : 'error');
}
