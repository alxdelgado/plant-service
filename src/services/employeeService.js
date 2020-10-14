const KEYS = {
    employees: 'employees'
}

export default function insertEmployee(data) {
    let employees = getAllEmployees();
    employees.push(data)
    localStorage.setItem(KEYS.employees, JSON.stringify(employees))
}

export function getAllEmployees() {
    if (localStorage.getItem(KEYS.employees) === null)
        localStorage.setItem(KEYS.employees, JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.employees));
}

