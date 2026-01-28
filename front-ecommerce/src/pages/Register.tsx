
export default function Register() {
    return (

        <div className="bg-linear-to-br from-gray-100 to-gray-200 min-h-screen flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xs w-full max-w-2xl p-8 my-8">
                {/* <!-- Header --> */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Crear Cuenta</h1>
                    <p className="text-gray-600">Únete a TiendaOnline y disfruta de beneficios exclusivos</p>
                </div>

                {/* <!-- Botón Google --> */}
                <button
                    type="button"
                    id="googleRegister"
                    className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-50 hover:border-gray-400 transform hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg mb-6"
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    Registrarse con Google
                </button>

                {/* <!-- Divisor --> */}
                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-white text-gray-500">O regístrate con email</span>
                    </div>
                </div>

                {/* <!-- Formulario --> */}
                <form id="registerForm" className="space-y-5">
                    {/* <!-- Nombre y Apellido --> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                                Nombre
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <i className="fas fa-user text-gray-400"></i>
                                </div>
                                <input
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    placeholder="Juan"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="apellido" className="block text-sm font-medium text-gray-700 mb-2">
                                Apellido
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <i className="fas fa-user text-gray-400"></i>
                                </div>
                                <input
                                    type="text"
                                    id="apellido"
                                    name="apellido"
                                    placeholder="Pérez"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* <!-- Email --> */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <i className="fas fa-envelope text-gray-400"></i>
                            </div>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="tucorreo@ejemplo.com"
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                                required
                            />
                        </div>
                    </div>

                    {/* <!-- Teléfono --> */}
                    <div>
                        <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                            Teléfono <span className="text-gray-400">(opcional)</span>
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <i className="fas fa-phone text-gray-400"></i>
                            </div>
                            <input
                                type="tel"
                                id="telefono"
                                name="telefono"
                                placeholder="+54 9 11 1234-5678"
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                            />
                        </div>
                    </div>

                    {/* <!-- Contraseña y Confirmar --> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                Contraseña
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <i className="fas fa-lock text-gray-400"></i>
                                </div>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="••••••••"
                                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                                    required
                                    minLength="8"
                                />
                                <button
                                    type="button"
                                    id="togglePassword"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-300"
                                >
                                    <i className="fas fa-eye" id="eyeIcon1"></i>
                                </button>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Mínimo 8 caracteres</p>
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                                Confirmar Contraseña
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <i className="fas fa-lock text-gray-400"></i>
                                </div>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    placeholder="••••••••"
                                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                                    required
                                />
                                <button
                                    type="button"
                                    id="toggleConfirmPassword"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-300"
                                >
                                    <i className="fas fa-eye" id="eyeIcon2"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Mensaje de error contraseñas --> */}
                    <p id="passwordError" className="text-red-500 text-sm hidden">Las contraseñas no coinciden</p>

                    {/* <!-- provincia --> */}
                    <div>
                        <label htmlFor="provincia" className="block text-sm font-medium text-gray-700 mb-2">
                            Provincia <span className="text-gray-400">(obligatorio)</span>
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <i className="fas fa-phone text-gray-400"></i>
                            </div>
                            <input
                                type="text"
                                id="provincia"
                                name="provincia"
                                placeholder="Buenos Aires"
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                            />
                        </div>
                    </div>

                    {/* <!-- localidad y codigo postal --> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="localidad" className="block text-sm font-medium text-gray-700 mb-2">
                                Localidad
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <i className="fas fa-lock text-gray-400"></i>
                                </div>
                                <input
                                    type="localidad"
                                    id="localidad"
                                    name="localidad"
                                    placeholder="La Plata"
                                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                                    required
                                />
                                <button
                                    type="button"
                                    id="togglePassword"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-300"
                                >
                                    <i className="fas fa-eye" id="eyeIcon1"></i>
                                </button>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Mínimo 8 caracteres</p>
                        </div>

                        <div>
                            <label htmlFor="codigo postal" className="block text-sm font-medium text-gray-700 mb-2">
                                Código Postal
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <i className="fas fa-lock text-gray-400"></i>
                                </div>
                                <input
                                    type="text"
                                    id="codigoPostal"
                                    name="codigoPostal"
                                    placeholder="1234"
                                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                                    required
                                />
                                <button
                                    type="button"
                                    id="toggleCodigoPostal"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-300"
                                >
                                    <i className="fas fa-eye" id="eyeIcon2"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Dirección --> */}
                    <div>
                        <label htmlFor="direccion" className="block text-sm font-medium text-gray-700 mb-2">
                            direccion <span className="text-gray-400">(obligatorio)</span>
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <i className="fas fa-phone text-gray-400"></i>
                            </div>
                            <input
                                type="text"
                                id="direccion"
                                name="direccion"
                                placeholder="Calle Falsa 123, municipio"
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                            />
                        </div>
                    </div>

                    {/* <!-- Términos y condiciones --> */}
                    <div className="flex items-start">
                        <input
                            type="checkbox"
                            id="terms"
                            className="w-4 h-4 mt-1 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                            Acepto los
                            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium"> Términos y Condiciones </a>
                            y la
                            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">  Política de Privacidad</a>
                        </label>
                    </div>

                    {/* <!-- Newsletter --> */}
                    <div className="flex items-start">
                        <input
                            type="checkbox"
                            id="newsletter"
                            className="w-4 h-4 mt-1 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                        />
                        <label htmlFor="newsletter" className="ml-2 text-sm text-gray-600">
                            Quiero recibir ofertas exclusivas y novedades por email
                        </label>
                    </div>

                    {/* <!-- Botón Registrarse --> */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        Crear mi cuenta
                    </button>
                </form>

                {/* <!-- Login --> */}
                <p className="text-center text-sm text-gray-600 mt-6">
                    ¿Ya tienes una cuenta?
                    <a href="http://localhost:5173/login" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
                        Inicia sesión
                    </a>
                </p>
            </div>


        </div>

    )
}
