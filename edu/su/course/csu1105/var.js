
function get_menu_list(datetogen) {
    function get_main(def_date, def_author) {		
        const arr = [           
            {
                "link": "theory/",
                "title": "Theory of Computing",
                "desc": "Explore the foundational theories of computing and algorithms with our Theory of Computing course. Dive deep into topics like automata theory, computability, complexity classes, and algorithmic thinking. This course provides a solid theoretical framework for understanding the capabilities and limits of computing, preparing students for advanced studies in computer science. Click to discover the principles that underlie all of computing and how they apply to practical problem solving.",
                "codetype": "CSU1105 | Theory of Computing",                
            },
            {
                "link": "designer/",
                "title": "Finite State Machine Designer",
                "desc": "<strong>Engage with a dynamic web-based tool for designing Finite State Machines (FSMs).</strong><br>This interactive platform enables users to create, and visualize deterministic finite automata and non-deterministic finite automata with ease. Utilize intuitive controls to add states, draw transitions, and configure accept states directly within a versatile canvas environment. Features include exporting designs in various formats (PNG, SVG, Backup, Restore), adjusting visual elements like circle radius, and a comprehensive help modal for guidance. Ideal for both educational purposes and professional projects, this tool simplifies the complexity of FSM design, offering an immersive experience in the study of automata theory.",
                "codetype": "CSU1105 | Finite State Machine Designer",
                continuereading: "Start Designing FSMs"
            }
        ];

        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || null;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title}`;
            codetype = _data.codetype ? `${_data.codetype}` : `CSU1105`;
            readtime = _data.readtime || r(4); readtime = null; // Null readtime - Special Case
            author = _data.author || def_author; author = null; // Null author - Special Case
            semester = _data.semester || null;
            cardimage = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? _data.cardimage_dark : _data.cardimage || null;
            continuereading = _data.continuereading || null;
            body_blockcards(link, date, title, desc, codetype, readtime, author, semester, cardimage, continuereading);
        }
    }
    function get_class(def_date, def_author) {
        const arr = [
            // {
            //     title: "Exploring Python: A Deep Dive into Its Universe",
            //     desc: "Embark on a comprehensive exploration of Python, from its inception to its pivotal role in today's tech landscape. Understand the 'why' behind its creation, its evolutionary journey, key advantages, and the challenges it faces. Discover its applications, influence on technology, and what the future holds. This article offers a holistic view of Python, providing readers with a strong foundation and motivation for further exploration.",
            //     codetype: "Why Python",
            //     readtime: 5,
            //     link: "why-python"
            // },
            {
                "title": "Cases of DFA, NFA, RE, Grammar, Mealy, and Moore",
                "desc": "This comprehensive article presents a series of cases involving Deterministic Finite Automata (DFA), Nondeterministic Finite Automata (NFA), Regular Expressions (RE), Grammars, Mealy Machines, and Moore Machines. From theoretical foundations to practical applications, explore how these concepts are employed in language processing, compiler design, digital circuit design, and algorithm development. Each case study highlights the unique advantages, challenges, and solutions provided by these models in solving complex computational problems, offering insights into their interconnections and the elegant structure of theoretical computer science.",
                "codetype": "TOC Cases",
                "readtime": 30,
                "link": "dfa-nfa-re-grammar-cases"
            },
            {
                "link": "../designer/",
                "title": "Finite State Machine Designer",
                "desc": "<strong>Engage with a dynamic web-based tool for designing Finite State Machines (FSMs).</strong><br>This interactive platform enables users to create, and visualize deterministic finite automata and non-deterministic finite automata with ease. Utilize intuitive controls to add states, draw transitions, and configure accept states directly within a versatile canvas environment. Features include exporting designs in various formats (PNG, SVG, Backup, Restore), adjusting visual elements like circle radius, and a comprehensive help modal for guidance. Ideal for both educational purposes and professional projects, this tool simplifies the complexity of FSM design, offering an immersive experience in the study of automata theory.",
                "codetype": "CSU1105 | Finite State Machine Designer",
            },
            {
                "title": "Deterministic Finite Automata",
                "desc": "Dive into the world of Deterministic Finite Automata (DFA), a core concept in theoretical computer science and automata theory. Learn how DFAs serve as a mathematical model for various computational devices, capable of recognizing patterns within digital inputs. This article unpacks the structure of DFAs, their operational mechanics, and their pivotal role in compiling processes, text processing, and designing of lexical analyzers. Gain insights into the creation, optimization, and application of DFAs in solving real-world computational problems.",
                "codetype": "Understanding DFA",
                "readtime": 4,
                "link": "understanding-dfa"
            },
            {
                "title": "Nondeterministic Finite Automata",
                "desc": "Explore Nondeterministic Finite Automata (NFA), a fundamental concept in automata theory that introduces flexibility and non-determinism into state machines. This article delves into the nuances of NFA, contrasting its structure and functionality with DFA, and demonstrating its unique ability to occupy multiple states simultaneously. Discover how NFAs simplify the design of computational models, their conversion to DFAs, and their application in simplifying complex computational problems and pattern matching tasks.",
                "codetype": "Exploring NFA",
                "readtime": 4,
                "link": "exploring-nfa"
            },
            {
                "title": "Regular Expressions",
                "desc": "Delve into the essence of Regular Expressions (REs) from the perspective of the Theory of Computing, where they stand as a fundamental mechanism for describing regular languages. This exploration discusses the formal definition of REs, their equivalence to Finite Automata, and their role in Chomsky's hierarchy. Learn about the algebraic properties of regular expressions, their application in proving language properties, and how they contribute to the foundational understanding of language recognition and processing in computer science.",
                "codetype": "RE in Computational Theory",
                "readtime": 4,
                "link": "regular-expression"
            },
            {
                "title": "The Structure of Languages",
                "desc": "Embark on a journey through the concept of Grammar in the context of formal languages and automata theory. This article covers the classification of grammars, including context-free and context-sensitive, and their role in defining programming languages and parsing algorithms. Discover how grammars are foundational to the development of compilers and interpreters, enabling computers to understand and execute programming languages effectively.",
                "codetype": "Grammar in Computing",
                "readtime": 4,
                "link": "grammar-in-computing"
            },
            {
                "title": "Mealy Machines",
                "desc": "Dive deep into Mealy Machines, a type of finite state machine where the outputs are determined by the current state and the current inputs. This article explores the structure, functionality, and advantages of Mealy Machines in detail. Learn about their applications in hardware design, signal processing, and where output responsiveness to inputs is critical. Understand the differences between Mealy and its counterpart, the Moore Machine, through comparative analysis.",
                "codetype": "Understanding Mealy Machines",
                "readtime": 4,
                "link": "mealy-machines"
            },
            {
                "title": "Moore Machines",
                "desc": "Explore Moore Machines, a variant of finite state machines where the output is solely determined by the machine's current state, independent of the input. This article elucidates the concept, design, and operational principles of Moore Machines, offering insight into their utility in digital circuits and control systems. Compare and contrast Moore Machines with Mealy Machines to understand their unique advantages and applications in designing predictable and stable computational models.",
                "codetype": "Exploring Moore Machines",
                "readtime": 4,
                "link": "moore-machines"
            }




        

        ];
        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || `c${i + 1}`;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title} ${i}`;
            codetype = _data.codetype ? `CSU1162 | ${_data.codetype}` : `CSU1162 | Concepts`;
            readtime = _data.readtime || r(4);
            author = _data.author || def_author;
            semester = _data.semester || null;
            cardimage = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? _data.cardimage_dark : _data.cardimage || null;
            continuereading = _data.continuereading || null;
            body_blockcards(link, date, title, desc, codetype, readtime, author, semester, cardimage, continuereading);
        }
    }
    function get_lab(def_date, def_author) {
        const arr = [
            // {
            //     title: "Interactive Sorting Algorithms Visualizer",
            //     desc: "Explore and visualize the workings of various sorting algorithms including Bubble Sort, Merge Sort, Quick Sort, and more. This interactive tool offers a step-by-step breakdown, allowing you to understand the mechanics and efficiency of each algorithm.",
            //     author: "Divya Mohan",
            //     link: "https://colab.research.google.com/drive/1goYusw-6vB2d2qZtxo4V1kt4mmLBrN11?usp=sharing",
            //     // cardimage: "_url_"
            // },                      
        ];
        for (let i = 0; i < arr.length; i++) {
            const _data = arr[i];
            title = _data.title || null; if (!title) continue; // Set the title and if thats not possible, skip the loop
            link = _data.link || `p${i + 1}`;
            date = _data.date ? _data.date : `${gendate(def_date)}`;
            desc = _data.desc || `${title} ${i}`;
            codetype = _data.codetype ? `CSU1162P | ${_data.codetype}` : `CSU1162P | Lab`;
            readtime = _data.readtime || r(5);
            author = _data.author || def_author;
            semester = _data.semester || null;
            cardimage = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? _data.cardimage_dark : _data.cardimage || null;
            continuereading = _data.continuereading || null;
            body_blockcards(link, date, title, desc, codetype, readtime, author, semester, cardimage, continuereading);
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
    function r(t) { return Math.floor(Math.random() * 10) + t };
    var title, desc, codetype, readtime, author = 1, link, semester, cardimage, continuereading;
    const functions = {
        theory: get_class,
        lab: get_lab,
        default: get_main
    };
    (functions[window.urlpart5] || functions.default)(datetogen, author);
}






/********************************* VAR JS FSM MERGE ****************************************/
/*
 Finite State Machine Designer (http://madebyevan.com/fsm/)
 License: MIT License (see below)

 Copyright (c) 2010 Evan Wallace

 Permission is hereby granted, free of charge, to any person
 obtaining a copy of this software and associated documentation
 files (the "Software"), to deal in the Software without
 restriction, including without limitation the rights to use,
 copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the
 Software is furnished to do so, subject to the following
 conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 OTHER DEALINGS IN THE SOFTWARE.
*/

function Link(a, b) {
    this.nodeA = a;
    this.nodeB = b;
    this.text = '';
    this.lineAngleAdjust = 0; // value to add to textAngle when link is straight line

    // make anchor point relative to the locations of nodeA and nodeB
    this.parallelPart = 0.5; // percentage from nodeA to nodeB
    this.perpendicularPart = 0; // pixels from line between nodeA and nodeB
}

Link.prototype.getAnchorPoint = function () {
    var dx = this.nodeB.x - this.nodeA.x;
    var dy = this.nodeB.y - this.nodeA.y;
    var scale = Math.sqrt(dx * dx + dy * dy);
    return {
        'x': this.nodeA.x + dx * this.parallelPart - dy * this.perpendicularPart / scale,
        'y': this.nodeA.y + dy * this.parallelPart + dx * this.perpendicularPart / scale
    };
};

Link.prototype.setAnchorPoint = function (x, y) {
    var dx = this.nodeB.x - this.nodeA.x;
    var dy = this.nodeB.y - this.nodeA.y;
    var scale = Math.sqrt(dx * dx + dy * dy);
    this.parallelPart = (dx * (x - this.nodeA.x) + dy * (y - this.nodeA.y)) / (scale * scale);
    this.perpendicularPart = (dx * (y - this.nodeA.y) - dy * (x - this.nodeA.x)) / scale;
    // snap to a straight line
    if (this.parallelPart > 0 && this.parallelPart < 1 && Math.abs(this.perpendicularPart) < snapToPadding) {
        this.lineAngleAdjust = (this.perpendicularPart < 0) * Math.PI;
        this.perpendicularPart = 0;
    }
};

Link.prototype.getEndPointsAndCircle = function () {
    if (this.perpendicularPart == 0) {
        var midX = (this.nodeA.x + this.nodeB.x) / 2;
        var midY = (this.nodeA.y + this.nodeB.y) / 2;
        var start = this.nodeA.closestPointOnCircle(midX, midY);
        var end = this.nodeB.closestPointOnCircle(midX, midY);
        return {
            'hasCircle': false,
            'startX': start.x,
            'startY': start.y,
            'endX': end.x,
            'endY': end.y,
        };
    }
    var anchor = this.getAnchorPoint();
    var circle = circleFromThreePoints(this.nodeA.x, this.nodeA.y, this.nodeB.x, this.nodeB.y, anchor.x, anchor.y);
    var isReversed = (this.perpendicularPart > 0);
    var reverseScale = isReversed ? 1 : -1;
    var startAngle = Math.atan2(this.nodeA.y - circle.y, this.nodeA.x - circle.x) - reverseScale * nodeRadius / circle.radius;
    var endAngle = Math.atan2(this.nodeB.y - circle.y, this.nodeB.x - circle.x) + reverseScale * nodeRadius / circle.radius;
    var startX = circle.x + circle.radius * Math.cos(startAngle);
    var startY = circle.y + circle.radius * Math.sin(startAngle);
    var endX = circle.x + circle.radius * Math.cos(endAngle);
    var endY = circle.y + circle.radius * Math.sin(endAngle);
    return {
        'hasCircle': true,
        'startX': startX,
        'startY': startY,
        'endX': endX,
        'endY': endY,
        'startAngle': startAngle,
        'endAngle': endAngle,
        'circleX': circle.x,
        'circleY': circle.y,
        'circleRadius': circle.radius,
        'reverseScale': reverseScale,
        'isReversed': isReversed,
    };
};

Link.prototype.draw = function (c) {
    var stuff = this.getEndPointsAndCircle();
    // draw arc
    c.beginPath();
    if (stuff.hasCircle) {
        c.arc(stuff.circleX, stuff.circleY, stuff.circleRadius, stuff.startAngle, stuff.endAngle, stuff.isReversed);
    } else {
        c.moveTo(stuff.startX, stuff.startY);
        c.lineTo(stuff.endX, stuff.endY);
    }
    c.stroke();
    // draw the head of the arrow
    if (stuff.hasCircle) {
        drawArrow(c, stuff.endX, stuff.endY, stuff.endAngle - stuff.reverseScale * (Math.PI / 2));
    } else {
        drawArrow(c, stuff.endX, stuff.endY, Math.atan2(stuff.endY - stuff.startY, stuff.endX - stuff.startX));
    }
    // draw the text
    if (stuff.hasCircle) {
        var startAngle = stuff.startAngle;
        var endAngle = stuff.endAngle;
        if (endAngle < startAngle) {
            endAngle += Math.PI * 2;
        }
        var textAngle = (startAngle + endAngle) / 2 + stuff.isReversed * Math.PI;
        var textX = stuff.circleX + stuff.circleRadius * Math.cos(textAngle);
        var textY = stuff.circleY + stuff.circleRadius * Math.sin(textAngle);
        drawText(c, this.text, textX, textY, textAngle, selectedObject == this);
    } else {
        var textX = (stuff.startX + stuff.endX) / 2;
        var textY = (stuff.startY + stuff.endY) / 2;
        var textAngle = Math.atan2(stuff.endX - stuff.startX, stuff.startY - stuff.endY);
        drawText(c, this.text, textX, textY, textAngle + this.lineAngleAdjust, selectedObject == this);
    }
};

Link.prototype.containsPoint = function (x, y) {
    var stuff = this.getEndPointsAndCircle();
    if (stuff.hasCircle) {
        var dx = x - stuff.circleX;
        var dy = y - stuff.circleY;
        var distance = Math.sqrt(dx * dx + dy * dy) - stuff.circleRadius;
        if (Math.abs(distance) < hitTargetPadding) {
            var angle = Math.atan2(dy, dx);
            var startAngle = stuff.startAngle;
            var endAngle = stuff.endAngle;
            if (stuff.isReversed) {
                var temp = startAngle;
                startAngle = endAngle;
                endAngle = temp;
            }
            if (endAngle < startAngle) {
                endAngle += Math.PI * 2;
            }
            if (angle < startAngle) {
                angle += Math.PI * 2;
            } else if (angle > endAngle) {
                angle -= Math.PI * 2;
            }
            return (angle > startAngle && angle < endAngle);
        }
    } else {
        var dx = stuff.endX - stuff.startX;
        var dy = stuff.endY - stuff.startY;
        var length = Math.sqrt(dx * dx + dy * dy);
        var percent = (dx * (x - stuff.startX) + dy * (y - stuff.startY)) / (length * length);
        var distance = (dx * (y - stuff.startY) - dy * (x - stuff.startX)) / length;
        return (percent > 0 && percent < 1 && Math.abs(distance) < hitTargetPadding);
    }
    return false;
};

function Node(x, y) {
    this.x = x;
    this.y = y;
    this.mouseOffsetX = 0;
    this.mouseOffsetY = 0;
    this.isAcceptState = false;
    this.text = '';
    this.textOnly = false;
}

Node.prototype.setMouseStart = function (x, y) {
    this.mouseOffsetX = this.x - x;
    this.mouseOffsetY = this.y - y;
};

Node.prototype.setAnchorPoint = function (x, y) {
    this.x = x + this.mouseOffsetX;
    this.y = y + this.mouseOffsetY;
};

Node.prototype.draw = function (c) {
    if (this.textOnly) {
        drawText(c, this.text, this.x, this.y, null, selectedObject == this);
        return;
    }

    // draw the circle
    c.beginPath();
    c.arc(this.x, this.y, nodeRadius, 0, 2 * Math.PI, false);
    c.stroke();

    // draw the text
    drawText(c, this.text, this.x, this.y, null, selectedObject == this);

    // draw a double circle for an accept state
    if (this.isAcceptState) {
        c.beginPath();
        c.arc(this.x, this.y, nodeRadius - 6, 0, 2 * Math.PI, false);
        c.stroke();
    }
};

Node.prototype.closestPointOnCircle = function (x, y) {
    var dx = x - this.x;
    var dy = y - this.y;
    var scale = Math.sqrt(dx * dx + dy * dy);
    return {
        'x': this.x + dx * nodeRadius / scale,
        'y': this.y + dy * nodeRadius / scale,
    };
};

Node.prototype.containsPoint = function (x, y) {
    return (x - this.x) * (x - this.x) + (y - this.y) * (y - this.y) < nodeRadius * nodeRadius;
};

function SelfLink(node, mouse) {
    this.node = node;
    this.anchorAngle = 0;
    this.mouseOffsetAngle = 0;
    this.text = '';

    if (mouse) {
        this.setAnchorPoint(mouse.x, mouse.y);
    }
}

SelfLink.prototype.setMouseStart = function (x, y) {
    this.mouseOffsetAngle = this.anchorAngle - Math.atan2(y - this.node.y, x - this.node.x);
};

SelfLink.prototype.setAnchorPoint = function (x, y) {
    this.anchorAngle = Math.atan2(y - this.node.y, x - this.node.x) + this.mouseOffsetAngle;
    // snap to 90 degrees
    var snap = Math.round(this.anchorAngle / (Math.PI / 2)) * (Math.PI / 2);
    if (Math.abs(this.anchorAngle - snap) < 0.1) this.anchorAngle = snap;
    // keep in the range -pi to pi so our containsPoint() function always works
    if (this.anchorAngle < -Math.PI) this.anchorAngle += 2 * Math.PI;
    if (this.anchorAngle > Math.PI) this.anchorAngle -= 2 * Math.PI;
};

SelfLink.prototype.getEndPointsAndCircle = function () {
    var circleX = this.node.x + 1.5 * nodeRadius * Math.cos(this.anchorAngle);
    var circleY = this.node.y + 1.5 * nodeRadius * Math.sin(this.anchorAngle);
    var circleRadius = 0.75 * nodeRadius;
    var startAngle = this.anchorAngle - Math.PI * 0.8;
    var endAngle = this.anchorAngle + Math.PI * 0.8;
    var startX = circleX + circleRadius * Math.cos(startAngle);
    var startY = circleY + circleRadius * Math.sin(startAngle);
    var endX = circleX + circleRadius * Math.cos(endAngle);
    var endY = circleY + circleRadius * Math.sin(endAngle);
    return {
        'hasCircle': true,
        'startX': startX,
        'startY': startY,
        'endX': endX,
        'endY': endY,
        'startAngle': startAngle,
        'endAngle': endAngle,
        'circleX': circleX,
        'circleY': circleY,
        'circleRadius': circleRadius
    };
};

SelfLink.prototype.draw = function (c) {
    var stuff = this.getEndPointsAndCircle();
    // draw arc
    c.beginPath();
    c.arc(stuff.circleX, stuff.circleY, stuff.circleRadius, stuff.startAngle, stuff.endAngle, false);
    c.stroke();
    // draw the text on the loop farthest from the node
    var textX = stuff.circleX + stuff.circleRadius * Math.cos(this.anchorAngle);
    var textY = stuff.circleY + stuff.circleRadius * Math.sin(this.anchorAngle);
    drawText(c, this.text, textX, textY, this.anchorAngle, selectedObject == this);
    // draw the head of the arrow
    drawArrow(c, stuff.endX, stuff.endY, stuff.endAngle + Math.PI * 0.4);
};

SelfLink.prototype.containsPoint = function (x, y) {
    var stuff = this.getEndPointsAndCircle();
    var dx = x - stuff.circleX;
    var dy = y - stuff.circleY;
    var distance = Math.sqrt(dx * dx + dy * dy) - stuff.circleRadius;
    return (Math.abs(distance) < hitTargetPadding);
};

function StartLink(node, start) {
    this.node = node;
    this.deltaX = 0;
    this.deltaY = 0;
    this.text = '';

    if (start) {
        this.setAnchorPoint(start.x, start.y);
    }
}

StartLink.prototype.setAnchorPoint = function (x, y) {
    this.deltaX = x - this.node.x;
    this.deltaY = y - this.node.y;

    if (Math.abs(this.deltaX) < snapToPadding) {
        this.deltaX = 0;
    }

    if (Math.abs(this.deltaY) < snapToPadding) {
        this.deltaY = 0;
    }
};

StartLink.prototype.getEndPoints = function () {
    var startX = this.node.x + this.deltaX;
    var startY = this.node.y + this.deltaY;
    var end = this.node.closestPointOnCircle(startX, startY);
    return {
        'startX': startX,
        'startY': startY,
        'endX': end.x,
        'endY': end.y,
    };
};

StartLink.prototype.draw = function (c) {
    var stuff = this.getEndPoints();

    // draw the line
    c.beginPath();
    c.moveTo(stuff.startX, stuff.startY);
    c.lineTo(stuff.endX, stuff.endY);
    c.stroke();

    // draw the text at the end without the arrow
    var textAngle = Math.atan2(stuff.startY - stuff.endY, stuff.startX - stuff.endX);
    drawText(c, this.text, stuff.startX, stuff.startY, textAngle, selectedObject == this);

    // draw the head of the arrow
    drawArrow(c, stuff.endX, stuff.endY, Math.atan2(-this.deltaY, -this.deltaX));
};

StartLink.prototype.containsPoint = function (x, y) {
    var stuff = this.getEndPoints();
    var dx = stuff.endX - stuff.startX;
    var dy = stuff.endY - stuff.startY;
    var length = Math.sqrt(dx * dx + dy * dy);
    var percent = (dx * (x - stuff.startX) + dy * (y - stuff.startY)) / (length * length);
    var distance = (dx * (y - stuff.startY) - dy * (x - stuff.startX)) / length;
    return (percent > 0 && percent < 1 && Math.abs(distance) < hitTargetPadding);
};

function TemporaryLink(from, to) {
    this.from = from;
    this.to = to;
}

TemporaryLink.prototype.draw = function (c) {
    // draw the line
    c.beginPath();
    c.moveTo(this.to.x, this.to.y);
    c.lineTo(this.from.x, this.from.y);
    c.stroke();

    // draw the head of the arrow
    drawArrow(c, this.to.x, this.to.y, Math.atan2(this.to.y - this.from.y, this.to.x - this.from.x));
};

// draw using this instead of a canvas and call toLaTeX() afterward
function ExportAsLaTeX(bounds) {
    this.bounds = bounds;
    this._points = [];
    this._texData = '';
    this._scale = 0.1; // to convert pixels to document space (TikZ breaks if the numbers get too big, above 500?)

    this.toLaTeX = function () {
        return '\\documentclass[12pt]{article}\n' +
            '\\usepackage{tikz}\n' +
            '\n' +
            '\\begin{document}\n' +
            '\n' +
            '\\begin{center}\n' +
            '\\begin{tikzpicture}[scale=0.2]\n' +
            '\\tikzstyle{every node}+=[inner sep=0pt]\n' +
            this._texData +
            '\\end{tikzpicture}\n' +
            '\\end{center}\n' +
            '\n' +
            '\\end{document}\n';
    };

    this.beginPath = function () {
        this._points = [];
    };
    this.arc = function (x, y, radius, startAngle, endAngle, isReversed) {
        x -= this.bounds[0];
        y -= this.bounds[1];
        x *= this._scale;
        y *= this._scale;
        radius *= this._scale;
        if (endAngle - startAngle == Math.PI * 2) {
            this._texData += '\\draw [' + this.strokeStyle + '] (' + fixed(x, 3) + ',' + fixed(-y, 3) + ') circle (' + fixed(radius, 3) + ');\n';
        } else {
            if (isReversed) {
                var temp = startAngle;
                startAngle = endAngle;
                endAngle = temp;
            }
            if (endAngle < startAngle) {
                endAngle += Math.PI * 2;
            }
            // TikZ needs the angles to be in between -2pi and 2pi or it breaks
            if (Math.min(startAngle, endAngle) < -2 * Math.PI) {
                startAngle += 2 * Math.PI;
                endAngle += 2 * Math.PI;
            } else if (Math.max(startAngle, endAngle) > 2 * Math.PI) {
                startAngle -= 2 * Math.PI;
                endAngle -= 2 * Math.PI;
            }
            startAngle = -startAngle;
            endAngle = -endAngle;
            this._texData += '\\draw [' + this.strokeStyle + '] (' + fixed(x + radius * Math.cos(startAngle), 3) + ',' + fixed(-y + radius * Math.sin(startAngle), 3) + ') arc (' + fixed(startAngle * 180 / Math.PI, 5) + ':' + fixed(endAngle * 180 / Math.PI, 5) + ':' + fixed(radius, 3) + ');\n';
        }
    };
    this.moveTo = this.lineTo = function (x, y) {
        x -= this.bounds[0];
        y -= this.bounds[1];
        x *= this._scale;
        y *= this._scale;
        this._points.push({ 'x': x, 'y': y });
    };
    this.stroke = function () {
        if (this._points.length == 0) return;
        this._texData += '\\draw [' + this.strokeStyle + ']';
        for (var i = 0; i < this._points.length; i++) {
            var p = this._points[i];
            this._texData += (i > 0 ? ' --' : '') + ' (' + fixed(p.x, 2) + ',' + fixed(-p.y, 2) + ')';
        }
        this._texData += ';\n';
    };
    this.fill = function () {
        if (this._points.length == 0) return;
        this._texData += '\\fill [' + this.strokeStyle + ']';
        for (var i = 0; i < this._points.length; i++) {
            var p = this._points[i];
            this._texData += (i > 0 ? ' --' : '') + ' (' + fixed(p.x, 2) + ',' + fixed(-p.y, 2) + ')';
        }
        this._texData += ';\n';
    };
    this.measureText = function (text) {
        var c = canvas.getContext('2d');
        c.font = '20px "Times New Romain", serif';
        return c.measureText(text);
    };
    this.advancedFillText = function (text, originalText, x, y, angleOrNull) {
        x -= this.bounds[0];
        y -= this.bounds[1];
        if (text.replace(' ', '').length > 0) {
            var nodeParams = '';
            // x and y start off as the center of the text, but will be moved to one side of the box when angleOrNull != null
            if (angleOrNull != null) {
                var width = this.measureText(text).width;
                var dx = Math.cos(angleOrNull);
                var dy = Math.sin(angleOrNull);
                if (Math.abs(dx) > Math.abs(dy)) {
                    if (dx > 0) nodeParams = '[right] ', x -= width / 2;
                    else nodeParams = '[left] ', x += width / 2;
                } else {
                    if (dy > 0) nodeParams = '[below] ', y -= 10;
                    else nodeParams = '[above] ', y += 10;
                }
            }
            x *= this._scale;
            y *= this._scale;
            var escapedBraces = originalText.replace(/{/g, "\\{");
            escapedBraces = escapedBraces.replace(/}/g, "\\}");
            this._texData += '\\draw (' + fixed(x, 2) + ',' + fixed(-y, 2) + ') node ' + nodeParams + '{$' + escapedBraces.replace(/ /g, '\\mbox{ }') + '$};\n';
        }
    };

    this.translate = this.save = this.restore = this.clearRect = function () { };
}

// draw using this instead of a canvas and call toSVG() afterward
function ExportAsSVG(bounds) {
    this.width = bounds[2] - bounds[0];
    this.height = bounds[3] - bounds[1];
    this.bounds = bounds;
    this.fillStyle = 'black';
    this.strokeStyle = 'black';
    this.lineWidth = 1;
    this.font = '12px Arial, sans-serif';
    this._points = [];
    this._svgData = '';
    this._transX = 0;
    this._transY = 0;

    // this.toSVG = function () {
    //     return `<svg width="${this.width}" height="${this.height}" version="1.1" xmlns="http://www.w3.org/2000/svg">${this._svgData}</svg>`        
    // var data;
    // var data = '<?xml version="1.0" standalone="no"?>\n';
    // data += '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n\n';
    // data += '<svg width="' + this.width + '" height="' + this.height + '" version="1.1" xmlns="http://www.w3.org/2000/svg">' + this._svgData + '</svg>';
    // data = `<svg width="${this.width}" height="${this.height}" version="1.1" xmlns="http://www.w3.org/2000/svg">${this._svgData}</svg>`;
    // data += this._svgData;
    // data += '</svg>\n';
    // return data;
    // };
    this.toSVG = function () {
        // Minification logic
        function minifySVG(svgString) {
            // Remove comments
            let minified = svgString.replace(/<!--[\s\S]*?-->/g, '');
            // Remove spaces between tags
            minified = minified.replace(/>[\s\r\n]+</g, '><');
            // Minimize whitespace and remove unnecessary spaces within tags
            minified = minified.replace(/\s{2,}/g, ' ').trim();
            // Remove unnecessary space around equal signs and after commas
            minified = minified.replace(/\s*=\s*/g, '=').replace(/,\s*/g, ',');
            return minified;
        }

        // Construct the SVG string
        const svgData = `<svg width="${this.width}" height="${this.height}" version="1.1" xmlns="http://www.w3.org/2000/svg">${this._svgData}</svg>`;

        // Return the minified SVG
        return minifySVG(svgData);
    };


    this.beginPath = function () {
        this._points = [];
    };
    this.arc = function (x, y, radius, startAngle, endAngle, isReversed) {
        x -= this.bounds[0];
        y -= this.bounds[1];
        x += this._transX;
        y += this._transY;
        var style = `stroke="${this.strokeStyle}" stroke-width="${this.lineWidth}" fill="none"`;

        if (endAngle - startAngle == Math.PI * 2) {
            this._svgData += '\t<ellipse ' + style + ' cx="' + fixed(x, 3) + '" cy="' + fixed(y, 3) + '" rx="' + fixed(radius, 3) + '" ry="' + fixed(radius, 3) + '"/>';
        } else {
            if (isReversed) {
                var temp = startAngle;
                startAngle = endAngle;
                endAngle = temp;
            }

            if (endAngle < startAngle) {
                endAngle += Math.PI * 2;
            }

            var startX = x + radius * Math.cos(startAngle);
            var startY = y + radius * Math.sin(startAngle);
            var endX = x + radius * Math.cos(endAngle);
            var endY = y + radius * Math.sin(endAngle);
            var useGreaterThan180 = (Math.abs(endAngle - startAngle) > Math.PI);
            var goInPositiveDirection = 1;

            this._svgData += '\t<path ' + style + ' d="';
            this._svgData += 'M ' + fixed(startX, 3) + ',' + fixed(startY, 3) + ' '; // startPoint(startX, startY)
            this._svgData += 'A ' + fixed(radius, 3) + ',' + fixed(radius, 3) + ' '; // radii(radius, radius)
            this._svgData += '0 '; // value of 0 means perfect circle, others mean ellipse
            this._svgData += +useGreaterThan180 + ' ';
            this._svgData += +goInPositiveDirection + ' ';
            this._svgData += fixed(endX, 3) + ',' + fixed(endY, 3); // endPoint(endX, endY)
            this._svgData += '"/>';
        }
    };
    this.moveTo = this.lineTo = function (x, y) {
        x -= this.bounds[0];
        y -= this.bounds[1];
        x += this._transX;
        y += this._transY;
        this._points.push({ 'x': x, 'y': y });
    };
    this.stroke = function () {
        if (this._points.length == 0) return;
        this._svgData += '\t<polygon stroke="' + this.strokeStyle + '" stroke-width="' + this.lineWidth + '" points="';
        for (var i = 0; i < this._points.length; i++) {
            this._svgData += (i > 0 ? ' ' : '') + fixed(this._points[i].x, 3) + ',' + fixed(this._points[i].y, 3);
        }
        this._svgData += '"/>';
    };
    this.fill = function () {
        if (this._points.length == 0) return;
        this._svgData += '\t<polygon fill="' + this.fillStyle + '" stroke-width="' + this.lineWidth + '" points="';
        for (var i = 0; i < this._points.length; i++) {
            this._svgData += (i > 0 ? ' ' : '') + fixed(this._points[i].x, 3) + ',' + fixed(this._points[i].y, 3);
        }
        this._svgData += '"/>';
    };
    this.measureText = function (text) {
        var c = canvas.getContext('2d');
        c.font = '20px "Times New Romain", serif';
        return c.measureText(text);
    };
    this.fillText = function (text, x, y) {
        x -= this.bounds[0];
        y -= this.bounds[1];
        x += this._transX;
        y += this._transY;
        if (text.replace(' ', '').length > 0) {
            this._svgData += '\t<text x="' + fixed(x, 3) + '" y="' + fixed(y, 3) + '" font-family="Times New Roman" font-size="20">' + textToXML(text) + '</text>';
        }
    };
    this.translate = function (x, y) {
        this._transX = x;
        this._transY = y;
    };

    this.save = this.restore = this.clearRect = function () { };
}

// var greekLetterNames = ['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta', 'Eta', 'Theta', 'Iota', 'Kappa', 'Lambda', 'Mu', 'Nu', 'Xi', 'Omicron', 'Pi', 'Rho', 'Sigma', 'Tau', 'Upsilon', 'Phi', 'Chi', 'Psi', 'Omega', 'emptyset', 'rightarrow', 'leftarrow'];

// function convertLatexShortcuts(text) {
//     // html greek characters
//     for (var i = 0; i < greekLetterNames.length; i++) {
//         var name = greekLetterNames[i];
//         if (name == "emptyset") {
//             text = text.replace(new RegExp('\\\\' + name, 'g'), String.fromCharCode(8709));
//             continue;
//         }
//         if (name == "rightarrow") {
//             text = text.replace(new RegExp('\\\\' + name, 'g'), String.fromCharCode(8594));
//             continue;
//         }
//         if (name == "leftarrow") {
//             text = text.replace(new RegExp('\\\\' + name, 'g'), String.fromCharCode(8592));
//             continue;
//         }
//         if (name == "eps") {
//             text = text.replace(new RegExp('\\\\' + name, 'g'), String.fromCharCode(949));
//             continue;
//         }
//         text = text.replace(new RegExp('\\\\' + name, 'g'), String.fromCharCode(913 + i + (i > 16)));
//         text = text.replace(new RegExp('\\\\' + name.toLowerCase(), 'g'), String.fromCharCode(945 + i + (i > 16)));
//     }

//     // subscripts
//     for (var i = 0; i < 10; i++) {
//         text = text.replace(new RegExp('_' + i, 'g'), String.fromCharCode(8320 + i));
//     }

//     return text;
// }

function convertLatexShortcuts(text) {
    // Define a mapping for special cases and Greek letters to their Unicode code points
    const specialCases = {
        'emptyset': 8709,
        'rightarrow': 8594,
        'leftarrow': 8592,
        'eps': 949, // Handling "eps" as a special case for epsilon
        'epsilon': 949 // Unicode for lowercase epsilon
    };

    // Replace special cases
    Object.keys(specialCases).forEach(name => {
        text = text.replace(new RegExp(`\\\\${name}`, 'g'), String.fromCharCode(specialCases[name]));
    });

    // Handle the rest of the Greek letters not covered in specialCases
    const greekLetterNames = ['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta', 'Eta', 'Theta', 'Iota', 'Kappa', 'Lambda', 'Mu', 'Nu', 'Xi', 'Omicron', 'Pi', 'Rho', 'Sigma', 'Tau', 'Upsilon', 'Phi', 'Chi', 'Psi', 'Omega'];

    greekLetterNames.forEach((name, i) => {
        // Skip if already handled as a special case
        if (specialCases[name.toLowerCase()]) return;

        // Calculate Unicode code points for uppercase and lowercase letters
        const upperCode = 913 + i + (i >= 16); // Adjust index for Omega
        const lowerCode = 945 + i + (i >= 16); // Adjust index for omega

        // Replace uppercase and lowercase Greek letters
        text = text.replace(new RegExp(`\\\\${name}`, 'g'), String.fromCharCode(upperCode));
        text = text.replace(new RegExp(`\\\\${name.toLowerCase()}`, 'g'), String.fromCharCode(lowerCode));
    });

    // Handle subscripts
    for (let i = 0; i < 10; i++) {
        text = text.replace(new RegExp(`_${i}`, 'g'), String.fromCharCode(8320 + i));
    }

    return text;
}


function textToXML(text) {
    text = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    var result = '';
    for (var i = 0; i < text.length; i++) {
        var c = text.charCodeAt(i);
        if (c >= 0x20 && c <= 0x7E) {
            result += text[i];
        } else {
            result += '&#' + c + ';';
        }
    }
    return result;
}

function drawArrow(c, x, y, angle) {
    var dx = Math.cos(angle);
    var dy = Math.sin(angle);
    c.beginPath();
    c.moveTo(x, y);
    c.lineTo(x - 8 * dx + 5 * dy, y - 8 * dy - 5 * dx);
    c.lineTo(x - 8 * dx - 5 * dy, y - 8 * dy + 5 * dx);
    c.fill();
}

function canvasHasFocus() {
    return (document.activeElement || document.body) == document.body;
}

function drawText(c, originalText, x, y, angleOrNull, isSelected) {
    text = convertLatexShortcuts(originalText);
    c.font = '20px "Times New Roman", serif';
    var width = c.measureText(text).width;

    // center the text
    x -= width / 2;

    // position the text intelligently if given an angle
    if (angleOrNull != null) {
        var cos = Math.cos(angleOrNull);
        var sin = Math.sin(angleOrNull);
        var cornerPointX = (width / 2 + 5) * (cos > 0 ? 1 : -1);
        var cornerPointY = (10 + 5) * (sin > 0 ? 1 : -1);
        var slide = sin * Math.pow(Math.abs(sin), 40) * cornerPointX - cos * Math.pow(Math.abs(cos), 10) * cornerPointY;
        x += cornerPointX - sin * slide;
        y += cornerPointY + cos * slide;
    }

    // draw text and caret (round the coordinates so the caret falls on a pixel)
    if ('advancedFillText' in c) {
        c.advancedFillText(text, originalText, x + width / 2, y, angleOrNull);
    } else {
        x = Math.round(x);
        y = Math.round(y);
        c.fillText(text, x, y + 6);
        if (isSelected && caretVisible && canvasHasFocus() && document.hasFocus()) {
            x += width;
            c.beginPath();
            c.moveTo(x, y - 10);
            c.lineTo(x, y + 10);
            c.stroke();
        }
    }
}

var caretTimer;
var caretVisible = true;

function resetCaret() {
    clearInterval(caretTimer);
    caretTimer = setInterval('caretVisible = !caretVisible; draw()', 500);
    caretVisible = true;
}

var canvas;
var nodeRadius = 30;
var nodes = [];
var links = [];

var cursorVisible = true;
var snapToPadding = 6; // pixels
var hitTargetPadding = 6; // pixels
var selectedObject = null; // either a Link or a Node
var currentLink = null; // a Link
var movingObject = false;
var originalClick;

function clearCanvas() {
    nodes = [];
    links = [];
    localStorage.removeItem('fsm');
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    nodeRadius = 30;
    document.getElementById("rangeSlider").value = 30;
}

function makeNodeTextOnly() {
    if ("textOnly" in selectedObject) {
        selectedObject.textOnly = !selectedObject.textOnly;
        draw();
    }
}

function radiusChanged() {
    var newRadius = document.getElementById("rangeSlider").value;
    newRadius = parseInt(newRadius);
    nodeRadius = newRadius;
    draw();
}

function drawUsing(c) {
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.save();
    c.translate(0.5, 0.5);

    for (var i = 0; i < nodes.length; i++) {
        c.lineWidth = 1;
        c.fillStyle = c.strokeStyle = (nodes[i] == selectedObject) ? 'blue' : 'black';
        nodes[i].draw(c);
    }
    for (var i = 0; i < links.length; i++) {
        c.lineWidth = 1;
        c.fillStyle = c.strokeStyle = (links[i] == selectedObject) ? 'blue' : 'black';
        links[i].draw(c);
    }
    if (currentLink != null) {
        c.lineWidth = 1;
        c.fillStyle = c.strokeStyle = 'black';
        currentLink.draw(c);
    }

    c.restore();
}

function draw() {
    drawUsing(canvas.getContext('2d'));
    saveBackup();
}

function selectObject(x, y) {
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].containsPoint(x, y)) {
            return nodes[i];
        }
    }
    for (var i = 0; i < links.length; i++) {
        if (links[i].containsPoint(x, y)) {
            return links[i];
        }
    }
    return null;
}

