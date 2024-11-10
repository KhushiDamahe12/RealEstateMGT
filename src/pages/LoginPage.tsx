import {login} from '../services/api'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useAuth} from '../context/authContext'


export default function LoginPage() {

    const {setToken} = useAuth();

    const [email, setEmail] = useState("admin@example.com");
     const [password, setPassword] = useState("adminpasssword"); 
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        setError(''); // Clear previous error

        try {
            const result = await login({ email, password });
            if (result) {
                setToken(result.token);
                console.log('Login successful:', result);
                navigate('/admin')
               
            }
        } catch (error: unknown) {
            if(error instanceof Error){

                setError(error.message || 'Login failed. Please try again.');
            }
        }
    };

    
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <form onSubmit={handleLogin} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                    <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Login</button>
                </form>
            </div>
        </div>
    );
};

