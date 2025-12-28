import React, { useState } from 'react';
import { Upload, Play, Check, X, LogOut, Mail, Users, Database, Eye, EyeOff, Edit, Trash2, Save, UserPlus, Send, Key, Shield, ImagePlus, Tag } from 'lucide-react';

const PLUMANAGER_LOGO = "data:image/png;base64,UklGRgZBAABXRUJQVlA4WAoAAAAwAAAA/wMA/wMASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZBTFBIlhsAAAEktW3bMHb+/7rXPSISGReQEJOS8xlUPGD/r8hp/3+zSQgOCe7uVNA37qm7e3B5l3oLTYXi1BsqvItb3XF441bF3d3dnWSuyc6e83q+5pwzu9n357MR4VuSJEuSJNtC60vWLUpU7KamKpIfABSIv/8oIkJWbLuRJJlCUkgKSaEpFIWkYApJISkkBVFICqaQFBTSe5I9++KPjAgIbttIkjzXXjVrB4gnSVV/wIr5f8T857///vvvv//++++///7777///vvvv//++++///7777///vvvv//++++///7777///vvvv//++++///7777///vvvv//++++///7777///vsf81/MfzH/xfwX81/MfzH/xfz3v0Vi/qsylPP4oF9azwcblY5XYkytnMxoE30rJOxCDO4FYk7PxaY2Mu6bsgW1tj04Li8b1fMmz8f0kjszWkT/EhJ2BQaTkKAfZ/MlEvor2YS8OvaPvi+nH9qGmMUl5ynE2GxCHh4n0iv7nlwZiIzSTB6FTtyybEKeHpnf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BcDc3PZiUMaQSsmE9pFsb/IdJP/zY/SwIB/54wOFfqnw2FXJRC1jx1cRc6NvrAavLg7XGXfpBh2YK45IGw5KN16dacXSETrSV/H2ZqZ7Mh1a5EHfjxl2elPxA0V3ppXfoarC9mZ6aHkKIvQWvwb8bTDfnI3wwQB6/18BYXhap9FFS4NTgVpH0vo79AK11u274DvUFLWuQ+jMM2utU+v19f/2+o/Xf7z+4/Ufr/94/cfrP17/8fqP13+8/sN///3333///ffff//9999///3333///ffff//9999///3333///ffff//9999///3333///ffff//9999///3333///ffff//9999///3333///ffff//9999///3333///ffff//9999///3333///ffff//9999///3333///ffff//9999///33P+a/mP9i/ov5L+a/mP9i/ov5L+a/mP9i/ov5L+a/mP/+nyz+F1ZQOCB6IwAAsEgBnQEqAAQABD5RKJJGv7+iISExuGPwCglnbuF17lz+Z/gb+gHvFKP8Afo7Pmh1/iT+gH8A9U/2X+H/gB+gH8A8wD8AM+45v3zcG/8T/av2o/f//5+e3H/iv7V/av2U/v/7RdUbxj9m/Rv9r/Zv70/4feh2J5n/kX5Z/n/8R+6P95/////+8f9o/uH88/a75Ifov/yfqX8gH6Vf5v/H/6f/o/5P/////6uv1J9x/9T/63+u9gH9M/of/M/0/79/MF/kv9r/kfcL/R/83/xf2A+QD+d/0H/qfnv8y3/D9hr9yfYA/lH+L/6fs3/6n/tf5/9//+p9kv9R/1//x/5v7//Qh/Pf7L/6f24////z+gD/of//2AP+d///ct/gH7/+7/1a/mX4K/gR+APFX8jas/X2//KB4RaQKZr5HnxoP7N9TXxEHn18RB59fEQefXxEHn18RB59fEQefXxEHn18RB59fEQefXxEHn18RB59fEQefXxEHn18RB59fEQefXxEHn18RB59fEQefXxEHn18RB59fEQefXxEHn18RB59fEQefXxEHn18RB59fEQefXxEHn18RB59fEQefXxEHn18RB59fEQefXxEHn18RB59fEQefXxEHn18RB59fEQefXxEHn18RB59fEQefXxEHn18RB59fEQefXxEHn18RB59fEQefXxEHn18RB59fEQefXxEHn18RB59fEQefXxEHn18RB59fEQefXxEHn18RB59fEQefXxEHn18RB59fEQefXxEHn18RB59fEQefXxEHn18RB59fEQefXxEHn18RB59fEQefXxEHn18RB59fEQefXxEHn18RB59fEQefXxEHn18RB59fEQefXxEHn18RB59fEQefXxEHn18RB59fEQefXxEHn18RB59fEQefXxEHn18RB59fEQefXxEHn18RB59fEQefXxEHn18RB59fEQefXxEHn18RB59fEQefXxEHn18RB59fEQefXxEHn18RB59fEQefXxEHn18RB59fEQefXxEHn18RB59fEQefXxEHn18RB59fEQefXxEHn18RB59fEQefXxEHn18RB59fEQefXxEHn18RB59fEQefXxEHn18Q7qP0fbe3+TpsObb2/XIQ5vMCEObzAhDm8wIQ5vM50+gx5mb6mviIPPr4iDz6+B4tQ63EL36Ac8cwMVg544TBuLAQu1epW9L7SRHQo0PM6j0OG75m+pr4iDz6+Idld6f3J3TDdH2wQed5SIFRoiB8zN9PgARKnBVbzgmisHPHMDFYNkAWFVvrUJJEt7urSXoHTdy5lV5VmG29w5aP6BmpwctFuWjtZCERTKnVCXAdH2uAHFFtCJ5IWxLk25xIYaNYPis4uj/qowy5Xqa40TnjmBisHPHBr0mFTliMg6diKbLV2GHcDThoab8NY6AoNGm/7LB/1f7dABwQo9YS6lpC1dyHO8AfffxoTL/aMvNDR2zM5rJYHbEaGmBisHPHDBiQdndqYMM/VlDsg8ob44GG8OdmKhuuJZs4P1D3xNJgduwIqsgEW/wgnvENgMb8K+VH3oEeqlSj1+Fkk7CuOxpK8vKGD4rOKsqdWNmt+U1xoQ1gbyq+4ABCAi4EH/axFevyN7ncSm9Rsajs+tdqSx+E9FCaxG4WmuUIB0hI/UlJyq7xCtgKESMN7ft11HiTaPlqbkqBLCDEVUgFFxGh0DbEjB8Wd/i6iwZuZ0o59ocix+3k83u9p/yWInZ/N7fEm4KrLHm+SlnC01yhaa5QgXUQu1QgNINpGPLmxhiRnJQfiyq93l93Eplp+WabaKiemcIsHxZ31FAvM05NTzjMc+VcdH23t22hSzOjdLAKhS7tt8udCYa9FTJHUXdD/wERl9rPXcd7X3DmLhUnVImrfPdZwvgzjlE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";

const ADMIN_USER = { id: 1, email: 'admin@plumanager.de', password: 'admin123', role: 'admin', name: 'System Admin', company: 'PLUManager' };

