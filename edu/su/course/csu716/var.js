
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {
        const arr = [
            {
                link: "theory/",
                title: "Life Skills Training Course CSU716: Mastering Essential Skills for Personal and Professional Growth",
                desc: "Embark on a journey to develop crucial life skills with our comprehensive CSU716 course. Dive into a world where personal development meets professional excellence. Click to explore key techniques and strategies for effective communication, time management, and decision-making.",
                codetype: "CSU716 | Essential Skills"
            },
            // {
            //     link: "lab/",
            //     title: "Practical: Elevate Your Algorithm Design Skills: A Comprehensive Guide for Lab Enthusiasts",
            //     desc: "Unleash your potential in the DAA lab with our comprehensive guide covering all the essential concepts. Discover the essence of efficient algorithms and take your problem-solving skills to the next level. Click now to embark on your DAA journey.",
            //     codetype: "CSU085P | Lab"
            // },

        ];

        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || null;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title}`;
            codetype = _data.codetype ? `${_data.codetype}` : `CSU716`;
            readtime = _data.readtime || r(4); readtime = null; // Null readtime - Special Case
            author = _data.author || def_author; author = null; // Null author - Special Case
            cardimage = _data.cardimage || null;
            semester = _data.semester || null;
            body_blockcards(link, date, title, desc, codetype, readtime, author, semester, cardimage);
        }
    }
    function get_class(def_date, def_author) {
        const arr = [
            {
                title: "Revision of Concepts",
                desc: "Delve deep into the intricate world of life skills with our extensive revision of concepts. Unravel the complexities and strategic approaches of fundamental theories with advanced problem-solving techniques. This guide provides a overview of all the concepts. Embark on your journey well prepared!",
                codetype: "Revision",
                readtime: r(6),
                link: "revision"
            }
        ];
        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || `c${i + 1}`;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title} ${i}`;
            codetype = _data.codetype ? `CSU716 | ${_data.codetype}` : `CSU715 | Concepts`;
            readtime = _data.readtime || r(4);
            author = _data.author || def_author;
            cardimage = _data.cardimage || null;
            semester = _data.semester || null;
            body_blockcards(link, date, title, desc, codetype, readtime, author, semester, cardimage);
        }
    }
    function get_lab(def_date, def_author) {
        const arr = [
            {
                title: "Interactive Sorting Algorithms Visualizer",
                desc: "Explore and visualize the workings of various sorting algorithms including Bubble Sort, Merge Sort, Quick Sort, and more. This interactive tool offers a step-by-step breakdown, allowing you to understand the mechanics and efficiency of each algorithm.",
                author: "Divya Mohan",
                link: "interactive-sorting-visualizer",
                // cardimage: "_url_"
            },
            {
                "title": "Practical 1: Selection Sort in C",
                "desc": "Delve into the implementation of the Selection Sort algorithm using C and C++. After understanding the code, enhance your grasp by exploring our <a href='interactive-sorting-visualizer'>interactive visualizer</a>.",
                "author": "Shreshth Srivastav",
                "link": "selection-sort",
                date: "Thursday, August 17, 2023",
                author: "Shreshth Srivastav"
                // "cardimage": "_url_"
            },
            {
                "title": "Practical 2: Straight Min Max Algorithm",
                "desc": "Delve into the implementation of the Straight Min Max Algorithm using C, C++. After understanding the code, enhance your grasp by exploring our <a href='interactive-sorting-visualizer'>interactive visualizer</a>.",
                "author": "Shreshth Srivastav",
                "link": "straight-min-max",
                // "cardimage": "_url_",
                date: "Thursday, August 31, 2023"
            },
            {
                "title": "Practical 2: Method 2 - Straight Min Max Algorithm",
                "desc": "Delve into the implementation of the Straight Min Max Algorithm using C. After understanding the code, enhance your grasp by exploring our <a href='interactive-sorting-visualizer'>interactive visualizer</a>.",
                "author": "Shreshth Srivastav",
                "link": "straight-min-max-method-2",
                // "cardimage": "_url_",
                date: "Thursday, August 31, 2023"
            },
            {
                "title": "Practical 3: Binary Search Algorithm",
                "desc": "Delve into the implementation of the Binary Search Algorithm using C++. After understanding the code, enhance your grasp by exploring our <a href='interactive-sorting-visualizer'>interactive visualizer</a>.",
                "author": "Shreshth Srivastav",
                "link": "binary-search-algorithm",
                // "cardimage": "_url_",
                date: "Thursday, September 7, 2023"
            },

            {
                "title": "Practical 4: Merge Sort",
                "desc": "Delve into the implementation of the Merge Sort using C++. After understanding the code, enhance your grasp by exploring our <a href='interactive-sorting-visualizer'>interactive visualizer</a>.",
                "author": "Divya Mohan",
                "link": "merge-sort",
                // "cardimage": "_url_",
                date: "Thursday, September 14, 2023"
            },
            {
                title: "Practical 5: Quick Sort",
                desc: "Delve into the implementation of the Quick Sort using C++. After understanding the code, enhance your grasp by exploring our <a href='interactive-sorting-visualizer'>interactive visualizer</a>.",
                author: "Divya Mohan",
                link: "quick-sort",
                // "cardimage": "_url_",
                date: "Thursday, September 21, 2023"
            },
            {
                "title": "Practical 6: Selection Procedure",
                "desc": "Delve into the implementation of the Selection Procedure (also known as Quick Select) using C++. After understanding the code, enhance your grasp by exploring our <a href='interactive-sorting-visualizer'>interactive visualizer</a>.",
                "author": "Divya Mohan",
                "link": "selection-procedure",
                // "cardimage": "_url_",
                date: "Thursday, September 28, 2023"
            },
            {
                "title": "Practical 7: Divide And Conquer - Strassens Matrix Multiplication",
                "desc": "Delve into the implementation of the Strassens Matrix Multiplication using Divide and Conquer using C++. After understanding the code, enhance your grasp by exploring our <a href='interactive-sorting-visualizer'>interactive visualizer</a>.",
                "author": "Divya Mohan",
                "link": "strassens-matrix-multiplication",
                // "cardimage": "_url_",
                date: "Thursday, October 12, 2023"
            },
            {
                "title": "Practical 8: Heap Sort",
                "desc": "Delve into the implementation of the Heap Sort using heapify using C++. After understanding the code, enhance your grasp by exploring our <a href='interactive-sorting-visualizer'>interactive visualizer</a>.",
                "author": "Divya Mohan",
                "link": "heap-sort",
                // "cardimage": "_url_",
                date: "Thursday, November 15, 2023"
            },
        ];
        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || `p${i + 1}`;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title} ${i}`;
            codetype = _data.codetype ? `CSU1291P | ${_data.codetype}` : `CSU1291P | Lab`;
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
        lab: get_lab,
        default: get_main
    };
    (functions[window.urlpart5] || functions.default)(datetogen, author);
}