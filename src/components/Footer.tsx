
function Footer() {
    return (
        <footer className="bg-slate-900 dark:bg-black text-white py-12 px-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent mb-4">
                            Lakshay Lalia
                        </h3>
                        <p className="text-slate-400 leading-relaxed">
                            Pre-final year CSE student at NIT Hamirpur | Turning ideas into impactful code, one project at a time.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <div className="space-y-2">
                            {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => {
                                        const element = document.getElementById(item.toLowerCase());
                                        if (element) {
                                            element.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                    className="block text-slate-400 hover:text-white transition-colors duration-200"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
                        <div className="space-y-2 text-slate-400">
                            <p>Kangra, Himachal Pradesh</p>
                            <p>lakshaylalia@gmail.com</p>
                            <div className="flex space-x-4 mt-4">
                                <a href="https://github.com/lakshaylalia" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-200">
                                    GitHub
                                </a>
                                <a href="https://www.linkedin.com/in/lakshay-lalia/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-200">
                                    LinkedIn
                                </a>
                                <a href="https://codolio.com/profile/Phoenix_13" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-200">
                                    Codolio
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-slate-400 text-sm">
                        © 2024 Lakshay Lalia. All rights reserved.
                    </p>
                    <p className="text-slate-400 text-sm mt-4 md:mt-0">
                        Designed with ❤️ by Lakshay Lalia.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer