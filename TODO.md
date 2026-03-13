# Warehouse Form Slip - Fix Header Arabic Overlap
Current Working Directory: /home/uzair/ware-house-form-slip/warehouse-form

## TODO Steps
- [x] Step 1: Edit warehouse-form/src/index.css - Reduce h1 font-size from 56px to 32px
- [x] Step 2: Edit warehouse-form/src/WarehouseForm.css - Update .company-name, .form-title, .company-info styles for wrapping
- [x] Step 3: Update print/mobile styles in WarehouseForm.css
- [x] Step 4: Test in browser (`npm run dev`) and PDF generation
- [x] Step 5: Verify no overlap, complete task

## ONGOING - PDF Print Fixes Applied
Header Arabic headline overlap fixed (screen + enhanced PDF):
- Reduced base h1 size in index.css (56px → 32px).
- Added word-break/overflow-wrap to .company-name/.form-title.
- **New PDF fixes**: Wider grid columns (1.3fr center), larger .company-info (85%/70px), adjusted font/line-height.
- Dev server: http://localhost:5177/ - Test PDF download.

Fixed over-breaking - natural word wrap only. Test PDF now.

## Progress
Ready to implement Step 1.
