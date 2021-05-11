function loop_size(node) {
    var turtle = node;
    var rabbit = node;

    do {
        turtle = turtle.getNext();
        rabbit = rabbit.getNext().getNext();
    }

    while (turtle != rabbit);

    var count = 0

    do {
        ++count;
        rabbit = rabbit.getNext();
    }

    while (turtle != rabbit)

    return count;
}