function snapNode(node) {
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i] == node) continue;

        if (Math.abs(node.x - nodes[i].x) < snapToPadding) {
            node.x = nodes[i].x;
        }

        if (Math.abs(node.y - nodes[i].y) < snapToPadding) {
            node.y = nodes[i].y;
        }
    }
}

window.onload = function () {
    canvas = document.getElementById('canvas');
    restoreBackup();
    draw();

    canvas.onmousedown = function (e) {
        var mouse = crossBrowserRelativeMousePos(e);
        selectedObject = selectObject(mouse.x, mouse.y);
        movingObject = false;
        originalClick = mouse;

        if (selectedObject != null) {
            if (shift && selectedObject instanceof Node) {
                currentLink = new SelfLink(selectedObject, mouse);
            } else {
                movingObject = true;
                deltaMouseX = deltaMouseY = 0;
                if (selectedObject.setMouseStart) {
                    selectedObject.setMouseStart(mouse.x, mouse.y);
                }
            }
            resetCaret();
        } else if (shift) {
            currentLink = new TemporaryLink(mouse, mouse);
        }

        draw();

        if (canvasHasFocus()) {
            // disable drag-and-drop only if the canvas is already focused
            return false;
        } else {
            // otherwise, let the browser switch the focus away from wherever it was
            resetCaret();
            return true;
        }
    };

    canvas.ondblclick = function (e) {
        var mouse = crossBrowserRelativeMousePos(e);
        selectedObject = selectObject(mouse.x, mouse.y);

        if (selectedObject == null) {
            selectedObject = new Node(mouse.x, mouse.y);
            nodes.push(selectedObject);
            resetCaret();
            draw();
        } else if (selectedObject instanceof Node) {
            selectedObject.isAcceptState = !selectedObject.isAcceptState;
            draw();
        }
    };

    canvas.onmousemove = function (e) {
        var mouse = crossBrowserRelativeMousePos(e);

        if (currentLink != null) {
            var targetNode = selectObject(mouse.x, mouse.y);
            if (!(targetNode instanceof Node)) {
                targetNode = null;
            }

            if (selectedObject == null) {
                if (targetNode != null) {
                    currentLink = new StartLink(targetNode, originalClick);
                } else {
                    currentLink = new TemporaryLink(originalClick, mouse);
                }
            } else {
                if (targetNode == selectedObject) {
                    currentLink = new SelfLink(selectedObject, mouse);
                } else if (targetNode != null) {
                    currentLink = new Link(selectedObject, targetNode);
                } else {
                    currentLink = new TemporaryLink(selectedObject.closestPointOnCircle(mouse.x, mouse.y), mouse);
                }
            }
            draw();
        }

        if (movingObject) {
            selectedObject.setAnchorPoint(mouse.x, mouse.y);
            if (selectedObject instanceof Node) {
                snapNode(selectedObject);
            }
            draw();
        }
    };

    canvas.onmouseup = function (e) {
        movingObject = false;

        if (currentLink != null) {
            if (!(currentLink instanceof TemporaryLink)) {
                selectedObject = currentLink;
                links.push(currentLink);
                resetCaret();
            }
            currentLink = null;
            draw();
        }
    };
}

