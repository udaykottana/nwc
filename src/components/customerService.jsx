const KEYS = {
    customers: 'customers',
    customerId: 'customerId'
};

export const getDepartmentCollection = () => ([
    { id: '1', title: 'Development' },
    { id: '2', title: 'Marketing' },
    { id: '3', title: 'Accounting' },
    { id: '4', title: 'HR' },
]);

export function insertCustomer(data) {
    let customers = getAllCustomers();
    data['id'] = generateCustomerId();
    customers.push(data);
    localStorage.setItem(KEYS.customers, JSON.stringify(customers));
}

export function generateCustomerId() {
    if (localStorage.getItem(KEYS.customerId) == null)
        localStorage.setItem(KEYS.customerId, '0');
    var id = parseInt(localStorage.getItem(KEYS.customerId));
    localStorage.setItem(KEYS.customerId, (++id).toString());
    return id;
}

export function getAllCustomers() {
    if (localStorage.getItem(KEYS.customers) == null)
        localStorage.setItem(KEYS.customers, JSON.stringify([]));
    let customers = JSON.parse(localStorage.getItem(KEYS.customers));
    // Map departmentID to department title
    let departments = getDepartmentCollection();
    return customers.map(x => ({
        ...x,
        department: departments[x.departmentId - 1].title
    }));
}
