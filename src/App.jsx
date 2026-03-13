import React, { useState, useRef } from 'react';
import './WarehouseForm.css';

const WarehouseForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    customerName: '',
    supervisorName: '',
    items: Array(15).fill(null).map((_, index) => ({
      id: index + 1,
      itemNumber: '',
      itemName: '',
      quantityPieces: '',
      quantityCartons: ''
    })),
    signature: ''
  });

  const formRef = useRef(null);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...formData.items];
    updatedItems[index][field] = value;
    setFormData(prev => ({
      ...prev,
      items: updatedItems
    }));
  };

  // Main solution: Use browser's print to PDF
  const generatePDF = () => {
    // Hide buttons before printing
    const buttons = document.querySelector('.action-buttons');
    if (buttons) buttons.style.display = 'none';

    // Trigger print dialog (user can save as PDF)
    window.print();

    // Show buttons again after print dialog closes
    setTimeout(() => {
      if (buttons) buttons.style.display = 'flex';
    }, 100);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="app-container">
      <div className="action-buttons no-print">
        <button onClick={generatePDF} className="btn btn-primary">
          تحميل PDF
        </button>
        <button onClick={handlePrint} className="btn btn-secondary">
          طباعة
        </button>
      </div>

      <div className="form-container" ref={formRef}>
        {/* Header Section */}
        <header className="form-header">
          <div className="date-section">
            <label>التاريخ</label>
            <input
              type="text"
              value={formData.date}
              onChange={(e) => handleInputChange('date', e.target.value)}
              className="date-input"
              placeholder="................."
            />
          </div>

          <div className="company-info">
            <h1 className="company-name">شركة ملاذ الاولى للصناعة</h1>
            <p className="company-name-en">malath aloula for industry c.o</p>
            <h2 className="form-title">اذن صرف مخزني</h2>
          </div>
          

          <div className="logo-placeholder">
            <div className="logo-circle">
              <img src="/logo.jpeg" alt="Company Logo" className="logo-image" />
            </div>
          </div>

        </header>

        {/* Customer and Supervisor Section */}
        <div className="info-section">
          <div className="info-row">
            <label className="info-label">اسم العميل</label>
            <input
              type="text"
              value={formData.customerName}
              onChange={(e) => handleInputChange('customerName', e.target.value)}
              className="info-input"
            />
          </div>
          <div className="info-row">
            <label className="info-label">اسم المشرف</label>
            <input
              type="text"
              value={formData.supervisorName}
              onChange={(e) => handleInputChange('supervisorName', e.target.value)}
              className="info-input"
            />
          </div>
        </div>

        {/* Items Table */}
        <table className="items-table">
          <thead>
            <tr>
              <th className="row-number-header"></th>
              <th>رقم الصنف</th>
              <th>اسم الصنف</th>
              <th>ك. حبة</th>
              <th>ك. كرتون</th>
            </tr>
          </thead>
          <tbody>
            {formData.items.map((item, index) => (
              <tr key={item.id}>
                <td className="row-number">{item.id}</td>
                <td>
                  <input
                    type="text"
                    value={item.itemNumber}
                    onChange={(e) => handleItemChange(index, 'itemNumber', e.target.value)}
                    className="table-input"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={item.itemName}
                    onChange={(e) => handleItemChange(index, 'itemName', e.target.value)}
                    className="table-input"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={item.quantityPieces}
                    onChange={(e) => handleItemChange(index, 'quantityPieces', e.target.value)}
                    className="table-input"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={item.quantityCartons}
                    onChange={(e) => handleItemChange(index, 'quantityCartons', e.target.value)}
                    className="table-input"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Footer Section */}
        <footer className="form-footer">
          <div className="signature-section">
            <label>التوقيع</label>
            <input
              type="text"
              value={formData.signature}
              onChange={(e) => handleInputChange('signature', e.target.value)}
              className="signature-input"
              placeholder="................."
            />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default WarehouseForm;