var shift = false;

document.onkeydown = function (e) {
    var key = crossBrowserKey(e);

    if (key == 16) {
        shift = true;
    } else if (!canvasHasFocus()) {
        // don't read keystrokes when other things have focus
        return true;
    } else if (key == 8) { // backspace key
        if (selectedObject != null && 'text' in selectedObject) {
            selectedObject.text = selectedObject.text.substr(0, selectedObject.text.length - 1);
            resetCaret();
            draw();
        }

        // backspace is a shortcut for the back button, but do NOT want to change pages
        return false;
    } else if (key == 46) { // delete key
        if (selectedObject != null) {
            for (var i = 0; i < nodes.length; i++) {
                if (nodes[i] == selectedObject) {
                    nodes.splice(i--, 1);
                }
            }
            for (var i = 0; i < links.length; i++) {
                if (links[i] == selectedObject || links[i].node == selectedObject || links[i].nodeA == selectedObject || links[i].nodeB == selectedObject) {
                    links.splice(i--, 1);
                }
            }
            selectedObject = null;
            draw();
        }
    }
};

document.onkeyup = function (e) {
    var key = crossBrowserKey(e);

    if (key == 16) {
        shift = false;
    }
};

document.onkeypress = function (e) {
    // don't read keystrokes when other things have focus
    var key = crossBrowserKey(e);
    if (!canvasHasFocus()) {
        // don't read keystrokes when other things have focus
        return true;
    } else if (key >= 0x20 && key <= 0x7E && !e.metaKey && !e.altKey && !e.ctrlKey && selectedObject != null && 'text' in selectedObject) {
        selectedObject.text += String.fromCharCode(key);
        resetCaret();
        draw();

        // don't let keys do their actions (like space scrolls down the page)
        return false;
    } else if (key == 8) {
        // backspace is a shortcut for the back button, but do NOT want to change pages
        return false;
    }
};

