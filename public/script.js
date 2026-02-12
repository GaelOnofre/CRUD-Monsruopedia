const API_URL = 'http://localhost:3000/api/monsters';

document.addEventListener('DOMContentLoaded', cargarMonstruos);

async function cargarMonstruos() {
    const respuesta = await fetch(API_URL);
    const monstruos = await respuesta.json();
    
    const tabla = document.getElementById('tablaMonstruos');
    tabla.innerHTML = '';

    monstruos.forEach(m => {
        tabla.innerHTML += `
            <tr>
                <td class="fw-bold">${m.nombre}</td>
                <td>${m.clase}</td>
                <td><span class="badge bg-secondary">${m.debilidad}</span></td>
                <td>${'⭐'.repeat(m.amenaza)}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="cargarFormulario('${m._id}', '${m.nombre}', '${m.clase}', '${m.debilidad}', ${m.amenaza})">✏️</button>
                    <button class="btn btn-danger btn-sm" onclick="eliminarMonstruo('${m._id}')">🗑️</button>
                </td>
            </tr>
        `;
    });
}
 
async function guardarMonstruo() {
    const id = document.getElementById('monsterId').value;
    const datos = {
        nombre: document.getElementById('nombre').value,
        clase: document.getElementById('clase').value,
        debilidad: document.getElementById('debilidad').value,
        amenaza: document.getElementById('amenaza').value
    };
    
    const metodo = id ? 'PUT' : 'POST';
    const url = id ? `${API_URL}/${id}` : API_URL;

    await fetch(url, {
        method: metodo,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
    });

    limpiarFormulario();
    cargarMonstruos();
}

// ELIMINAR
async function eliminarMonstruo(id) {
    if(confirm('¿Eliminar registro del gremio?')) {
        await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        cargarMonstruos();
    }
}

function cargarFormulario(id, nombre, clase, debilidad, amenaza) {
    document.getElementById('monsterId').value = id;
    document.getElementById('nombre').value = nombre;
    document.getElementById('clase').value = clase;
    document.getElementById('debilidad').value = debilidad;
    document.getElementById('amenaza').value = amenaza;
}

function limpiarFormulario() {
    document.getElementById('monsterId').value = '';
    document.getElementById('nombre').value = '';
    document.getElementById('clase').value = '';
    document.getElementById('debilidad').value = '';
    document.getElementById('amenaza').value = '';
}