export default function PLUManagerEnterprise() {
  const [view, setView] = useState('login');
  const [user, setUser] = useState(null);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  
  const [customers, setCustomers] = useState([
    { id: 2, name: 'REWE Manager', email: 'rewe@example.de', company: 'REWE', address: 'Hauptstraße 1, 90762 Fürth', active: true, password: 'rewe123', registrationDate: '2024-01-15' },
    { id: 3, name: 'EDEKA Manager', email: 'edeka@example.de', company: 'EDEKA', address: 'Marktplatz 5, 90513 Zirndorf', active: true, password: 'edeka123', registrationDate: '2024-02-20' }
  ]);
  const [invitations, setInvitations] = useState([]);
  const [newCustomer, setNewCustomer] = useState({ name: '', email: '', company: '', address: '' });
  
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [customerEditForm, setCustomerEditForm] = useState({ name: '', email: '', company: '', address: '', password: '' });
  
  const [registrationView, setRegistrationView] = useState(false);
  const [inviteCode, setInviteCode] = useState('');
  const [regForm, setRegForm] = useState({ email: '', password: '', confirmPassword: '', code: '' });
  
  const [adminView, setAdminView] = useState('products');
  const [globalProducts, setGlobalProducts] = useState([]);
  
  // Multi-upload states
  const [pendingImages, setPendingImages] = useState([]);
  const [isDraggingGlobal, setIsDraggingGlobal] = useState(false);
  
  const [editingProduct, setEditingProduct] = useState(null);
  const [editForm, setEditForm] = useState({ name: '', image: null });
  
  const [isDraggingEdit, setIsDraggingEdit] = useState(false);
  
  const [marketView, setMarketView] = useState('library');
  const [marketProducts, setMarketProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [quizMode, setQuizMode] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [showResult, setShowResult] = useState(false);
  
  // PLU assignment modal
  const [assigningPLU, setAssigningPLU] = useState(null);
  const [pluForm, setPluForm] = useState({ plu: '' });

  const handleLogin = (e) => {
    if (e) e.preventDefault();
    setLoginError('');
    
    if (ADMIN_USER.email.toLowerCase().trim() === email.toLowerCase().trim() && ADMIN_USER.password === password) {
      setUser(ADMIN_USER);
      setView('admin');
      return;
    }
    
    const foundCustomer = customers.find(c => 
      c.email.toLowerCase().trim() === email.toLowerCase().trim() && 
      c.password === password
    );
    
    if (foundCustomer) {
      if (!foundCustomer.active) {
        setLoginError('Ihr Account wurde deaktiviert. Bitte kontaktieren Sie den Administrator.');
        return;
      }
      setUser({ ...foundCustomer, role: 'supermarket' });
      setView('supermarket');
    } else {
      setLoginError('Falsche Anmeldedaten! Bitte E-Mail und Passwort überprüfen.');
    }
  };

  const quickLogin = (userEmail, userPassword, isAdmin = false) => {
    setEmail(userEmail);
    setPassword(userPassword);
    setTimeout(() => {
      if (isAdmin) {
        setUser(ADMIN_USER);
        setView('admin');
      } else {
        const foundCustomer = customers.find(c => c.email === userEmail && c.password === userPassword);
        if (foundCustomer && foundCustomer.active) {
          setUser({ ...foundCustomer, role: 'supermarket' });
          setView('supermarket');
        }
      }
    }, 100);
  };

  const handleLogout = () => {
    setUser(null);
    setView('login');
    setEmail('');
    setPassword('');
    setLoginError('');
  };

  const generateInviteCode = () => {
    return 'INV-' + Math.random().toString(36).substr(2, 9).toUpperCase();
  };

  const sendInvitation = () => {
    if (!newCustomer.email || !newCustomer.name || !newCustomer.company) {
      alert('Bitte füllen Sie alle Pflichtfelder aus!');
      return;
    }

    const code = generateInviteCode();
    const invitation = {
      id: Date.now(),
      code: code,
      email: newCustomer.email,
      name: newCustomer.name,
      company: newCustomer.company,
      address: newCustomer.address,
      sentDate: new Date().toISOString().split('T')[0],
      used: false
    };

    setInvitations([...invitations, invitation]);
    
    const registrationLink = `${window.location.origin}?register=${code}`;
    alert(`Einladung gesendet an ${newCustomer.email}!\n\nEinladungscode: ${code}\n\nRegistrierungslink:\n${registrationLink}\n\n(In einer echten Anwendung würde dies per E-Mail versendet)`);
    
    setNewCustomer({ name: '', email: '', company: '', address: '' });
  };

  const toggleCustomerStatus = (customerId) => {
    setCustomers(customers.map(c => 
      c.id === customerId ? { ...c, active: !c.active } : c
    ));
  };

  const deleteCustomer = (customerId) => {
    if (window.confirm('Möchten Sie diesen Kunden wirklich löschen?')) {
      setCustomers(customers.filter(c => c.id !== customerId));
      setEditingCustomer(null);
    }
  };

  const openCustomerEditModal = (customer) => {
    setEditingCustomer(customer);
    setCustomerEditForm({
      name: customer.name,
      email: customer.email,
      company: customer.company,
      address: customer.address,
      password: ''
    });
  };

  const closeCustomerEditModal = () => {
    setEditingCustomer(null);
    setCustomerEditForm({ name: '', email: '', company: '', address: '', password: '' });
  };

  const saveCustomerEdit = () => {
    if (!customerEditForm.name || !customerEditForm.email || !customerEditForm.company) {
      alert('Name, E-Mail und Firma sind Pflichtfelder!');
      return;
    }

    const updatedCustomer = {
      ...editingCustomer,
      name: customerEditForm.name,
      email: customerEditForm.email,
      company: customerEditForm.company,
      address: customerEditForm.address
    };

    if (customerEditForm.password && customerEditForm.password.length >= 6) {
      updatedCustomer.password = customerEditForm.password;
    }

    setCustomers(customers.map(c => 
      c.id === editingCustomer.id ? updatedCustomer : c
    ));

    alert('Kundendaten erfolgreich aktualisiert!');
    closeCustomerEditModal();
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    
    if (regForm.password !== regForm.confirmPassword) {
      alert('Passwörter stimmen nicht überein!');
      return;
    }

    if (regForm.password.length < 6) {
      alert('Passwort muss mindestens 6 Zeichen lang sein!');
      return;
    }

    const invitation = invitations.find(inv => inv.code === regForm.code && !inv.used);
    
    if (!invitation) {
      alert('Ungültiger oder bereits verwendeter Einladungscode!');
      return;
    }

    if (invitation.email.toLowerCase() !== regForm.email.toLowerCase()) {
      alert('Diese E-Mail-Adresse stimmt nicht mit der Einladung überein!');
      return;
    }

    const newCustomer = {
      id: Date.now(),
      name: invitation.name,
      email: regForm.email,
      company: invitation.company,
      address: invitation.address,
      password: regForm.password,
      active: true,
      registrationDate: new Date().toISOString().split('T')[0]
    };

    setCustomers([...customers, newCustomer]);
    
    setInvitations(invitations.map(inv => 
      inv.code === regForm.code ? { ...inv, used: true } : inv
    ));

    alert('Registrierung erfolgreich! Sie können sich jetzt anmelden.');
    setRegistrationView(false);
    setRegForm({ email: '', password: '', confirmPassword: '', code: '' });
  };

  // Multi-image upload handlers
  const handleDragOverGlobal = (e) => {
    e.preventDefault();
    setIsDraggingGlobal(true);
  };

  const handleDragLeaveGlobal = (e) => {
    e.preventDefault();
    setIsDraggingGlobal(false);
  };

  const handleDropGlobal = (e) => {
    e.preventDefault();
    setIsDraggingGlobal(false);
    
    const files = Array.from(e.dataTransfer.files);
    processMultipleImages(files);
  };

  const handleFileSelectGlobal = (e) => {
    const files = Array.from(e.target.files);
    processMultipleImages(files);
  };

  const processMultipleImages = (files) => {
    const imageFiles = files.filter(f => f.type.startsWith('image/'));
    
    if (imageFiles.length === 0) {
      alert('Bitte nur Bilddateien auswählen!');
      return;
    }

    const newPending = [];
    let processed = 0;

    imageFiles.forEach((file, index) => {
      const reader = new FileReader();
      reader.onload = (evt) => {
        newPending.push({
          id: Date.now() + index,
          image: evt.target.result,
          name: file.name.replace(/\.[^/.]+$/, ''), // Remove extension
          fileName: file.name
        });
        
        processed++;
        if (processed === imageFiles.length) {
          setPendingImages([...pendingImages, ...newPending]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const updatePendingImageName = (id, name) => {
    setPendingImages(pendingImages.map(img => 
      img.id === id ? { ...img, name } : img
    ));
  };

  const removePendingImage = (id) => {
    setPendingImages(pendingImages.filter(img => img.id !== id));
  };

  const uploadAllPendingImages = () => {
    const invalidImages = pendingImages.filter(img => !img.name || !img.name.trim());
    
    if (invalidImages.length > 0) {
      alert(`Bitte geben Sie für alle Bilder einen Namen ein! (${invalidImages.length} Bilder ohne Namen)`);
      return;
    }

    const newProducts = pendingImages.map(img => ({
      id: Date.now() + Math.random(),
      name: img.name.trim(),
      image: img.image,
      shared: true
    }));

    setGlobalProducts([...globalProducts, ...newProducts]);
    setPendingImages([]);
    alert(`${newProducts.length} Bilder erfolgreich hochgeladen!`);
  };

  // PLU assignment for supermarket
  const openPLUAssignment = (product) => {
    const existing = marketProducts.find(p => 
      p.globalId === product.id && p.company === user?.company
    );
    
    setAssigningPLU(product);
    setPluForm({ plu: existing?.plu || '' });
  };

  const closePLUAssignment = () => {
    setAssigningPLU(null);
    setPluForm({ plu: '' });
  };

  const savePLUAssignment = () => {
    if (!pluForm.plu || !pluForm.plu.trim()) {
      alert('Bitte geben Sie einen PLU-Code ein!');
      return;
    }

    const existingIndex = marketProducts.findIndex(p => 
      p.globalId === assigningPLU.id && p.company === user?.company
    );

    if (existingIndex >= 0) {
      const updated = [...marketProducts];
      updated[existingIndex] = {
        ...updated[existingIndex],
        plu: pluForm.plu.trim()
      };
      setMarketProducts(updated);
    } else {
      setMarketProducts([...marketProducts, {
        id: Date.now(),
        globalId: assigningPLU.id,
        name: assigningPLU.name,
        image: assigningPLU.image,
        plu: pluForm.plu.trim(),
        company: user?.company
      }]);
    }

    alert('PLU-Code erfolgreich zugewiesen!');
    closePLUAssignment();
  };

  const openEditModal = (product, e) => {
    if (e) e.stopPropagation();
    setEditingProduct(product);
    setEditForm({
      name: product.name,
      image: product.image
    });
  };

  const closeEditModal = () => {
    setEditingProduct(null);
    setEditForm({ name: '', image: null });
    setIsDraggingEdit(false);
  };

  const handleDragOverEdit = (e) => {
    e.preventDefault();
    setIsDraggingEdit(true);
  };

  const handleDragLeaveEdit = (e) => {
    e.preventDefault();
    setIsDraggingEdit(false);
  };

  const handleDropEdit = (e) => {
    e.preventDefault();
    setIsDraggingEdit(false);
    
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      processEditImageFile(files[0]);
    }
  };

  const processEditImageFile = (file) => {
    if (!file.type.startsWith('image/')) {
      alert('Bitte nur Bilddateien hochladen!');
      return;
    }

    const reader = new FileReader();
    reader.onload = (evt) => {
      setEditForm({ ...editForm, image: evt.target.result });
    };
    reader.readAsDataURL(file);
  };

  const handleEditImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      processEditImageFile(file);
    }
  };

  const saveEditedProduct = () => {
    if (!editForm.name) {
      alert('Name ist erforderlich!');
      return;
    }

    setGlobalProducts(globalProducts.map(p => 
      p.id === editingProduct.id ? { ...p, ...editForm } : p
    ));
    
    closeEditModal();
  };

  const deleteProduct = (productId) => {
    if (window.confirm('Möchten Sie dieses Produkt wirklich löschen?')) {
      setGlobalProducts(globalProducts.filter(p => p.id !== productId));
      closeEditModal();
    }
  };

  const deleteMarketProduct = (productId) => {
    if (window.confirm('Möchten Sie diese PLU-Zuordnung wirklich löschen?')) {
      setMarketProducts(marketProducts.filter(p => p.id !== productId));
    }
  };

  const startQuiz = () => {
    if (selectedProducts.length === 0) {
      alert('Bitte wähle zuerst Produkte aus!');
      return;
    }
    setQuizMode(true);
    setCurrentQ(0);
    setScore({ correct: 0, total: 0 });
    setShowResult(false);
    setAnswer('');
  };

  const checkAnswer = () => {
    const isCorrect = answer.trim() === selectedProducts[currentQ].plu;
    setScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1
    }));
    setShowResult(true);
  };

  const nextQuestion = () => {
    if (currentQ < selectedProducts.length - 1) {
      setCurrentQ(currentQ + 1);
      setAnswer('');
      setShowResult(false);
    } else {
      setQuizMode(false);
    }
  };

  // Drag & Drop Zone Component
  const DragDropZone = ({ isDragging, onDragOver, onDragLeave, onDrop, onFileSelect, label, color = '#667eea', multiple = false }) => (
    <div
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      style={{
        border: `2px dashed ${isDragging ? color : '#e5e7eb'}`,
        borderRadius: '12px',
        padding: '32px',
        textAlign: 'center',
        background: isDragging ? `${color}10` : '#f9fafb',
        transition: 'all 0.2s',
        cursor: 'pointer',
        marginBottom: '16px'
      }}
    >
      <ImagePlus size={48} color={isDragging ? color : '#9ca3af'} style={{ marginBottom: '16px' }} />
      <p style={{ margin: '0 0 8px 0', fontWeight: '600', color: isDragging ? color : '#374151' }}>
        {isDragging ? 'Bilder hier ablegen...' : multiple ? 'Mehrere Bilder hierher ziehen' : 'Bild hierher ziehen'}
      </p>
      <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#6b7280' }}>
        oder
      </p>
      <label style={{
        display: 'inline-block',
        padding: '12px 24px',
        background: color,
        color: 'white',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: '500',
        fontSize: '14px'
      }}>
        <Upload size={18} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
        {label}
        <input
          type="file"
          accept="image/*"
          multiple={multiple}
          onChange={onFileSelect}
          style={{ display: 'none' }}
        />
      </label>
    </div>
  );

  // Product Edit Modal (Admin)
  const EditModal = () => {
    if (!editingProduct) return null;

    return (
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeEditModal();
        }}
      >
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '32px',
          maxWidth: '600px',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto'
        }}
        onClick={(e) => e.stopPropagation()}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '24px'
          }}>
            <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>Produkt bearbeiten</h2>
            <button
              onClick={closeEditModal}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#6b7280',
                padding: '4px'
              }}
            >
              ×
            </button>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Produktname</label>
            <input
              type="text"
              value={editForm.name}
              onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Produktbild</label>
            {editForm.image && (
              <img
                src={editForm.image}
                alt="Vorschau"
                style={{
                  width: '100%',
                  maxHeight: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  marginBottom: '12px'
                }}
              />
            )}
            <DragDropZone
              isDragging={isDraggingEdit}
              onDragOver={handleDragOverEdit}
              onDragLeave={handleDragLeaveEdit}
              onDrop={handleDropEdit}
              onFileSelect={handleEditImageUpload}
              label="Bild auswählen"
              color="#667eea"
            />
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={saveEditedProduct}
              style={{
                flex: 1,
                padding: '12px',
                background: '#10b981',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <Save size={18} /> Speichern
            </button>
            <button
              onClick={() => deleteProduct(editingProduct.id)}
              style={{
                padding: '12px 24px',
                background: '#ef4444',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Trash2 size={18} /> Löschen
            </button>
            <button
              onClick={closeEditModal}
              style={{
                padding: '12px 24px',
                background: '#6b7280',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Abbrechen
            </button>
          </div>
        </div>
      </div>
    );
  };

  // PLU Assignment Modal (Supermarket)
  const PLUAssignmentModal = () => {
    if (!assigningPLU) return null;

    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '20px'
      }}>
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '32px',
          maxWidth: '500px',
          width: '100%'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '24px'
          }}>
            <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>PLU-Code zuweisen</h2>
            <button
              onClick={closePLUAssignment}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#6b7280',
                padding: '4px'
              }}
            >
              ×
            </button>
          </div>

          {assigningPLU.image && (
            <img
              src={assigningPLU.image}
              alt={assigningPLU.name}
              style={{
                width: '100%',
                maxHeight: '200px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginBottom: '16px'
              }}
            />
          )}

          <div style={{ marginBottom: '24px', fontSize: '18px', fontWeight: '600' }}>
            {assigningPLU.name}
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              PLU-Code für {user?.company}
            </label>
            <input
              type="text"
              value={pluForm.plu}
              onChange={(e) => setPluForm({ plu: e.target.value })}
              placeholder="z.B. 4011"
              autoFocus
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '16px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={savePLUAssignment}
              style={{
                flex: 1,
                padding: '12px',
                background: '#10b981',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <Tag size={18} /> PLU zuweisen
            </button>
            <button
              onClick={closePLUAssignment}
              style={{
                padding: '12px 24px',
                background: '#6b7280',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Abbrechen
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Customer Edit Modal
  const CustomerEditModal = () => {
    if (!editingCustomer) return null;

    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '20px'
      }}>
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '32px',
          maxWidth: '600px',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '24px'
          }}>
            <h2 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>Kunde bearbeiten</h2>
            <button
              onClick={closeCustomerEditModal}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#6b7280',
                padding: '4px'
              }}
            >
              ×
            </button>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Name *
            </label>
            <input
              type="text"
              value={customerEditForm.name}
              onChange={(e) => setCustomerEditForm({ ...customerEditForm, name: e.target.value })}
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              E-Mail-Adresse *
            </label>
            <input
              type="email"
              value={customerEditForm.email}
              onChange={(e) => setCustomerEditForm({ ...customerEditForm, email: e.target.value })}
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Firma *
            </label>
            <input
              type="text"
              value={customerEditForm.company}
              onChange={(e) => setCustomerEditForm({ ...customerEditForm, company: e.target.value })}
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Adresse
            </label>
            <input
              type="text"
              value={customerEditForm.address}
              onChange={(e) => setCustomerEditForm({ ...customerEditForm, address: e.target.value })}
              placeholder="Straße, PLZ Ort"
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Neues Passwort (optional)
            </label>
            <input
              type="password"
              value={customerEditForm.password}
              onChange={(e) => setCustomerEditForm({ ...customerEditForm, password: e.target.value })}
              placeholder="Leer lassen, um Passwort nicht zu ändern"
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
            <p style={{ fontSize: '12px', color: '#6b7280', margin: '4px 0 0 0' }}>
              Mind. 6 Zeichen, wenn Sie das Passwort ändern möchten
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={saveCustomerEdit}
              style={{
                flex: 1,
                padding: '12px',
                background: '#10b981',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <Save size={18} /> Speichern
            </button>
            <button
              onClick={() => deleteCustomer(editingCustomer.id)}
              style={{
                padding: '12px 24px',
                background: '#ef4444',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Trash2 size={18} /> Löschen
            </button>
            <button
              onClick={closeCustomerEditModal}
              style={{
                padding: '12px 24px',
                background: '#6b7280',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Abbrechen
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Registration View
  if (registrationView) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '48px',
          width: '100%',
          maxWidth: '500px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <img src={PLUMANAGER_LOGO} alt="Logo" style={{ width: '100%', maxWidth: '300px', marginBottom: '16px' }} />
            <h2 style={{ margin: '0 0 8px 0', fontSize: '24px', fontWeight: 'bold' }}>Registrierung</h2>
            <p style={{ color: '#6b7280', margin: 0, fontSize: '14px' }}>Willkommen bei PLUManager Enterprise</p>
          </div>

          <form onSubmit={handleRegistration}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                Einladungscode *
              </label>
              <input
                type="text"
                value={regForm.code}
                onChange={(e) => setRegForm({ ...regForm, code: e.target.value.toUpperCase() })}
                placeholder="INV-XXXXXXXXX"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '16px',
                  boxSizing: 'border-box',
                  fontFamily: 'monospace'
                }}
                required
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                E-Mail-Adresse *
              </label>
              <input
                type="email"
                value={regForm.email}
                onChange={(e) => setRegForm({ ...regForm, email: e.target.value })}
                placeholder="ihre@email.de"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '16px',
                  boxSizing: 'border-box'
                }}
                required
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                Passwort * (mind. 6 Zeichen)
              </label>
              <input
                type="password"
                value={regForm.password}
                onChange={(e) => setRegForm({ ...regForm, password: e.target.value })}
                placeholder="Ihr Passwort"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '16px',
                  boxSizing: 'border-box'
                }}
                required
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                Passwort bestätigen *
              </label>
              <input
                type="password"
                value={regForm.confirmPassword}
                onChange={(e) => setRegForm({ ...regForm, confirmPassword: e.target.value })}
                placeholder="Passwort wiederholen"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '16px',
                  boxSizing: 'border-box'
                }}
                required
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '16px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                marginBottom: '16px'
              }}
            >
              <UserPlus size={20} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
              Registrieren
            </button>

            <button
              type="button"
              onClick={() => setRegistrationView(false)}
              style={{
                width: '100%',
                padding: '12px',
                background: 'transparent',
                color: '#667eea',
                border: '2px solid #667eea',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer'
              }}
            >
              Zurück zur Anmeldung
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (view === 'login') {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '48px',
          width: '100%',
          maxWidth: '500px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <img src={PLUMANAGER_LOGO} alt="Logo" style={{ width: '100%', maxWidth: '300px', marginBottom: '16px' }} />
            <p style={{ color: '#6b7280', margin: 0 }}>Enterprise PLU Training Platform</p>
          </div>

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#374151' }}>
                E-Mail
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '16px',
                  boxSizing: 'border-box'
                }}
                placeholder="ihre@email.de"
                autoComplete="email"
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#374151' }}>
                Passwort
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    paddingRight: '48px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '16px',
                    boxSizing: 'border-box'
                  }}
                  placeholder="Ihr Passwort"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#6b7280',
                    padding: '4px'
                  }}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {loginError && (
              <div style={{
                padding: '12px',
                background: '#fee2e2',
                border: '1px solid #ef4444',
                borderRadius: '8px',
                color: '#dc2626',
                marginBottom: '16px',
                fontSize: '14px'
              }}>
                {loginError}
              </div>
            )}

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '16px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                marginBottom: '16px'
              }}
            >
              Anmelden
            </button>

            <button
              type="button"
              onClick={() => setRegistrationView(true)}
              style={{
                width: '100%',
                padding: '12px',
                background: 'transparent',
                color: '#667eea',
                border: '2px solid #667eea',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                marginBottom: '24px'
              }}
            >
              <Key size={18} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
              Registrieren mit Einladungscode
            </button>
          </form>

          <div style={{
            marginTop: '24px',
            padding: '16px',
            background: '#f3f4f6',
            borderRadius: '8px'
          }}>
            <p style={{ margin: '0 0 12px 0', fontWeight: '600', fontSize: '14px', color: '#374151' }}>
              Schnell-Login (zum Testen):
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button
                onClick={() => quickLogin('admin@plumanager.de', 'admin123', true)}
                style={{
                  padding: '10px',
                  background: '#ef4444',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontWeight: '500'
                }}
              >
                👑 Als Admin anmelden
              </button>
              <button
                onClick={() => quickLogin('rewe@example.de', 'rewe123')}
                style={{
                  padding: '10px',
                  background: '#10b981',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontWeight: '500'
                }}
              >
                🏪 Als REWE anmelden
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (view === 'admin') {
    return (
      <>
        <EditModal />
        <CustomerEditModal />
        <div style={{ minHeight: '100vh', background: '#f3f4f6', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
          <div style={{
            background: 'white',
            padding: '16px 32px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <img src={PLUMANAGER_LOGO} alt="Logo" style={{ height: '40px' }} />
              <div>
                <div style={{ fontSize: '12px', color: '#6b7280' }}>Administrator</div>
                <div style={{ fontWeight: '600' }}>{user?.name || 'Admin'}</div>
              </div>
            </div>
            <button
              onClick={handleLogout}
              style={{
                padding: '8px 16px',
                background: '#ef4444',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: '500'
              }}
            >
              <LogOut size={18} /> Abmelden
            </button>
          </div>

          <div style={{ padding: '16px 32px', background: 'white', borderBottom: '2px solid #e5e7eb', display: 'flex', gap: '16px' }}>
            {['products', 'customers', 'invites'].map(v => (
              <button
                key={v}
                onClick={() => setAdminView(v)}
                style={{
                  padding: '12px 24px',
                  background: adminView === v ? '#667eea' : 'transparent',
                  color: adminView === v ? 'white' : '#6b7280',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '500'
                }}
              >
                {v === 'products' && <><Database size={18} style={{ display: 'inline', marginRight: '8px' }} />Bild-Datenbank</>}
                {v === 'customers' && <><Users size={18} style={{ display: 'inline', marginRight: '8px' }} />Kunden</>}
                {v === 'invites' && <><Mail size={18} style={{ display: 'inline', marginRight: '8px' }} />Einladungen</>}
              </button>
            ))}
          </div>

          <div style={{ padding: '32px' }}>
            {adminView === 'products' && (
              <div style={{ background: 'white', borderRadius: '12px', padding: '32px' }}>
                <h2 style={{ margin: '0 0 8px 0', fontSize: '24px', fontWeight: 'bold' }}>Bild-Datenbank</h2>
                <p style={{ color: '#6b7280', marginBottom: '24px', fontSize: '14px' }}>
                  💡 Laden Sie Produktbilder hoch. PLU-Codes werden von den Supermärkten zugewiesen.
                </p>
                
                <div style={{ background: '#f3f4f6', padding: '24px', borderRadius: '8px', marginBottom: '32px' }}>
                  <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Bilder hochladen</h3>
                  
                  <DragDropZone
                    isDragging={isDraggingGlobal}
                    onDragOver={handleDragOverGlobal}
                    onDragLeave={handleDragLeaveGlobal}
                    onDrop={handleDropGlobal}
                    onFileSelect={handleFileSelectGlobal}
                    label="Bilder auswählen"
                    color="#667eea"
                    multiple={true}
                  />

                  {pendingImages.length > 0 && (
                    <div style={{ marginTop: '24px' }}>
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        marginBottom: '16px'
                      }}>
                        <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>
                          {pendingImages.length} Bild{pendingImages.length !== 1 ? 'er' : ''} zum Hochladen bereit
                        </h4>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <button
                            onClick={uploadAllPendingImages}
                            style={{
                              padding: '10px 20px',
                              background: '#10b981',
                              color: 'white',
                              border: 'none',
                              borderRadius: '8px',
                              fontWeight: '600',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px'
                            }}
                          >
                            <Upload size={18} /> Alle hochladen
                          </button>
                          <button
                            onClick={() => setPendingImages([])}
                            style={{
                              padding: '10px 20px',
                              background: '#ef4444',
                              color: 'white',
                              border: 'none',
                              borderRadius: '8px',
                              fontWeight: '600',
                              cursor: 'pointer'
                            }}
                          >
                            Alle löschen
                          </button>
                        </div>
                      </div>
                      
                      <div style={{ 
                        display: 'grid', 
                        gap: '12px',
                        maxHeight: '400px',
                        overflow: 'auto',
                        padding: '4px'
                      }}>
                        {pendingImages.map(img => (
                          <div 
                            key={img.id}
                            style={{
                              display: 'flex',
                              gap: '12px',
                              background: 'white',
                              padding: '12px',
                              borderRadius: '8px',
                              border: '2px solid #e5e7eb'
                            }}
                          >
                            <img
                              src={img.image}
                              alt={img.name}
                              style={{
                                width: '80px',
                                height: '80px',
                                objectFit: 'cover',
                                borderRadius: '6px'
                              }}
                            />
                            <div style={{ flex: 1 }}>
                              <input
                                type="text"
                                value={img.name}
                                onChange={(e) => updatePendingImageName(img.id, e.target.value)}
                                placeholder="Produktname eingeben *"
                                style={{
                                  width: '100%',
                                  padding: '10px',
                                  border: '2px solid #e5e7eb',
                                  borderRadius: '6px',
                                  fontSize: '14px',
                                  boxSizing: 'border-box'
                                }}
                              />
                              <div style={{ 
                                fontSize: '12px', 
                                color: '#6b7280', 
                                marginTop: '4px'
                              }}>
                                Datei: {img.fileName}
                              </div>
                            </div>
                            <button
                              onClick={() => removePendingImage(img.id)}
                              style={{
                                background: '#ef4444',
                                color: 'white',
                                border: 'none',
                                borderRadius: '6px',
                                width: '36px',
                                height: '36px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                              }}
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                  gap: '16px'
                }}>
                  {globalProducts.map(p => (
                    <div
                      key={p.id}
                      style={{
                        border: '2px solid #e5e7eb',
                        borderRadius: '8px',
                        padding: '16px',
                        textAlign: 'center',
                        transition: 'all 0.2s',
                        position: 'relative'
                      }}
                    >
                      <button
                        onClick={(e) => openEditModal(p, e)}
                        style={{
                          position: 'absolute',
                          top: '8px',
                          right: '8px',
                          background: '#667eea',
                          color: 'white',
                          borderRadius: '50%',
                          width: '32px',
                          height: '32px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: 'none',
                          cursor: 'pointer',
                          zIndex: 10
                        }}
                      >
                        <Edit size={16} />
                      </button>
                      {p.image && (
                        <img
                          src={p.image}
                          alt={p.name}
                          style={{
                            width: '100%',
                            height: '150px',
                            objectFit: 'cover',
                            borderRadius: '8px',
                            marginBottom: '8px'
                          }}
                        />
                      )}
                      <div style={{ fontWeight: '600', marginBottom: '4px' }}>{p.name}</div>
                    </div>
                  ))}
                </div>

                {globalProducts.length === 0 && pendingImages.length === 0 && (
                  <div style={{
                    textAlign: 'center',
                    padding: '48px',
                    color: '#6b7280',
                    fontSize: '14px'
                  }}>
                    Noch keine Produktbilder vorhanden.
                  </div>
                )}
              </div>
            )}

            {adminView === 'customers' && (
              <div style={{ background: 'white', borderRadius: '12px', padding: '32px' }}>
                <h2 style={{ margin: '0 0 24px 0', fontSize: '24px', fontWeight: 'bold' }}>Kundenverwaltung</h2>
                
                <div style={{
                  background: '#f3f4f6',
                  padding: '24px',
                  borderRadius: '8px',
                  marginBottom: '32px'
                }}>
                  <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Neuen Kunden einladen</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    <input
                      type="text"
                      placeholder="Name *"
                      value={newCustomer.name}
                      onChange={(e) => setNewCustomer({...newCustomer, name: e.target.value})}
                      style={{ padding: '12px', border: '2px solid #e5e7eb', borderRadius: '8px', fontSize: '14px' }}
                    />
                    <input
                      type="email"
                      placeholder="E-Mail-Adresse *"
                      value={newCustomer.email}
                      onChange={(e) => setNewCustomer({...newCustomer, email: e.target.value})}
                      style={{ padding: '12px', border: '2px solid #e5e7eb', borderRadius: '8px', fontSize: '14px' }}
                    />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    <input
                      type="text"
                      placeholder="Firma *"
                      value={newCustomer.company}
                      onChange={(e) => setNewCustomer({...newCustomer, company: e.target.value})}
                      style={{ padding: '12px', border: '2px solid #e5e7eb', borderRadius: '8px', fontSize: '14px' }}
                    />
                    <input
                      type="text"
                      placeholder="Adresse"
                      value={newCustomer.address}
                      onChange={(e) => setNewCustomer({...newCustomer, address: e.target.value})}
                      style={{ padding: '12px', border: '2px solid #e5e7eb', borderRadius: '8px', fontSize: '14px' }}
                    />
                  </div>
                  <button
                    onClick={sendInvitation}
                    style={{
                      padding: '12px 24px',
                      background: '#10b981',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <Send size={18} /> Einladung senden
                  </button>
                </div>

                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid #e5e7eb' }}>
                      <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600' }}>Name</th>
                      <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600' }}>E-Mail</th>
                      <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600' }}>Firma</th>
                      <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600' }}>Adresse</th>
                      <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600' }}>Registriert</th>
                      <th style={{ padding: '16px', textAlign: 'center', fontWeight: '600' }}>Status</th>
                      <th style={{ padding: '16px', textAlign: 'center', fontWeight: '600' }}>Aktionen</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customers.map(c => (
                      <tr key={c.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                        <td style={{ padding: '16px' }}>{c.name}</td>
                        <td style={{ padding: '16px' }}>{c.email}</td>
                        <td style={{ padding: '16px' }}>{c.company}</td>
                        <td style={{ padding: '16px', fontSize: '13px', color: '#6b7280' }}>{c.address}</td>
                        <td style={{ padding: '16px', fontSize: '13px' }}>{c.registrationDate}</td>
                        <td style={{ padding: '16px', textAlign: 'center' }}>
                          <button
                            onClick={() => toggleCustomerStatus(c.id)}
                            style={{
                              padding: '6px 16px',
                              background: c.active ? '#10b981' : '#ef4444',
                              color: 'white',
                              border: 'none',
                              borderRadius: '999px',
                              fontSize: '12px',
                              fontWeight: '500',
                              cursor: 'pointer'
                            }}
                          >
                            {c.active ? '✓ Aktiv' : '✗ Deaktiviert'}
                          </button>
                        </td>
                        <td style={{ padding: '16px', textAlign: 'center' }}>
                          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                            <button
                              onClick={() => openCustomerEditModal(c)}
                              style={{
                                padding: '6px 12px',
                                background: '#667eea',
                                color: 'white',
                                border: 'none',
                                borderRadius: '6px',
                                fontSize: '12px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px'
                              }}
                            >
                              <Edit size={14} /> Bearbeiten
                            </button>
                            <button
                              onClick={() => deleteCustomer(c.id)}
                              style={{
                                padding: '6px 12px',
                                background: 'transparent',
                                color: '#ef4444',
                                border: '1px solid #ef4444',
                                borderRadius: '6px',
                                fontSize: '12px',
                                cursor: 'pointer'
                              }}
                            >
                              <Trash2 size={14} style={{ display: 'inline', verticalAlign: 'middle' }} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {customers.length === 0 && (
                  <div style={{
                    textAlign: 'center',
                    padding: '48px',
                    color: '#6b7280',
                    fontSize: '14px'
                  }}>
                    Noch keine Kunden vorhanden.
                  </div>
                )}
              </div>
            )}

            {adminView === 'invites' && (
              <div style={{ background: 'white', borderRadius: '12px', padding: '32px' }}>
                <h2 style={{ margin: '0 0 24px 0', fontSize: '24px', fontWeight: 'bold' }}>Einladungen</h2>
                
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid #e5e7eb' }}>
                      <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600' }}>Code</th>
                      <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600' }}>Name</th>
                      <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600' }}>E-Mail</th>
                      <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600' }}>Firma</th>
                      <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600' }}>Gesendet</th>
                      <th style={{ padding: '16px', textAlign: 'center', fontWeight: '600' }}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invitations.map(inv => (
                      <tr key={inv.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                        <td style={{ padding: '16px', fontFamily: 'monospace', fontSize: '13px', fontWeight: '600' }}>{inv.code}</td>
                        <td style={{ padding: '16px' }}>{inv.name}</td>
                        <td style={{ padding: '16px' }}>{inv.email}</td>
                        <td style={{ padding: '16px' }}>{inv.company}</td>
                        <td style={{ padding: '16px', fontSize: '13px' }}>{inv.sentDate}</td>
                        <td style={{ padding: '16px', textAlign: 'center' }}>
                          <span style={{
                            padding: '4px 12px',
                            background: inv.used ? '#10b981' : '#f59e0b',
                            color: 'white',
                            borderRadius: '999px',
                            fontSize: '12px',
                            fontWeight: '500'
                          }}>
                            {inv.used ? 'Verwendet' : 'Ausstehend'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {invitations.length === 0 && (
                  <div style={{
                    textAlign: 'center',
                    padding: '48px',
                    color: '#6b7280',
                    fontSize: '14px'
                  }}>
                    Noch keine Einladungen versendet.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </>
    );
  }

  if (view === 'supermarket') {
    return (
      <>
        <PLUAssignmentModal />
        <div style={{ minHeight: '100vh', background: '#f3f4f6', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
          <div style={{
            background: 'white',
            padding: '16px 32px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <img src={PLUMANAGER_LOGO} alt="Logo" style={{ height: '40px' }} />
              <div>
                <div style={{ fontSize: '12px', color: '#6b7280' }}>{user?.company || 'Supermarkt'}</div>
                <div style={{ fontWeight: '600' }}>{user?.name || 'Manager'}</div>
              </div>
            </div>
            <button
              onClick={handleLogout}
              style={{
                padding: '8px 16px',
                background: '#ef4444',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: '500'
              }}
            >
              <LogOut size={18} /> Abmelden
            </button>
          </div>

          <div style={{ padding: '16px 32px', background: 'white', borderBottom: '2px solid #e5e7eb', display: 'flex', gap: '16px' }}>
            {['library', 'myproducts', 'training'].map(v => (
              <button
                key={v}
                onClick={() => setMarketView(v)}
                style={{
                  padding: '12px 24px',
                  background: marketView === v ? '#667eea' : 'transparent',
                  color: marketView === v ? 'white' : '#6b7280',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '500'
                }}
              >
                {v === 'library' ? 'Bild-Datenbank' : v === 'myproducts' ? 'Meine PLU-Codes' : 'Training'}
              </button>
            ))}
          </div>

          <div style={{ padding: '32px' }}>
            {marketView === 'library' && (
              <div style={{ background: 'white', borderRadius: '12px', padding: '32px' }}>
                <h2 style={{ margin: '0 0 8px 0', fontSize: '24px', fontWeight: 'bold' }}>Bild-Datenbank</h2>
                <p style={{ color: '#6b7280', marginBottom: '32px', fontSize: '14px' }}>
                  💡 Klicken Sie auf ein Produktbild, um einen PLU-Code zuzuweisen
                </p>
                
                {globalProducts.length === 0 ? (
                  <div style={{
                    textAlign: 'center',
                    padding: '48px',
                    color: '#6b7280',
                    fontSize: '14px'
                  }}>
                    Noch keine Produktbilder verfügbar. Bitte wenden Sie sich an den Administrator.
                  </div>
                ) : (
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: '16px'
                  }}>
                    {globalProducts.map(p => {
                      const hasPLU = marketProducts.some(mp => mp.globalId === p.id && mp.company === user?.company);
                      const assignedPLU = marketProducts.find(mp => mp.globalId === p.id && mp.company === user?.company);
                      
                      return (
                        <div
                          key={p.id}
                          onClick={() => openPLUAssignment(p)}
                          style={{
                            border: `2px solid ${hasPLU ? '#10b981' : '#e5e7eb'}`,
                            borderRadius: '8px',
                            padding: '16px',
                            textAlign: 'center',
                            cursor: 'pointer',
                            background: hasPLU ? '#f0fdf4' : 'white',
                            transition: 'all 0.2s',
                            position: 'relative'
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'translateY(-4px)';
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        >
                          <div style={{
                            position: 'absolute',
                            top: '8px',
                            right: '8px',
                            background: hasPLU ? '#10b981' : '#667eea',
                            color: 'white',
                            borderRadius: '50%',
                            width: '32px',
                            height: '32px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            {hasPLU ? <Check size={16} /> : <Tag size={16} />}
                          </div>
                          {p.image && (
                            <img
                              src={p.image}
                              alt={p.name}
                              style={{
                                width: '100%',
                                height: '150px',
                                objectFit: 'cover',
                                borderRadius: '8px',
                                marginBottom: '8px'
                              }}
                            />
                          )}
                          <div style={{ fontWeight: '600', marginBottom: '4px' }}>{p.name}</div>
                          {hasPLU && assignedPLU && (
                            <div style={{ marginTop: '8px', color: '#10b981', fontWeight: '600', fontSize: '14px' }}>
                              PLU: {assignedPLU.plu}
                            </div>
                          )}
                          {!hasPLU && (
                            <div style={{ marginTop: '8px', color: '#667eea', fontSize: '12px' }}>
                              Klicken zum Zuweisen
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {marketView === 'myproducts' && (
              <div style={{ background: 'white', borderRadius: '12px', padding: '32px' }}>
                <h2 style={{ margin: '0 0 8px 0', fontSize: '24px', fontWeight: 'bold' }}>Meine PLU-Codes</h2>
                <p style={{ color: '#6b7280', marginBottom: '24px', fontSize: '14px' }}>
                  💡 Produkte mit zugewiesenen PLU-Codes für {user?.company}
                </p>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                  gap: '16px'
                }}>
                  {marketProducts.filter(p => p.company === user?.company).map(p => (
                    <div
                      key={p.id}
                      style={{
                        border: '2px solid #10b981',
                        borderRadius: '8px',
                        padding: '16px',
                        textAlign: 'center',
                        position: 'relative'
                      }}
                    >
                      <button
                        onClick={() => deleteMarketProduct(p.id)}
                        style={{
                          position: 'absolute',
                          top: '8px',
                          right: '8px',
                          background: '#ef4444',
                          color: 'white',
                          borderRadius: '50%',
                          width: '32px',
                          height: '32px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        <Trash2 size={16} />
                      </button>
                      <button
                        onClick={() => openPLUAssignment(globalProducts.find(gp => gp.id === p.globalId))}
                        style={{
                          position: 'absolute',
                          top: '8px',
                          right: '48px',
                          background: '#667eea',
                          color: 'white',
                          borderRadius: '50%',
                          width: '32px',
                          height: '32px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        <Edit size={16} />
                      </button>
                      {p.image && (
                        <img
                          src={p.image}
                          alt={p.name}
                          style={{
                            width: '100%',
                            height: '150px',
                            objectFit: 'cover',
                            borderRadius: '8px',
                            marginBottom: '8px'
                          }}
                        />
                      )}
                      <div style={{ fontWeight: '600', marginBottom: '4px' }}>{p.name}</div>
                      <div style={{ color: '#10b981', fontSize: '18px', fontWeight: '700', marginTop: '8px' }}>
                        PLU: {p.plu}
                      </div>
                    </div>
                  ))}
                </div>

                {marketProducts.filter(p => p.company === user?.company).length === 0 && (
                  <div style={{
                    textAlign: 'center',
                    padding: '48px',
                    color: '#6b7280',
                    fontSize: '14px'
                  }}>
                    Noch keine PLU-Codes zugewiesen. Gehen Sie zur Bild-Datenbank, um PLU-Codes zuzuweisen.
                  </div>
                )}
              </div>
            )}

            {marketView === 'training' && !quizMode && (
              <div style={{ background: 'white', borderRadius: '12px', padding: '32px' }}>
                <h2 style={{ margin: '0 0 16px 0', fontSize: '24px', fontWeight: 'bold' }}>PLU-Training</h2>
                <p style={{ color: '#6b7280', marginBottom: '32px' }}>
                  Produkte mit PLU-Codes: {marketProducts.filter(p => p.company === user?.company).length}
                </p>
                
                <button
                  onClick={() => {
                    const myProducts = marketProducts.filter(p => p.company === user?.company);
                    if (myProducts.length === 0) {
                      alert('Bitte weisen Sie zuerst PLU-Codes zu!');
                      return;
                    }
                    setSelectedProducts(myProducts);
                    startQuiz();
                  }}
                  disabled={marketProducts.filter(p => p.company === user?.company).length === 0}
                  style={{
                    padding: '16px 32px',
                    background: marketProducts.filter(p => p.company === user?.company).length === 0 ? '#d1d5db' : '#667eea',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '18px',
                    fontWeight: '600',
                    cursor: marketProducts.filter(p => p.company === user?.company).length === 0 ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <Play size={20} /> Training starten
                </button>

                {score.total > 0 && (
                  <div style={{
                    marginTop: '32px',
                    padding: '24px',
                    background: '#f0f4ff',
                    borderRadius: '8px'
                  }}>
                    <h3 style={{ margin: '0 0 8px 0', fontSize: '18px' }}>Letztes Ergebnis</h3>
                    <p style={{ fontSize: '32px', fontWeight: '700', margin: '8px 0' }}>
                      {score.correct} / {score.total} Punkte
                    </p>
                    <p style={{ color: '#6b7280', margin: 0 }}>
                      {Math.round((score.correct / score.total) * 100)}% korrekt
                    </p>
                  </div>
                )}
              </div>
            )}

            {quizMode && (
              <div style={{ background: 'white', borderRadius: '12px', padding: '32px', maxWidth: '600px', margin: '0 auto' }}>
                <div style={{ marginBottom: '16px', color: '#6b7280' }}>
                  Frage {currentQ + 1} von {selectedProducts.length}
                </div>
                
                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                  {selectedProducts[currentQ].image && (
                    <img
                      src={selectedProducts[currentQ].image}
                      alt="Produkt"
                      style={{
                        width: '100%',
                        maxWidth: '300px',
                        height: '300px',
                        objectFit: 'cover',
                        borderRadius: '12px',
                        marginBottom: '16px'
                      }}
                    />
                  )}
                  <h3 style={{ fontSize: '24px', margin: '0 0 8px 0', fontWeight: 'bold' }}>
                    {selectedProducts[currentQ].name}
                  </h3>
                  <p style={{ color: '#6b7280', margin: 0 }}>Wie lautet der PLU-Code?</p>
                </div>

                {!showResult ? (
                  <>
                    <input
                      type="text"
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && checkAnswer()}
                      placeholder="PLU-Code eingeben"
                      autoFocus
                      style={{
                        width: '100%',
                        padding: '16px',
                        fontSize: '20px',
                        border: '2px solid #e5e7eb',
                        borderRadius: '8px',
                        textAlign: 'center',
                        marginBottom: '16px',
                        boxSizing: 'border-box'
                      }}
                    />
                    <button
                      onClick={checkAnswer}
                      style={{
                        width: '100%',
                        padding: '16px',
                        background: '#667eea',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '18px',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }}
                    >
                      Prüfen
                    </button>
                  </>
                ) : (
                  <div style={{
                    padding: '24px',
                    background: answer.trim() === selectedProducts[currentQ].plu ? '#d1fae5' : '#fee2e2',
                    borderRadius: '8px',
                    textAlign: 'center',
                    marginBottom: '16px'
                  }}>
                    {answer.trim() === selectedProducts[currentQ].plu ? (
                      <>
                        <Check size={48} color="#10b981" style={{ marginBottom: '8px' }} />
                        <p style={{ fontSize: '20px', fontWeight: '600', margin: 0, color: '#10b981' }}>
                          Richtig!
                        </p>
                      </>
                    ) : (
                      <>
                        <X size={48} color="#ef4444" style={{ marginBottom: '8px' }} />
                        <p style={{ fontSize: '20px', fontWeight: '600', margin: '0 0 8px 0', color: '#ef4444' }}>
                          Falsch!
                        </p>
                        <p style={{ margin: 0, color: '#6b7280' }}>
                          Richtige Antwort: {selectedProducts[currentQ].plu}
                        </p>
                      </>
                    )}
                    <button
                      onClick={nextQuestion}
                      style={{
                        marginTop: '16px',
                        padding: '12px 24px',
                        background: '#667eea',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '16px',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }}
                    >
                      {currentQ < selectedProducts.length - 1 ? 'Weiter' : 'Fertig'}
                    </button>
                  </div>
                )}

                <div style={{
                  marginTop: '24px',
                  padding: '16px',
                  background: '#f3f4f6',
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  <p style={{ margin: 0, fontSize: '14px', color: '#6b7280' }}>
                    Punktestand: {score.correct} / {score.total}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }

  return null;
}