function crossBrowserKey(e) {
    e = e || window.event;
    return e.which || e.keyCode;
}

function crossBrowserElementPos(e) {
    e = e || window.event;
    var obj = e.target || e.srcElement;
    var x = 0, y = 0;
    while (obj.offsetParent) {
        x += obj.offsetLeft;
        y += obj.offsetTop;
        obj = obj.offsetParent;
    }
    return { 'x': x, 'y': y };
}

function crossBrowserMousePos(e) {
    e = e || window.event;
    return {
        'x': e.pageX || e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft,
        'y': e.pageY || e.clientY + document.body.scrollTop + document.documentElement.scrollTop,
    };
}

function crossBrowserRelativeMousePos(e) {
    var element = crossBrowserElementPos(e);
    var mouse = crossBrowserMousePos(e);
    return {
        'x': mouse.x - element.x,
        'y': mouse.y - element.y
    };
}

function output(text) {
    var element = document.getElementById('output');
    element.style.display = 'block';
    element.value = text;
}

// function saveAsPNG() {
//     // First, re-render the image with nothing selected.
//     var oldSelectedObject = selectedObject;
//     selectedObject = null;
//     drawUsing(canvas.getContext('2d'));
//     selectedObject = oldSelectedObject;
//     // Second, crop the image to only the part with content.
//     var bounds = getBoundingRect();
//     var croppedWidth = bounds[2] - bounds[0];
//     var croppedHeight = bounds[3] - bounds[1];
//     var croppedData = canvas.getContext('2d').getImageData(bounds[0], bounds[1], croppedWidth, croppedHeight);
//     // Finally, create a temporary canvas to generate PNG data.
//     var tmp = document.createElement("canvas");
//     tmp.width = croppedWidth;
//     tmp.height = croppedHeight;
//     tmp.getContext('2d').putImageData(croppedData, 0, 0);
//     var pngData = tmp.toDataURL('image/png');
//     document.location.href = pngData;
// }

