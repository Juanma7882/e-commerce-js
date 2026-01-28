
export default function Login() {
    return (
        <div className="flex items-center justify-center mt-18">
            <div className="bg-white rounded-2xl border border-gray-200 w-full max-w-md p-8">
                {/* <!-- Header --> */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Bienvenido</h1>
                    <p className="text-gray-600">Inicia sesión en tu cuenta</p>
                </div>

                {/* <!-- Formulario --> */}
                <form id="loginForm" className="space-y-6">
                    {/* <!-- Campo Email/Usuario --> */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email o Usuario
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <i className="fas fa-user text-gray-400"></i>
                            </div>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="tucorreo@ejemplo.com"
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                                required
                            />
                        </div>
                    </div>

                    {/* <!-- Campo Contraseña --> */}
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
                            />
                            <button
                                type="button"
                                id="togglePassword"
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-300"
                            >
                                <i className="fas fa-eye" id="eyeIcon"></i>
                            </button>
                        </div>
                    </div>

                    {/* <!-- Recordarme y Olvidé contraseña --> */}
                    <div className="flex items-center justify-between">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                            />
                            <span className="ml-2 text-sm text-gray-600">Recordarme</span>
                        </label>
                        <a href="#" className="text-sm text-blue-600 hover:text-blue-700 transition-colors duration-300">
                            ¿Olvidaste tu contraseña?
                        </a>
                    </div>

                    {/* <!-- Botón Iniciar Sesión --> */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        Iniciar Sesión
                    </button>
                </form>

                {/* <!-- Divisor --> */}
                <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-white text-gray-500">O continúa con</span>
                    </div>
                </div>

                {/* <!-- Botón Google --> */}
                <button
                    type="button"
                    id="googleLogin"
                    className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-50 hover:border-gray-400 transform hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg"
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    Iniciar sesión con Google
                </button>

                {/* <!-- Registro --> */}
                <p className="text-center text-sm text-gray-600 mt-8">
                    ¿No tienes una cuenta?
                    <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
                        Regístrate aquí
                    </a>
                </p>
            </div>
        </div>
    )
}
