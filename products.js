document.addEventListener('DOMContentLoaded', () => {
    // Dummy product data (100 products generated with categories)
    const products = [
        { id: 1, name: 'Quantum VR Headset Elite', price: 499.99, image: 'https://via.placeholder.com/300x200/440088/00ffff?text=VR+Headset+Elite', description: 'Immersive virtual reality experience with enhanced optics.', category: 'VR & Gaming' },
        { id: 2, name: 'Aura Smart Watch Series X', price: 199.99, image: 'https://via.placeholder.com/300x200/440088/ff00ff?text=Smart+Watch+X', description: 'Monitor your health, notifications, and contactless payments.', category: 'Wearables' },
        { id: 3, name: 'Nebula Drone Pro 4K', price: 789.00, image: 'https://via.placeholder.com/300x200/440088/00ff00?text=Drone+Pro+4K', description: 'Capture stunning aerial footage with advanced stabilization.', category: 'Drones & Robotics' },
        { id: 4, name: 'Chrono Headphones Pro Wireless', price: 249.50, image: 'https://via.placeholder.com/300x200/440088/ffff00?text=Headphones+Pro', description: 'Noise-cancelling audio perfection with long-lasting battery.', category: 'Audio' },
        { id: 5, name: 'Fusion Mechanical Keyboard RGB', price: 120.00, image: 'https://via.placeholder.com/300x200/440088/00ffff?text=Keyboard+RGB', description: 'Tactile mechanical switches and customizable RGB lighting.', category: 'Computer Peripherals' },
        { id: 6, name: 'Zenith Ergonomic Mouse Pro', price: 75.00, image: 'https://via.placeholder.com/300x200/440088/ff00ff?text=Mouse+Pro', description: 'Ergonomic design for precision and comfort during long sessions.', category: 'Computer Peripherals' },
        { id: 7, name: 'Starlight Portable Projector', price: 350.00, image: 'https://via.placeholder.com/300x200/440088/00ff00?text=Projector', description: 'Turn any room into a cinematic experience with ease.', category: 'Home Entertainment' },
        { id: 8, name: 'Bio-Scan Health Ring Gen 2', price: 89.99, image: 'https://via.placeholder.com/300x200/440088/ffff00?text=Health+Ring', description: 'Track your vitals discreetly and receive personalized insights.', category: 'Wearables' },
        { id: 9, name: 'Echo Smart Speaker Max', price: 129.00, image: 'https://via.placeholder.com/300x200/440088/ff00ff?text=Smart+Speaker', description: 'Premium audio and voice assistant capabilities for your home.', category: 'Smart Home' },
        { id: 10, name: 'Infinity Gaming Monitor 27"', price: 420.00, image: 'https://via.placeholder.com/300x200/440088/00ff00?text=Gaming+Monitor', description: '27-inch QHD display with high refresh rate for fluid gameplay.', category: 'Computer Peripherals' },
        { id: 11, name: 'Terra Eco-Friendly Backpack', price: 65.00, image: 'https://via.placeholder.com/300x200/440088/00ffff?text=Eco+Backpack', description: 'Durable, sustainable backpack made from recycled materials.', category: 'Eco-Friendly' },
        { id: 12, name: 'Aurora LED Desk Lamp', price: 45.00, image: 'https://via.placeholder.com/300x200/440088/ff00ff?text=LED+Lamp', description: 'Adjustable brightness and color temperature for optimal lighting.', category: 'Smart Home' },
        { id: 13, name: 'Hydro Portable Water Purifier', price: 79.00, image: 'https://via.placeholder.com/300x200/440088/00ff00?text=Water+Purifier', description: 'Ensure clean drinking water anywhere with this portable device.', category: 'Health & Wellness' },
        { id: 14, name: 'Solar Power Bank 20000mAh', price: 55.00, image: 'https://via.placeholder.com/300x200/440088/ffff00?text=Power+Bank', description: 'Charge your devices on the go with solar and fast-charging capabilities.', category: 'Gadgets & Accessories' },
        { id: 15, name: 'Glimmer Smart Mirror', price: 299.00, image: 'https://via.placeholder.com/300x200/440088/00ffff?text=Smart+Mirror', description: 'Interactive mirror displaying news, weather, and personal data.', category: 'Smart Home' },
        { id: 16, name: 'Cybernetic Gaming Chair', price: 280.00, image: 'https://via.placeholder.com/300x200/440088/ff00ff?text=Gaming+Chair', description: 'Ergonomic gaming chair with lumbar support and adjustable features.', category: 'VR & Gaming' },
        { id: 17, name: 'Spectra Smart Light Bulbs (4-Pack)', price: 49.00, image: 'https://via.placeholder.com/300x200/440088/00ff00?text=Smart+Bulbs', description: 'Control your lighting with your voice or smartphone app.', category: 'Smart Home' },
        { id: 18, name: 'Vortex Wireless Charger Duo', price: 39.00, image: 'https://via.placeholder.com/300x200/440088/ffff00?text=Wireless+Charger', description: 'Charge two devices simultaneously with fast wireless charging.', category: 'Gadgets & Accessories' },
        { id: 19, name: 'Quantum Computing Kit for Beginners', price: 150.00, image: 'https://via.placeholder.com/300x200/440088/00ffff?text=QC+Kit', description: 'Introduction to quantum computing principles for enthusiasts.', category: 'Education & Hobbies' },
        { id: 20, name: 'Aether Air Purifier Smart', price: 180.00, image: 'https://via.placeholder.com/300x200/440088/ff00ff?text=Air+Purifier', description: 'Cleans the air in your home, controlled by smartphone or voice.', category: 'Smart Home' },
        { id: 21, name: 'Gravity Defying Desk Organizer', price: 35.00, image: 'https://via.placeholder.com/300x200/440088/00ff00?text=Organizer', description: 'Innovative magnetic organizer keeps your desk clutter-free.', category: 'Office & Productivity' },
        { id: 22, name: 'Cosmic Star Projector Pro', price: 60.00, image: 'https://via.placeholder.com/300x200/440088/ffff00?text=Star+Projector', description: 'Transform your room into a mesmerizing galaxy with rotating stars.', category: 'Home Entertainment' },
        { id: 23, name: 'Zen Garden Smart Planter', price: 95.00, image: 'https://via.placeholder.com/300x200/440088/00ffff?text=Smart+Planter', description: 'Automatic watering and light for thriving indoor plants.', category: 'Smart Home' },
        { id: 24, name: 'Pulsar Noise-Cancelling Earbuds', price: 110.00, image: 'https://via.placeholder.com/300x200/440088/ff00ff?text=Earbuds', description: 'Compact earbuds with superior noise cancellation and sound quality.', category: 'Audio' },
        { id: 25, name: 'Omni Universal Translator Device', price: 170.00, image: 'https://via.placeholder.com/300x200/440088/00ff00?text=Translator', description: 'Real-time translation for over 100 languages.', category: 'Gadgets & Accessories' },
        { id: 26, name: 'Fusion Smart Coffee Maker', price: 85.00, image: 'https://via.placeholder.com/300x200/440088/ffff00?text=Coffee+Maker', description: 'Brew your coffee remotely with your smartphone app.', category: 'Smart Home Appliances' },
        { id: 27, name: 'Astro Robot Vacuum Cleaner', price: 320.00, image: 'https://via.placeholder.com/300x200/440088/00ffff?text=Robot+Vacuum', description: 'Intelligent robot vacuum with mapping and obstacle avoidance.', category: 'Drones & Robotics' },
        { id: 28, name: 'Plasma Art Display Frame', price: 210.00, image: 'https://via.placeholder.com/300x200/440088/ff00ff?text=Art+Frame', description: 'Display dynamic digital art or your photos in stunning clarity.', category: 'Home Entertainment' },
        { id: 29, name: 'Bio-Feedback Meditation Headband', price: 130.00, image: 'https://via.placeholder.com/300x200/440088/00ff00?text=Meditation', description: 'Tracks brain activity to guide and enhance your meditation practice.', category: 'Health & Wellness' },
        { id: 30, name: 'Quantum Encryption USB Drive 1TB', price: 99.00, image: 'https://via.placeholder.com/300x200/440088/ffff00?text=USB+Drive', description: 'Secure your data with quantum-resistant encryption on a 1TB drive.', category: 'Computer Peripherals' },
        { id: 31, name: 'Solar-Powered Smart Window Blinds', price: 160.00, image: 'https://via.placeholder.com/300x200/440088/00ffff?text=Window+Blinds', description: 'Automated window blinds powered by solar energy.', category: 'Smart Home' },
        { id: 32, name: 'Kinetic Energy Smartphone Charger', price: 70.00, image: 'https://via.placeholder.com/300x200/440088/ff00ff?text=Kinetic+Charger', description: 'Charge your phone by walking or moving, never run out of power.', category: 'Eco-Friendly' },
        { id: 33, name: 'Holographic Desk Assistant', price: 500.00, image: 'https://via.placeholder.com/300x200/440088/00ff00?text=Holo+Assistant', description: 'Interactive holographic assistant for productivity and entertainment.', category: 'Office & Productivity' },
        { id: 34, name: 'Neuro-Enhancement Headset', price: 650.00, image: 'https://via.placeholder.com/300x200/440088/ffff00?text=Neuro+Headset', description: 'Advanced headset designed to boost focus and cognitive function.', category: 'Health & Wellness' },
        { id: 35, name: 'Eco-Friendly Smart Water Bottle', price: 40.00, image: 'https://via.placeholder.com/300x200/440088/00ffff?text=Water+Bottle', description: 'Tracks your hydration and reminds you to drink water.', category: 'Eco-Friendly' },
        { id: 36, name: 'Zenith UV-C Sanitizer Box', price: 65.00, image: 'https://via.placeholder.com/300x200/440088/ff00ff?text=UV+Sanitizer', description: 'Sterilize your phone, keys, and other small items with UV-C light.', category: 'Health & Wellness' },
        { id: 37, name: 'Dynamic RGB Gaming Mouse Pad', price: 25.00, image: 'https://via.placeholder.com/300x200/440088/00ff00?text=Mouse+Pad', description: 'Large gaming mouse pad with vibrant RGB lighting effects.', category: 'Computer Peripherals' },
        { id: 38, name: 'Digital Sketchbook Pro', price: 190.00, image: 'https://via.placeholder.com/300x200/440088/ffff00?text=Sketchbook+Pro', description: 'High-resolution digital sketchbook for artists and designers.', category: 'Education & Hobbies' },
        { id: 39, name: 'Smart Pet Feeder with Camera', price: 110.00, image: 'https://via.placeholder.com/300x200/440088/00ffff?text=Pet+Feeder', description: 'Automate feeding and monitor your pet with a built-in camera.', category: 'Smart Home Appliances' },
        { id: 40, name: 'Personal Air Conditioner Mini', price: 80.00, image: 'https://via.placeholder.com/300x200/440088/ff00ff?text=Mini+AC', description: 'Compact and portable air conditioner for personal cooling.', category: 'Smart Home Appliances' },
        { id: 41, name: 'Intelligent Plant Grow Light', price: 70.00, image: 'https://via.placeholder.com/300x200/440088/00ff00?text=Grow+Light', description: 'Full-spectrum LED grow light with customizable schedules.', category: 'Smart Home' },
        { id: 42, name: 'Modular Smart Home Hub', price: 220.00, image: 'https://via.placeholder.com/300x200/440088/ffff00?text=Home+Hub', description: 'Central hub to connect and control all your smart home devices.', category: 'Smart Home' },
        { id: 43, name: 'Portable Fabric Steamer Pro', price: 50.00, image: 'https://via.placeholder.com/300x200/440088/00ffff?text=Steamer+Pro', description: 'Quickly de-wrinkle clothes on the go with powerful steam.', category: 'Smart Home Appliances' },
        { id: 44, name: 'Smart Aroma Diffuser & Humidifier', price: 45.00, image: 'https://via.placeholder.com/300x200/440088/ff00ff?text=Diffuser', description: 'Enhance your living space with soothing aromas and optimal humidity.', category: 'Smart Home' },
        { id: 45, name: 'Robotic Lawn Mower Compact', price: 550.00, image: 'https://via.placeholder.com/300x200/440088/00ff00?text=Robot+Mower', description: 'Automate lawn care with this smart, compact robotic mower.', category: 'Drones & Robotics' },
        { id: 46, name: 'Transparent OLED Display 24"', price: 800.00, image: 'https://via.placeholder.com/300x200/440088/ffff00?text=OLED+Display', description: 'Revolutionary transparent display for unique visual experiences.', category: 'Home Entertainment' },
        { id: 47, name: 'Personalized 3D-Printed Jewelry', price: 150.00, image: 'https://via.placeholder.com/300x200/440088/00ffff?text=3D+Jewelry', description: 'Custom-designed jewelry created with advanced 3D printing technology.', category: 'Custom & Unique' },
        { id: 48, name: 'Gesture Control Smart Gloves', price: 140.00, image: 'https://via.placeholder.com/300x200/440088/ff00ff?text=Smart+Gloves', description: 'Control devices and interact with AR interfaces using hand gestures.', category: 'Wearables' },
        { id: 49, name: 'Air-Purifying Face Mask Smart', price: 75.00, image: 'https://via.placeholder.com/300x200/440088/00ff00?text=Smart+Mask', description: 'Smart mask with active air purification and environmental sensors.', category: 'Health & Wellness' },
        { id: 50, name: 'AI-Powered Language Learning Headset', price: 260.00, image: 'https://via.placeholder.com/300x200/440088/ffff00?text=Language+Headset', description: 'Learn new languages efficiently with AI-driven personalized lessons.', category: 'Education & Hobbies' },
        { id: 51, name: 'Foldable Electric Scooter Lite', price: 499.00, image: 'https://via.placeholder.com/300x200/440088/00ffff?text=E-Scooter+Lite', description: 'Lightweight and foldable electric scooter for urban commuting.', category: 'Transportation' },
        { id: 52, name: 'Smart Reusable Notebook & Pen', price: 30.00, image: 'https://via.placeholder.com/300x200/440088/ff00ff?text=Smart+Notebook', description: 'Digitize your notes and reuse pages endlessly.', category: 'Office & Productivity' },
        { id: 53, name: 'Portable Mini Projector 1080p', price: 199.00, image: 'https://via.placeholder.com/300x200/440088/00ff00?text=Mini+Projector', description: 'Enjoy big-screen entertainment anywhere with this compact projector.', category: 'Home Entertainment' },
        { id: 54, name: 'Self-Cleaning Water Bottle', price: 59.00, image: 'https://via.placeholder.com/300x200/440088/ffff00?text=Self-Clean+Bottle', description: 'Keeps water pure and the bottle clean with UV-C technology.', category: 'Health & Wellness' },
        { id: 55, name: 'Smart Fridge Cam', price: 120.00, image: 'https://via.placeholder.com/300x200/440088/00ffff?text=Fridge+Cam', description: 'See inside your fridge from anywhere with your smartphone.', category: 'Smart Home Appliances' },
        { id: 56, name: 'Personalized Nutrition Dispenser', price: 380.00, image: 'https://via.placeholder.com/300x200/440088/ff00ff?text=Nutrition+Dispenser', description: 'Dispenses custom vitamin and supplement blends based on your needs.', category: 'Health & Wellness' },
        { id: 57, name: 'Smart Yoga Mat with Coaching', price: 170.00, image: 'https://via.placeholder.com/300x200/440088/00ff00?text=Yoga+Mat', description: 'Interactive yoga mat with sensors and guided workout programs.', category: 'Health & Wellness' },
        { id: 58, name: 'Digital Measuring Tape Pro', price: 85.00, image: 'https://via.placeholder.com/300x200/440088/ffff00?text=Measure+Tape', description: 'Accurate digital measurements with memory and unit conversion.', category: 'Office & Productivity' },
        { id: 59, name: 'Modular Smart Desk System', price: 650.00, image: 'https://via.placeholder.com/300x200/440088/00ffff?text=Smart+Desk', description: 'Customizable desk with integrated charging, lighting, and cable management.', category: 'Office & Productivity' },
        { id: 60, name: 'Voice-Controlled Smart Blinds', price: 180.00, image: 'https://via.placeholder.com/300x200/440088/ff00ff?text=Voice+Blinds', description: 'Control your window blinds hands-free with voice commands.', category: 'Smart Home' },
        { id: 61, name: 'Portable DNA Tester', price: 1200.00, image: 'https://via.placeholder.com/300x200/440088/00ff00?text=DNA+Tester', description: 'Quick and easy personal DNA testing for health and ancestry insights.', category: 'Health & Wellness' },
        { id: 62, name: 'Augmented Reality Glasses Lite', price: 399.00, image: 'https://via.placeholder.com/300x200/440088/ffff00?text=AR+Glasses', description: 'Lightweight AR glasses for notifications, navigation, and casual AR experiences.', category: 'VR & Gaming' },
        { id: 63, name: 'AI-Powered Sleep Tracker Mat', price: 99.00, image: 'https://via.placeholder.com/300x200/440088/00ffff?text=Sleep+Tracker', description: 'Non-wearable sleep tracker providing detailed analysis and improvement tips.', category: 'Health & Wellness' },
        { id: 64, name: 'Smart Composting Bin', price: 210.00, image: 'https://via.placeholder.com/300x200/440088/ff00ff?text=Compost+Bin', description: 'Accelerated composting for kitchen scraps, producing nutrient-rich soil.', category: 'Eco-Friendly' },
        { id: 65, name: 'Personalized Scent Diffuser', price: 140.00, image: 'https://via.placeholder.com/300x200/440088/00ff00?text=Scent+Diffuser', description: 'Creates custom scent profiles to match your mood or environment.', category: 'Smart Home' },
        { id: 66, name: 'Graphene Supercapacitor Power Bank', price: 180.00, image: 'https://via.placeholder.com/300x200/440088/ffff00?text=Supercapacitor', description: 'Ultra-fast charging power bank with graphene technology.', category: 'Gadgets & Accessories' },
        { id: 67, name: 'Smart Gardening Assistant', price: 75.00, image: 'https://via.placeholder.com/300x200/440088/00ffff?text=Garden+Assistant', description: 'Monitors soil, light, and humidity to help your garden thrive.', category: 'Smart Home' },
        { id: 68, name: 'Digital Door Peephole Camera', price: 90.00, image: 'https://via.placeholder.com/300x200/440088/ff00ff?text=Peephole+Cam', description: 'See and talk to visitors from your smartphone, even when away.', category: 'Smart Home Security' },
        { id: 69, name: 'Robotic Window Cleaner', price: 250.00, image: 'https://via.placeholder.com/300x200/440088/00ff00?text=Window+Cleaner', description: 'Automated robot for sparkling clean windows with minimal effort.', category: 'Drones & Robotics' },
        { id: 70, name: 'Portable Holographic Fan Display', price: 299.00, image: 'https://via.placeholder.com/300x200/440088/ffff00?text=Holo+Fan', description: 'Create stunning 3D holographic visuals for events or retail.', category: 'Home Entertainment' },
        { id: 71, name: 'Smart Foot Massager with Heat', price: 160.00, image: 'https://via.placeholder.com/300x200/440088/00ffff?text=Foot+Massager', description: 'Therapeutic foot massage with customizable settings and heat.', category: 'Health & Wellness' },
        { id: 72, name: 'Personal Air Quality Monitor', price: 110.00, image: 'https://via.placeholder.com/300x200/440088/ff00ff?text=Air+Monitor', description: 'Tracks air pollutants, temperature, and humidity for your personal space.', category: 'Health & Wellness' },
        { id: 73, name: 'Self-Stirring Smart Mug', price: 35.00, image: 'https://via.placeholder.com/300x200/440088/00ff00?text=Smart+Mug', description: 'Automatically stirs your drink for perfect consistency.', category: 'Smart Home Appliances' },
        { id: 74, name: 'AI-Enhanced Digital Microscope', price: 450.00, image: 'https://via.placeholder.com/300x200/440088/ffff00?text=Microscope', description: 'High-magnification digital microscope with AI object recognition.', category: 'Education & Hobbies' },
        { id: 75, name: 'Smart Gesture Control Trash Can', price: 70.00, image: 'https://via.placeholder.com/300x200/440088/00ffff?text=Trash+Can', description: 'Open and close your trash can with a simple hand gesture.', category: 'Smart Home Appliances' },
        { id: 76, name: 'Portable UV Sterilization Wand', price: 55.00, image: 'https://via.placeholder.com/300x200/440088/ff00ff?text=UV+Wand', description: 'Disinfect surfaces and objects quickly with powerful UV light.', category: 'Health & Wellness' },
        { id: 77, name: 'Smart Luggage with GPS Tracking', price: 280.00, image: 'https://via.placeholder.com/300x200/440088/00ff00?text=Smart+Luggage', description: 'Track your luggage, weigh it, and charge devices with this smart suitcase.', category: 'Travel & Outdoors' },
        { id: 78, name: 'Wearable Fitness Tracker Pro', price: 120.00, image: 'https://via.placeholder.com/300x200/440088/ffff00?text=Fitness+Tracker', description: 'Advanced fitness tracking with heart rate, GPS, and multiple sport modes.', category: 'Wearables' },
        { id: 79, name: 'Automated Hydroponic Herb Garden', price: 140.00, image: 'https://via.placeholder.com/300x200/440088/00ffff?text=Herb+Garden', description: 'Grow fresh herbs indoors with minimal effort using hydroponics.', category: 'Smart Home' },
        { id: 80, name: 'Voice-Activated Smart Lock', price: 190.00, image: 'https://via.placeholder.com/300x200/440088/ff00ff?text=Smart+Lock', description: 'Secure your home with a smart lock controlled by voice or app.', category: 'Smart Home Security' },
        { id: 81, name: 'AI Art Generator Tablet', price: 320.00, image: 'https://via.placeholder.com/300x200/440088/00ff00?text=AI+Art+Tablet', description: 'Create stunning digital art with the help of artificial intelligence.', category: 'Education & Hobbies' },
        { id: 82, name: 'Smart Shower Head with LED Temp Display', price: 80.00, image: 'https://via.placeholder.com/300x200/440088/ffff00?text=Shower+Head', description: 'Enjoy precise temperature control and visual feedback in your shower.', category: 'Smart Home Appliances' },
        { id: 83, name: 'Self-Cleaning Litter Box for Cats', price: 400.00, image: 'https://via.placeholder.com/300x200/440088/00ffff?text=Litter+Box', description: 'Automated litter box that cleans itself, saving time and odor.', category: 'Smart Home Appliances' },
        { id: 84, name: 'Smart Hair Styling Tool', price: 130.00, image: 'https://via.placeholder.com/300x200/440088/ff00ff?text=Hair+Tool', description: 'Advanced hair styling tool with intelligent heat control for damage-free styling.', category: 'Health & Wellness' },
        { id: 85, name: 'Portable Espresso Maker Mini', price: 75.00, image: 'https://via.placeholder.com/300x200/440088/00ff00?text=Espresso+Maker', description: 'Enjoy rich espresso anywhere with this compact portable maker.', category: 'Travel & Outdoors' },
        { id: 86, name: 'Smart Alarm Clock with Sleep Tracking', price: 95.00, image: 'https://via.placeholder.com/300x200/440088/ffff00?text=Alarm+Clock', description: 'Wakes you gently and tracks your sleep patterns for better mornings.', category: 'Smart Home' },
        { id: 87, name: 'Digital Pet ID Tag with GPS', price: 45.00, image: 'https://via.placeholder.com/300x200/440088/00ffff?text=Pet+ID+Tag', description: 'Never lose your pet with real-time GPS tracking and digital ID.', category: 'Travel & Outdoors' },
        { id: 88, name: 'AI-Powered Language Translator Earbuds', price: 210.00, image: 'https://via.placeholder.com/300x200/440088/ff00ff?text=Translator+Earbuds', description: 'Real-time two-way language translation in your ears.', category: 'Audio' },
        { id: 89, name: 'Smart Desk Cycle with App Connectivity', price: 160.00, image: 'https://via.placeholder.com/300x200/440088/00ff00?text=Desk+Cycle', description: 'Stay active while working with this under-desk smart cycle.', category: 'Office & Productivity' },
        { id: 90, name: 'Glow-in-the-Dark Wireless Charger', price: 40.00, image: 'https://via.placeholder.com/300x200/440088/ffff00?text=Glow+Charger', description: 'Stylish wireless charger that glows softly in the dark.', category: 'Gadgets & Accessories' },
        { id: 91, name: 'Modular Smart Camera System', price: 300.00, image: 'https://via.placeholder.com/300x200/440088/00ffff?text=Smart+Camera', description: 'Customizable camera system for home security or creative projects.', category: 'Smart Home Security' },
        { id: 92, name: 'Self-Cleaning Dish Scrubber', price: 60.00, image: 'https://via.placeholder.com/300x200/440088/ff00ff?text=Dish+Scrubber', description: 'Automated dish scrubber that cleans itself after use.', category: 'Smart Home Appliances' },
        { id: 93, name: 'Portable Hand Warmer Power Bank', price: 30.00, image: 'https://via.placeholder.com/300x200/440088/00ff00?text=Hand+Warmer', description: 'Keep your hands warm and charge your phone on the go.', category: 'Travel & Outdoors' },
        { id: 94, name: 'Smart Anti-Theft Backpack', price: 85.00, image: 'https://via.placeholder.com/300x200/440088/ffff00?text=Anti-Theft+Backpack', description: 'Secure backpack with hidden zippers, cut-proof material, and RFID protection.', category: 'Travel & Outdoors' },
        { id: 95, name: 'Digital Body Fat Scale Smart', price: 70.00, image: 'https://via.placeholder.com/300x200/440088/00ffff?text=Fat+Scale', description: 'Measures weight, body fat, muscle mass, and syncs with your phone.', category: 'Health & Wellness' },
        { id: 96, name: 'AI Writing Assistant Pen', price: 150.00, image: 'https://via.placeholder.com/300x200/440088/ff00ff?text=AI+Pen', description: 'Helps improve your writing, checks grammar, and provides suggestions in real-time.', category: 'Office & Productivity' },
        { id: 97, name: 'Smart Toothbrush with App Feedback', price: 75.00, image: 'https://via.placeholder.com/300x200/440088/00ff00?text=Toothbrush', description: 'Provides personalized brushing feedback for optimal oral hygiene.', category: 'Health & Wellness' },
        { id: 98, name: 'Solar-Powered Camping Lantern', price: 40.00, image: 'https://via.placeholder.com/300x200/440088/ffff00?text=Camping+Lantern', description: 'Bright, durable lantern charged by solar power, perfect for outdoors.', category: 'Travel & Outdoors' },
        { id: 99, name: 'Portable Smart Display 15.6"', price: 280.00, image: 'https://via.placeholder.com/300x200/440088/00ffff?text=Portable+Display', description: 'Expand your workspace or entertainment with a thin, portable touch display.', category: 'Computer Peripherals' },
        { id: 100, name: 'Robot Chef Assistant', price: 1500.00, image: 'https://via.placeholder.com/300x200/440088/ff00ff?text=Robot+Chef', description: 'Automates meal prep, cooking, and cleaning for effortless gourmet meals.', category: 'Drones & Robotics' }
    ];

    const productGrid = document.getElementById('product-grid');
    const noProductsMessage = document.getElementById('no-products-message');
    const categoryFiltersContainer = document.getElementById('category-filters');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCountNav = document.getElementById('cart-count-nav'); // For the universal header

    let activeCategory = 'All'; // Default active category

    function updateCartCount() {
        // Calculate total items (sum of quantities)
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (cartCountNav) cartCountNav.textContent = `(${totalItems})`;
    }

    function renderCategoryFilters() {
        const categories = ['All', ...new Set(products.map(p => p.category))].sort(); // Get unique categories and sort
        categoryFiltersContainer.innerHTML = ''; // Clear existing buttons

        categories.forEach(category => {
            const button = document.createElement('button');
            button.textContent = category;
            button.classList.add('category-button');
            if (category === activeCategory) {
                button.classList.add('active');
            }
            button.addEventListener('click', () => {
                activeCategory = category;
                renderProducts(); // Re-render products for the new category
                renderCategoryFilters(); // Re-render buttons to update active state
            });
            categoryFiltersContainer.appendChild(button);
        });
    }

    function renderProducts() {
        let filteredProducts = products;
        if (activeCategory !== 'All') {
            filteredProducts = products.filter(p => p.category === activeCategory);
        }

        productGrid.innerHTML = ''; // Clear previous products

        if (filteredProducts.length === 0) {
            noProductsMessage.style.display = 'block';
            return;
        } else {
            noProductsMessage.style.display = 'none';
        }

        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="description">${product.description}</p>
                <p class="price">$${product.price.toFixed(2)}</p>
                <button class="btn-primary add-to-cart" data-id="${product.id}">Add to Cart</button>
            `;
            productGrid.appendChild(productCard);
        });
        attachAddToCartListeners();
    }

    function attachAddToCartListeners() {
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = parseInt(event.target.dataset.id);
                const productToAdd = products.find(p => p.id === productId);

                if (productToAdd) {
                    const existingItemIndex = cart.findIndex(item => item.id === productId);
                    if (existingItemIndex > -1) {
                        cart[existingItemIndex].quantity += 1;
                    } else {
                        cart.push({ ...productToAdd, quantity: 1 });
                    }
                    localStorage.setItem('cart', JSON.stringify(cart));
                    updateCartCount();
                    alert(`${productToAdd.name} added to cart! Current items in cart: ${cart.reduce((sum, item) => sum + item.quantity, 0)}`);
                }
            });
        });
    }

    // Initial renders
    renderCategoryFilters(); // Render category buttons first
    renderProducts();      // Then render products based on default 'All' category
    updateCartCount();     // Update cart count in header
});