function saveAsPNG() {
    // First, re-render the image with nothing selected.
    var oldSelectedObject = selectedObject;
    selectedObject = null;
    drawUsing(canvas.getContext('2d'));
    selectedObject = oldSelectedObject;

    // Second, crop the image to only the part with content.
    var bounds = getBoundingRect();
    var croppedWidth = bounds[2] - bounds[0];
    var croppedHeight = bounds[3] - bounds[1];
    var croppedData = canvas.getContext('2d').getImageData(bounds[0], bounds[1], croppedWidth, croppedHeight);

    // Finally, create a temporary canvas to generate PNG data.
    var tmpCanvas = document.createElement("canvas");
    tmpCanvas.width = croppedWidth;
    tmpCanvas.height = croppedHeight;
    tmpCanvas.getContext('2d').putImageData(croppedData, 0, 0);
    var pngData = tmpCanvas.toDataURL('image/png');

    // Create a temporary link to trigger the download
    var downloadLink = document.createElement('a');
    downloadLink.href = pngData;
    // You can set a default file name for the downloaded image
    downloadLink.download = 'image.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}


// Returns a bounding rectangle that contains all non-empty pixels. Returns an
// array: [min x, min y, max x, max y].
function getBoundingRect() {
    var context = canvas.getContext('2d');
    var imageData = context.getImageData(0, 0, canvas.width, canvas.height);

    var indexToLocation = function (i) {
        var pixelIndex = Math.floor(i / 4);
        var col = Math.floor(pixelIndex % canvas.width);
        var row = Math.floor(pixelIndex / canvas.width);
        return [col, row];
    };

    // Search for non-blank pixels and keep track of the outermost locations to
    // form the rectangle.
    var maxX = -1;
    var minX = canvas.width + 1;
    var maxY = -1;
    var minY = canvas.height + 1;
    for (var i = 0; i < imageData.data.length; i++) {
        if (imageData.data[i] != 0) {
            var loc = indexToLocation(i);
            var x = loc[0];
            var y = loc[1];
            if (x < minX) {
                minX = x;
            }
            if (x > maxX) {
                maxX = x;
            }
            if (y < minY) {
                minY = y;
            }
            if (y > maxY) {
                maxY = y;
            }
        }
    }
    // Return the full canvas if all pixels were blank.
    if (minX >= maxX) {
        return [0, 0, canvas.width, canvas.height];
    }
    // Add some padding around the image.
    var padding = 2;
    minX -= padding;
    minY -= padding;
    maxX += padding;
    maxY += padding;
    if (minX < 0) minX = 0;
    if (minY < 0) minY = 0;
    if (maxX > canvas.width) maxX = canvas.width;
    if (maxY > canvas.width) maxY = canvas.width;
    return [minX, minY, maxX, maxY];
}

function downloadFile(filename, data, type) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:' + type + ';base64,' + btoa(data));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

function downloadSVGFile(filename, svgData) {
    downloadFile(filename, svgData, 'image/svg+xml');
}

function saveAsSVG() {
    var bounds = getBoundingRect();
    var exporter = new ExportAsSVG(bounds);
    var oldSelectedObject = selectedObject;
    selectedObject = null;
    drawUsing(exporter);
    selectedObject = oldSelectedObject;
    var svgData = exporter.toSVG();
    downloadSVGFile("automaton.svg", svgData);
}


function copySVGToClipboard() {
    var bounds = getBoundingRect();
    var exporter = new ExportAsSVG(bounds);
    var oldSelectedObject = selectedObject;
    selectedObject = null;
    drawUsing(exporter);
    selectedObject = oldSelectedObject;
    var svgData = exporter.toSVG();

    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(svgData).then(function () {
            console.log("SVG data copied to clipboard successfully!");
        }, function (err) {
            console.error("Could not copy SVG data to clipboard: ", err);
        });
    } else {
        console.error("Clipboard API not available or not in a secure context.");
    }
}


