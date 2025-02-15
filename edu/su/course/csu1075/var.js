
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            // {
            //     link: "theory/",
            //     title: "Theory: Dive into the World of Computer Organization: A Comprehensive Guide",
            //     desc: "Unlock the full potential of Computer Organization with our in-depth guide to all the concepts. Take your programming skills to the next level and discover a world of endless possibilities in architecture of computers. Click now to embark on your Computer Organization journey.",
            //     codetype: "CSU1075 | Concepts"
            // },
            {
                link: "theory/",
                title: "Explore the Core: Journey Through Computer Organization",
                desc: "Embark on an explorative adventure into the heart of computers with CSU1075. Understand the sophisticated dance of circuits and systems that empower your code. From logic gates to processor design, elevate your comprehension of computer architecture to master the machine. Your quest for knowledge begins here—don't just learn, conquer!",
                codetype: "CSU1075 | Computer Organization Fundamentals"
            },
            // {
            //     link: "lab/",
            //     title: "Practical: Elevate Your Java Programming Skills: A Comprehensive Guide for Lab Enthusiasts",
            //     desc: "Unleash your potential in the Java programming lab with our comprehensive guide covering all the essential concepts. Discover the magic of code and take your programming skills to the next level. Click now to embark on your Java journey.",
            //     codetype: "CSU1291P | Lab"
            // },

        ];
        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || null;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title}`;
            codetype = _data.codetype ? `${_data.codetype}` : `CSU1291`;
            readtime = _data.readtime || r(4); readtime = null; // Null readtime - Special Case
            author = _data.author || def_author; author = null; // Null author - Special Case
            cardimage = _data.cardimage || null;
            semester = _data.semester || null;
            body_blockcards(link, date, title, desc, codetype, readtime, author, semester, cardimage);
        }
    }
    function get_class(def_date, def_author) {
        const arr = [
            // {
            //     title: "The Digital Revolution: A Thrilling Introduction to Digital Electronics",
            //     desc: "Join the revolution and discover the magic of digital electronics with our exciting introduction to the world of digital circuits and systems. From binary code to microprocessors, our guide covers all the essentials. Click now to embark on an electrifying journey into the digital realm!",
            //     codetype: "Introduction",
            //     readtime: r(15)
            // },                    
            {
                title: "Pipelining: The Heartbeat of Computer Performance",
                desc: "Dive into the pulse of Computer Organization with a thrilling exploration of Pipelining. Discover how this crucial system boosts computing power and efficiency, allowing for swift execution of instructions in a symphony of synchronized stages. Click now to unveil the secrets of this performance-enhancing marvel in the world of computer architecture!",
                codetype: "Pipelinig",
                readtime: r(7),
                link: "pipelining"
            },
            {
                title: "Instruction Codes: The Language of Processors",
                desc: "Embark on a detailed journey through the world of Instruction Codes in Computer Organization. Uncover the intricacies of opcodes, operands, and their orchestration in the CPU to perform a ballet of computations. Click to master the art of machine language that drives the core of computing efficiency!",
                codetype: "Instruction Codes",
                readtime: r(7),
                link: "instruction-codes"
            },
        ];
        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || `c${i + 1}`;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title} ${i}`;
            codetype = _data.codetype ? `CSU1075 | ${_data.codetype}` : `CSU1075 | Concepts`;
            readtime = _data.readtime || r(4);
            author = _data.author || def_author;
            cardimage = _data.cardimage || null;
            semester = _data.semester || null;
            body_blockcards(link, date, title, desc, codetype, readtime, author, semester, cardimage);
        }
    }
    function get_lab(def_date, def_author) {
        const arr = [
            // {
            //     title: "Practical 1: Verify truth table of all logic gates in Proteus",
            //     desc: "This lab will provide a verification of truth table of logic gates using Proteus software.",
            //     date: "Fri March 3, 2023",
            //     author: "Divya Mohan",
            //     link: "verification-of-logic-gates-in-proteus",
            //     // cardimage: "_url_"
            // },
        ];
        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || `p${i + 1}`;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title} ${i}`;
            codetype = _data.codetype ? `CSU1075P | ${_data.codetype}` : `CSU1075P | Lab`;
            readtime = _data.readtime || r(5);
            author = _data.author || def_author;
            cardimage = _data.cardimage || null;
            semester = _data.semester || null;
            body_blockcards(link, date, title, desc, codetype, readtime, author, semester, cardimage);
        }
    }


    /**********  AUTOMATION CONTROL **********/
    // Get Random date near the entered date. 
    function gendate(date) {
        var inputDate = new Date(date);
        var offset = Math.floor(Math.random() * 20 - 10) * 24 * 60 * 60 * 1000;
        var newDate = new Date(inputDate.getTime() + offset);
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var outputDate = weekdays[newDate.getUTCDay()] + " " + months[newDate.getUTCMonth()] + " " + newDate.getUTCDate() + ", " + newDate.getUTCFullYear();
        return outputDate;
    }
    function r(t) { return Math.floor(Math.random() * 10) + t }
    var title, desc, codetype, readtime, author = 1, link, semester, cardimage;
    const functions = {
        theory: get_class,
        practical: get_lab,
        default: get_main
    };
    (functions[window.urlpart5] || functions.default)(datetogen, author);
}