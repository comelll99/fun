function choosePath(choice) {
    const storyText = document.getElementById("story-text");
    const choices = document.getElementById("choices");

    if (choice === "explore") {
        storyText.innerHTML = "Anda melangkah ke dalam hutan yang gelap. Semakin jauh anda berjalan, semakin sepi dan misteri terasa. Tiba-tiba, anda melihat dua jalan: satu ke kiri yang kelihatan terang dengan cahaya aneh, dan satu lagi ke kanan yang dipenuhi kabus tebal. Mana satu yang ingin anda pilih?";
        choices.innerHTML = `
            <button onclick="choosePath('left')">Masuk ke jalan kiri yang bercahaya</button>
            <button onclick="choosePath('right')">Masuk ke jalan kanan yang berkabus</button>
        `;
    } else if (choice === "stay") {
        storyText.innerHTML = "Anda memutuskan untuk kembali ke rumah. Semasa berjalan pulang, anda merasa lega kerana telah membuat pilihan yang selamat. Tamat.";
        choices.innerHTML = "";
    } else if (choice === "left") {
        storyText.innerHTML = "Anda memilih untuk mengikuti jalan yang bercahaya. Cahaya itu semakin terang sehingga anda mendapati sebuah batu besar dengan ukiran misterius. Tiba-tiba, batu itu bergerak dan membuka pintu rahsia ke dalam bumi. Apa yang anda ingin lakukan?";
        choices.innerHTML = `
            <button onclick="choosePath('enter')">Masuk ke dalam pintu rahsia</button>
            <button onclick="choosePath('leave')">Berjalan kembali ke hutan</button>
        `;
    } else if (choice === "right") {
        storyText.innerHTML = "Anda berjalan melalui kabus tebal, dan setelah beberapa langkah, anda mendapati sebuah kolam besar dengan air yang sangat jernih. Di tengah kolam itu ada sebuah bot kecil yang terapung. Apakah anda ingin mendekati kolam atau melanjutkan perjalanan?";
        choices.innerHTML = `
            <button onclick="choosePath('boat')">Menaiki bot kecil</button>
            <button onclick="choosePath('forest')">Teruskan berjalan ke dalam hutan</button>
        `;
    } else if (choice === "enter") {
        storyText.innerHTML = "Anda melangkah ke dalam pintu rahsia dan mendapati diri anda berada di sebuah bilik bawah tanah yang penuh dengan harta karun. Namun, ada satu pilihan lagi: adakah anda ingin mengambil harta itu, atau pergi dan meninggalkan semuanya?";
        choices.innerHTML = `
            <button onclick="choosePath('take')">Ambil harta karun</button>
            <button onclick="choosePath('leave_treasure')">Tinggalkan harta dan keluar</button>
        `;
    } else if (choice === "leave") {
        storyText.innerHTML = "Anda memutuskan untuk tidak terlibat dengan misteri batu itu dan kembali ke hutan. Ketika anda berlari keluar dari jalan bercahaya, anda mendapati diri anda berada di tempat yang sama semula. Tamat.";
        choices.innerHTML = "";
    } else if (choice === "boat") {
        storyText.innerHTML = "Anda menaiki bot kecil dan mendayung ke tengah kolam. Tiba-tiba, air kolam itu bergerak dengan kuat, dan anda disedut ke bawah! Apakah yang anda mahu lakukan?";
        choices.innerHTML = `
            <button onclick="choosePath('dive')">Menyelam ke dalam air</button>
            <button onclick="choosePath('escape')">Meninggalkan bot dan berenang ke pantai</button>
        `;
    } else if (choice === "forest") {
        storyText.innerHTML = "Anda terus berjalan jauh ke dalam hutan dan menemui sebuah gua yang gelap. Sebuah suara berbisik dari dalam gua. Adakah anda mahu memasuki gua atau keluar kembali?";
        choices.innerHTML = `
            <button onclick="choosePath('cave')">Masuk ke dalam gua</button>
            <button onclick="choosePath('exit_forest')">Keluar dari hutan</button>
        `;
    } else if (choice === "take") {
        storyText.innerHTML = "Anda mengambil harta karun itu dan tiba-tiba bilik itu mula bergegar. Satu pintu rahsia terbuka di belakang anda. Anda berlari keluar dan kembali ke hutan, tetapi anda merasakan sesuatu yang buruk sedang mengikuti anda. Tamat.";
        choices.innerHTML = "";
    } else if (choice === "leave_treasure") {
        storyText.innerHTML = "Anda memilih untuk tidak mengambil harta itu. Ketika anda keluar, pintu rahsia tertutup dengan sendirinya, dan anda berjalan kembali ke luar hutan dengan tenang. Tamat.";
        choices.innerHTML = "";
    } else if (choice === "dive") {
        storyText.innerHTML = "Anda menyelam ke dalam air dan mendapati diri anda berada di sebuah dunia bawah air yang penuh dengan makhluk pelik. Di sana, anda menemui satu lagi pintu yang membawakan anda ke dunia yang lain. Tamat.";
        choices.innerHTML = "";
    } else if (choice === "escape") {
        storyText.innerHTML = "Anda melompat keluar dari bot dan berenang ke pantai. Walau bagaimanapun, sesuatu di dalam air menarik anda kembali. Anda berjuang dengan kuat dan berjaya melarikan diri, kembali ke hutan dengan perasaan lega. Tamat.";
        choices.innerHTML = "";
    } else if (choice === "cave") {
        storyText.innerHTML = "Anda memasuki gua dan menemui sebuah ruang besar yang penuh dengan lukisan purba. Di tengahnya, terdapat satu batu besar yang bercahaya. Apakah yang ingin anda lakukan?";
        choices.innerHTML = `
            <button onclick="choosePath('touch')">Sentuh batu bercahaya</button>
            <button onclick="choosePath('leave_cave')">Keluar dari gua</button>
        `;
    } else if (choice === "exit_forest") {
        storyText.innerHTML = "Anda memutuskan untuk keluar dari hutan dan kembali ke tempat yang selamat. Tamat.";
        choices.innerHTML = "";
    } else if (choice === "touch") {
        storyText.innerHTML = "Apabila anda menyentuh batu itu, cahaya memancar terang dan anda dibawa ke dimensi lain. Anda kini berada di sebuah dunia penuh dengan keajaiban. Tamat.";
        choices.innerHTML = "";
    } else if (choice === "leave_cave") {
        storyText.innerHTML = "Anda memutuskan untuk keluar dari gua, tetapi tidak lama kemudian, gua itu runtuh. Anda berjaya melarikan diri dengan selamat, namun dengan pengalaman yang menakutkan. Tamat.";
        choices.innerHTML = "";
    }
}