// function saveAsLaTeX() {
//     var bounds = getBoundingRect();
//     var exporter = new ExportAsLaTeX(bounds);
//     var oldSelectedObject = selectedObject;
//     selectedObject = null;
//     drawUsing(exporter);
//     selectedObject = oldSelectedObject;
//     var texData = exporter.toLaTeX();
//     output(texData);
// }

function copyLaTeXToClipboard() {
    var bounds = getBoundingRect();
    var exporter = new ExportAsLaTeX(bounds);
    var oldSelectedObject = selectedObject;
    selectedObject = null;
    drawUsing(exporter);
    selectedObject = oldSelectedObject;
    var texData = exporter.toLaTeX();

    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(texData).then(function () {
            console.log("LaTeX data copied to clipboard successfully!");
        }, function (err) {
            console.error("Could not copy LaTeX data to clipboard: ", err);
        });
    } else {
        console.error("Clipboard API not available or not in a secure context.");
    }
}

function saveAsJSON() {
    var jsonData = JSON.stringify(getBackupData());
    downloadFile("automaton_backup.json", jsonData, "text/json");
}

function jsonUploaded() {
    var uploadElement = document.getElementById("jsonUpload");
    if (uploadElement.files.length < 1) return;
    var file = uploadElement.files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        var content = e.target.result;
        try {
            var data = JSON.parse(content);
            clearCanvas();
            restoreFromBackupData(data);
        } catch (e) {
            alert("Failed loading file " + file.name);
        }
    };
    reader.readAsText(file);
}

