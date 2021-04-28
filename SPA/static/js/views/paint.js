class PaintView {
  _activeToolEl = document.getElementById('active-tool');
  _brushColorBtn = document.getElementById('brush-color');
  _brushIcon = document.getElementById('brush');
  _brushSize = document.getElementById('brush-size');
  _brushSlider = document.getElementById('brush-slider');
  _bucketColorBtn = document.getElementById('bucket-color');
  _eraser = document.getElementById('eraser');
  _clearCanvasBtn = document.getElementById('clear-canvas');
  _saveStorageBtn = document.getElementById('save-storage');
  _loadStorageBtn = document.getElementById('load-storage');
  _clearStorageBtn = document.getElementById('clear-storage');
  _downloadBtn = document.getElementById('download');
  _body = document.querySelector('body');

  // Global Variables
  _brushTime = 1500;
  _canvas = document.createElement('canvas');
  // _canvas.id = 'canvas';
  _context = this._canvas.getContext('2d');
  _currentSize = 10;
  _bucketColor = '#FFFFFF';
  _currentColor = '#A51DAB';
  _isEraser = false;
  _isMouseDown = false;
  _drawnArray = [];

  // Formatting Brush Size
  _displayBrushSize() {
    brushSize.textContent = currentSize < 10 ? `0${currentSize}` : currentSize;
  }


  _brushTimeSetTimeout(ms) {
    setTimeout(switchToBrush, ms);
  }

  // Switch back to Brush
  _switchToBrush() {
    isEraser = false;
    activeToolEl.textContent = 'Brush';
    brushIcon.style.color = 'black';
    eraser.style.color = 'white';
    currentColor = `#${brushColorBtn.value}`;
    currentSize = 10;
    brushSlider.value = 10;
    displayBrushSize();
  }

  // Create Canvas
  _createCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 50;
    context.fillStyle = bucketColor;
    context.fillRect(0, 0, canvas.width, canvas.height);
    body.appendChild(canvas);
    switchToBrush();
  }



  // Draw what is stored in DrawnArray
  _restoreCanvas() {
    for (let i = 1; i < drawnArray.length; i++) {
      context.beginPath();
      context.moveTo(drawnArray[i - 1].x, drawnArray[i - 1].y);
      context.lineWidth = drawnArray[i].size;
      context.lineCap = 'round';
      if (drawnArray[i].eraser) {
        context.strokeStyle = bucketColor;
      } else {
        context.strokeStyle = drawnArray[i].color;
      }
      context.lineTo(drawnArray[i].x, drawnArray[i].y);
      context.stroke();
    }
  }

  // Store Drawn Lines in DrawnArray
  _storeDrawn(x, y, size, color, erase) {
    const line = {
      x,
      y,
      size,
      color,
      erase,
    };
    console.log(line);
    drawnArray.push(line);
  }

  // Get Mouse Position
  _getMousePosition(event) {
    const boundaries = canvas.getBoundingClientRect();
    return {
      x: event.clientX - boundaries.left,
      y: event.clientY - boundaries.top,
    };
  }

  _addHandler() {
    // Setting Brush Size
    brushSlider.addEventListener('change', () => {
      currentSize = brushSlider.value;
      displayBrushSize();
    });
  
    // Setting Brush Color
    brushColorBtn.addEventListener('change', () => {
      isEraser = false;
      currentColor = `#${brushColorBtn.value}`;
    });
  
    // Setting Background Color
    bucketColorBtn.addEventListener('change', () => {
      bucketColor = `#${bucketColorBtn.value}`;
      createCanvas();
      restoreCanvas();
    });
  
    // Eraser
    eraser.addEventListener('click', () => {
      isEraser = true;
      activeToolEl.textContent = 'Eraser';
      brushIcon.style.color = 'white';
      eraser.style.color = 'black';
      currentColor = bucketColor;
      currentSize = 50;
    });

    // Clear Canvas
    clearCanvasBtn.addEventListener('click', () => {
      createCanvas();
      drawnArray = [];
      // Active Tool
      activeToolEl.textContent = 'Canvas Cleared';
      brushTimeSetTimeout(brushTime);
    });
    // Mouse Down
  canvas.addEventListener('mousedown', (event) => {
    isMouseDown = true;
    const currentPosition = getMousePosition(event);
    console.log('mouse is clicked', currentPosition);
    context.moveTo(currentPosition.x, currentPosition.y);
    context.beginPath();
    context.lineWidth = currentSize;
    context.lineCap = 'round';
    context.strokeStyle = currentColor;
  });

  // Mouse Move
  canvas.addEventListener('mousemove', (event) => {
    if (isMouseDown) {
      const currentPosition = getMousePosition(event);
      console.log('mouse is moving', currentPosition);
      context.lineTo(currentPosition.x, currentPosition.y);
      context.stroke();
      storeDrawn(
        currentPosition.x,
        currentPosition.y,
        currentSize,
        currentColor,
        isEraser,
      );
    } else {
      storeDrawn(undefined);
    }
  });

  // Mouse Up
  canvas.addEventListener('mouseup', () => {
    isMouseDown = false;
    console.log('mouse is unclicked');
  });


  // Save to Local Storage
  saveStorageBtn.addEventListener('click', () => {
    localStorage.setItem('savedCanvas', JSON.stringify(drawnArray));
    // Active Tool
    activeToolEl.textContent = 'Canvas Saved';
    brushTimeSetTimeout(brushTime);
  });

  // Load from Local Storage
  loadStorageBtn.addEventListener('click', () => {
    if (localStorage.getItem('savedCanvas')) {
      drawnArray = JSON.parse(localStorage.savedCanvas);
      restoreCanvas();
    // Active Tool
      activeToolEl.textContent = 'Canvas Loaded';
      brushTimeSetTimeout(brushTime);
    } else {
      activeToolEl.textContent = 'No Canvas Found';
      brushTimeSetTimeout(brushTime);
    }

  });

  // Clear Local Storage
  clearStorageBtn.addEventListener('click', () => {
    localStorage.removeItem('savedCanvas');
    // Active Tool
    activeToolEl.textContent = 'Local Storage Cleared';
    brushTimeSetTimeout(brushTime);
  });

  // Download Image
  downloadBtn.addEventListener('click', () => {
    downloadBtn.href = canvas.toDataURL('image/jpeg', 1);
    downloadBtn.download = 'paint-example.jpeg';
    // Active Tool
    activeToolEl.textContent = 'Image File Saved';
    brushTimeSetTimeout(brushTime);
  });

  // Event Listener
  brushIcon.addEventListener('click', switchToBrush);

  }

  getHtml() {
    return `
    <!-- Tool Bar -->
    <div class="top-bar">
        <!-- Active Tool -->
        <div class="active-tool">
            <span id="active-tool" title="Active Tool">Brush</span>
        </div>
        <!-- Brush -->
        <div class="brush tool">
            <i class="fas fa-brush" id="brush" title="Brush"></i>
            <input class="jscolor" value="a51dab" id="brush-color">
            <span class="size" id="brush-size" title="Brush Size">10</span>
            <input type="range" min="1" max="50" value="10" class="slider" id="brush-slider">
        </div>
        <!-- Bucket -->
        <div class="bucket tool">
            <i class="fas fa-fill-drip" title="Background Color"></i>
            <input class="jscolor" value="ffffff" id="bucket-color">
        </div>
        <!-- Eraser -->
        <div class="tool">
            <i class="fas fa-eraser" id="eraser" title="Eraser"></i>
        </div>
        <!-- Clear Canvas -->
        <div class="tool">
            <i class="fas fa-undo-alt" id="clear-canvas" title="Clear"></i>
        </div>
        <!-- Save Local Storage -->
        <div class="tool">
            <i class="fas fa-download" id="save-storage" title="Save Local Storage"></i>
        </div>
        <!-- Load Local Storage -->
        <div class="tool">
            <i class="fas fa-upload" id="load-storage" title="Load Local Storage"></i>
        </div>
        <!-- Clear Local Storage -->
        <div class="tool">
            <i class="fas fa-trash-alt" id="clear-storage" title="Clear Local Storage"></i>
        </div>
        <!-- Download Image -->
        <div class="tool">
            <a id="download">
                <i class="far fa-save" title="Save Image File"></i>
            </a>
        </div>
    </div>

    <!-- Mobile Message -->
    <div class="mobile-message">
        <h2>Please use application on larger screen</h2>
    </div>
    `
  };
}
export default new PaintView();