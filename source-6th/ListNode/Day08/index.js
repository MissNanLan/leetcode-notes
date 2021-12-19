function ListNode(val, next) {
    val === undefined ? 0 : val;
    next === undefined ? null :val
}


var rotateRight = function (head, k) {
    
    if (!head || !head.next) return;

    const p = head, n = 1;

    while (p.next) {
        p = p.next
        n++;

    }

    let m = k- k % n;
    p.next = head;

    while (m) {
        p = p.next
        m--;
    }

    const ret = cur.next;
    cur.next = null;

    return ret;
                                         
}