function uploadJSON() {
    var uploadElement = document.getElementById("jsonUpload");
    uploadElement.click();
}

function det(a, b, c, d, e, f, g, h, i) {
    return a * e * i + b * f * g + c * d * h - a * f * h - b * d * i - c * e * g;
}

function circleFromThreePoints(x1, y1, x2, y2, x3, y3) {
    var a = det(x1, y1, 1, x2, y2, 1, x3, y3, 1);
    var bx = -det(x1 * x1 + y1 * y1, y1, 1, x2 * x2 + y2 * y2, y2, 1, x3 * x3 + y3 * y3, y3, 1);
    var by = det(x1 * x1 + y1 * y1, x1, 1, x2 * x2 + y2 * y2, x2, 1, x3 * x3 + y3 * y3, x3, 1);
    var c = -det(x1 * x1 + y1 * y1, x1, y1, x2 * x2 + y2 * y2, x2, y2, x3 * x3 + y3 * y3, x3, y3);
    return {
        'x': -bx / (2 * a),
        'y': -by / (2 * a),
        'radius': Math.sqrt(bx * bx + by * by - 4 * a * c) / (2 * Math.abs(a))
    };
}

function fixed(number, digits) {
    return number.toFixed(digits).replace(/0+$/, '').replace(/\.$/, '');
}

