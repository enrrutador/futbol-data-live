# 🤝 Guía de Contribución

## Cómo contribuir a Futbol Data Live

¡Gracias por tu interés en contribuir! Este proyecto es de código abierto y cualquier ayuda es bienvenida.

## 🚀 Primeros pasos

1. **Fork** el repositorio
2. **Clona** tu fork: `git clone https://github.com/tu-usuario/futbol-data-live.git`
3. **Crea rama**: `git checkout -b feature/nombre-descriptivo`
4. **Instala dependencias**: `npm install`

## 📋 Convenciones

### Commits (Conventional Commits)

```
feat: nueva funcionalidad de estadísticas
fix: corrección de bug en caché
docs: actualización de README
test: agregar tests unitarios
refactor: refactorización de componentes
style: cambios de formato (sin código)
chore: tareas de mantenimiento
```

Ejemplos:
```bash
git commit -m "feat: agregar filtro por liga"
git commit -m "fix: corregir error en caché de Supabase"
```

### Estructura de ramas

- `main` → Producción estable
- `develop` → Desarrollo activo
- `feature/*` → Nuevas funcionalidades
- `bugfix/*` → Correcciones
- `hotfix/*` → Urgencias en producción

### Código

- Usar **TypeScript** estricto
- Seguir **ESLint** configurado
- Componentes con **nomenclatura clara**
- **Comentar** funciones complejas
- **Tests** para lógica importante

## 🧪 Tests

Antes de hacer push, asegurate de que todos los tests pasen:

```bash
# Ejecutar tests una vez
npm test

# Ejecutar tests en modo watch (durante desarrollo)
npm run test:watch

# Ver cobertura de tests
npm run test:coverage
```

## ✅ Continuous Integration

Este proyecto utiliza **GitHub Actions** para CI/CD. Cada push y pull request ejecuta automáticamente:

- ✅ Instalación de dependencias
- ✅ Linter (ESLint)
- ✅ Tests (Jest)
- ✅ Build de Next.js

Los checks deben pasar antes de mergear a `main`.

## 📤 Pull Requests

1. Asegurate de que los **tests pasen**
2. **Actualizá** la documentación si es necesario
3. Escribí una **descripción clara** del cambio
4. Referenciá **issues relacionados**

## 🐛 Reportar bugs

Usar template de GitHub o incluir:
- Descripción del problema
- Pasos para reproducir
- Comportamiento esperado vs actual
- Screenshots (si aplica)
- Versión de Node.js y npm

## 💡 Sugerencias

¡Abrí un issue! Nos encanta escuchar ideas para mejorar la plataforma.

---

**Código de conducta**: Sé respetuoso y constructivo.