function restoreFromBackupData(backup) {
    for (var i = 0; i < backup.nodes.length; i++) {
        var backupNode = backup.nodes[i];
        var node = new Node(backupNode.x, backupNode.y);
        node.isAcceptState = backupNode.isAcceptState;
        node.text = backupNode.text;
        node.textOnly = backupNode.textOnly;
        nodes.push(node);
    }
    for (var i = 0; i < backup.links.length; i++) {
        var backupLink = backup.links[i];
        var link = null;
        if (backupLink.type == 'SelfLink') {
            link = new SelfLink(nodes[backupLink.node]);
            link.anchorAngle = backupLink.anchorAngle;
            link.text = backupLink.text;
        } else if (backupLink.type == 'StartLink') {
            link = new StartLink(nodes[backupLink.node]);
            link.deltaX = backupLink.deltaX;
            link.deltaY = backupLink.deltaY;
            link.text = backupLink.text;
        } else if (backupLink.type == 'Link') {
            link = new Link(nodes[backupLink.nodeA], nodes[backupLink.nodeB]);
            link.parallelPart = backupLink.parallelPart;
            link.perpendicularPart = backupLink.perpendicularPart;
            link.text = backupLink.text;
            link.lineAngleAdjust = backupLink.lineAngleAdjust;
        }
        if (link != null) {
            links.push(link);
        }
    }
    nodeRadius = backup.nodeRadius;
    draw();
}

function restoreBackup() {
    if (!localStorage || !JSON) {
        return;
    }

    try {
        var backup = JSON.parse(localStorage['fsm']);
        restoreFromBackupData(backup);
    } catch (e) {
        localStorage['fsm'] = '';
    }
}

function getBackupData() {
    var backup = {
        'nodes': [],
        'links': [],
        'nodeRadius': nodeRadius,
    };
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        var backupNode = {
            'x': node.x,
            'y': node.y,
            'text': node.text,
            'isAcceptState': node.isAcceptState,
            'textOnly': node.textOnly,
        };
        backup.nodes.push(backupNode);
    }
    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        var backupLink = null;
        if (link instanceof SelfLink) {
            backupLink = {
                'type': 'SelfLink',
                'node': nodes.indexOf(link.node),
                'text': link.text,
                'anchorAngle': link.anchorAngle,
            };
        } else if (link instanceof StartLink) {
            backupLink = {
                'type': 'StartLink',
                'node': nodes.indexOf(link.node),
                'text': link.text,
                'deltaX': link.deltaX,
                'deltaY': link.deltaY,
            };
        } else if (link instanceof Link) {
            backupLink = {
                'type': 'Link',
                'nodeA': nodes.indexOf(link.nodeA),
                'nodeB': nodes.indexOf(link.nodeB),
                'text': link.text,
                'lineAngleAdjust': link.lineAngleAdjust,
                'parallelPart': link.parallelPart,
                'perpendicularPart': link.perpendicularPart,
            };
        }
        if (backupLink != null) {
            backup.links.push(backupLink);
        }
    }
    return backup;
}

function saveBackup() {
    if (!localStorage || !JSON) {
        return;
    }
    var backup = getBackupData();

    localStorage['fsm'] = JSON.stringify(backup);
}
