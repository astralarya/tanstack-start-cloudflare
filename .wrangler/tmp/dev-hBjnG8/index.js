var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn2, res) => function __init() {
  return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// node_modules/.pnpm/unenv@2.0.0-rc.19/node_modules/unenv/dist/runtime/_internal/utils.mjs
// @__NO_SIDE_EFFECTS__
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
// @__NO_SIDE_EFFECTS__
function notImplemented(name) {
  const fn2 = /* @__PURE__ */ __name(() => {
    throw /* @__PURE__ */ createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn2, { __unenv__: true });
}
// @__NO_SIDE_EFFECTS__
function notImplementedClass(name) {
  return class {
    __unenv__ = true;
    constructor() {
      throw new Error(`[unenv] ${name} is not implemented yet!`);
    }
  };
}
var init_utils = __esm({
  "node_modules/.pnpm/unenv@2.0.0-rc.19/node_modules/unenv/dist/runtime/_internal/utils.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(createNotImplementedError, "createNotImplementedError");
    __name(notImplemented, "notImplemented");
    __name(notImplementedClass, "notImplementedClass");
  }
});

// node_modules/.pnpm/unenv@2.0.0-rc.19/node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs
var _timeOrigin, _performanceNow, nodeTiming, PerformanceEntry, PerformanceMark, PerformanceMeasure, PerformanceResourceTiming, PerformanceObserverEntryList, Performance, PerformanceObserver, performance;
var init_performance = __esm({
  "node_modules/.pnpm/unenv@2.0.0-rc.19/node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    _timeOrigin = globalThis.performance?.timeOrigin ?? Date.now();
    _performanceNow = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin;
    nodeTiming = {
      name: "node",
      entryType: "node",
      startTime: 0,
      duration: 0,
      nodeStart: 0,
      v8Start: 0,
      bootstrapComplete: 0,
      environment: 0,
      loopStart: 0,
      loopExit: 0,
      idleTime: 0,
      uvMetricsInfo: {
        loopCount: 0,
        events: 0,
        eventsWaiting: 0
      },
      detail: void 0,
      toJSON() {
        return this;
      }
    };
    PerformanceEntry = class {
      static {
        __name(this, "PerformanceEntry");
      }
      __unenv__ = true;
      detail;
      entryType = "event";
      name;
      startTime;
      constructor(name, options) {
        this.name = name;
        this.startTime = options?.startTime || _performanceNow();
        this.detail = options?.detail;
      }
      get duration() {
        return _performanceNow() - this.startTime;
      }
      toJSON() {
        return {
          name: this.name,
          entryType: this.entryType,
          startTime: this.startTime,
          duration: this.duration,
          detail: this.detail
        };
      }
    };
    PerformanceMark = class PerformanceMark2 extends PerformanceEntry {
      static {
        __name(this, "PerformanceMark");
      }
      entryType = "mark";
      constructor() {
        super(...arguments);
      }
      get duration() {
        return 0;
      }
    };
    PerformanceMeasure = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceMeasure");
      }
      entryType = "measure";
    };
    PerformanceResourceTiming = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceResourceTiming");
      }
      entryType = "resource";
      serverTiming = [];
      connectEnd = 0;
      connectStart = 0;
      decodedBodySize = 0;
      domainLookupEnd = 0;
      domainLookupStart = 0;
      encodedBodySize = 0;
      fetchStart = 0;
      initiatorType = "";
      name = "";
      nextHopProtocol = "";
      redirectEnd = 0;
      redirectStart = 0;
      requestStart = 0;
      responseEnd = 0;
      responseStart = 0;
      secureConnectionStart = 0;
      startTime = 0;
      transferSize = 0;
      workerStart = 0;
      responseStatus = 0;
    };
    PerformanceObserverEntryList = class {
      static {
        __name(this, "PerformanceObserverEntryList");
      }
      __unenv__ = true;
      getEntries() {
        return [];
      }
      getEntriesByName(_name, _type) {
        return [];
      }
      getEntriesByType(type) {
        return [];
      }
    };
    Performance = class {
      static {
        __name(this, "Performance");
      }
      __unenv__ = true;
      timeOrigin = _timeOrigin;
      eventCounts = /* @__PURE__ */ new Map();
      _entries = [];
      _resourceTimingBufferSize = 0;
      navigation = void 0;
      timing = void 0;
      timerify(_fn, _options) {
        throw createNotImplementedError("Performance.timerify");
      }
      get nodeTiming() {
        return nodeTiming;
      }
      eventLoopUtilization() {
        return {};
      }
      markResourceTiming() {
        return new PerformanceResourceTiming("");
      }
      onresourcetimingbufferfull = null;
      now() {
        if (this.timeOrigin === _timeOrigin) {
          return _performanceNow();
        }
        return Date.now() - this.timeOrigin;
      }
      clearMarks(markName) {
        this._entries = markName ? this._entries.filter((e3) => e3.name !== markName) : this._entries.filter((e3) => e3.entryType !== "mark");
      }
      clearMeasures(measureName) {
        this._entries = measureName ? this._entries.filter((e3) => e3.name !== measureName) : this._entries.filter((e3) => e3.entryType !== "measure");
      }
      clearResourceTimings() {
        this._entries = this._entries.filter((e3) => e3.entryType !== "resource" || e3.entryType !== "navigation");
      }
      getEntries() {
        return this._entries;
      }
      getEntriesByName(name, type) {
        return this._entries.filter((e3) => e3.name === name && (!type || e3.entryType === type));
      }
      getEntriesByType(type) {
        return this._entries.filter((e3) => e3.entryType === type);
      }
      mark(name, options) {
        const entry = new PerformanceMark(name, options);
        this._entries.push(entry);
        return entry;
      }
      measure(measureName, startOrMeasureOptions, endMark) {
        let start;
        let end;
        if (typeof startOrMeasureOptions === "string") {
          start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
          end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
        } else {
          start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
          end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
        }
        const entry = new PerformanceMeasure(measureName, {
          startTime: start,
          detail: {
            start,
            end
          }
        });
        this._entries.push(entry);
        return entry;
      }
      setResourceTimingBufferSize(maxSize) {
        this._resourceTimingBufferSize = maxSize;
      }
      addEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.addEventListener");
      }
      removeEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.removeEventListener");
      }
      dispatchEvent(event) {
        throw createNotImplementedError("Performance.dispatchEvent");
      }
      toJSON() {
        return this;
      }
    };
    PerformanceObserver = class {
      static {
        __name(this, "PerformanceObserver");
      }
      __unenv__ = true;
      static supportedEntryTypes = [];
      _callback = null;
      constructor(callback) {
        this._callback = callback;
      }
      takeRecords() {
        return [];
      }
      disconnect() {
        throw createNotImplementedError("PerformanceObserver.disconnect");
      }
      observe(options) {
        throw createNotImplementedError("PerformanceObserver.observe");
      }
      bind(fn2) {
        return fn2;
      }
      runInAsyncScope(fn2, thisArg, ...args) {
        return fn2.call(thisArg, ...args);
      }
      asyncId() {
        return 0;
      }
      triggerAsyncId() {
        return 0;
      }
      emitDestroy() {
        return this;
      }
    };
    performance = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance();
  }
});

// node_modules/.pnpm/unenv@2.0.0-rc.19/node_modules/unenv/dist/runtime/node/perf_hooks.mjs
var init_perf_hooks = __esm({
  "node_modules/.pnpm/unenv@2.0.0-rc.19/node_modules/unenv/dist/runtime/node/perf_hooks.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_performance();
  }
});

// node_modules/.pnpm/@cloudflare+unenv-preset@2.5.0_unenv@2.0.0-rc.19_workerd@1.20250730.0/node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs
var init_performance2 = __esm({
  "node_modules/.pnpm/@cloudflare+unenv-preset@2.5.0_unenv@2.0.0-rc.19_workerd@1.20250730.0/node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs"() {
    init_perf_hooks();
    globalThis.performance = performance;
    globalThis.Performance = Performance;
    globalThis.PerformanceEntry = PerformanceEntry;
    globalThis.PerformanceMark = PerformanceMark;
    globalThis.PerformanceMeasure = PerformanceMeasure;
    globalThis.PerformanceObserver = PerformanceObserver;
    globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList;
    globalThis.PerformanceResourceTiming = PerformanceResourceTiming;
  }
});

// node_modules/.pnpm/unenv@2.0.0-rc.19/node_modules/unenv/dist/runtime/mock/noop.mjs
var noop_default;
var init_noop = __esm({
  "node_modules/.pnpm/unenv@2.0.0-rc.19/node_modules/unenv/dist/runtime/mock/noop.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    noop_default = Object.assign(() => {
    }, { __unenv__: true });
  }
});

// node_modules/.pnpm/unenv@2.0.0-rc.19/node_modules/unenv/dist/runtime/node/console.mjs
import { Writable } from "node:stream";
var _console, _ignoreErrors, _stderr, _stdout, log, info, trace, debug, table, error, warn, createTask, clear, count, countReset, dir, dirxml, group, groupEnd, groupCollapsed, profile, profileEnd, time, timeEnd, timeLog, timeStamp, Console, _times, _stdoutErrorHandler, _stderrErrorHandler;
var init_console = __esm({
  "node_modules/.pnpm/unenv@2.0.0-rc.19/node_modules/unenv/dist/runtime/node/console.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_noop();
    init_utils();
    _console = globalThis.console;
    _ignoreErrors = true;
    _stderr = new Writable();
    _stdout = new Writable();
    log = _console?.log ?? noop_default;
    info = _console?.info ?? log;
    trace = _console?.trace ?? info;
    debug = _console?.debug ?? log;
    table = _console?.table ?? log;
    error = _console?.error ?? log;
    warn = _console?.warn ?? error;
    createTask = _console?.createTask ?? /* @__PURE__ */ notImplemented("console.createTask");
    clear = _console?.clear ?? noop_default;
    count = _console?.count ?? noop_default;
    countReset = _console?.countReset ?? noop_default;
    dir = _console?.dir ?? noop_default;
    dirxml = _console?.dirxml ?? noop_default;
    group = _console?.group ?? noop_default;
    groupEnd = _console?.groupEnd ?? noop_default;
    groupCollapsed = _console?.groupCollapsed ?? noop_default;
    profile = _console?.profile ?? noop_default;
    profileEnd = _console?.profileEnd ?? noop_default;
    time = _console?.time ?? noop_default;
    timeEnd = _console?.timeEnd ?? noop_default;
    timeLog = _console?.timeLog ?? noop_default;
    timeStamp = _console?.timeStamp ?? noop_default;
    Console = _console?.Console ?? /* @__PURE__ */ notImplementedClass("console.Console");
    _times = /* @__PURE__ */ new Map();
    _stdoutErrorHandler = noop_default;
    _stderrErrorHandler = noop_default;
  }
});

// node_modules/.pnpm/@cloudflare+unenv-preset@2.5.0_unenv@2.0.0-rc.19_workerd@1.20250730.0/node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs
var workerdConsole, assert, clear2, context, count2, countReset2, createTask2, debug2, dir2, dirxml2, error2, group2, groupCollapsed2, groupEnd2, info2, log2, profile2, profileEnd2, table2, time2, timeEnd2, timeLog2, timeStamp2, trace2, warn2, console_default;
var init_console2 = __esm({
  "node_modules/.pnpm/@cloudflare+unenv-preset@2.5.0_unenv@2.0.0-rc.19_workerd@1.20250730.0/node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_console();
    workerdConsole = globalThis["console"];
    ({
      assert,
      clear: clear2,
      context: (
        // @ts-expect-error undocumented public API
        context
      ),
      count: count2,
      countReset: countReset2,
      createTask: (
        // @ts-expect-error undocumented public API
        createTask2
      ),
      debug: debug2,
      dir: dir2,
      dirxml: dirxml2,
      error: error2,
      group: group2,
      groupCollapsed: groupCollapsed2,
      groupEnd: groupEnd2,
      info: info2,
      log: log2,
      profile: profile2,
      profileEnd: profileEnd2,
      table: table2,
      time: time2,
      timeEnd: timeEnd2,
      timeLog: timeLog2,
      timeStamp: timeStamp2,
      trace: trace2,
      warn: warn2
    } = workerdConsole);
    Object.assign(workerdConsole, {
      Console,
      _ignoreErrors,
      _stderr,
      _stderrErrorHandler,
      _stdout,
      _stdoutErrorHandler,
      _times
    });
    console_default = workerdConsole;
  }
});

// node_modules/.pnpm/wrangler@4.27.0/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console = __esm({
  "node_modules/.pnpm/wrangler@4.27.0/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console"() {
    init_console2();
    globalThis.console = console_default;
  }
});

// node_modules/.pnpm/unenv@2.0.0-rc.19/node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs
var hrtime;
var init_hrtime = __esm({
  "node_modules/.pnpm/unenv@2.0.0-rc.19/node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    hrtime = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name(function hrtime2(startTime) {
      const now = Date.now();
      const seconds = Math.trunc(now / 1e3);
      const nanos = now % 1e3 * 1e6;
      if (startTime) {
        let diffSeconds = seconds - startTime[0];
        let diffNanos = nanos - startTime[0];
        if (diffNanos < 0) {
          diffSeconds = diffSeconds - 1;
          diffNanos = 1e9 + diffNanos;
        }
        return [diffSeconds, diffNanos];
      }
      return [seconds, nanos];
    }, "hrtime"), { bigint: /* @__PURE__ */ __name(function bigint() {
      return BigInt(Date.now() * 1e6);
    }, "bigint") });
  }
});

// node_modules/.pnpm/unenv@2.0.0-rc.19/node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs
var WriteStream;
var init_write_stream = __esm({
  "node_modules/.pnpm/unenv@2.0.0-rc.19/node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    WriteStream = class {
      static {
        __name(this, "WriteStream");
      }
      fd;
      columns = 80;
      rows = 24;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      clearLine(dir3, callback) {
        callback && callback();
        return false;
      }
      clearScreenDown(callback) {
        callback && callback();
        return false;
      }
      cursorTo(x3, y3, callback) {
        callback && typeof callback === "function" && callback();
        return false;
      }
      moveCursor(dx, dy, callback) {
        callback && callback();
        return false;
      }
      getColorDepth(env2) {
        return 1;
      }
      hasColors(count3, env2) {
        return false;
      }
      getWindowSize() {
        return [this.columns, this.rows];
      }
      write(str, encoding, cb) {
        if (str instanceof Uint8Array) {
          str = new TextDecoder().decode(str);
        }
        try {
          console.log(str);
        } catch {
        }
        cb && typeof cb === "function" && cb();
        return false;
      }
    };
  }
});

// node_modules/.pnpm/unenv@2.0.0-rc.19/node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs
var ReadStream;
var init_read_stream = __esm({
  "node_modules/.pnpm/unenv@2.0.0-rc.19/node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    ReadStream = class {
      static {
        __name(this, "ReadStream");
      }
      fd;
      isRaw = false;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      setRawMode(mode) {
        this.isRaw = mode;
        return this;
      }
    };
  }
});

// node_modules/.pnpm/unenv@2.0.0-rc.19/node_modules/unenv/dist/runtime/node/tty.mjs
var init_tty = __esm({
  "node_modules/.pnpm/unenv@2.0.0-rc.19/node_modules/unenv/dist/runtime/node/tty.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_read_stream();
    init_write_stream();
  }
});

// node_modules/.pnpm/unenv@2.0.0-rc.19/node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs
var NODE_VERSION;
var init_node_version = __esm({
  "node_modules/.pnpm/unenv@2.0.0-rc.19/node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    NODE_VERSION = "22.14.0";
  }
});

// node_modules/.pnpm/unenv@2.0.0-rc.19/node_modules/unenv/dist/runtime/node/internal/process/process.mjs
import { EventEmitter } from "node:events";
var Process;
var init_process = __esm({
  "node_modules/.pnpm/unenv@2.0.0-rc.19/node_modules/unenv/dist/runtime/node/internal/process/process.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_tty();
    init_utils();
    init_node_version();
    Process = class _Process extends EventEmitter {
      static {
        __name(this, "Process");
      }
      env;
      hrtime;
      nextTick;
      constructor(impl) {
        super();
        this.env = impl.env;
        this.hrtime = impl.hrtime;
        this.nextTick = impl.nextTick;
        for (const prop of [...Object.getOwnPropertyNames(_Process.prototype), ...Object.getOwnPropertyNames(EventEmitter.prototype)]) {
          const value = this[prop];
          if (typeof value === "function") {
            this[prop] = value.bind(this);
          }
        }
      }
      // --- event emitter ---
      emitWarning(warning, type, code) {
        console.warn(`${code ? `[${code}] ` : ""}${type ? `${type}: ` : ""}${warning}`);
      }
      emit(...args) {
        return super.emit(...args);
      }
      listeners(eventName) {
        return super.listeners(eventName);
      }
      // --- stdio (lazy initializers) ---
      #stdin;
      #stdout;
      #stderr;
      get stdin() {
        return this.#stdin ??= new ReadStream(0);
      }
      get stdout() {
        return this.#stdout ??= new WriteStream(1);
      }
      get stderr() {
        return this.#stderr ??= new WriteStream(2);
      }
      // --- cwd ---
      #cwd = "/";
      chdir(cwd2) {
        this.#cwd = cwd2;
      }
      cwd() {
        return this.#cwd;
      }
      // --- dummy props and getters ---
      arch = "";
      platform = "";
      argv = [];
      argv0 = "";
      execArgv = [];
      execPath = "";
      title = "";
      pid = 200;
      ppid = 100;
      get version() {
        return `v${NODE_VERSION}`;
      }
      get versions() {
        return { node: NODE_VERSION };
      }
      get allowedNodeEnvironmentFlags() {
        return /* @__PURE__ */ new Set();
      }
      get sourceMapsEnabled() {
        return false;
      }
      get debugPort() {
        return 0;
      }
      get throwDeprecation() {
        return false;
      }
      get traceDeprecation() {
        return false;
      }
      get features() {
        return {};
      }
      get release() {
        return {};
      }
      get connected() {
        return false;
      }
      get config() {
        return {};
      }
      get moduleLoadList() {
        return [];
      }
      constrainedMemory() {
        return 0;
      }
      availableMemory() {
        return 0;
      }
      uptime() {
        return 0;
      }
      resourceUsage() {
        return {};
      }
      // --- noop methods ---
      ref() {
      }
      unref() {
      }
      // --- unimplemented methods ---
      umask() {
        throw createNotImplementedError("process.umask");
      }
      getBuiltinModule() {
        return void 0;
      }
      getActiveResourcesInfo() {
        throw createNotImplementedError("process.getActiveResourcesInfo");
      }
      exit() {
        throw createNotImplementedError("process.exit");
      }
      reallyExit() {
        throw createNotImplementedError("process.reallyExit");
      }
      kill() {
        throw createNotImplementedError("process.kill");
      }
      abort() {
        throw createNotImplementedError("process.abort");
      }
      dlopen() {
        throw createNotImplementedError("process.dlopen");
      }
      setSourceMapsEnabled() {
        throw createNotImplementedError("process.setSourceMapsEnabled");
      }
      loadEnvFile() {
        throw createNotImplementedError("process.loadEnvFile");
      }
      disconnect() {
        throw createNotImplementedError("process.disconnect");
      }
      cpuUsage() {
        throw createNotImplementedError("process.cpuUsage");
      }
      setUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.setUncaughtExceptionCaptureCallback");
      }
      hasUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.hasUncaughtExceptionCaptureCallback");
      }
      initgroups() {
        throw createNotImplementedError("process.initgroups");
      }
      openStdin() {
        throw createNotImplementedError("process.openStdin");
      }
      assert() {
        throw createNotImplementedError("process.assert");
      }
      binding() {
        throw createNotImplementedError("process.binding");
      }
      // --- attached interfaces ---
      permission = { has: /* @__PURE__ */ notImplemented("process.permission.has") };
      report = {
        directory: "",
        filename: "",
        signal: "SIGUSR2",
        compact: false,
        reportOnFatalError: false,
        reportOnSignal: false,
        reportOnUncaughtException: false,
        getReport: /* @__PURE__ */ notImplemented("process.report.getReport"),
        writeReport: /* @__PURE__ */ notImplemented("process.report.writeReport")
      };
      finalization = {
        register: /* @__PURE__ */ notImplemented("process.finalization.register"),
        unregister: /* @__PURE__ */ notImplemented("process.finalization.unregister"),
        registerBeforeExit: /* @__PURE__ */ notImplemented("process.finalization.registerBeforeExit")
      };
      memoryUsage = Object.assign(() => ({
        arrayBuffers: 0,
        rss: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0
      }), { rss: /* @__PURE__ */ __name(() => 0, "rss") });
      // --- undefined props ---
      mainModule = void 0;
      domain = void 0;
      // optional
      send = void 0;
      exitCode = void 0;
      channel = void 0;
      getegid = void 0;
      geteuid = void 0;
      getgid = void 0;
      getgroups = void 0;
      getuid = void 0;
      setegid = void 0;
      seteuid = void 0;
      setgid = void 0;
      setgroups = void 0;
      setuid = void 0;
      // internals
      _events = void 0;
      _eventsCount = void 0;
      _exiting = void 0;
      _maxListeners = void 0;
      _debugEnd = void 0;
      _debugProcess = void 0;
      _fatalException = void 0;
      _getActiveHandles = void 0;
      _getActiveRequests = void 0;
      _kill = void 0;
      _preload_modules = void 0;
      _rawDebug = void 0;
      _startProfilerIdleNotifier = void 0;
      _stopProfilerIdleNotifier = void 0;
      _tickCallback = void 0;
      _disconnect = void 0;
      _handleQueue = void 0;
      _pendingMessage = void 0;
      _channel = void 0;
      _send = void 0;
      _linkedBinding = void 0;
    };
  }
});

// node_modules/.pnpm/@cloudflare+unenv-preset@2.5.0_unenv@2.0.0-rc.19_workerd@1.20250730.0/node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs
var globalProcess, getBuiltinModule, exit, platform, nextTick, unenvProcess, abort, addListener, allowedNodeEnvironmentFlags, hasUncaughtExceptionCaptureCallback, setUncaughtExceptionCaptureCallback, loadEnvFile, sourceMapsEnabled, arch, argv, argv0, chdir, config, connected, constrainedMemory, availableMemory, cpuUsage, cwd, debugPort, dlopen, disconnect, emit, emitWarning, env, eventNames, execArgv, execPath, finalization, features, getActiveResourcesInfo, getMaxListeners, hrtime3, kill, listeners, listenerCount, memoryUsage, on, off, once, pid, ppid, prependListener, prependOnceListener, rawListeners, release, removeAllListeners, removeListener, report, resourceUsage, setMaxListeners, setSourceMapsEnabled, stderr, stdin, stdout, title, throwDeprecation, traceDeprecation, umask, uptime, version, versions, domain, initgroups, moduleLoadList, reallyExit, openStdin, assert2, binding, send, exitCode, channel, getegid, geteuid, getgid, getgroups, getuid, setegid, seteuid, setgid, setgroups, setuid, permission, mainModule, _events, _eventsCount, _exiting, _maxListeners, _debugEnd, _debugProcess, _fatalException, _getActiveHandles, _getActiveRequests, _kill, _preload_modules, _rawDebug, _startProfilerIdleNotifier, _stopProfilerIdleNotifier, _tickCallback, _disconnect, _handleQueue, _pendingMessage, _channel, _send, _linkedBinding, _process, process_default;
var init_process2 = __esm({
  "node_modules/.pnpm/@cloudflare+unenv-preset@2.5.0_unenv@2.0.0-rc.19_workerd@1.20250730.0/node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_hrtime();
    init_process();
    globalProcess = globalThis["process"];
    getBuiltinModule = globalProcess.getBuiltinModule;
    ({ exit, platform, nextTick } = getBuiltinModule(
      "node:process"
    ));
    unenvProcess = new Process({
      env: globalProcess.env,
      hrtime,
      nextTick
    });
    ({
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      arch,
      argv,
      argv0,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      finalization,
      features,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime: hrtime3,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      on,
      off,
      once,
      pid,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      throwDeprecation,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions,
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      openStdin,
      assert: assert2,
      binding,
      send,
      exitCode,
      channel,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      permission,
      mainModule,
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      _disconnect,
      _handleQueue,
      _pendingMessage,
      _channel,
      _send,
      _linkedBinding
    } = unenvProcess);
    _process = {
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      arch,
      argv,
      argv0,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      exit,
      finalization,
      features,
      getBuiltinModule,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime: hrtime3,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      nextTick,
      on,
      off,
      once,
      pid,
      platform,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      throwDeprecation,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions,
      // @ts-expect-error old API
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      openStdin,
      assert: assert2,
      binding,
      send,
      exitCode,
      channel,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      permission,
      mainModule,
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      _disconnect,
      _handleQueue,
      _pendingMessage,
      _channel,
      _send,
      _linkedBinding
    };
    process_default = _process;
  }
});

// node_modules/.pnpm/wrangler@4.27.0/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process = __esm({
  "node_modules/.pnpm/wrangler@4.27.0/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process"() {
    init_process2();
    globalThis.process = process_default;
  }
});

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// node_modules/.pnpm/wrangler@4.27.0/node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "node_modules/.pnpm/wrangler@4.27.0/node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// node_modules/.pnpm/@cloudflare+unenv-preset@2.5.0_unenv@2.0.0-rc.19_workerd@1.20250730.0/node_modules/@cloudflare/unenv-preset/dist/runtime/node/async_hooks.mjs
var workerdAsyncHooks, AsyncLocalStorage2, AsyncResource;
var init_async_hooks = __esm({
  "node_modules/.pnpm/@cloudflare+unenv-preset@2.5.0_unenv@2.0.0-rc.19_workerd@1.20250730.0/node_modules/@cloudflare/unenv-preset/dist/runtime/node/async_hooks.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    workerdAsyncHooks = process.getBuiltinModule("node:async_hooks");
    ({ AsyncLocalStorage: AsyncLocalStorage2, AsyncResource } = workerdAsyncHooks);
  }
});

// .output/server/chunks/_/fs.mjs
var fs_exports = {};
__export(fs_exports, {
  F_OK: () => u,
  R_OK: () => h,
  W_OK: () => W,
  X_OK: () => X,
  constants: () => A,
  promises: () => w
});
import "cloudflare:workers";
import "node:events";
import "node:buffer";
import "node:timers";
var e, s, O, I, t, r, S, F, i, o, R, f, n, E, N, l, m, a, C, d, L, T, c, p, U, D, V, K, P, Y, k, u, h, W, X, A, w;
var init_fs = __esm({
  ".output/server/chunks/_/fs.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_nitro();
    e = notImplemented2("fs.access");
    s = notImplemented2("fs.copyFile");
    O = notImplemented2("fs.cp");
    I = notImplemented2("fs.open");
    t = notImplemented2("fs.opendir");
    r = notImplemented2("fs.rename");
    S = notImplemented2("fs.truncate");
    F = notImplemented2("fs.rm");
    i = notImplemented2("fs.rmdir");
    o = notImplemented2("fs.mkdir");
    R = notImplemented2("fs.readdir");
    f = notImplemented2("fs.readlink");
    n = notImplemented2("fs.symlink");
    E = notImplemented2("fs.lstat");
    N = notImplemented2("fs.stat");
    l = notImplemented2("fs.link");
    m = notImplemented2("fs.unlink");
    a = notImplemented2("fs.chmod");
    C = notImplemented2("fs.lchmod");
    d = notImplemented2("fs.lchown");
    L = notImplemented2("fs.chown");
    T = notImplemented2("fs.utimes");
    c = notImplemented2("fs.lutimes");
    p = notImplemented2("fs.realpath");
    U = notImplemented2("fs.mkdtemp");
    D = notImplemented2("fs.writeFile");
    V = notImplemented2("fs.appendFile");
    K = notImplemented2("fs.readFile");
    P = notImplemented2("fs.watch");
    Y = notImplemented2("fs.statfs");
    k = notImplemented2("fs.glob");
    u = 0;
    h = 4;
    W = 2;
    X = 1;
    A = Object.freeze(Object.defineProperty({ __proto__: null, COPYFILE_EXCL: 1, COPYFILE_FICLONE: 2, COPYFILE_FICLONE_FORCE: 4, EXTENSIONLESS_FORMAT_JAVASCRIPT: 0, EXTENSIONLESS_FORMAT_WASM: 1, F_OK: 0, O_APPEND: 1024, O_CREAT: 64, O_DIRECT: 16384, O_DIRECTORY: 65536, O_DSYNC: 4096, O_EXCL: 128, O_NOATIME: 262144, O_NOCTTY: 256, O_NOFOLLOW: 131072, O_NONBLOCK: 2048, O_RDONLY: 0, O_RDWR: 2, O_SYNC: 1052672, O_TRUNC: 512, O_WRONLY: 1, R_OK: 4, S_IFBLK: 24576, S_IFCHR: 8192, S_IFDIR: 16384, S_IFIFO: 4096, S_IFLNK: 40960, S_IFMT: 61440, S_IFREG: 32768, S_IFSOCK: 49152, S_IRGRP: 32, S_IROTH: 4, S_IRUSR: 256, S_IRWXG: 56, S_IRWXO: 7, S_IRWXU: 448, S_IWGRP: 16, S_IWOTH: 2, S_IWUSR: 128, S_IXGRP: 8, S_IXOTH: 1, S_IXUSR: 64, UV_DIRENT_BLOCK: 7, UV_DIRENT_CHAR: 6, UV_DIRENT_DIR: 2, UV_DIRENT_FIFO: 4, UV_DIRENT_FILE: 1, UV_DIRENT_LINK: 3, UV_DIRENT_SOCKET: 5, UV_DIRENT_UNKNOWN: 0, UV_FS_COPYFILE_EXCL: 1, UV_FS_COPYFILE_FICLONE: 2, UV_FS_COPYFILE_FICLONE_FORCE: 4, UV_FS_O_FILEMAP: 0, UV_FS_SYMLINK_DIR: 1, UV_FS_SYMLINK_JUNCTION: 2, W_OK: 2, X_OK: 1 }, Symbol.toStringTag, { value: "Module" }));
    w = { constants: A, access: e, appendFile: V, chmod: a, chown: L, copyFile: s, cp: O, glob: k, lchmod: C, lchown: d, link: l, lstat: E, lutimes: c, mkdir: o, mkdtemp: U, open: I, opendir: t, readFile: K, readdir: R, readlink: f, realpath: p, rename: r, rm: F, rmdir: i, stat: N, statfs: Y, symlink: n, truncate: S, unlink: m, utimes: T, watch: P, writeFile: D };
  }
});

// .output/server/chunks/_/_tanstack-start-manifest_v-C251yWo9.mjs
var tanstack_start_manifest_v_C251yWo9_exports = {};
__export(tanstack_start_manifest_v_C251yWo9_exports, {
  tsrStartManifest: () => tsrStartManifest
});
var tsrStartManifest;
var init_tanstack_start_manifest_v_C251yWo9 = __esm({
  ".output/server/chunks/_/_tanstack-start-manifest_v-C251yWo9.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    tsrStartManifest = /* @__PURE__ */ __name(() => ({ routes: { __root__: { filePath: "/Users/marakim/Documents/code/test/tanstack-start-cloudflare/src/routes/__root.tsx", children: ["/", "/_pathlessLayout", "/deferred", "/posts", "/redirect", "/users", "/posts_/$postId/deep"], preloads: ["/assets/main-DCuhvEql.js"], assets: [] }, "/": { filePath: "/Users/marakim/Documents/code/test/tanstack-start-cloudflare/src/routes/index.tsx", assets: [], preloads: ["/assets/index-Dinu5Yc9.js"] }, "/_pathlessLayout": { filePath: "/Users/marakim/Documents/code/test/tanstack-start-cloudflare/src/routes/_pathlessLayout.tsx", children: ["/_pathlessLayout/_nested-layout"], assets: [], preloads: ["/assets/_pathlessLayout-C1BBDC7j.js"] }, "/deferred": { filePath: "/Users/marakim/Documents/code/test/tanstack-start-cloudflare/src/routes/deferred.tsx", assets: [], preloads: ["/assets/deferred-CToh1yyv.js"] }, "/posts": { filePath: "/Users/marakim/Documents/code/test/tanstack-start-cloudflare/src/routes/posts.tsx", children: ["/posts/$postId", "/posts/"], assets: [], preloads: ["/assets/posts-OEAhklig.js"] }, "/redirect": { filePath: "/Users/marakim/Documents/code/test/tanstack-start-cloudflare/src/routes/redirect.tsx" }, "/users": { filePath: "/Users/marakim/Documents/code/test/tanstack-start-cloudflare/src/routes/users.tsx", children: ["/users/$userId", "/users/"], assets: [], preloads: ["/assets/users-iIv9iFVw.js"] }, "/_pathlessLayout/_nested-layout": { filePath: "/Users/marakim/Documents/code/test/tanstack-start-cloudflare/src/routes/_pathlessLayout/_nested-layout.tsx", parent: "/_pathlessLayout", children: ["/_pathlessLayout/_nested-layout/route-a", "/_pathlessLayout/_nested-layout/route-b"], assets: [], preloads: ["/assets/_nested-layout-CVq09jQi.js"] }, "/posts/$postId": { filePath: "/Users/marakim/Documents/code/test/tanstack-start-cloudflare/src/routes/posts.$postId.tsx", parent: "/posts", assets: [], preloads: ["/assets/posts._postId-DLFQe-b1.js", "/assets/PostError-CHWNsPkm.js"] }, "/users/$userId": { filePath: "/Users/marakim/Documents/code/test/tanstack-start-cloudflare/src/routes/users.$userId.tsx", parent: "/users", assets: [], preloads: ["/assets/users._userId-BW3pwhKM.js"] }, "/posts/": { filePath: "/Users/marakim/Documents/code/test/tanstack-start-cloudflare/src/routes/posts.index.tsx", parent: "/posts", assets: [], preloads: ["/assets/posts.index-jMj5uDvy.js"] }, "/users/": { filePath: "/Users/marakim/Documents/code/test/tanstack-start-cloudflare/src/routes/users.index.tsx", parent: "/users", assets: [], preloads: ["/assets/users.index-nCFcKKa_.js"] }, "/_pathlessLayout/_nested-layout/route-a": { filePath: "/Users/marakim/Documents/code/test/tanstack-start-cloudflare/src/routes/_pathlessLayout/_nested-layout/route-a.tsx", parent: "/_pathlessLayout/_nested-layout", assets: [], preloads: ["/assets/route-a-BZe4ChTW.js"] }, "/_pathlessLayout/_nested-layout/route-b": { filePath: "/Users/marakim/Documents/code/test/tanstack-start-cloudflare/src/routes/_pathlessLayout/_nested-layout/route-b.tsx", parent: "/_pathlessLayout/_nested-layout", assets: [], preloads: ["/assets/route-b-DY0yHOmW.js"] }, "/posts_/$postId/deep": { filePath: "/Users/marakim/Documents/code/test/tanstack-start-cloudflare/src/routes/posts_.$postId.deep.tsx", assets: [], preloads: ["/assets/posts_._postId.deep-C6sVB0kz.js", "/assets/PostError-CHWNsPkm.js"] } }, clientEntry: "/assets/main-DCuhvEql.js" }), "tsrStartManifest");
  }
});

// .output/server/chunks/_/awaited.mjs
function useAwaited({ promise: t4 }) {
  const s5 = function(t5) {
    const s6 = t5;
    return s6[n2] || (s6[n2] = { status: "pending" }, s6.then((r6) => {
      s6[n2].status = "success", s6[n2].data = r6;
    }).catch((t6) => {
      s6[n2].status = "error", s6[n2].error = { data: defaultSerializeError(t6), __isServerError: true };
    })), s6;
  }(t4);
  if ("pending" === s5[n2].status) throw s5;
  if ("error" === s5[n2].status) throw s5[n2].error;
  return [s5[n2].data, s5];
}
function Await(r6) {
  const n5 = p2.jsx(AwaitInner, { ...r6 });
  return r6.fallback ? p2.jsx(xe.Suspense, { fallback: r6.fallback, children: n5 }) : n5;
}
function AwaitInner(r6) {
  const [t4] = useAwaited(r6);
  return r6.children(t4);
}
var n2;
var init_awaited = __esm({
  ".output/server/chunks/_/awaited.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_ssr();
    n2 = Symbol.for("TSR_DEFERRED_PROMISE");
    __name(useAwaited, "useAwaited");
    __name(Await, "Await");
    __name(AwaitInner, "AwaitInner");
  }
});

// .output/server/chunks/_/deferred-US33ToCm.mjs
var deferred_US33ToCm_exports = {};
__export(deferred_US33ToCm_exports, {
  personServerFn_createServerFn_handler: () => a2,
  slowServerFn_createServerFn_handler: () => i2
});
import "cloudflare:workers";
import "node:events";
import "node:buffer";
import "node:timers";
import "node:stream";
import "node:stream/web";
var a2, t2, i2, m2, l2;
var init_deferred_US33ToCm = __esm({
  ".output/server/chunks/_/deferred-US33ToCm.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_ssr();
    init_awaited();
    init_nitro();
    init_async_hooks();
    a2 = createServerRpc("src_routes_deferred_tsx--personServerFn_createServerFn_handler", "/_serverFn", (e3, r6) => t2.__executeServer(e3, r6));
    t2 = createServerFn({ method: "GET" }).validator((e3) => e3).handler(a2, ({ data: e3 }) => ({ name: e3, randomNumber: Math.floor(100 * Math.random()) }));
    i2 = createServerRpc("src_routes_deferred_tsx--slowServerFn_createServerFn_handler", "/_serverFn", (e3, r6) => m2.__executeServer(e3, r6));
    m2 = createServerFn({ method: "GET" }).validator((e3) => e3).handler(i2, async ({ data: e3 }) => (await new Promise((e4) => setTimeout(e4, 1e3)), { name: e3, randomNumber: Math.floor(100 * Math.random()) }));
    l2 = createFileRoute("/deferred")({ loader: /* @__PURE__ */ __name(async () => ({ deferredStuff: new Promise((e3) => setTimeout(() => e3("Hello deferred!"), 2e3)), deferredPerson: m2({ data: "Tanner Linsley" }), person: await t2({ data: "John Doe" }) }), "loader"), component: /* @__PURE__ */ __name(function() {
      const [e3, r6] = xe.useState(0), { deferredStuff: s5, deferredPerson: a5, person: t4 } = l2.useLoaderData();
      return p2.jsxs("div", { className: "p-2", children: [p2.jsxs("div", { "data-testid": "regular-person", children: [t4.name, " - ", t4.randomNumber] }), p2.jsx(xe.Suspense, { fallback: p2.jsx("div", { children: "Loading person..." }), children: p2.jsx(Await, { promise: a5, children: /* @__PURE__ */ __name((e4) => p2.jsxs("div", { "data-testid": "deferred-person", children: [e4.name, " - ", e4.randomNumber] }), "children") }) }), p2.jsx(xe.Suspense, { fallback: p2.jsx("div", { children: "Loading stuff..." }), children: p2.jsx(Await, { promise: s5, children: /* @__PURE__ */ __name((e4) => p2.jsx("h3", { "data-testid": "deferred-stuff", children: e4 }), "children") }) }), p2.jsxs("div", { children: ["Count: ", e3] }), p2.jsx("div", { children: p2.jsx("button", { onClick: /* @__PURE__ */ __name(() => r6(e3 + 1), "onClick"), children: "Increment" }) })] });
    }, "component") });
  }
});

// .output/server/chunks/_/posts-CiTQCxAi.mjs
var posts_CiTQCxAi_exports = {};
__export(posts_CiTQCxAi_exports, {
  fetchPost_createServerFn_handler: () => r2,
  fetchPosts_createServerFn_handler: () => s2
});
import "cloudflare:workers";
import "node:events";
import "node:buffer";
import "node:timers";
import "node:stream";
import "node:stream/web";
var r2, s2, n3, i3;
var init_posts_CiTQCxAi = __esm({
  ".output/server/chunks/_/posts-CiTQCxAi.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_ssr();
    init_nitro();
    init_async_hooks();
    r2 = createServerRpc("src_utils_posts_tsx--fetchPost_createServerFn_handler", "/_serverFn", (t4, e3) => n3.__executeServer(t4, e3));
    s2 = createServerRpc("src_utils_posts_tsx--fetchPosts_createServerFn_handler", "/_serverFn", (t4, e3) => i3.__executeServer(t4, e3));
    n3 = createServerFn().validator((t4) => t4).handler(r2, async ({ data: t4 }) => {
      console.info(`Fetching post with id ${t4}...`);
      const e3 = await fetch(`https://jsonplaceholder.typicode.com/posts/${t4}`);
      if (!e3.ok) {
        if (404 === e3.status) throw notFound();
        throw new Error("Failed to fetch post");
      }
      return await e3.json();
    });
    i3 = createServerFn().handler(s2, async () => {
      console.info("Fetching posts...");
      const t4 = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!t4.ok) throw new Error("Failed to fetch posts");
      return (await t4.json()).slice(0, 10);
    });
  }
});

// .output/server/chunks/_/_tanstack-start-server-fn-manifest_v-B5uJQjVj.mjs
var tanstack_start_server_fn_manifest_v_B5uJQjVj_exports = {};
__export(tanstack_start_server_fn_manifest_v_B5uJQjVj_exports, {
  default: () => e2
});
var e2;
var init_tanstack_start_server_fn_manifest_v_B5uJQjVj = __esm({
  ".output/server/chunks/_/_tanstack-start-server-fn-manifest_v-B5uJQjVj.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    e2 = { "src_routes_deferred_tsx--personServerFn_createServerFn_handler": { functionName: "personServerFn_createServerFn_handler", importer: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_deferred_US33ToCm(), deferred_US33ToCm_exports)), "importer") }, "src_routes_deferred_tsx--slowServerFn_createServerFn_handler": { functionName: "slowServerFn_createServerFn_handler", importer: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_deferred_US33ToCm(), deferred_US33ToCm_exports)), "importer") }, "src_utils_posts_tsx--fetchPost_createServerFn_handler": { functionName: "fetchPost_createServerFn_handler", importer: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_posts_CiTQCxAi(), posts_CiTQCxAi_exports)), "importer") }, "src_utils_posts_tsx--fetchPosts_createServerFn_handler": { functionName: "fetchPosts_createServerFn_handler", importer: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_posts_CiTQCxAi(), posts_CiTQCxAi_exports)), "importer") } };
  }
});

// .output/server/chunks/_/users-CeBxWgLB.mjs
var users_CeBxWgLB_exports = {};
__export(users_CeBxWgLB_exports, {
  component: () => SplitComponent
});
import "cloudflare:workers";
import "node:events";
import "node:buffer";
import "node:timers";
import "node:stream";
import "node:stream/web";
var SplitComponent;
var init_users_CeBxWgLB = __esm({
  ".output/server/chunks/_/users-CeBxWgLB.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_ssr();
    init_nitro();
    init_async_hooks();
    SplitComponent = /* @__PURE__ */ __name(function() {
      const t4 = el.useLoaderData();
      return p2.jsxs("div", { className: "p-2 flex gap-2", children: [p2.jsx("ul", { className: "list-disc pl-4", children: [...t4, { id: "i-do-not-exist", name: "Non-existent User", email: "" }].map((e3) => p2.jsx("li", { className: "whitespace-nowrap", children: p2.jsx(ct, { to: "/users/$userId", params: { userId: String(e3.id) }, className: "block py-1 text-blue-800 hover:text-blue-600", activeProps: { className: "text-black font-bold" }, children: p2.jsx("div", { children: e3.name }) }) }, e3.id)) }), p2.jsx("hr", {}), p2.jsx(ft, {})] });
    }, "SplitComponent");
  }
});

// .output/server/chunks/_/posts-DxVb0XZg.mjs
var posts_DxVb0XZg_exports = {};
__export(posts_DxVb0XZg_exports, {
  component: () => SplitComponent2
});
import "cloudflare:workers";
import "node:events";
import "node:buffer";
import "node:timers";
import "node:stream";
import "node:stream/web";
var SplitComponent2;
var init_posts_DxVb0XZg = __esm({
  ".output/server/chunks/_/posts-DxVb0XZg.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_ssr();
    init_nitro();
    init_async_hooks();
    SplitComponent2 = /* @__PURE__ */ __name(function() {
      const r6 = al.useLoaderData();
      return p2.jsxs("div", { className: "p-2 flex gap-2", children: [p2.jsx("ul", { className: "list-disc pl-4", children: [...r6, { id: "i-do-not-exist", title: "Non-existent Post" }].map((s5) => p2.jsx("li", { className: "whitespace-nowrap", children: p2.jsx(ct, { to: "/posts/$postId", params: { postId: s5.id }, className: "block py-1 text-blue-800 hover:text-blue-600", activeProps: { className: "text-black font-bold" }, children: p2.jsx("div", { children: s5.title.substring(0, 20) }) }) }, s5.id)) }), p2.jsx("hr", {}), p2.jsx(ft, {})] });
    }, "SplitComponent");
  }
});

// .output/server/chunks/_/deferred-sDJaeJCX.mjs
var deferred_sDJaeJCX_exports = {};
__export(deferred_sDJaeJCX_exports, {
  component: () => SplitComponent3
});
import "cloudflare:workers";
import "node:events";
import "node:buffer";
import "node:timers";
import "node:stream";
import "node:stream/web";
var SplitComponent3;
var init_deferred_sDJaeJCX = __esm({
  ".output/server/chunks/_/deferred-sDJaeJCX.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_ssr();
    init_awaited();
    init_nitro();
    init_async_hooks();
    SplitComponent3 = /* @__PURE__ */ __name(function() {
      const [d4, o3] = xe.useState(0), { deferredStuff: i6, deferredPerson: t4, person: a5 } = dl.useLoaderData();
      return p2.jsxs("div", { className: "p-2", children: [p2.jsxs("div", { "data-testid": "regular-person", children: [a5.name, " - ", a5.randomNumber] }), p2.jsx(xe.Suspense, { fallback: p2.jsx("div", { children: "Loading person..." }), children: p2.jsx(Await, { promise: t4, children: /* @__PURE__ */ __name((e3) => p2.jsxs("div", { "data-testid": "deferred-person", children: [e3.name, " - ", e3.randomNumber] }), "children") }) }), p2.jsx(xe.Suspense, { fallback: p2.jsx("div", { children: "Loading stuff..." }), children: p2.jsx(Await, { promise: i6, children: /* @__PURE__ */ __name((e3) => p2.jsx("h3", { "data-testid": "deferred-stuff", children: e3 }), "children") }) }), p2.jsxs("div", { children: ["Count: ", d4] }), p2.jsx("div", { children: p2.jsx("button", { onClick: /* @__PURE__ */ __name(() => o3(d4 + 1), "onClick"), children: "Increment" }) })] });
    }, "SplitComponent");
  }
});

// .output/server/chunks/_/_pathlessLayout-orBP5_LJ.mjs
var pathlessLayout_orBP5_LJ_exports = {};
__export(pathlessLayout_orBP5_LJ_exports, {
  component: () => SplitComponent4
});
import "cloudflare:workers";
import "node:events";
import "node:buffer";
import "node:timers";
import "node:stream";
import "node:stream/web";
var SplitComponent4;
var init_pathlessLayout_orBP5_LJ = __esm({
  ".output/server/chunks/_/_pathlessLayout-orBP5_LJ.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_ssr();
    init_nitro();
    init_async_hooks();
    SplitComponent4 = /* @__PURE__ */ __name(function() {
      return p2.jsxs("div", { className: "p-2", children: [p2.jsx("div", { className: "border-b", children: "I'm a layout" }), p2.jsx("div", { children: p2.jsx(ft, {}) })] });
    }, "SplitComponent");
  }
});

// .output/server/chunks/_/index-CSucwgOv.mjs
var index_CSucwgOv_exports = {};
__export(index_CSucwgOv_exports, {
  component: () => SplitComponent5
});
import "cloudflare:workers";
import "node:events";
import "node:buffer";
import "node:timers";
import "node:stream";
import "node:stream/web";
var SplitComponent5;
var init_index_CSucwgOv = __esm({
  ".output/server/chunks/_/index-CSucwgOv.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_ssr();
    init_nitro();
    init_async_hooks();
    SplitComponent5 = /* @__PURE__ */ __name(function() {
      return p2.jsx("div", { className: "p-2", children: p2.jsx("h3", { children: "Welcome Home!!!" }) });
    }, "SplitComponent");
  }
});

// .output/server/chunks/_/users.index-BoVPxpKb.mjs
var users_index_BoVPxpKb_exports = {};
__export(users_index_BoVPxpKb_exports, {
  component: () => SplitComponent6
});
import "cloudflare:workers";
import "node:events";
import "node:buffer";
import "node:timers";
import "node:stream";
import "node:stream/web";
var SplitComponent6;
var init_users_index_BoVPxpKb = __esm({
  ".output/server/chunks/_/users.index-BoVPxpKb.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_ssr();
    init_nitro();
    init_async_hooks();
    SplitComponent6 = /* @__PURE__ */ __name(function() {
      return p2.jsxs("div", { children: ["Select a user or", " ", p2.jsx("a", { href: "/api/users", className: "text-blue-800 hover:text-blue-600 underline", children: "view as JSON" })] });
    }, "SplitComponent");
  }
});

// .output/server/chunks/_/posts.index-8K46EVme.mjs
var posts_index_8K46EVme_exports = {};
__export(posts_index_8K46EVme_exports, {
  component: () => SplitComponent7
});
import "cloudflare:workers";
import "node:events";
import "node:buffer";
import "node:timers";
import "node:stream";
import "node:stream/web";
var SplitComponent7;
var init_posts_index_8K46EVme = __esm({
  ".output/server/chunks/_/posts.index-8K46EVme.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_ssr();
    init_nitro();
    init_async_hooks();
    SplitComponent7 = /* @__PURE__ */ __name(function() {
      return p2.jsx("div", { children: "Select a post." });
    }, "SplitComponent");
  }
});

// .output/server/chunks/_/users._userId-CG2IqJzb.mjs
var users_userId_CG2IqJzb_exports = {};
__export(users_userId_CG2IqJzb_exports, {
  errorComponent: () => SplitErrorComponent
});
import "cloudflare:workers";
import "node:events";
import "node:buffer";
import "node:timers";
import "node:stream";
import "node:stream/web";
var SplitErrorComponent;
var init_users_userId_CG2IqJzb = __esm({
  ".output/server/chunks/_/users._userId-CG2IqJzb.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_ssr();
    init_nitro();
    init_async_hooks();
    SplitErrorComponent = /* @__PURE__ */ __name(function({ error: e3 }) {
      return p2.jsx(ErrorComponent, { error: e3 });
    }, "SplitErrorComponent");
  }
});

// .output/server/chunks/_/users._userId-qnRa20YW.mjs
var users_userId_qnRa20YW_exports = {};
__export(users_userId_qnRa20YW_exports, {
  component: () => SplitComponent8
});
import "cloudflare:workers";
import "node:events";
import "node:buffer";
import "node:timers";
import "node:stream";
import "node:stream/web";
var SplitComponent8;
var init_users_userId_qnRa20YW = __esm({
  ".output/server/chunks/_/users._userId-qnRa20YW.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_ssr();
    init_nitro();
    init_async_hooks();
    SplitComponent8 = /* @__PURE__ */ __name(function() {
      const r6 = gl.useLoaderData();
      return p2.jsxs("div", { className: "space-y-2", children: [p2.jsx("h4", { className: "text-xl font-bold underline", children: r6.name }), p2.jsx("div", { className: "text-sm", children: r6.email }), p2.jsx("div", { children: p2.jsx("a", { href: `/api/users/${r6.id}`, className: "text-blue-800 hover:text-blue-600 underline", children: "View as JSON" }) })] });
    }, "SplitComponent");
  }
});

// .output/server/chunks/_/users._userId-DFbR5DAX.mjs
var users_userId_DFbR5DAX_exports = {};
__export(users_userId_DFbR5DAX_exports, {
  notFoundComponent: () => SplitNotFoundComponent
});
import "cloudflare:workers";
import "node:events";
import "node:buffer";
import "node:timers";
import "node:stream";
import "node:stream/web";
var SplitNotFoundComponent;
var init_users_userId_DFbR5DAX = __esm({
  ".output/server/chunks/_/users._userId-DFbR5DAX.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_ssr();
    init_nitro();
    init_async_hooks();
    SplitNotFoundComponent = /* @__PURE__ */ __name(() => p2.jsx(NotFound, { children: "User not found" }), "SplitNotFoundComponent");
  }
});

// .output/server/chunks/_/PostError-DeP0212Z.mjs
function PostErrorComponent({ error: s5 }) {
  return p2.jsx(ErrorComponent, { error: s5 });
}
var init_PostError_DeP0212Z = __esm({
  ".output/server/chunks/_/PostError-DeP0212Z.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_ssr();
    __name(PostErrorComponent, "PostErrorComponent");
  }
});

// .output/server/chunks/_/posts._postId-C9z5TBp-.mjs
var posts_postId_C9z5TBp_exports = {};
__export(posts_postId_C9z5TBp_exports, {
  errorComponent: () => r3
});
import "cloudflare:workers";
import "node:events";
import "node:buffer";
import "node:timers";
import "node:stream";
import "node:stream/web";
var r3;
var init_posts_postId_C9z5TBp = __esm({
  ".output/server/chunks/_/posts._postId-C9z5TBp-.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_PostError_DeP0212Z();
    init_ssr();
    init_nitro();
    init_async_hooks();
    r3 = PostErrorComponent;
  }
});

// .output/server/chunks/_/posts._postId-DnvT2Afk.mjs
var posts_postId_DnvT2Afk_exports = {};
__export(posts_postId_DnvT2Afk_exports, {
  component: () => SplitComponent9
});
import "cloudflare:workers";
import "node:events";
import "node:buffer";
import "node:timers";
import "node:stream";
import "node:stream/web";
var SplitComponent9;
var init_posts_postId_DnvT2Afk = __esm({
  ".output/server/chunks/_/posts._postId-DnvT2Afk.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_ssr();
    init_nitro();
    init_async_hooks();
    SplitComponent9 = /* @__PURE__ */ __name(function() {
      const t4 = yl.useLoaderData();
      return p2.jsxs("div", { className: "space-y-2", children: [p2.jsx("h4", { className: "text-xl font-bold underline", children: t4.title }), p2.jsx("div", { className: "text-sm", children: t4.body }), p2.jsx(ct, { to: "/posts/$postId/deep", params: { postId: t4.id }, activeProps: { className: "text-black font-bold" }, className: "inline-block py-1 text-blue-800 hover:text-blue-600", children: "Deep View" })] });
    }, "SplitComponent");
  }
});

// .output/server/chunks/_/posts._postId-Ol83-kAF.mjs
var posts_postId_Ol83_kAF_exports = {};
__export(posts_postId_Ol83_kAF_exports, {
  notFoundComponent: () => SplitNotFoundComponent2
});
import "cloudflare:workers";
import "node:events";
import "node:buffer";
import "node:timers";
import "node:stream";
import "node:stream/web";
var SplitNotFoundComponent2;
var init_posts_postId_Ol83_kAF = __esm({
  ".output/server/chunks/_/posts._postId-Ol83-kAF.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_ssr();
    init_nitro();
    init_async_hooks();
    SplitNotFoundComponent2 = /* @__PURE__ */ __name(() => p2.jsx(NotFound, { children: "Post not found" }), "SplitNotFoundComponent");
  }
});

// .output/server/chunks/_/_nested-layout-BZIh3VuL.mjs
var nested_layout_BZIh3VuL_exports = {};
__export(nested_layout_BZIh3VuL_exports, {
  component: () => SplitComponent10
});
import "cloudflare:workers";
import "node:events";
import "node:buffer";
import "node:timers";
import "node:stream";
import "node:stream/web";
var SplitComponent10;
var init_nested_layout_BZIh3VuL = __esm({
  ".output/server/chunks/_/_nested-layout-BZIh3VuL.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_ssr();
    init_nitro();
    init_async_hooks();
    SplitComponent10 = /* @__PURE__ */ __name(function() {
      return p2.jsxs("div", { children: [p2.jsx("div", { children: "I'm a nested layout" }), p2.jsxs("div", { className: "flex gap-2 border-b", children: [p2.jsx(ct, { to: "/route-a", activeProps: { className: "font-bold" }, children: "Go to route A" }), p2.jsx(ct, { to: "/route-b", activeProps: { className: "font-bold" }, children: "Go to route B" })] }), p2.jsx("div", { children: p2.jsx(ft, {}) })] });
    }, "SplitComponent");
  }
});

// .output/server/chunks/_/posts_._postId.deep-C9z5TBp-.mjs
var posts_postId_deep_C9z5TBp_exports = {};
__export(posts_postId_deep_C9z5TBp_exports, {
  errorComponent: () => r4
});
import "cloudflare:workers";
import "node:events";
import "node:buffer";
import "node:timers";
import "node:stream";
import "node:stream/web";
var r4;
var init_posts_postId_deep_C9z5TBp = __esm({
  ".output/server/chunks/_/posts_._postId.deep-C9z5TBp-.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_PostError_DeP0212Z();
    init_ssr();
    init_nitro();
    init_async_hooks();
    r4 = PostErrorComponent;
  }
});

// .output/server/chunks/_/posts_._postId.deep-BJ5P2fE8.mjs
var posts_postId_deep_BJ5P2fE8_exports = {};
__export(posts_postId_deep_BJ5P2fE8_exports, {
  component: () => SplitComponent11
});
import "cloudflare:workers";
import "node:events";
import "node:buffer";
import "node:timers";
import "node:stream";
import "node:stream/web";
var SplitComponent11;
var init_posts_postId_deep_BJ5P2fE8 = __esm({
  ".output/server/chunks/_/posts_._postId.deep-BJ5P2fE8.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_ssr();
    init_nitro();
    init_async_hooks();
    SplitComponent11 = /* @__PURE__ */ __name(function() {
      const t4 = bl.useLoaderData();
      return p2.jsxs("div", { className: "p-2 space-y-2", children: [p2.jsx(ct, { to: "/posts", className: "block py-1 text-blue-800 hover:text-blue-600", children: "\u2190 All Posts" }), p2.jsx("h4", { className: "text-xl font-bold underline", children: t4.title }), p2.jsx("div", { className: "text-sm", children: t4.body })] });
    }, "SplitComponent");
  }
});

// .output/server/chunks/_/route-b-CVm3vQe0.mjs
var route_b_CVm3vQe0_exports = {};
__export(route_b_CVm3vQe0_exports, {
  component: () => SplitComponent12
});
import "cloudflare:workers";
import "node:events";
import "node:buffer";
import "node:timers";
import "node:stream";
import "node:stream/web";
var SplitComponent12;
var init_route_b_CVm3vQe0 = __esm({
  ".output/server/chunks/_/route-b-CVm3vQe0.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_ssr();
    init_nitro();
    init_async_hooks();
    SplitComponent12 = /* @__PURE__ */ __name(function() {
      return p2.jsx("div", { children: "I'm B!" });
    }, "SplitComponent");
  }
});

// .output/server/chunks/_/route-a-DDIOWP5Y.mjs
var route_a_DDIOWP5Y_exports = {};
__export(route_a_DDIOWP5Y_exports, {
  component: () => SplitComponent13
});
import "cloudflare:workers";
import "node:events";
import "node:buffer";
import "node:timers";
import "node:stream";
import "node:stream/web";
var SplitComponent13;
var init_route_a_DDIOWP5Y = __esm({
  ".output/server/chunks/_/route-a-DDIOWP5Y.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_ssr();
    init_nitro();
    init_async_hooks();
    SplitComponent13 = /* @__PURE__ */ __name(function() {
      return p2.jsx("div", { children: "I'm A!" });
    }, "SplitComponent");
  }
});

// .output/server/chunks/_/ssr.mjs
var ssr_exports = {};
__export(ssr_exports, {
  E: () => ErrorComponent,
  L: () => ct,
  N: () => NotFound,
  O: () => ft,
  R: () => el,
  a: () => al,
  b: () => dl,
  c: () => gl,
  d: () => yl,
  e: () => bl,
  f: () => createServerRpc,
  g: () => createServerFn,
  h: () => createFileRoute,
  i: () => defaultSerializeError,
  j: () => p2,
  n: () => notFound,
  r: () => xe,
  s: () => uu
});
import { Buffer as n4 } from "node:buffer";
import { Readable as s3, PassThrough as a3 } from "node:stream";
import { ReadableStream as i4 } from "node:stream/web";
function getDefaultExportFromCjs(e3) {
  return e3 && e3.__esModule && Object.prototype.hasOwnProperty.call(e3, "default") ? e3.default : e3;
}
function jsxProd(e3, r6, n5) {
  var o3 = null;
  if (void 0 !== n5 && (o3 = "" + n5), void 0 !== r6.key && (o3 = "" + r6.key), "key" in r6) for (var s5 in n5 = {}, r6) "key" !== s5 && (n5[s5] = r6[s5]);
  else n5 = r6;
  return r6 = n5.ref, { $$typeof: c2, type: e3, key: o3, ref: void 0 !== r6 ? r6 : null, props: n5 };
}
function invariant$1(e3, r6) {
  if (!e3) throw new Error("Invariant failed");
}
function __flush_internals(e3) {
  const r6 = Array.from(e3).sort((e4, r7) => e4 instanceof Derived && e4.options.deps.includes(r7) ? 1 : r7 instanceof Derived && r7.options.deps.includes(e4) ? -1 : 0);
  for (const e4 of r6) {
    if (b.current.includes(e4)) continue;
    b.current.push(e4), e4.recompute();
    const r7 = v.get(e4);
    if (r7) for (const e5 of r7) {
      const r8 = y.get(e5);
      r8 && __flush_internals(r8);
    }
  }
}
function __notifyListeners(e3) {
  e3.listeners.forEach((r6) => r6({ prevVal: e3.prevState, currentVal: e3.state }));
}
function __notifyDerivedListeners(e3) {
  e3.listeners.forEach((r6) => r6({ prevVal: e3.prevState, currentVal: e3.state }));
}
function __flush(e3) {
  if (C2 > 0 && !R2.has(e3) && R2.set(e3, e3.prevState), P2.add(e3), !(C2 > 0 || k2)) try {
    for (k2 = true; P2.size > 0; ) {
      const e4 = Array.from(P2);
      P2.clear();
      for (const r6 of e4) {
        const e5 = R2.get(r6) ?? r6.prevState;
        r6.prevState = e5, __notifyListeners(r6);
      }
      for (const r6 of e4) {
        const e5 = y.get(r6);
        e5 && (b.current.push(r6), __flush_internals(e5));
      }
      for (const r6 of e4) {
        const e5 = y.get(r6);
        if (e5) for (const r7 of e5) __notifyDerivedListeners(r7);
      }
    }
  } finally {
    k2 = false, b.current = [], R2.clear();
  }
}
function batch(e3) {
  C2++;
  try {
    e3();
  } finally {
    if (C2--, 0 === C2) {
      const e4 = Array.from(P2)[0];
      e4 && __flush(e4);
    }
  }
}
function createHistory$1(e3) {
  let r6 = e3.getLocation();
  const n5 = /* @__PURE__ */ new Set(), notify = /* @__PURE__ */ __name((o3) => {
    r6 = e3.getLocation(), n5.forEach((e4) => e4({ location: r6, action: o3 }));
  }, "notify"), handleIndexChange = /* @__PURE__ */ __name((n6) => {
    e3.notifyOnIndexChange ?? 1 ? notify(n6) : r6 = e3.getLocation();
  }, "handleIndexChange"), tryNavigation = /* @__PURE__ */ __name(async ({ task: n6, navigateOpts: o3, ...s5 }) => {
    var a5, i6;
    if ((null == o3 ? void 0 : o3.ignoreBlocker) ?? false) return void n6();
    const l5 = (null == (a5 = e3.getBlockers) ? void 0 : a5.call(e3)) ?? [], u4 = "PUSH" === s5.type || "REPLACE" === s5.type;
    if ("undefined" != typeof document && l5.length && u4) for (const n7 of l5) {
      const o4 = parseHref$1(s5.path, s5.state);
      if (await n7.blockerFn({ currentLocation: r6, nextLocation: o4, action: s5.type })) return void (null == (i6 = e3.onBlocked) || i6.call(e3));
    }
    n6();
  }, "tryNavigation");
  return { get location() {
    return r6;
  }, get length() {
    return e3.getLength();
  }, subscribers: n5, subscribe: /* @__PURE__ */ __name((e4) => (n5.add(e4), () => {
    n5.delete(e4);
  }), "subscribe"), push: /* @__PURE__ */ __name((n6, o3, s5) => {
    const a5 = r6.state[$];
    o3 = assignKeyAndIndex$1(a5 + 1, o3), tryNavigation({ task: /* @__PURE__ */ __name(() => {
      e3.pushState(n6, o3), notify({ type: "PUSH" });
    }, "task"), navigateOpts: s5, type: "PUSH", path: n6, state: o3 });
  }, "push"), replace: /* @__PURE__ */ __name((n6, o3, s5) => {
    const a5 = r6.state[$];
    o3 = assignKeyAndIndex$1(a5, o3), tryNavigation({ task: /* @__PURE__ */ __name(() => {
      e3.replaceState(n6, o3), notify({ type: "REPLACE" });
    }, "task"), navigateOpts: s5, type: "REPLACE", path: n6, state: o3 });
  }, "replace"), go: /* @__PURE__ */ __name((r7, n6) => {
    tryNavigation({ task: /* @__PURE__ */ __name(() => {
      e3.go(r7), handleIndexChange({ type: "GO", index: r7 });
    }, "task"), navigateOpts: n6, type: "GO" });
  }, "go"), back: /* @__PURE__ */ __name((r7) => {
    tryNavigation({ task: /* @__PURE__ */ __name(() => {
      e3.back((null == r7 ? void 0 : r7.ignoreBlocker) ?? false), handleIndexChange({ type: "BACK" });
    }, "task"), navigateOpts: r7, type: "BACK" });
  }, "back"), forward: /* @__PURE__ */ __name((r7) => {
    tryNavigation({ task: /* @__PURE__ */ __name(() => {
      e3.forward((null == r7 ? void 0 : r7.ignoreBlocker) ?? false), handleIndexChange({ type: "FORWARD" });
    }, "task"), navigateOpts: r7, type: "FORWARD" });
  }, "forward"), canGoBack: /* @__PURE__ */ __name(() => 0 !== r6.state[$], "canGoBack"), createHref: /* @__PURE__ */ __name((r7) => e3.createHref(r7), "createHref"), block: /* @__PURE__ */ __name((r7) => {
    var n6;
    if (!e3.setBlockers) return () => {
    };
    const o3 = (null == (n6 = e3.getBlockers) ? void 0 : n6.call(e3)) ?? [];
    return e3.setBlockers([...o3, r7]), () => {
      var n7, o4;
      const s5 = (null == (n7 = e3.getBlockers) ? void 0 : n7.call(e3)) ?? [];
      null == (o4 = e3.setBlockers) || o4.call(e3, s5.filter((e4) => e4 !== r7));
    };
  }, "block"), flush: /* @__PURE__ */ __name(() => {
    var r7;
    return null == (r7 = e3.flush) ? void 0 : r7.call(e3);
  }, "flush"), destroy: /* @__PURE__ */ __name(() => {
    var r7;
    return null == (r7 = e3.destroy) ? void 0 : r7.call(e3);
  }, "destroy"), notify };
}
function assignKeyAndIndex$1(e3, r6) {
  r6 || (r6 = {});
  const n5 = createRandomKey$1();
  return { ...r6, key: n5, __TSR_key: n5, [$]: e3 };
}
function parseHref$1(e3, r6) {
  const n5 = e3.indexOf("#"), o3 = e3.indexOf("?"), s5 = createRandomKey$1();
  return { href: e3, pathname: e3.substring(0, n5 > 0 ? o3 > 0 ? Math.min(n5, o3) : n5 : o3 > 0 ? o3 : e3.length), hash: n5 > -1 ? e3.substring(n5) : "", search: o3 > -1 ? e3.slice(o3, -1 === n5 ? void 0 : n5) : "", state: r6 || { [$]: 0, key: s5, __TSR_key: s5 } };
}
function createRandomKey$1() {
  return (Math.random() + 1).toString(36).substring(7);
}
function last(e3) {
  return e3[e3.length - 1];
}
function functionalUpdate(e3, r6) {
  return /* @__PURE__ */ function(e4) {
    return "function" == typeof e4;
  }(e3) ? e3(r6) : e3;
}
function pick(e3, r6) {
  return r6.reduce((r7, n5) => (r7[n5] = e3[n5], r7), {});
}
function replaceEqualDeep(e3, r6) {
  if (e3 === r6) return e3;
  const n5 = r6, o3 = isPlainArray(e3) && isPlainArray(n5);
  if (o3 || isSimplePlainObject(e3) && isSimplePlainObject(n5)) {
    const r7 = o3 ? e3 : Object.keys(e3).concat(Object.getOwnPropertySymbols(e3)), s5 = r7.length, a5 = o3 ? n5 : Object.keys(n5).concat(Object.getOwnPropertySymbols(n5)), i6 = a5.length, l5 = o3 ? [] : {};
    let u4 = 0;
    for (let s6 = 0; s6 < i6; s6++) {
      const i7 = o3 ? s6 : a5[s6];
      (!o3 && r7.includes(i7) || o3) && void 0 === e3[i7] && void 0 === n5[i7] ? (l5[i7] = void 0, u4++) : (l5[i7] = replaceEqualDeep(e3[i7], n5[i7]), l5[i7] === e3[i7] && void 0 !== e3[i7] && u4++);
    }
    return s5 === i6 && u4 === s5 ? e3 : l5;
  }
  return n5;
}
function isSimplePlainObject(e3) {
  return isPlainObject$1(e3) && Object.getOwnPropertyNames(e3).length === Object.keys(e3).length;
}
function isPlainObject$1(e3) {
  if (!hasObjectPrototype$1(e3)) return false;
  const r6 = e3.constructor;
  if (void 0 === r6) return true;
  const n5 = r6.prototype;
  return !!hasObjectPrototype$1(n5) && !!n5.hasOwnProperty("isPrototypeOf");
}
function hasObjectPrototype$1(e3) {
  return "[object Object]" === Object.prototype.toString.call(e3);
}
function isPlainArray(e3) {
  return Array.isArray(e3) && e3.length === Object.keys(e3).length;
}
function getObjectKeys(e3, r6) {
  let n5 = Object.keys(e3);
  return r6 && (n5 = n5.filter((r7) => void 0 !== e3[r7])), n5;
}
function deepEqual(e3, r6, n5) {
  if (e3 === r6) return true;
  if (typeof e3 != typeof r6) return false;
  if (isPlainObject$1(e3) && isPlainObject$1(r6)) {
    const o3 = (null == n5 ? void 0 : n5.ignoreUndefined) ?? true, s5 = getObjectKeys(e3, o3), a5 = getObjectKeys(r6, o3);
    return !(!(null == n5 ? void 0 : n5.partial) && s5.length !== a5.length) && a5.every((o4) => deepEqual(e3[o4], r6[o4], n5));
  }
  return !(!Array.isArray(e3) || !Array.isArray(r6)) && (e3.length === r6.length && !e3.some((e4, o3) => !deepEqual(e4, r6[o3], n5)));
}
function createControlledPromise$1(e3) {
  let r6, n5;
  const o3 = new Promise((e4, o4) => {
    r6 = e4, n5 = o4;
  });
  return o3.status = "pending", o3.resolve = (n6) => {
    o3.status = "resolved", o3.value = n6, r6(n6), null == e3 || e3(n6);
  }, o3.reject = (e4) => {
    o3.status = "rejected", n5(e4);
  }, o3;
}
function joinPaths$1(e3) {
  return cleanPath$1(e3.filter((e4) => void 0 !== e4).join("/"));
}
function cleanPath$1(e3) {
  return e3.replace(/\/{2,}/g, "/");
}
function trimPathLeft$1(e3) {
  return "/" === e3 ? e3 : e3.replace(/^\/{1,}/, "");
}
function trimPathRight$1(e3) {
  return "/" === e3 ? e3 : e3.replace(/\/{1,}$/, "");
}
function trimPath$1(e3) {
  return trimPathRight$1(trimPathLeft$1(e3));
}
function removeTrailingSlash(e3, r6) {
  return (null == e3 ? void 0 : e3.endsWith("/")) && "/" !== e3 && e3 !== `${r6}/` ? e3.slice(0, -1) : e3;
}
function segmentToString(e3) {
  const { type: r6, value: n5 } = e3;
  if (0 === r6) return n5;
  const { prefixSegment: o3, suffixSegment: s5 } = e3;
  if (1 === r6) {
    const e4 = n5.substring(1);
    if (o3 && s5) return `${o3}{$${e4}}${s5}`;
    if (o3) return `${o3}{$${e4}}`;
    if (s5) return `{$${e4}}${s5}`;
  }
  if (3 === r6) {
    const e4 = n5.substring(1);
    return o3 && s5 ? `${o3}{-$${e4}}${s5}` : o3 ? `${o3}{-$${e4}}` : s5 ? `{-$${e4}}${s5}` : `{-$${e4}}`;
  }
  if (2 === r6) {
    if (o3 && s5) return `${o3}{$}${s5}`;
    if (o3) return `${o3}{$}`;
    if (s5) return `{$}${s5}`;
  }
  return n5;
}
function interpolatePath({ path: e3, params: r6, leaveWildcards: n5, leaveParams: o3, decodeCharMap: s5, parseCache: a5 }) {
  const i6 = parsePathname$1(e3, a5);
  function encodeParam(e4) {
    const n6 = r6[e4], o4 = "string" == typeof n6;
    return "*" === e4 || "_splat" === e4 ? o4 ? encodeURI(n6) : n6 : o4 ? function(e5, r7) {
      let n7 = encodeURIComponent(e5);
      if (r7) for (const [e6, o5] of r7) n7 = n7.replaceAll(e6, o5);
      return n7;
    }(n6, s5) : n6;
  }
  __name(encodeParam, "encodeParam");
  let l5 = false;
  const u4 = {}, c4 = joinPaths$1(i6.map((e4) => {
    if (0 === e4.type) return e4.value;
    if (2 === e4.type) {
      u4._splat = r6._splat;
      const o4 = e4.prefixSegment || "", s6 = e4.suffixSegment || "";
      if (!("_splat" in r6)) return l5 = true, n5 ? `${o4}${e4.value}${s6}` : o4 || s6 ? `${o4}${s6}` : void 0;
      const a6 = encodeParam("_splat");
      return n5 ? `${o4}${e4.value}${a6 ?? ""}${s6}` : `${o4}${a6}${s6}`;
    }
    if (1 === e4.type) {
      const n6 = e4.value.substring(1);
      l5 || n6 in r6 || (l5 = true), u4[n6] = r6[n6];
      const s6 = e4.prefixSegment || "", a6 = e4.suffixSegment || "";
      if (o3) {
        const r7 = encodeParam(e4.value);
        return `${s6}${e4.value}${r7 ?? ""}${a6}`;
      }
      return `${s6}${encodeParam(n6) ?? "undefined"}${a6}`;
    }
    if (3 === e4.type) {
      const s6 = e4.value.substring(1), a6 = e4.prefixSegment || "", i7 = e4.suffixSegment || "";
      if (!(s6 in r6) || null == r6[s6]) return n5 ? `${a6}${s6}${i7}` : a6 || i7 ? `${a6}${i7}` : void 0;
      if (u4[s6] = r6[s6], o3) {
        const r7 = encodeParam(e4.value);
        return `${a6}${e4.value}${r7 ?? ""}${i7}`;
      }
      return n5 ? `${a6}${s6}${encodeParam(s6) ?? ""}${i7}` : `${a6}${encodeParam(s6) ?? ""}${i7}`;
    }
    return e4.value;
  }));
  return { usedParams: u4, interpolatedPath: c4, isMissingParams: l5 };
}
function matchPathname$1(e3, r6, n5, o3) {
  const s5 = function(e4, r7, { to: n6, fuzzy: o4, caseSensitive: s6 }, a5) {
    if ("/" !== e4 && !r7.startsWith(e4)) return;
    r7 = removeBasepath$1(e4, r7, s6), n6 = removeBasepath$1(e4, `${n6 ?? "$"}`, s6);
    const i6 = parsePathname$1(r7.startsWith("/") ? r7 : `/${r7}`, a5), l5 = parsePathname$1(n6.startsWith("/") ? n6 : `/${n6}`, a5), u4 = {};
    return function(e5, r8, n7, o5, s7) {
      var a6, i7, l6;
      let u5 = 0, c4 = 0;
      for (; u5 < e5.length || c4 < r8.length; ) {
        const h4 = e5[u5], p4 = r8[c4];
        if (p4) {
          if (2 === p4.type) {
            const r9 = e5.slice(u5);
            let o6;
            if (p4.prefixSegment || p4.suffixSegment) {
              if (!h4) return false;
              const n8 = p4.prefixSegment || "", s8 = p4.suffixSegment || "", i8 = h4.value;
              if ("prefixSegment" in p4 && !i8.startsWith(n8)) return false;
              if ("suffixSegment" in p4 && !(null == (a6 = e5[e5.length - 1]) ? void 0 : a6.value.endsWith(s8))) return false;
              let l7 = decodeURI(joinPaths$1(r9.map((e6) => e6.value)));
              n8 && l7.startsWith(n8) && (l7 = l7.slice(n8.length)), s8 && l7.endsWith(s8) && (l7 = l7.slice(0, l7.length - s8.length)), o6 = l7;
            } else o6 = decodeURI(joinPaths$1(r9.map((e6) => e6.value)));
            return n7["*"] = o6, n7._splat = o6, true;
          }
          if (0 === p4.type) {
            if ("/" === p4.value && !(null == h4 ? void 0 : h4.value)) {
              c4++;
              continue;
            }
            if (h4) {
              if (s7) {
                if (p4.value !== h4.value) return false;
              } else if (p4.value.toLowerCase() !== h4.value.toLowerCase()) return false;
              u5++, c4++;
              continue;
            }
            return false;
          }
          if (1 === p4.type) {
            if (!h4) return false;
            if ("/" === h4.value) return false;
            let e6 = "", r9 = false;
            if (p4.prefixSegment || p4.suffixSegment) {
              const n8 = p4.prefixSegment || "", o6 = p4.suffixSegment || "", s8 = h4.value;
              if (n8 && !s8.startsWith(n8)) return false;
              if (o6 && !s8.endsWith(o6)) return false;
              let a7 = s8;
              n8 && a7.startsWith(n8) && (a7 = a7.slice(n8.length)), o6 && a7.endsWith(o6) && (a7 = a7.slice(0, a7.length - o6.length)), e6 = decodeURIComponent(a7), r9 = true;
            } else e6 = decodeURIComponent(h4.value), r9 = true;
            r9 && (n7[p4.value.substring(1)] = e6, u5++), c4++;
            continue;
          }
          if (3 === p4.type) {
            if (!h4) {
              c4++;
              continue;
            }
            if ("/" === h4.value) {
              c4++;
              continue;
            }
            let o6 = "", s8 = false;
            if (p4.prefixSegment || p4.suffixSegment) {
              const e6 = p4.prefixSegment || "", r9 = p4.suffixSegment || "", n8 = h4.value;
              if ((!e6 || n8.startsWith(e6)) && (!r9 || n8.endsWith(r9))) {
                let a7 = n8;
                e6 && a7.startsWith(e6) && (a7 = a7.slice(e6.length)), r9 && a7.endsWith(r9) && (a7 = a7.slice(0, a7.length - r9.length)), o6 = decodeURIComponent(a7), s8 = true;
              }
            } else {
              let n8 = true;
              for (let o7 = c4 + 1; o7 < r8.length; o7++) {
                const s9 = r8[o7];
                if (0 === (null == s9 ? void 0 : s9.type) && s9.value === h4.value) {
                  n8 = false;
                  break;
                }
                if (1 === (null == s9 ? void 0 : s9.type) || 2 === (null == s9 ? void 0 : s9.type)) {
                  e5.length < r8.length && (n8 = false);
                  break;
                }
              }
              n8 && (o6 = decodeURIComponent(h4.value), s8 = true);
            }
            s8 && (n7[p4.value.substring(1)] = o6, u5++), c4++;
            continue;
          }
        }
        if (u5 < e5.length && c4 >= r8.length) return n7["**"] = joinPaths$1(e5.slice(u5).map((e6) => e6.value)), !!o5 && "/" !== (null == (i7 = r8[r8.length - 1]) ? void 0 : i7.value);
        if (c4 < r8.length && u5 >= e5.length) {
          for (let e6 = c4; e6 < r8.length; e6++) if (3 !== (null == (l6 = r8[e6]) ? void 0 : l6.type)) return false;
          break;
        }
        break;
      }
      return true;
    }(i6, l5, u4, o4, s6) ? u4 : void 0;
  }(e3, r6, n5, o3);
  if (!n5.to || s5) return s5 ?? {};
}
function removeBasepath$1(e3, r6, n5 = false) {
  const o3 = n5 ? e3 : e3.toLowerCase(), s5 = n5 ? r6 : r6.toLowerCase();
  switch (true) {
    case "/" === o3:
      return r6;
    case s5 === o3:
      return "";
    case r6.length < e3.length:
    case "/" !== s5[o3.length]:
      return r6;
    case s5.startsWith(o3):
      return r6.slice(e3.length);
    default:
      return r6;
  }
}
function notFound(e3 = {}) {
  if (e3.isNotFound = true, e3.throw) throw e3;
  return e3;
}
function isNotFound$1(e3) {
  return !!(null == e3 ? void 0 : e3.isNotFound);
}
function restoreScroll({ storageKey: e3, key: r6, behavior: n5, shouldScrollRestoration: o3, scrollToTopSelectors: s5, location: a5 }) {
  var i6;
  let l5;
  try {
    l5 = JSON.parse(sessionStorage.getItem(e3) || "{}");
  } catch (e4) {
    return void console.error(e4);
  }
  const u4 = l5[r6 || (null == (i6 = window.history.state) ? void 0 : i6.key)];
  H = true, (() => {
    if (o3 && u4 && Object.keys(u4).length > 0) {
      for (const e5 in u4) {
        const r7 = u4[e5];
        if ("window" === e5) window.scrollTo({ top: r7.scrollY, left: r7.scrollX, behavior: n5 });
        else if (e5) {
          const n6 = document.querySelector(e5);
          n6 && (n6.scrollLeft = r7.scrollX, n6.scrollTop = r7.scrollY);
        }
      }
      return;
    }
    const e4 = (a5 ?? window.location).hash.split("#")[1];
    if (e4) {
      const r7 = (window.history.state || {}).__hashScrollIntoViewOptions ?? true;
      if (r7) {
        const n6 = document.getElementById(e4);
        n6 && n6.scrollIntoView(r7);
      }
      return;
    }
    ["window", ...(null == s5 ? void 0 : s5.filter((e5) => "window" !== e5)) ?? []].forEach((e5) => {
      const r7 = "window" === e5 ? window : "function" == typeof e5 ? e5() : document.querySelector(e5);
      r7 && r7.scrollTo({ top: 0, left: 0, behavior: n5 });
    });
  })(), H = false;
}
function setupScrollRestoration(e3, r6) {
  if (void 0 === D2) return;
  if ((e3.options.scrollRestoration ?? false) && (e3.isScrollRestoring = true), "undefined" == typeof document || e3.isScrollRestorationSetup) return;
  e3.isScrollRestorationSetup = true, H = false;
  const n5 = e3.options.getScrollRestorationKey || defaultGetScrollRestorationKey;
  window.history.scrollRestoration = "manual";
  const onScroll = /* @__PURE__ */ __name((r7) => {
    if (H || !e3.isScrollRestoring) return;
    let o3 = "";
    if (r7.target === document || r7.target === window) o3 = "window";
    else {
      const e4 = r7.target.getAttribute("data-scroll-restoration-id");
      o3 = e4 ? `[data-scroll-restoration-id="${e4}"]` : function(e5) {
        const r8 = [];
        let n6;
        for (; n6 = e5.parentNode; ) r8.unshift(`${e5.tagName}:nth-child(${[].indexOf.call(n6.children, e5) + 1})`), e5 = n6;
        return `${r8.join(" > ")}`.toLowerCase();
      }(r7.target);
    }
    const s5 = n5(e3.state.location);
    D2.set((e4) => {
      const r8 = e4[s5] = e4[s5] || {}, n6 = r8[o3] = r8[o3] || {};
      if ("window" === o3) n6.scrollX = window.scrollX || 0, n6.scrollY = window.scrollY || 0;
      else if (o3) {
        const e5 = document.querySelector(o3);
        e5 && (n6.scrollX = e5.scrollLeft || 0, n6.scrollY = e5.scrollTop || 0);
      }
      return e4;
    });
  }, "onScroll");
  "undefined" != typeof document && document.addEventListener("scroll", /* @__PURE__ */ ((e4, r7) => {
    let n6;
    return (...o3) => {
      n6 || (n6 = setTimeout(() => {
        e4(...o3), n6 = null;
      }, r7));
    };
  })(onScroll, 100), true), e3.subscribe("onRendered", (r7) => {
    const o3 = n5(r7.toLocation);
    e3.resetNextScroll ? (restoreScroll({ storageKey: N2, key: o3, behavior: e3.options.scrollRestorationBehavior, shouldScrollRestoration: e3.isScrollRestoring, scrollToTopSelectors: e3.options.scrollToTopSelectors, location: e3.history.location }), e3.isScrollRestoring && D2.set((e4) => (e4[o3] = e4[o3] || {}, e4))) : e3.resetNextScroll = true;
  });
}
function toValue(e3) {
  return e3 ? "false" !== e3 && ("true" === e3 || (0 * +e3 == 0 && +e3 + "" === e3 ? +e3 : e3)) : "";
}
function redirect(e3) {
  if (e3.statusCode = e3.statusCode || e3.code || 307, !e3.reloadDocument) try {
    new URL(`${e3.href}`), e3.reloadDocument = true;
  } catch {
  }
  const r6 = new Headers(e3.headers || {});
  e3.href && null === r6.get("Location") && r6.set("Location", e3.href);
  const n5 = new Response(null, { status: e3.statusCode, headers: r6 });
  if (n5.options = e3, e3.throw) throw n5;
  return n5;
}
function isRedirect$1(e3) {
  return e3 instanceof Response && !!e3.options;
}
function defaultSerializeError(e3) {
  if (e3 instanceof Error) {
    return { name: e3.name, message: e3.message };
  }
  return { data: e3 };
}
function getLocationChangeInfo(e3) {
  const r6 = e3.resolvedLocation, n5 = e3.location;
  return { fromLocation: r6, toLocation: n5, pathChanged: (null == r6 ? void 0 : r6.pathname) !== n5.pathname, hrefChanged: (null == r6 ? void 0 : r6.href) !== n5.href, hashChanged: (null == r6 ? void 0 : r6.hash) !== n5.hash };
}
function comparePaths(e3, r6) {
  return normalize(e3) === normalize(r6);
}
function validateSearch(e3, r6) {
  if (null == e3) return {};
  if ("~standard" in e3) {
    const n5 = e3["~standard"].validate(r6);
    if (n5 instanceof Promise) throw new SearchParamError("Async validation not supported");
    if (n5.issues) throw new SearchParamError(JSON.stringify(n5.issues, void 0, 2), { cause: n5 });
    return n5.value;
  }
  return "parse" in e3 ? e3.parse(r6) : "function" == typeof e3 ? e3(r6) : {};
}
function routeNeedsPreload(e3) {
  var r6;
  for (const n5 of X2) if (null == (r6 = e3.options[n5]) ? void 0 : r6.preload) return true;
  return false;
}
function handleParam$1(e3, r6) {
  return e3.prefixSegment && e3.suffixSegment ? r6 + 0.05 : e3.prefixSegment ? r6 + 0.02 : e3.suffixSegment ? r6 + 0.01 : r6;
}
function Component(e3, r6, n5) {
  this.props = e3, this.context = r6, this.refs = be, this.updater = n5 || ye;
}
function ComponentDummy() {
}
function PureComponent(e3, r6, n5) {
  this.props = e3, this.context = r6, this.refs = be, this.updater = n5 || ye;
}
function ReactElement(e3, r6, n5, o3, s5, a5) {
  return n5 = a5.ref, { $$typeof: re, type: e3, key: r6, ref: void 0 !== n5 ? n5 : null, props: a5 };
}
function isValidElement(e3) {
  return "object" == typeof e3 && null !== e3 && e3.$$typeof === re;
}
function getElementKey(e3, r6) {
  return "object" == typeof e3 && null !== e3 && null != e3.key ? (n5 = "" + e3.key, o3 = { "=": "=0", ":": "=2" }, "$" + n5.replace(/[=:]/g, function(e4) {
    return o3[e4];
  })) : r6.toString(36);
  var n5, o3;
}
function noop$1$2() {
}
function mapIntoArray(e3, r6, n5, o3, s5) {
  var a5 = typeof e3;
  "undefined" !== a5 && "boolean" !== a5 || (e3 = null);
  var i6, l5, u4 = false;
  if (null === e3) u4 = true;
  else switch (a5) {
    case "bigint":
    case "string":
    case "number":
      u4 = true;
      break;
    case "object":
      switch (e3.$$typeof) {
        case re:
        case ne:
          u4 = true;
          break;
        case pe:
          return mapIntoArray((u4 = e3._init)(e3._payload), r6, n5, o3, s5);
      }
  }
  if (u4) return s5 = s5(e3), u4 = "" === o3 ? "." + getElementKey(e3, 0) : o3, ke(s5) ? (n5 = "", null != u4 && (n5 = u4.replace(Pe, "$&/") + "/"), mapIntoArray(s5, r6, n5, "", function(e4) {
    return e4;
  })) : null != s5 && (isValidElement(s5) && (i6 = s5, l5 = n5 + (null == s5.key || e3 && e3.key === s5.key ? "" : ("" + s5.key).replace(Pe, "$&/") + "/") + u4, s5 = ReactElement(i6.type, l5, void 0, 0, 0, i6.props)), r6.push(s5)), 1;
  u4 = 0;
  var c4, h4 = "" === o3 ? "." : o3 + ":";
  if (ke(e3)) for (var p4 = 0; p4 < e3.length; p4++) u4 += mapIntoArray(o3 = e3[p4], r6, n5, a5 = h4 + getElementKey(o3, p4), s5);
  else if ("function" == typeof (p4 = null === (c4 = e3) || "object" != typeof c4 ? null : "function" == typeof (c4 = ge && c4[ge] || c4["@@iterator"]) ? c4 : null)) for (e3 = p4.call(e3), p4 = 0; !(o3 = e3.next()).done; ) u4 += mapIntoArray(o3 = o3.value, r6, n5, a5 = h4 + getElementKey(o3, p4++), s5);
  else if ("object" === a5) {
    if ("function" == typeof e3.then) return mapIntoArray(function(e4) {
      switch (e4.status) {
        case "fulfilled":
          return e4.value;
        case "rejected":
          throw e4.reason;
        default:
          switch ("string" == typeof e4.status ? e4.then(noop$1$2, noop$1$2) : (e4.status = "pending", e4.then(function(r7) {
            "pending" === e4.status && (e4.status = "fulfilled", e4.value = r7);
          }, function(r7) {
            "pending" === e4.status && (e4.status = "rejected", e4.reason = r7);
          })), e4.status) {
            case "fulfilled":
              return e4.value;
            case "rejected":
              throw e4.reason;
          }
      }
      throw e4;
    }(e3), r6, n5, o3, s5);
    throw r6 = String(e3), Error("Objects are not valid as a React child (found: " + ("[object Object]" === r6 ? "object with keys {" + Object.keys(e3).join(", ") + "}" : r6) + "). If you meant to render a collection of children, use an array instead.");
  }
  return u4;
}
function mapChildren(e3, r6, n5) {
  if (null == e3) return e3;
  var o3 = [], s5 = 0;
  return mapIntoArray(e3, o3, "", "", function(e4) {
    return r6.call(n5, e4, s5++);
  }), o3;
}
function lazyInitializer(e3) {
  if (-1 === e3._status) {
    var r6 = e3._result;
    (r6 = r6()).then(function(r7) {
      0 !== e3._status && -1 !== e3._status || (e3._status = 1, e3._result = r7);
    }, function(r7) {
      0 !== e3._status && -1 !== e3._status || (e3._status = 2, e3._result = r7);
    }), -1 === e3._status && (e3._status = 0, e3._result = r6);
  }
  if (1 === e3._status) return e3._result.default;
  throw e3._result;
}
function noop$5() {
}
function CatchBoundary(e3) {
  const r6 = e3.errorComponent ?? ErrorComponent;
  return p2.jsx(CatchBoundaryImpl, { getResetKey: e3.getResetKey, onCatch: e3.onCatch, children: /* @__PURE__ */ __name(({ error: n5, reset: o3 }) => n5 ? xe.createElement(r6, { error: n5, reset: o3 }) : e3.children, "children") });
}
function ErrorComponent({ error: e3 }) {
  const [r6, n5] = xe.useState(false);
  return p2.jsxs("div", { style: { padding: ".5rem", maxWidth: "100%" }, children: [p2.jsxs("div", { style: { display: "flex", alignItems: "center", gap: ".5rem" }, children: [p2.jsx("strong", { style: { fontSize: "1rem" }, children: "Something went wrong!" }), p2.jsx("button", { style: { appearance: "none", fontSize: ".6em", border: "1px solid currentColor", padding: ".1rem .2rem", fontWeight: "bold", borderRadius: ".25rem" }, onClick: /* @__PURE__ */ __name(() => n5((e4) => !e4), "onClick"), children: r6 ? "Hide Error" : "Show Error" })] }), p2.jsx("div", { style: { height: ".25rem" } }), r6 ? p2.jsx("div", { children: p2.jsx("pre", { style: { fontSize: ".7em", border: "1px solid red", borderRadius: ".25rem", padding: ".3rem", color: "red", overflow: "auto" }, children: e3.message ? p2.jsx("code", { children: e3.message }) : null }) }) : null] });
}
function ClientOnly({ children: e3, fallback: r6 = null }) {
  return $e.useSyncExternalStore(subscribe, () => true, () => false) ? p2.jsx($e.Fragment, { children: e3 }) : p2.jsx($e.Fragment, { children: r6 });
}
function subscribe() {
  return () => {
  };
}
function shallow(e3, r6) {
  if (Object.is(e3, r6)) return true;
  if ("object" != typeof e3 || null === e3 || "object" != typeof r6 || null === r6) return false;
  if (e3 instanceof Map && r6 instanceof Map) {
    if (e3.size !== r6.size) return false;
    for (const [n6, o3] of e3) if (!r6.has(n6) || !Object.is(o3, r6.get(n6))) return false;
    return true;
  }
  if (e3 instanceof Set && r6 instanceof Set) {
    if (e3.size !== r6.size) return false;
    for (const n6 of e3) if (!r6.has(n6)) return false;
    return true;
  }
  if (e3 instanceof Date && r6 instanceof Date) return e3.getTime() === r6.getTime();
  const n5 = Object.keys(e3);
  if (n5.length !== Object.keys(r6).length) return false;
  for (let o3 = 0; o3 < n5.length; o3++) if (!Object.prototype.hasOwnProperty.call(r6, n5[o3]) || !Object.is(e3[n5[o3]], r6[n5[o3]])) return false;
  return true;
}
function getRouterContext() {
  return "undefined" == typeof document ? qe : window.__TSR_ROUTER_CONTEXT__ ? window.__TSR_ROUTER_CONTEXT__ : (window.__TSR_ROUTER_CONTEXT__ = qe, qe);
}
function useRouter(e3) {
  const r6 = xe.useContext(getRouterContext());
  return g2(!(((null == e3 ? void 0 : e3.warn) ?? 1) && !r6), "useRouter must be used inside a <RouterProvider> component!"), r6;
}
function useRouterState(e3) {
  const r6 = useRouter({ warn: void 0 === (null == e3 ? void 0 : e3.router) }), n5 = (null == e3 ? void 0 : e3.router) || r6, o3 = xe.useRef(void 0);
  return function(e4, r7 = (e5) => e5) {
    return Ve.useSyncExternalStoreWithSelector(e4.subscribe, () => e4.state, () => e4.state, r7, shallow);
  }(n5.__store, (r7) => {
    if (null == e3 ? void 0 : e3.select) {
      if (e3.structuralSharing ?? n5.options.defaultStructuralSharing) {
        const n6 = replaceEqualDeep(o3.current, e3.select(r7));
        return o3.current = n6, n6;
      }
      return e3.select(r7);
    }
    return r7;
  });
}
function useMatch(e3) {
  const r6 = xe.useContext(e3.from ? Ke : Ue), n5 = useRouterState({ select: /* @__PURE__ */ __name((n6) => {
    const o3 = n6.matches.find((n7) => e3.from ? e3.from === n7.routeId : n7.id === r6);
    if (invariant$1(!((e3.shouldThrow ?? 1) && !o3), e3.from && e3.from), void 0 !== o3) return e3.select ? e3.select(o3) : o3;
  }, "select"), structuralSharing: e3.structuralSharing });
  return n5;
}
function useLoaderData(e3) {
  return useMatch({ from: e3.from, strict: e3.strict, structuralSharing: e3.structuralSharing, select: /* @__PURE__ */ __name((r6) => e3.select ? e3.select(r6.loaderData) : r6.loaderData, "select") });
}
function useLoaderDeps(e3) {
  const { select: r6, ...n5 } = e3;
  return useMatch({ ...n5, select: /* @__PURE__ */ __name((e4) => r6 ? r6(e4.loaderDeps) : e4.loaderDeps, "select") });
}
function useParams(e3) {
  return useMatch({ from: e3.from, strict: e3.strict, shouldThrow: e3.shouldThrow, structuralSharing: e3.structuralSharing, select: /* @__PURE__ */ __name((r6) => e3.select ? e3.select(r6.params) : r6.params, "select") });
}
function useSearch(e3) {
  return useMatch({ from: e3.from, strict: e3.strict, shouldThrow: e3.shouldThrow, structuralSharing: e3.structuralSharing, select: /* @__PURE__ */ __name((r6) => e3.select ? e3.select(r6.search) : r6.search, "select") });
}
function useNavigate(e3) {
  const { navigate: r6, state: n5 } = useRouter(), o3 = useMatch({ strict: false, select: /* @__PURE__ */ __name((e4) => e4.index, "select") });
  return xe.useCallback((s5) => {
    const a5 = s5.from ?? (null == e3 ? void 0 : e3.from) ?? n5.matches[o3].fullPath;
    return r6({ ...s5, from: a5 });
  }, [null == e3 ? void 0 : e3.from, r6]);
}
function formatProdErrorMessage$1(e3) {
  var r6 = "https://react.dev/errors/" + e3;
  if (1 < arguments.length) {
    r6 += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var n5 = 2; n5 < arguments.length; n5++) r6 += "&args[]=" + encodeURIComponent(arguments[n5]);
  }
  return "Minified React error #" + e3 + "; visit " + r6 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
function noop$4() {
}
function getCrossOriginStringAs(e3, r6) {
  return "font" === e3 ? "" : "string" == typeof r6 ? "use-credentials" === r6 ? r6 : "" : void 0;
}
function usePrevious(e3) {
  const r6 = xe.useRef({ value: e3, prev: null }), n5 = r6.current.value;
  return e3 !== n5 && (r6.current = { value: e3, prev: n5 }), r6.current.prev;
}
function useLinkProps(e3, r6) {
  const n5 = useRouter(), [o3, s5] = xe.useState(false), a5 = xe.useRef(false), i6 = function(e4) {
    const r7 = xe.useRef(null);
    return xe.useImperativeHandle(e4, () => r7.current, []), r7;
  }(r6), { activeProps: l5, inactiveProps: u4, activeOptions: c4, to: h4, preload: p4, preloadDelay: g3, hashScrollIntoView: y3, replace: v3, startTransition: b3, resetScroll: k4, viewTransition: C4, children: P4, target: R4, disabled: $3, style: T4, className: F4, onClick: E4, onFocus: I4, onMouseEnter: A4, onMouseLeave: O4, onTouchStart: B3, ignoreBlocker: N4, params: D4, search: H3, hash: W4, state: V4, mask: q3, reloadDocument: G3, unsafeRelative: X4, from: Q3, _fromLocation: Y4, ...Z3 } = e3, ee3 = xe.useMemo(() => {
    try {
      return new URL(h4), "external";
    } catch {
    }
    return "internal";
  }, [h4]), te3 = useRouterState({ select: /* @__PURE__ */ __name((e4) => e4.location.search, "select"), structuralSharing: true }), re3 = useMatch({ strict: false, select: /* @__PURE__ */ __name((r7) => e3.from ?? r7.fullPath, "select") }), ne3 = xe.useMemo(() => n5.buildLocation({ ...e3, from: re3 }), [n5, te3, e3._fromLocation, re3, e3.hash, e3.to, e3.search, e3.params, e3.state, e3.mask, e3.unsafeRelative]), oe3 = "external" === ee3, ae3 = !e3.reloadDocument && !oe3 && (p4 ?? n5.options.defaultPreload), ie3 = g3 ?? n5.options.defaultPreloadDelay ?? 0, le3 = useRouterState({ select: /* @__PURE__ */ __name((e4) => {
    if (oe3) return false;
    if (null == c4 ? void 0 : c4.exact) {
      if (!(r7 = e4.location.pathname, o4 = ne3.pathname, s6 = n5.basepath, removeTrailingSlash(r7, s6) === removeTrailingSlash(o4, s6))) return false;
    } else {
      const r8 = removeTrailingSlash(e4.location.pathname, n5.basepath), o5 = removeTrailingSlash(ne3.pathname, n5.basepath);
      if (!(r8.startsWith(o5) && (r8.length === o5.length || "/" === r8[o5.length]))) return false;
    }
    var r7, o4, s6;
    if ((null == c4 ? void 0 : c4.includeSearch) ?? 1) {
      if (!deepEqual(e4.location.search, ne3.search, { partial: !(null == c4 ? void 0 : c4.exact), ignoreUndefined: !(null == c4 ? void 0 : c4.explicitUndefined) })) return false;
    }
    return !(null == c4 ? void 0 : c4.includeHash) || e4.location.hash === ne3.hash;
  }, "select") }), ue3 = xe.useCallback(() => {
    n5.preloadRoute({ ...e3, from: re3 }).catch((e4) => {
      console.warn(e4), console.warn("Error preloading route! \u261D\uFE0F");
    });
  }, [n5, e3.to, e3._fromLocation, re3, e3.search, e3.hash, e3.params, e3.state, e3.mask, e3.unsafeRelative, e3.hashScrollIntoView, e3.href, e3.ignoreBlocker, e3.reloadDocument, e3.replace, e3.resetScroll, e3.viewTransition]);
  if (function(e4, r7, n6 = {}, o4 = {}) {
    xe.useEffect(() => {
      if (!e4.current || o4.disabled || "function" != typeof IntersectionObserver) return;
      const s6 = new IntersectionObserver(([e5]) => {
        r7(e5);
      }, n6);
      return s6.observe(e4.current), () => {
        s6.disconnect();
      };
    }, [r7, n6, o4.disabled, e4]);
  }(i6, xe.useCallback((e4) => {
    (null == e4 ? void 0 : e4.isIntersecting) && ue3();
  }, [ue3]), ut, { disabled: !(!$3 && "viewport" === ae3) }), xe.useEffect(() => {
    a5.current || $3 || "render" !== ae3 || (ue3(), a5.current = true);
  }, [$3, ue3, ae3]), oe3) return { ...Z3, ref: i6, type: ee3, href: h4, ...P4 && { children: P4 }, ...R4 && { target: R4 }, ...$3 && { disabled: $3 }, ...T4 && { style: T4 }, ...F4 && { className: F4 }, ...E4 && { onClick: E4 }, ...I4 && { onFocus: I4 }, ...A4 && { onMouseEnter: A4 }, ...O4 && { onMouseLeave: O4 }, ...B3 && { onTouchStart: B3 } };
  const handleFocus = /* @__PURE__ */ __name((e4) => {
    $3 || ae3 && ue3();
  }, "handleFocus"), ce3 = handleFocus, de3 = le3 ? functionalUpdate(l5, {}) ?? ot : nt, he3 = le3 ? nt : functionalUpdate(u4, {}) ?? nt, pe3 = [F4, de3.className, he3.className].filter(Boolean).join(" "), ge3 = (T4 || de3.style || he3.style) && { ...T4, ...de3.style, ...he3.style };
  return { ...Z3, ...de3, ...he3, href: $3 ? void 0 : ne3.maskedLocation ? n5.history.createHref(ne3.maskedLocation.href) : n5.history.createHref(ne3.href), ref: i6, onClick: composeHandlers([E4, (r7) => {
    if (!($3 || function(e4) {
      return !!(e4.metaKey || e4.altKey || e4.ctrlKey || e4.shiftKey);
    }(r7) || r7.defaultPrevented || R4 && "_self" !== R4 || 0 !== r7.button)) {
      r7.preventDefault(), tt.flushSync(() => {
        s5(true);
      });
      const o4 = n5.subscribe("onResolved", () => {
        o4(), s5(false);
      });
      n5.navigate({ ...e3, from: re3, replace: v3, resetScroll: k4, hashScrollIntoView: y3, startTransition: b3, viewTransition: C4, ignoreBlocker: N4 });
    }
  }]), onFocus: composeHandlers([I4, handleFocus]), onMouseEnter: composeHandlers([A4, (e4) => {
    if (!$3 && ae3) if (ie3) {
      const r7 = e4.target;
      if (lt.has(r7)) return;
      const n6 = setTimeout(() => {
        lt.delete(r7), ue3();
      }, ie3);
      lt.set(r7, n6);
    } else ue3();
  }]), onMouseLeave: composeHandlers([O4, (e4) => {
    if ($3 || !ae3 || !ie3) return;
    const r7 = e4.target, n6 = lt.get(r7);
    n6 && (clearTimeout(n6), lt.delete(r7));
  }]), onTouchStart: composeHandlers([B3, ce3]), disabled: !!$3, target: R4, ...ge3 && { style: ge3 }, ...pe3 && { className: pe3 }, ...$3 && st, ...le3 && at, ...o3 && it };
}
function createFileRoute(e3) {
  return "object" == typeof e3 ? new FileRoute(e3, { silent: true }).createRoute(e3) : new FileRoute(e3, { silent: true }).createRoute;
}
function lazyRouteComponent(e3, r6) {
  let n5, o3, s5;
  const load = /* @__PURE__ */ __name(() => (n5 || (n5 = e3().then((e4) => {
    n5 = void 0, o3 = e4[r6 ?? "default"];
  }).catch((e4) => {
    s5 = e4, function(e5) {
      "string" == typeof (null == e5 ? void 0 : e5.message) && (e5.message.startsWith("Failed to fetch dynamically imported module") || e5.message.startsWith("error loading dynamically imported module") || e5.message.startsWith("Importing a module script failed"));
    }(s5);
  })), n5), "load"), lazyComp = /* @__PURE__ */ __name(function(e4) {
    if (s5) throw s5;
    if (!o3) throw load();
    return xe.createElement(o3, e4);
  }, "lazyComp");
  return lazyComp.preload = load, lazyComp;
}
function Transitioner() {
  const e3 = useRouter(), r6 = xe.useRef({ router: e3, mounted: false }), [n5, o3] = xe.useState(false), { hasPendingMatches: s5, isLoading: a5 } = useRouterState({ select: /* @__PURE__ */ __name((e4) => ({ isLoading: e4.isLoading, hasPendingMatches: e4.matches.some((e5) => "pending" === e5.status) }), "select"), structuralSharing: true }), i6 = usePrevious(a5), l5 = a5 || n5 || s5, u4 = usePrevious(l5), c4 = a5 || s5, h4 = usePrevious(c4);
  return e3.startTransition = (e4) => {
    o3(true), xe.startTransition(() => {
      e4(), o3(false);
    });
  }, xe.useEffect(() => {
    const r7 = e3.history.subscribe(e3.load), n6 = e3.buildLocation({ to: e3.latestLocation.pathname, search: true, params: true, hash: true, state: true, _includeValidateSearch: true });
    return trimPathRight$1(e3.latestLocation.href) !== trimPathRight$1(n6.href) && e3.commitLocation({ ...n6, replace: true }), () => {
      r7();
    };
  }, [e3, e3.history]), rt(() => {
    if (r6.current.router === e3 && r6.current.mounted) return;
    r6.current = { router: e3, mounted: true };
    (async () => {
      try {
        await e3.load();
      } catch (e4) {
        console.error(e4);
      }
    })();
  }, [e3]), rt(() => {
    i6 && !a5 && e3.emit({ type: "onLoad", ...getLocationChangeInfo(e3.state) });
  }, [i6, e3, a5]), rt(() => {
    h4 && !c4 && e3.emit({ type: "onBeforeRouteMount", ...getLocationChangeInfo(e3.state) });
  }, [c4, h4, e3]), rt(() => {
    u4 && !l5 && (e3.emit({ type: "onResolved", ...getLocationChangeInfo(e3.state) }), e3.__store.setState((e4) => ({ ...e4, status: "idle", resolvedLocation: e4.location })), function(e4) {
      if ("undefined" != typeof document && document.querySelector) {
        const r7 = e4.state.location.state.__hashScrollIntoViewOptions ?? true;
        if (r7 && "" !== e4.state.location.hash) {
          const n6 = document.getElementById(e4.state.location.hash);
          n6 && n6.scrollIntoView(r7);
        }
      }
    }(e3));
  }, [l5, u4, e3]), null;
}
function CatchNotFound(e3) {
  const r6 = useRouterState({ select: /* @__PURE__ */ __name((e4) => `not-found-${e4.location.pathname}-${e4.status}`, "select") });
  return p2.jsx(CatchBoundary, { getResetKey: /* @__PURE__ */ __name(() => r6, "getResetKey"), onCatch: /* @__PURE__ */ __name((r7, n5) => {
    var o3;
    if (!isNotFound$1(r7)) throw r7;
    null == (o3 = e3.onCatch) || o3.call(e3, r7, n5);
  }, "onCatch"), errorComponent: /* @__PURE__ */ __name(({ error: r7 }) => {
    var n5;
    if (isNotFound$1(r7)) return null == (n5 = e3.fallback) ? void 0 : n5.call(e3, r7);
    throw r7;
  }, "errorComponent"), children: e3.children });
}
function DefaultGlobalNotFound() {
  return p2.jsx("p", { children: "Not Found" });
}
function SafeFragment(e3) {
  return p2.jsx(p2.Fragment, { children: e3.children });
}
function renderRouteNotFound(e3, r6, n5) {
  return r6.options.notFoundComponent ? p2.jsx(r6.options.notFoundComponent, { data: n5 }) : e3.options.defaultNotFoundComponent ? p2.jsx(e3.options.defaultNotFoundComponent, { data: n5 }) : p2.jsx(DefaultGlobalNotFound, {});
}
function ScriptOnce({ children: e3 }) {
  return "undefined" != typeof document ? null : p2.jsx("script", { className: "$tsr", dangerouslySetInnerHTML: { __html: [e3].filter(Boolean).join("\n") } });
}
function ScrollRestoration() {
  const e3 = useRouter(), r6 = (e3.options.getScrollRestorationKey || defaultGetScrollRestorationKey)(e3.latestLocation), n5 = r6 !== defaultGetScrollRestorationKey(e3.latestLocation) ? r6 : void 0;
  if (!e3.isScrollRestoring || !e3.isServer) return null;
  const o3 = { storageKey: N2, shouldScrollRestoration: true };
  return n5 && (o3.key = n5), p2.jsx(ScriptOnce, { children: `(${restoreScroll.toString()})(${JSON.stringify(o3)})` });
}
function OnRendered() {
  const e3 = useRouter(), r6 = xe.useRef(void 0);
  return p2.jsx("script", { suppressHydrationWarning: true, ref: /* @__PURE__ */ __name((n5) => {
    !n5 || void 0 !== r6.current && r6.current.href === e3.latestLocation.href || (e3.emit({ type: "onRendered", ...getLocationChangeInfo(e3.state) }), r6.current = e3.latestLocation);
  }, "ref") }, e3.latestLocation.state.__TSR_key);
}
function Matches() {
  const e3 = useRouter(), r6 = e3.options.defaultPendingComponent ? p2.jsx(e3.options.defaultPendingComponent, {}) : null, n5 = e3.isServer || "undefined" != typeof document && e3.ssr ? SafeFragment : xe.Suspense, o3 = p2.jsxs(n5, { fallback: r6, children: [!e3.isServer && p2.jsx(Transitioner, {}), p2.jsx(MatchesInner, {})] });
  return e3.options.InnerWrap ? p2.jsx(e3.options.InnerWrap, { children: o3 }) : o3;
}
function MatchesInner() {
  const e3 = useRouter(), r6 = useRouterState({ select: /* @__PURE__ */ __name((e4) => {
    var r7;
    return null == (r7 = e4.matches[0]) ? void 0 : r7.id;
  }, "select") }), n5 = useRouterState({ select: /* @__PURE__ */ __name((e4) => e4.loadedAt, "select") }), o3 = r6 ? p2.jsx(ht, { matchId: r6 }) : null;
  return p2.jsx(Ue.Provider, { value: r6, children: e3.options.disableGlobalCatchBoundary ? o3 : p2.jsx(CatchBoundary, { getResetKey: /* @__PURE__ */ __name(() => n5, "getResetKey"), errorComponent: ErrorComponent, onCatch: /* @__PURE__ */ __name((e4) => {
    g2(false, "The following error wasn't caught by any route! At the very least, consider setting an 'errorComponent' in your RootRoute!"), g2(false, e4.message || e4.toString());
  }, "onCatch"), children: o3 }) });
}
function RouterContextProvider({ router: e3, children: r6, ...n5 }) {
  Object.keys(n5).length > 0 && e3.update({ ...e3.options, ...n5, context: { ...e3.options.context, ...n5.context } });
  const o3 = getRouterContext(), s5 = p2.jsx(o3.Provider, { value: e3, children: r6 });
  return e3.options.Wrap ? p2.jsx(e3.options.Wrap, { children: s5 }) : s5;
}
function RouterProvider({ router: e3, ...r6 }) {
  return p2.jsx(RouterContextProvider, { router: e3, ...r6, children: p2.jsx(Matches, {}) });
}
function Asset({ tag: e3, attrs: r6, children: n5 }) {
  switch (e3) {
    case "title":
      return p2.jsx("title", { ...r6, suppressHydrationWarning: true, children: n5 });
    case "meta":
      return p2.jsx("meta", { ...r6, suppressHydrationWarning: true });
    case "link":
      return p2.jsx("link", { ...r6, suppressHydrationWarning: true });
    case "style":
      return p2.jsx("style", { ...r6, dangerouslySetInnerHTML: { __html: n5 } });
    case "script":
      return p2.jsx(Script, { attrs: r6, children: n5 });
    default:
      return null;
  }
}
function Script({ attrs: e3, children: r6 }) {
  return xe.useEffect(() => {
    if (null == e3 ? void 0 : e3.src) {
      const r7 = document.createElement("script");
      for (const [n5, o3] of Object.entries(e3)) "suppressHydrationWarning" !== n5 && void 0 !== o3 && false !== o3 && r7.setAttribute(n5, "boolean" == typeof o3 ? "" : String(o3));
      return document.head.appendChild(r7), () => {
        r7.parentNode && r7.parentNode.removeChild(r7);
      };
    }
    if ("string" == typeof r6) {
      const n5 = document.createElement("script");
      if (n5.textContent = r6, e3) for (const [r7, o3] of Object.entries(e3)) "suppressHydrationWarning" !== r7 && void 0 !== o3 && false !== o3 && n5.setAttribute(r7, "boolean" == typeof o3 ? "" : String(o3));
      return document.head.appendChild(n5), () => {
        n5.parentNode && n5.parentNode.removeChild(n5);
      };
    }
  }, [e3, r6]), (null == e3 ? void 0 : e3.src) && "string" == typeof e3.src ? p2.jsx("script", { ...e3, suppressHydrationWarning: true }) : "string" == typeof r6 ? p2.jsx("script", { ...e3, dangerouslySetInnerHTML: { __html: r6 }, suppressHydrationWarning: true }) : null;
}
function HeadContent() {
  return useTags().map((e3) => xe.createElement(Asset, { ...e3, key: `tsr-meta-${JSON.stringify(e3)}` }));
}
function transformStreamWithRouter(e3, r6) {
  const n5 = function() {
    let e4;
    const r7 = new TextEncoder(), n6 = { stream: new i4({ start(r8) {
      e4 = r8;
    } }), write: /* @__PURE__ */ __name((n7) => {
      e4.enqueue(r7.encode(n7));
    }, "write"), end: /* @__PURE__ */ __name((o4) => {
      o4 && e4.enqueue(r7.encode(o4)), e4.close(), n6.destroyed = true;
    }, "end"), destroy: /* @__PURE__ */ __name((r8) => {
      e4.error(r8);
    }, "destroy"), destroyed: false };
    return n6;
  }();
  let o3 = true, s5 = "", a5 = "", l5 = false, u4 = false, c4 = "", h4 = "";
  function getBufferedRouterStream() {
    const e4 = s5;
    return s5 = "", e4;
  }
  __name(getBufferedRouterStream, "getBufferedRouterStream");
  const p4 = createControlledPromise$1();
  let g3 = 0;
  e3.serverSsr.injectedHtml.forEach((e4) => {
    handleInjectedHtml(e4);
  });
  const y3 = e3.subscribe("onInjectedHtml", (e4) => {
    handleInjectedHtml(e4.promise);
  });
  function handleInjectedHtml(e4) {
    g3++, e4.then((e5) => {
      l5 ? n5.write(e5) : s5 += e5;
    }).catch(p4.reject).finally(() => {
      g3--, o3 || 0 !== g3 || (y3(), p4.resolve());
    });
  }
  __name(handleInjectedHtml, "handleInjectedHtml");
  return p4.then(() => {
    const e4 = h4 + getBufferedRouterStream() + a5;
    n5.end(e4);
  }).catch((e4) => {
    console.error("Error reading routerStream:", e4), n5.destroy(e4);
  }), async function(e4, r7) {
    var n6, o4, s6;
    try {
      const s7 = e4.getReader();
      let a6;
      for (; !(a6 = await s7.read()).done; ) null == (n6 = r7.onData) || n6.call(r7, a6);
      null == (o4 = r7.onEnd) || o4.call(r7);
    } catch (e5) {
      null == (s6 = r7.onError) || s6.call(r7, e5);
    }
  }(r6, { onData: /* @__PURE__ */ __name((e4) => {
    const r7 = function(e5) {
      return e5 instanceof Uint8Array ? St.decode(e5) : String(e5);
    }(e4.value);
    let o4 = c4 + r7;
    const s6 = o4.match(gt), i6 = o4.match(yt);
    if (!l5) {
      o4.match(mt) && (l5 = true);
    }
    if (!u4) {
      const e5 = o4.match(vt);
      if (e5) {
        u4 = true;
        const r8 = e5.index, s7 = e5[0], a6 = o4.slice(r8 + s7.length);
        n5.write(o4.slice(0, r8) + s7 + getBufferedRouterStream()), o4 = a6;
      }
    }
    if (!l5) return n5.write(o4), void (c4 = "");
    if (s6 && i6 && s6.index < i6.index) {
      const e5 = s6.index;
      return a5 = o4.slice(e5), n5.write(o4.slice(0, e5) + getBufferedRouterStream()), void (c4 = "");
    }
    let p5, g4 = 0;
    for (; null !== (p5 = bt.exec(o4)); ) g4 = p5.index + p5[0].length;
    if (g4 > 0) {
      const e5 = o4.slice(0, g4) + getBufferedRouterStream() + h4;
      n5.write(e5), c4 = o4.slice(g4);
    } else c4 = o4, h4 += getBufferedRouterStream();
  }, "onData"), onEnd: /* @__PURE__ */ __name(() => {
    o3 = false, e3.serverSsr.setRenderFinished(), 0 === g3 && p4.resolve();
  }, "onEnd"), onError: /* @__PURE__ */ __name((e4) => {
    console.error("Error reading appStream:", e4), n5.destroy(e4);
  }, "onError") }), n5.stream;
}
function murmurhash3_32_gc$1(e3, r6) {
  var n5 = 3 & e3.length, o3 = e3.length - n5, s5 = r6;
  for (r6 = 0; r6 < o3; ) {
    var a5 = 255 & e3.charCodeAt(r6) | (255 & e3.charCodeAt(++r6)) << 8 | (255 & e3.charCodeAt(++r6)) << 16 | (255 & e3.charCodeAt(++r6)) << 24;
    ++r6, s5 = 27492 + (65535 & (s5 = 5 * (65535 & (s5 = (s5 ^= a5 = 461845907 * (65535 & (a5 = (a5 = 3432918353 * (65535 & a5) + ((3432918353 * (a5 >>> 16) & 65535) << 16) & 4294967295) << 15 | a5 >>> 17)) + ((461845907 * (a5 >>> 16) & 65535) << 16) & 4294967295) << 13 | s5 >>> 19)) + ((5 * (s5 >>> 16) & 65535) << 16) & 4294967295)) + (((s5 >>> 16) + 58964 & 65535) << 16);
  }
  switch (a5 = 0, n5) {
    case 3:
      a5 ^= (255 & e3.charCodeAt(r6 + 2)) << 16;
    case 2:
      a5 ^= (255 & e3.charCodeAt(r6 + 1)) << 8;
    case 1:
      s5 ^= 461845907 * (65535 & (a5 = (a5 = 3432918353 * (65535 & (a5 ^= 255 & e3.charCodeAt(r6))) + ((3432918353 * (a5 >>> 16) & 65535) << 16) & 4294967295) << 15 | a5 >>> 17)) + ((461845907 * (a5 >>> 16) & 65535) << 16) & 4294967295;
  }
  return s5 ^= e3.length, s5 = 2246822507 * (65535 & (s5 ^= s5 >>> 16)) + ((2246822507 * (s5 >>> 16) & 65535) << 16) & 4294967295, ((s5 = 3266489909 * (65535 & (s5 ^= s5 >>> 13)) + ((3266489909 * (s5 >>> 16) & 65535) << 16) & 4294967295) ^ s5 >>> 16) >>> 0;
}
function handleErrorInNextTick(e3) {
  setTimeout(function() {
    throw e3;
  });
}
function writeChunk(e3, r6) {
  if (0 !== r6.byteLength) if (2048 < r6.byteLength) 0 < Gt && (e3.enqueue(new Uint8Array(Kt.buffer, 0, Gt)), Kt = new Uint8Array(2048), Gt = 0), e3.enqueue(r6);
  else {
    var n5 = Kt.length - Gt;
    n5 < r6.byteLength && (0 === n5 ? e3.enqueue(Kt) : (Kt.set(r6.subarray(0, n5), Gt), e3.enqueue(Kt), r6 = r6.subarray(n5)), Kt = new Uint8Array(2048), Gt = 0), Kt.set(r6, Gt), Gt += r6.byteLength;
  }
}
function writeChunkAndReturn(e3, r6) {
  return writeChunk(e3, r6), true;
}
function completeWriting(e3) {
  Kt && 0 < Gt && (e3.enqueue(new Uint8Array(Kt.buffer, 0, Gt)), Kt = null, Gt = 0);
}
function stringToChunk(e3) {
  return Jt.encode(e3);
}
function stringToPrecomputedChunk(e3) {
  return Jt.encode(e3);
}
function closeWithError(e3, r6) {
  "function" == typeof e3.error ? e3.error(r6) : e3.close();
}
function isAttributeNameSafe$1(e3) {
  return !!Qt.call(er, e3) || !Qt.call(Zt, e3) && (Yt.test(e3) ? er[e3] = true : (Zt[e3] = true, false));
}
function escapeTextForBrowser$1(e3) {
  if ("boolean" == typeof e3 || "number" == typeof e3 || "bigint" == typeof e3) return "" + e3;
  e3 = "" + e3;
  var r6 = or.exec(e3);
  if (r6) {
    var n5, o3 = "", s5 = 0;
    for (n5 = r6.index; n5 < e3.length; n5++) {
      switch (e3.charCodeAt(n5)) {
        case 34:
          r6 = "&quot;";
          break;
        case 38:
          r6 = "&amp;";
          break;
        case 39:
          r6 = "&#x27;";
          break;
        case 60:
          r6 = "&lt;";
          break;
        case 62:
          r6 = "&gt;";
          break;
        default:
          continue;
      }
      s5 !== n5 && (o3 += e3.slice(s5, n5)), s5 = n5 + 1, o3 += r6;
    }
    e3 = s5 !== n5 ? o3 + e3.slice(s5, n5) : o3;
  }
  return e3;
}
function sanitizeURL$1(e3) {
  return ir.test("" + e3) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e3;
}
function scriptReplacer$1(e3, r6, n5, o3) {
  return r6 + ("s" === n5 ? "\\u0073" : "\\u0053") + o3;
}
function createRenderState$1(e3, r6, n5, o3, s5, a5) {
  var i6 = void 0 === r6 ? mr : stringToPrecomputedChunk('<script nonce="' + escapeTextForBrowser$1(r6) + '">'), l5 = e3.idPrefix;
  n5 = [];
  var u4 = e3.bootstrapScriptContent, c4 = e3.bootstrapScripts, h4 = e3.bootstrapModules;
  if (void 0 !== u4 && n5.push(i6, stringToChunk(("" + u4).replace(wr, scriptReplacer$1)), gr), u4 = [], void 0 !== o3 && (u4.push(Pr), u4.push(stringToChunk(("" + JSON.stringify(o3)).replace(wr, scriptReplacer$1))), u4.push(Rr)), o3 = s5 ? { preconnects: "", fontPreloads: "", highImagePreloads: "", remainingCapacity: 2 + ("number" == typeof a5 ? a5 : 2e3) } : null, s5 = { placeholderPrefix: stringToPrecomputedChunk(l5 + "P:"), segmentPrefix: stringToPrecomputedChunk(l5 + "S:"), boundaryPrefix: stringToPrecomputedChunk(l5 + "B:"), startInlineScript: i6, preamble: { htmlChunks: null, headChunks: null, bodyChunks: null, contribution: 0 }, externalRuntimeScript: null, bootstrapChunks: n5, importMapChunks: u4, onHeaders: s5, headers: o3, resets: { font: {}, dns: {}, connect: { default: {}, anonymous: {}, credentials: {} }, image: {}, style: {} }, charsetChunks: [], viewportChunks: [], hoistableChunks: [], preconnects: /* @__PURE__ */ new Set(), fontPreloads: /* @__PURE__ */ new Set(), highImagePreloads: /* @__PURE__ */ new Set(), styles: /* @__PURE__ */ new Map(), bootstrapScripts: /* @__PURE__ */ new Set(), scripts: /* @__PURE__ */ new Set(), bulkPreloads: /* @__PURE__ */ new Set(), preloads: { images: /* @__PURE__ */ new Map(), stylesheets: /* @__PURE__ */ new Map(), scripts: /* @__PURE__ */ new Map(), moduleScripts: /* @__PURE__ */ new Map() }, nonce: r6, hoistableState: null, stylesToHoist: false }, void 0 !== c4) for (o3 = 0; o3 < c4.length; o3++) {
    var p4 = c4[o3];
    l5 = i6 = void 0, u4 = { rel: "preload", as: "script", fetchPriority: "low", nonce: r6 }, "string" == typeof p4 ? u4.href = a5 = p4 : (u4.href = a5 = p4.src, u4.integrity = l5 = "string" == typeof p4.integrity ? p4.integrity : void 0, u4.crossOrigin = i6 = "string" == typeof p4 || null == p4.crossOrigin ? void 0 : "use-credentials" === p4.crossOrigin ? "use-credentials" : "");
    var g3 = a5;
    (p4 = e3).scriptResources[g3] = null, p4.moduleScriptResources[g3] = null, pushLinkImpl$1(p4 = [], u4), s5.bootstrapScripts.add(p4), n5.push(yr, stringToChunk(escapeTextForBrowser$1(a5))), r6 && n5.push(br, stringToChunk(escapeTextForBrowser$1(r6))), "string" == typeof l5 && n5.push(Sr, stringToChunk(escapeTextForBrowser$1(l5))), "string" == typeof i6 && n5.push(kr, stringToChunk(escapeTextForBrowser$1(i6))), n5.push(Cr);
  }
  if (void 0 !== h4) for (c4 = 0; c4 < h4.length; c4++) i6 = a5 = void 0, l5 = { rel: "modulepreload", fetchPriority: "low", nonce: r6 }, "string" == typeof (u4 = h4[c4]) ? l5.href = o3 = u4 : (l5.href = o3 = u4.src, l5.integrity = i6 = "string" == typeof u4.integrity ? u4.integrity : void 0, l5.crossOrigin = a5 = "string" == typeof u4 || null == u4.crossOrigin ? void 0 : "use-credentials" === u4.crossOrigin ? "use-credentials" : ""), p4 = o3, (u4 = e3).scriptResources[p4] = null, u4.moduleScriptResources[p4] = null, pushLinkImpl$1(u4 = [], l5), s5.bootstrapScripts.add(u4), n5.push(vr, stringToChunk(escapeTextForBrowser$1(o3))), r6 && n5.push(br, stringToChunk(escapeTextForBrowser$1(r6))), "string" == typeof i6 && n5.push(Sr, stringToChunk(escapeTextForBrowser$1(i6))), "string" == typeof a5 && n5.push(kr, stringToChunk(escapeTextForBrowser$1(a5))), n5.push(Cr);
  return s5;
}
function createResumableState$1(e3, r6, n5, o3, s5) {
  return { idPrefix: void 0 === e3 ? "" : e3, nextFormID: 0, streamingFormat: 0, bootstrapScriptContent: n5, bootstrapScripts: o3, bootstrapModules: s5, instructions: 0, hasBody: false, hasHtml: false, unknownResources: {}, dnsResources: {}, connectResources: { default: {}, anonymous: {}, credentials: {} }, imageResources: {}, styleResources: {}, scriptResources: {}, moduleUnknownResources: {}, moduleScriptResources: {} };
}
function createPreambleState$1() {
  return { htmlChunks: null, headChunks: null, bodyChunks: null, contribution: 0 };
}
function createFormatContext$1(e3, r6, n5) {
  return { insertionMode: e3, selectedValue: r6, tagScope: n5 };
}
function createRootFormatContext(e3) {
  return createFormatContext$1("http://www.w3.org/2000/svg" === e3 ? 4 : "http://www.w3.org/1998/Math/MathML" === e3 ? 5 : 0, null, 0);
}
function getChildFormatContext$1(e3, r6, n5) {
  switch (r6) {
    case "noscript":
      return createFormatContext$1(2, null, 1 | e3.tagScope);
    case "select":
      return createFormatContext$1(2, null != n5.value ? n5.value : n5.defaultValue, e3.tagScope);
    case "svg":
      return createFormatContext$1(4, null, e3.tagScope);
    case "picture":
      return createFormatContext$1(2, null, 2 | e3.tagScope);
    case "math":
      return createFormatContext$1(5, null, e3.tagScope);
    case "foreignObject":
      return createFormatContext$1(2, null, e3.tagScope);
    case "table":
      return createFormatContext$1(6, null, e3.tagScope);
    case "thead":
    case "tbody":
    case "tfoot":
      return createFormatContext$1(7, null, e3.tagScope);
    case "colgroup":
      return createFormatContext$1(9, null, e3.tagScope);
    case "tr":
      return createFormatContext$1(8, null, e3.tagScope);
    case "head":
      if (2 > e3.insertionMode) return createFormatContext$1(3, null, e3.tagScope);
      break;
    case "html":
      if (0 === e3.insertionMode) return createFormatContext$1(1, null, e3.tagScope);
  }
  return 6 <= e3.insertionMode || 2 > e3.insertionMode ? createFormatContext$1(2, null, e3.tagScope) : e3;
}
function pushTextInstance$1(e3, r6, n5, o3) {
  return "" === r6 ? o3 : (o3 && e3.push(xr), e3.push(stringToChunk(escapeTextForBrowser$1(r6))), true);
}
function pushStyleAttribute$1(e3, r6) {
  if ("object" != typeof r6) throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
  var n5, o3 = true;
  for (n5 in r6) if (Qt.call(r6, n5)) {
    var s5 = r6[n5];
    if (null != s5 && "boolean" != typeof s5 && "" !== s5) {
      if (0 === n5.indexOf("--")) {
        var a5 = stringToChunk(escapeTextForBrowser$1(n5));
        s5 = stringToChunk(escapeTextForBrowser$1(("" + s5).trim()));
      } else void 0 === (a5 = $r.get(n5)) && (a5 = stringToPrecomputedChunk(escapeTextForBrowser$1(n5.replace(sr, "-$1").toLowerCase().replace(ar2, "-ms-"))), $r.set(n5, a5)), s5 = "number" == typeof s5 ? 0 === s5 || tr.has(n5) ? stringToChunk("" + s5) : stringToChunk(s5 + "px") : stringToChunk(escapeTextForBrowser$1(("" + s5).trim()));
      o3 ? (o3 = false, e3.push(Tr, a5, Fr, s5)) : e3.push(Er, a5, Fr, s5);
    }
  }
  o3 || e3.push(Ar);
}
function pushBooleanAttribute$1(e3, r6, n5) {
  n5 && "function" != typeof n5 && "symbol" != typeof n5 && e3.push(_r, stringToChunk(r6), Mr);
}
function pushStringAttribute$1(e3, r6, n5) {
  "function" != typeof n5 && "symbol" != typeof n5 && "boolean" != typeof n5 && e3.push(_r, stringToChunk(r6), Ir, stringToChunk(escapeTextForBrowser$1(n5)), Ar);
}
function pushAdditionalFormField$1(e3, r6) {
  this.push(Lr), validateAdditionalFormField$1(e3), pushStringAttribute$1(this, "name", r6), pushStringAttribute$1(this, "value", e3), this.push(Br);
}
function validateAdditionalFormField$1(e3) {
  if ("string" != typeof e3) throw Error("File/Blob fields are not yet supported in progressive forms. Will fallback to client hydration.");
}
function getCustomFormFields$1(e3, r6) {
  if ("function" == typeof r6.$$FORM_ACTION) {
    var n5 = e3.nextFormID++;
    e3 = e3.idPrefix + n5;
    try {
      var o3 = r6.$$FORM_ACTION(e3);
      if (o3) {
        var s5 = o3.data;
        null != s5 && s5.forEach(validateAdditionalFormField$1);
      }
      return o3;
    } catch (e4) {
      if ("object" == typeof e4 && null !== e4 && "function" == typeof e4.then) throw e4;
    }
  }
  return null;
}
function pushFormActionAttribute$1(e3, r6, n5, o3, s5, a5, i6, l5) {
  var u4 = null;
  if ("function" == typeof o3) {
    var c4 = getCustomFormFields$1(r6, o3);
    null !== c4 ? (l5 = c4.name, o3 = c4.action || "", s5 = c4.encType, a5 = c4.method, i6 = c4.target, u4 = c4.data) : (e3.push(_r, stringToChunk("formAction"), Ir, Or, Ar), i6 = a5 = s5 = o3 = l5 = null, injectFormReplayingRuntime$1(r6, n5));
  }
  return null != l5 && pushAttribute$1(e3, "name", l5), null != o3 && pushAttribute$1(e3, "formAction", o3), null != s5 && pushAttribute$1(e3, "formEncType", s5), null != a5 && pushAttribute$1(e3, "formMethod", a5), null != i6 && pushAttribute$1(e3, "formTarget", i6), u4;
}
function pushAttribute$1(e3, r6, n5) {
  switch (r6) {
    case "className":
      pushStringAttribute$1(e3, "class", n5);
      break;
    case "tabIndex":
      pushStringAttribute$1(e3, "tabindex", n5);
      break;
    case "dir":
    case "role":
    case "viewBox":
    case "width":
    case "height":
      pushStringAttribute$1(e3, r6, n5);
      break;
    case "style":
      pushStyleAttribute$1(e3, n5);
      break;
    case "src":
    case "href":
      if ("" === n5) break;
    case "action":
    case "formAction":
      if (null == n5 || "function" == typeof n5 || "symbol" == typeof n5 || "boolean" == typeof n5) break;
      n5 = sanitizeURL$1("" + n5), e3.push(_r, stringToChunk(r6), Ir, stringToChunk(escapeTextForBrowser$1(n5)), Ar);
      break;
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "ref":
      break;
    case "autoFocus":
    case "multiple":
    case "muted":
      pushBooleanAttribute$1(e3, r6.toLowerCase(), n5);
      break;
    case "xlinkHref":
      if ("function" == typeof n5 || "symbol" == typeof n5 || "boolean" == typeof n5) break;
      n5 = sanitizeURL$1("" + n5), e3.push(_r, stringToChunk("xlink:href"), Ir, stringToChunk(escapeTextForBrowser$1(n5)), Ar);
      break;
    case "contentEditable":
    case "spellCheck":
    case "draggable":
    case "value":
    case "autoReverse":
    case "externalResourcesRequired":
    case "focusable":
    case "preserveAlpha":
      "function" != typeof n5 && "symbol" != typeof n5 && e3.push(_r, stringToChunk(r6), Ir, stringToChunk(escapeTextForBrowser$1(n5)), Ar);
      break;
    case "inert":
    case "allowFullScreen":
    case "async":
    case "autoPlay":
    case "controls":
    case "default":
    case "defer":
    case "disabled":
    case "disablePictureInPicture":
    case "disableRemotePlayback":
    case "formNoValidate":
    case "hidden":
    case "loop":
    case "noModule":
    case "noValidate":
    case "open":
    case "playsInline":
    case "readOnly":
    case "required":
    case "reversed":
    case "scoped":
    case "seamless":
    case "itemScope":
      n5 && "function" != typeof n5 && "symbol" != typeof n5 && e3.push(_r, stringToChunk(r6), Mr);
      break;
    case "capture":
    case "download":
      true === n5 ? e3.push(_r, stringToChunk(r6), Mr) : false !== n5 && "function" != typeof n5 && "symbol" != typeof n5 && e3.push(_r, stringToChunk(r6), Ir, stringToChunk(escapeTextForBrowser$1(n5)), Ar);
      break;
    case "cols":
    case "rows":
    case "size":
    case "span":
      "function" != typeof n5 && "symbol" != typeof n5 && !isNaN(n5) && 1 <= n5 && e3.push(_r, stringToChunk(r6), Ir, stringToChunk(escapeTextForBrowser$1(n5)), Ar);
      break;
    case "rowSpan":
    case "start":
      "function" == typeof n5 || "symbol" == typeof n5 || isNaN(n5) || e3.push(_r, stringToChunk(r6), Ir, stringToChunk(escapeTextForBrowser$1(n5)), Ar);
      break;
    case "xlinkActuate":
      pushStringAttribute$1(e3, "xlink:actuate", n5);
      break;
    case "xlinkArcrole":
      pushStringAttribute$1(e3, "xlink:arcrole", n5);
      break;
    case "xlinkRole":
      pushStringAttribute$1(e3, "xlink:role", n5);
      break;
    case "xlinkShow":
      pushStringAttribute$1(e3, "xlink:show", n5);
      break;
    case "xlinkTitle":
      pushStringAttribute$1(e3, "xlink:title", n5);
      break;
    case "xlinkType":
      pushStringAttribute$1(e3, "xlink:type", n5);
      break;
    case "xmlBase":
      pushStringAttribute$1(e3, "xml:base", n5);
      break;
    case "xmlLang":
      pushStringAttribute$1(e3, "xml:lang", n5);
      break;
    case "xmlSpace":
      pushStringAttribute$1(e3, "xml:space", n5);
      break;
    default:
      if ((!(2 < r6.length) || "o" !== r6[0] && "O" !== r6[0] || "n" !== r6[1] && "N" !== r6[1]) && isAttributeNameSafe$1(r6 = rr.get(r6) || r6)) {
        switch (typeof n5) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            var o3 = r6.toLowerCase().slice(0, 5);
            if ("data-" !== o3 && "aria-" !== o3) return;
        }
        e3.push(_r, stringToChunk(r6), Ir, stringToChunk(escapeTextForBrowser$1(n5)), Ar);
      }
  }
}
function pushInnerHTML$1(e3, r6, n5) {
  if (null != r6) {
    if (null != n5) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
    if ("object" != typeof r6 || !("__html" in r6)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");
    null != (r6 = r6.__html) && e3.push(stringToChunk("" + r6));
  }
}
function injectFormReplayingRuntime$1(e3, r6) {
  !(16 & e3.instructions) && (e3.instructions |= 16, r6.bootstrapChunks.unshift(r6.startInlineScript, Dr, gr));
}
function pushLinkImpl$1(e3, r6) {
  for (var n5 in e3.push(startChunkForTag$1("link")), r6) if (Qt.call(r6, n5)) {
    var o3 = r6[n5];
    if (null != o3) switch (n5) {
      case "children":
      case "dangerouslySetInnerHTML":
        throw Error("link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
      default:
        pushAttribute$1(e3, n5, o3);
    }
  }
  return e3.push(Br), null;
}
function styleReplacer$1(e3, r6, n5, o3) {
  return r6 + ("s" === n5 ? "\\73 " : "\\53 ") + o3;
}
function pushSelfClosing$1(e3, r6, n5) {
  for (var o3 in e3.push(startChunkForTag$1(n5)), r6) if (Qt.call(r6, o3)) {
    var s5 = r6[o3];
    if (null != s5) switch (o3) {
      case "children":
      case "dangerouslySetInnerHTML":
        throw Error(n5 + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
      default:
        pushAttribute$1(e3, o3, s5);
    }
  }
  return e3.push(Br), null;
}
function pushTitleImpl$1(e3, r6) {
  e3.push(startChunkForTag$1("title"));
  var n5, o3 = null, s5 = null;
  for (n5 in r6) if (Qt.call(r6, n5)) {
    var a5 = r6[n5];
    if (null != a5) switch (n5) {
      case "children":
        o3 = a5;
        break;
      case "dangerouslySetInnerHTML":
        s5 = a5;
        break;
      default:
        pushAttribute$1(e3, n5, a5);
    }
  }
  return e3.push(jr), "function" != typeof (r6 = Array.isArray(o3) ? 2 > o3.length ? o3[0] : null : o3) && "symbol" != typeof r6 && null != r6 && e3.push(stringToChunk(escapeTextForBrowser$1("" + r6))), pushInnerHTML$1(e3, s5, o3), e3.push(endChunkForTag$1("title")), null;
}
function pushScriptImpl$1(e3, r6) {
  e3.push(startChunkForTag$1("script"));
  var n5, o3 = null, s5 = null;
  for (n5 in r6) if (Qt.call(r6, n5)) {
    var a5 = r6[n5];
    if (null != a5) switch (n5) {
      case "children":
        o3 = a5;
        break;
      case "dangerouslySetInnerHTML":
        s5 = a5;
        break;
      default:
        pushAttribute$1(e3, n5, a5);
    }
  }
  return e3.push(jr), pushInnerHTML$1(e3, s5, o3), "string" == typeof o3 && e3.push(stringToChunk(("" + o3).replace(wr, scriptReplacer$1))), e3.push(endChunkForTag$1("script")), null;
}
function pushStartSingletonElement$1(e3, r6, n5) {
  e3.push(startChunkForTag$1(n5));
  var o3, s5 = n5 = null;
  for (o3 in r6) if (Qt.call(r6, o3)) {
    var a5 = r6[o3];
    if (null != a5) switch (o3) {
      case "children":
        n5 = a5;
        break;
      case "dangerouslySetInnerHTML":
        s5 = a5;
        break;
      default:
        pushAttribute$1(e3, o3, a5);
    }
  }
  return e3.push(jr), pushInnerHTML$1(e3, s5, n5), n5;
}
function pushStartGenericElement$1(e3, r6, n5) {
  e3.push(startChunkForTag$1(n5));
  var o3, s5 = n5 = null;
  for (o3 in r6) if (Qt.call(r6, o3)) {
    var a5 = r6[o3];
    if (null != a5) switch (o3) {
      case "children":
        n5 = a5;
        break;
      case "dangerouslySetInnerHTML":
        s5 = a5;
        break;
      default:
        pushAttribute$1(e3, o3, a5);
    }
  }
  return e3.push(jr), pushInnerHTML$1(e3, s5, n5), "string" == typeof n5 ? (e3.push(stringToChunk(escapeTextForBrowser$1(n5))), null) : n5;
}
function startChunkForTag$1(e3) {
  var r6 = Gr.get(e3);
  if (void 0 === r6) {
    if (!Kr.test(e3)) throw Error("Invalid tag: " + e3);
    r6 = stringToPrecomputedChunk("<" + e3), Gr.set(e3, r6);
  }
  return r6;
}
function pushStartInstance$1(e3, r6, n5, o3, s5, a5, i6, l5, u4, c4) {
  switch (r6) {
    case "div":
    case "span":
    case "svg":
    case "path":
    case "g":
    case "p":
    case "li":
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      break;
    case "a":
      e3.push(startChunkForTag$1("a"));
      var h4, p4 = null, g3 = null;
      for (h4 in n5) if (Qt.call(n5, h4)) {
        var y3 = n5[h4];
        if (null != y3) switch (h4) {
          case "children":
            p4 = y3;
            break;
          case "dangerouslySetInnerHTML":
            g3 = y3;
            break;
          case "href":
            "" === y3 ? pushStringAttribute$1(e3, "href", "") : pushAttribute$1(e3, h4, y3);
            break;
          default:
            pushAttribute$1(e3, h4, y3);
        }
      }
      if (e3.push(jr), pushInnerHTML$1(e3, g3, p4), "string" == typeof p4) {
        e3.push(stringToChunk(escapeTextForBrowser$1(p4)));
        var v3 = null;
      } else v3 = p4;
      return v3;
    case "select":
      e3.push(startChunkForTag$1("select"));
      var b3, k4 = null, C4 = null;
      for (b3 in n5) if (Qt.call(n5, b3)) {
        var P4 = n5[b3];
        if (null != P4) switch (b3) {
          case "children":
            k4 = P4;
            break;
          case "dangerouslySetInnerHTML":
            C4 = P4;
            break;
          case "defaultValue":
          case "value":
            break;
          default:
            pushAttribute$1(e3, b3, P4);
        }
      }
      return e3.push(jr), pushInnerHTML$1(e3, C4, k4), k4;
    case "option":
      var R4 = l5.selectedValue;
      e3.push(startChunkForTag$1("option"));
      var $3, T4 = null, F4 = null, E4 = null, I4 = null;
      for ($3 in n5) if (Qt.call(n5, $3)) {
        var A4 = n5[$3];
        if (null != A4) switch ($3) {
          case "children":
            T4 = A4;
            break;
          case "selected":
            E4 = A4;
            break;
          case "dangerouslySetInnerHTML":
            I4 = A4;
            break;
          case "value":
            F4 = A4;
          default:
            pushAttribute$1(e3, $3, A4);
        }
      }
      if (null != R4) {
        var O4 = null !== F4 ? "" + F4 : function(e4) {
          var r7 = "";
          return wt.Children.forEach(e4, function(e5) {
            null != e5 && (r7 += e5);
          }), r7;
        }(T4);
        if (Vt(R4)) {
          for (var B3 = 0; B3 < R4.length; B3++) if ("" + R4[B3] === O4) {
            e3.push(zr);
            break;
          }
        } else "" + R4 === O4 && e3.push(zr);
      } else E4 && e3.push(zr);
      return e3.push(jr), pushInnerHTML$1(e3, I4, T4), T4;
    case "textarea":
      e3.push(startChunkForTag$1("textarea"));
      var N4, D4 = null, H3 = null, W4 = null;
      for (N4 in n5) if (Qt.call(n5, N4)) {
        var V4 = n5[N4];
        if (null != V4) switch (N4) {
          case "children":
            W4 = V4;
            break;
          case "value":
            D4 = V4;
            break;
          case "defaultValue":
            H3 = V4;
            break;
          case "dangerouslySetInnerHTML":
            throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
          default:
            pushAttribute$1(e3, N4, V4);
        }
      }
      if (null === D4 && null !== H3 && (D4 = H3), e3.push(jr), null != W4) {
        if (null != D4) throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (Vt(W4)) {
          if (1 < W4.length) throw Error("<textarea> can only have at most one child.");
          D4 = "" + W4[0];
        }
        D4 = "" + W4;
      }
      return "string" == typeof D4 && "\n" === D4[0] && e3.push(Ur), null !== D4 && e3.push(stringToChunk(escapeTextForBrowser$1("" + D4))), null;
    case "input":
      e3.push(startChunkForTag$1("input"));
      var q3, G3 = null, X4 = null, Q3 = null, Y4 = null, Z3 = null, ee3 = null, te3 = null, re3 = null, ne3 = null;
      for (q3 in n5) if (Qt.call(n5, q3)) {
        var oe3 = n5[q3];
        if (null != oe3) switch (q3) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
          case "name":
            G3 = oe3;
            break;
          case "formAction":
            X4 = oe3;
            break;
          case "formEncType":
            Q3 = oe3;
            break;
          case "formMethod":
            Y4 = oe3;
            break;
          case "formTarget":
            Z3 = oe3;
            break;
          case "defaultChecked":
            ne3 = oe3;
            break;
          case "defaultValue":
            te3 = oe3;
            break;
          case "checked":
            re3 = oe3;
            break;
          case "value":
            ee3 = oe3;
            break;
          default:
            pushAttribute$1(e3, q3, oe3);
        }
      }
      var ae3 = pushFormActionAttribute$1(e3, o3, s5, X4, Q3, Y4, Z3, G3);
      return null !== re3 ? pushBooleanAttribute$1(e3, "checked", re3) : null !== ne3 && pushBooleanAttribute$1(e3, "checked", ne3), null !== ee3 ? pushAttribute$1(e3, "value", ee3) : null !== te3 && pushAttribute$1(e3, "value", te3), e3.push(Br), null != ae3 && ae3.forEach(pushAdditionalFormField$1, e3), null;
    case "button":
      e3.push(startChunkForTag$1("button"));
      var ie3, le3 = null, ue3 = null, ce3 = null, de3 = null, he3 = null, pe3 = null, ge3 = null;
      for (ie3 in n5) if (Qt.call(n5, ie3)) {
        var ye3 = n5[ie3];
        if (null != ye3) switch (ie3) {
          case "children":
            le3 = ye3;
            break;
          case "dangerouslySetInnerHTML":
            ue3 = ye3;
            break;
          case "name":
            ce3 = ye3;
            break;
          case "formAction":
            de3 = ye3;
            break;
          case "formEncType":
            he3 = ye3;
            break;
          case "formMethod":
            pe3 = ye3;
            break;
          case "formTarget":
            ge3 = ye3;
            break;
          default:
            pushAttribute$1(e3, ie3, ye3);
        }
      }
      var ve3 = pushFormActionAttribute$1(e3, o3, s5, de3, he3, pe3, ge3, ce3);
      if (e3.push(jr), null != ve3 && ve3.forEach(pushAdditionalFormField$1, e3), pushInnerHTML$1(e3, ue3, le3), "string" == typeof le3) {
        e3.push(stringToChunk(escapeTextForBrowser$1(le3)));
        var be3 = null;
      } else be3 = le3;
      return be3;
    case "form":
      e3.push(startChunkForTag$1("form"));
      var Se3, ke3 = null, Ce3 = null, we3 = null, Pe3 = null, Re3 = null, xe3 = null;
      for (Se3 in n5) if (Qt.call(n5, Se3)) {
        var $e3 = n5[Se3];
        if (null != $e3) switch (Se3) {
          case "children":
            ke3 = $e3;
            break;
          case "dangerouslySetInnerHTML":
            Ce3 = $e3;
            break;
          case "action":
            we3 = $e3;
            break;
          case "encType":
            Pe3 = $e3;
            break;
          case "method":
            Re3 = $e3;
            break;
          case "target":
            xe3 = $e3;
            break;
          default:
            pushAttribute$1(e3, Se3, $e3);
        }
      }
      var Te3 = null, Fe3 = null;
      if ("function" == typeof we3) {
        var Ee3 = getCustomFormFields$1(o3, we3);
        null !== Ee3 ? (we3 = Ee3.action || "", Pe3 = Ee3.encType, Re3 = Ee3.method, xe3 = Ee3.target, Te3 = Ee3.data, Fe3 = Ee3.name) : (e3.push(_r, stringToChunk("action"), Ir, Or, Ar), xe3 = Re3 = Pe3 = we3 = null, injectFormReplayingRuntime$1(o3, s5));
      }
      if (null != we3 && pushAttribute$1(e3, "action", we3), null != Pe3 && pushAttribute$1(e3, "encType", Pe3), null != Re3 && pushAttribute$1(e3, "method", Re3), null != xe3 && pushAttribute$1(e3, "target", xe3), e3.push(jr), null !== Fe3 && (e3.push(Lr), pushStringAttribute$1(e3, "name", Fe3), e3.push(Br), null != Te3 && Te3.forEach(pushAdditionalFormField$1, e3)), pushInnerHTML$1(e3, Ce3, ke3), "string" == typeof ke3) {
        e3.push(stringToChunk(escapeTextForBrowser$1(ke3)));
        var _e3 = null;
      } else _e3 = ke3;
      return _e3;
    case "menuitem":
      for (var Ie3 in e3.push(startChunkForTag$1("menuitem")), n5) if (Qt.call(n5, Ie3)) {
        var Ae3 = n5[Ie3];
        if (null != Ae3) switch (Ie3) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
          default:
            pushAttribute$1(e3, Ie3, Ae3);
        }
      }
      return e3.push(jr), null;
    case "object":
      e3.push(startChunkForTag$1("object"));
      var Me3, Oe3 = null, Be3 = null;
      for (Me3 in n5) if (Qt.call(n5, Me3)) {
        var Ne3 = n5[Me3];
        if (null != Ne3) switch (Me3) {
          case "children":
            Oe3 = Ne3;
            break;
          case "dangerouslySetInnerHTML":
            Be3 = Ne3;
            break;
          case "data":
            var ze3 = sanitizeURL$1("" + Ne3);
            if ("" === ze3) break;
            e3.push(_r, stringToChunk("data"), Ir, stringToChunk(escapeTextForBrowser$1(ze3)), Ar);
            break;
          default:
            pushAttribute$1(e3, Me3, Ne3);
        }
      }
      if (e3.push(jr), pushInnerHTML$1(e3, Be3, Oe3), "string" == typeof Oe3) {
        e3.push(stringToChunk(escapeTextForBrowser$1(Oe3)));
        var De3 = null;
      } else De3 = Oe3;
      return De3;
    case "title":
      if (4 === l5.insertionMode || 1 & l5.tagScope || null != n5.itemProp) var He3 = pushTitleImpl$1(e3, n5);
      else c4 ? He3 = null : (pushTitleImpl$1(s5.hoistableChunks, n5), He3 = void 0);
      return He3;
    case "link":
      var We3 = n5.rel, Ve3 = n5.href, qe3 = n5.precedence;
      if (4 === l5.insertionMode || 1 & l5.tagScope || null != n5.itemProp || "string" != typeof We3 || "string" != typeof Ve3 || "" === Ve3) {
        pushLinkImpl$1(e3, n5);
        var Ue3 = null;
      } else if ("stylesheet" === n5.rel) if ("string" != typeof qe3 || null != n5.disabled || n5.onLoad || n5.onError) Ue3 = pushLinkImpl$1(e3, n5);
      else {
        var Ke3 = s5.styles.get(qe3), Ge3 = o3.styleResources.hasOwnProperty(Ve3) ? o3.styleResources[Ve3] : void 0;
        if (null !== Ge3) {
          o3.styleResources[Ve3] = null, Ke3 || (Ke3 = { precedence: stringToChunk(escapeTextForBrowser$1(qe3)), rules: [], hrefs: [], sheets: /* @__PURE__ */ new Map() }, s5.styles.set(qe3, Ke3));
          var Je3 = { state: 0, props: Xt({}, n5, { "data-precedence": n5.precedence, precedence: null }) };
          if (Ge3) {
            2 === Ge3.length && adoptPreloadCredentials$1(Je3.props, Ge3);
            var Xe3 = s5.preloads.stylesheets.get(Ve3);
            Xe3 && 0 < Xe3.length ? Xe3.length = 0 : Je3.state = 1;
          }
          Ke3.sheets.set(Ve3, Je3), i6 && i6.stylesheets.add(Je3);
        } else if (Ke3) {
          var Qe3 = Ke3.sheets.get(Ve3);
          Qe3 && i6 && i6.stylesheets.add(Qe3);
        }
        u4 && e3.push(xr), Ue3 = null;
      }
      else n5.onLoad || n5.onError ? Ue3 = pushLinkImpl$1(e3, n5) : (u4 && e3.push(xr), Ue3 = c4 ? null : pushLinkImpl$1(s5.hoistableChunks, n5));
      return Ue3;
    case "script":
      var Ze3 = n5.async;
      if ("string" != typeof n5.src || !n5.src || !Ze3 || "function" == typeof Ze3 || "symbol" == typeof Ze3 || n5.onLoad || n5.onError || 4 === l5.insertionMode || 1 & l5.tagScope || null != n5.itemProp) var et3 = pushScriptImpl$1(e3, n5);
      else {
        var tt3 = n5.src;
        if ("module" === n5.type) var rt3 = o3.moduleScriptResources, nt3 = s5.preloads.moduleScripts;
        else rt3 = o3.scriptResources, nt3 = s5.preloads.scripts;
        var ot3 = rt3.hasOwnProperty(tt3) ? rt3[tt3] : void 0;
        if (null !== ot3) {
          rt3[tt3] = null;
          var st3 = n5;
          if (ot3) {
            2 === ot3.length && adoptPreloadCredentials$1(st3 = Xt({}, n5), ot3);
            var at3 = nt3.get(tt3);
            at3 && (at3.length = 0);
          }
          var it3 = [];
          s5.scripts.add(it3), pushScriptImpl$1(it3, st3);
        }
        u4 && e3.push(xr), et3 = null;
      }
      return et3;
    case "style":
      var lt3 = n5.precedence, ut3 = n5.href;
      if (4 === l5.insertionMode || 1 & l5.tagScope || null != n5.itemProp || "string" != typeof lt3 || "string" != typeof ut3 || "" === ut3) {
        e3.push(startChunkForTag$1("style"));
        var ct3, dt3 = null, ht3 = null;
        for (ct3 in n5) if (Qt.call(n5, ct3)) {
          var pt3 = n5[ct3];
          if (null != pt3) switch (ct3) {
            case "children":
              dt3 = pt3;
              break;
            case "dangerouslySetInnerHTML":
              ht3 = pt3;
              break;
            default:
              pushAttribute$1(e3, ct3, pt3);
          }
        }
        e3.push(jr);
        var ft3 = Array.isArray(dt3) ? 2 > dt3.length ? dt3[0] : null : dt3;
        "function" != typeof ft3 && "symbol" != typeof ft3 && null != ft3 && e3.push(stringToChunk(("" + ft3).replace(qr, styleReplacer$1))), pushInnerHTML$1(e3, ht3, dt3), e3.push(endChunkForTag$1("style"));
        var mt3 = null;
      } else {
        var gt3 = s5.styles.get(lt3);
        if (null !== (o3.styleResources.hasOwnProperty(ut3) ? o3.styleResources[ut3] : void 0)) {
          o3.styleResources[ut3] = null, gt3 ? gt3.hrefs.push(stringToChunk(escapeTextForBrowser$1(ut3))) : (gt3 = { precedence: stringToChunk(escapeTextForBrowser$1(lt3)), rules: [], hrefs: [stringToChunk(escapeTextForBrowser$1(ut3))], sheets: /* @__PURE__ */ new Map() }, s5.styles.set(lt3, gt3));
          var yt3, vt3 = gt3.rules, bt3 = null, St3 = null;
          for (yt3 in n5) if (Qt.call(n5, yt3)) {
            var kt3 = n5[yt3];
            if (null != kt3) switch (yt3) {
              case "children":
                bt3 = kt3;
                break;
              case "dangerouslySetInnerHTML":
                St3 = kt3;
            }
          }
          var Ct3 = Array.isArray(bt3) ? 2 > bt3.length ? bt3[0] : null : bt3;
          "function" != typeof Ct3 && "symbol" != typeof Ct3 && null != Ct3 && vt3.push(stringToChunk(("" + Ct3).replace(qr, styleReplacer$1))), pushInnerHTML$1(vt3, St3, bt3);
        }
        gt3 && i6 && i6.styles.add(gt3), u4 && e3.push(xr), mt3 = void 0;
      }
      return mt3;
    case "meta":
      if (4 === l5.insertionMode || 1 & l5.tagScope || null != n5.itemProp) var Pt3 = pushSelfClosing$1(e3, n5, "meta");
      else u4 && e3.push(xr), Pt3 = c4 ? null : "string" == typeof n5.charSet ? pushSelfClosing$1(s5.charsetChunks, n5, "meta") : "viewport" === n5.name ? pushSelfClosing$1(s5.viewportChunks, n5, "meta") : pushSelfClosing$1(s5.hoistableChunks, n5, "meta");
      return Pt3;
    case "listing":
    case "pre":
      e3.push(startChunkForTag$1(r6));
      var Rt3, xt3 = null, $t3 = null;
      for (Rt3 in n5) if (Qt.call(n5, Rt3)) {
        var Tt3 = n5[Rt3];
        if (null != Tt3) switch (Rt3) {
          case "children":
            xt3 = Tt3;
            break;
          case "dangerouslySetInnerHTML":
            $t3 = Tt3;
            break;
          default:
            pushAttribute$1(e3, Rt3, Tt3);
        }
      }
      if (e3.push(jr), null != $t3) {
        if (null != xt3) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if ("object" != typeof $t3 || !("__html" in $t3)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");
        var Ft3 = $t3.__html;
        null != Ft3 && ("string" == typeof Ft3 && 0 < Ft3.length && "\n" === Ft3[0] ? e3.push(Ur, stringToChunk(Ft3)) : e3.push(stringToChunk("" + Ft3)));
      }
      return "string" == typeof xt3 && "\n" === xt3[0] && e3.push(Ur), xt3;
    case "img":
      var Et3 = n5.src, _t3 = n5.srcSet;
      if (!("lazy" === n5.loading || !Et3 && !_t3 || "string" != typeof Et3 && null != Et3 || "string" != typeof _t3 && null != _t3) && "low" !== n5.fetchPriority && false == !!(3 & l5.tagScope) && ("string" != typeof Et3 || ":" !== Et3[4] || "d" !== Et3[0] && "D" !== Et3[0] || "a" !== Et3[1] && "A" !== Et3[1] || "t" !== Et3[2] && "T" !== Et3[2] || "a" !== Et3[3] && "A" !== Et3[3]) && ("string" != typeof _t3 || ":" !== _t3[4] || "d" !== _t3[0] && "D" !== _t3[0] || "a" !== _t3[1] && "A" !== _t3[1] || "t" !== _t3[2] && "T" !== _t3[2] || "a" !== _t3[3] && "A" !== _t3[3])) {
        var It3 = "string" == typeof n5.sizes ? n5.sizes : void 0, At3 = _t3 ? _t3 + "\n" + (It3 || "") : Et3, Mt3 = s5.preloads.images, Ot3 = Mt3.get(At3);
        if (Ot3) ("high" === n5.fetchPriority || 10 > s5.highImagePreloads.size) && (Mt3.delete(At3), s5.highImagePreloads.add(Ot3));
        else if (!o3.imageResources.hasOwnProperty(At3)) {
          o3.imageResources[At3] = pr;
          var Lt3, jt3 = n5.crossOrigin, Bt3 = "string" == typeof jt3 ? "use-credentials" === jt3 ? jt3 : "" : void 0, Nt3 = s5.headers;
          Nt3 && 0 < Nt3.remainingCapacity && "string" != typeof n5.srcSet && ("high" === n5.fetchPriority || 500 > Nt3.highImagePreloads.length) && (Lt3 = getPreloadAsHeader$1(Et3, "image", { imageSrcSet: n5.srcSet, imageSizes: n5.sizes, crossOrigin: Bt3, integrity: n5.integrity, nonce: n5.nonce, type: n5.type, fetchPriority: n5.fetchPriority, referrerPolicy: n5.refererPolicy }), 0 <= (Nt3.remainingCapacity -= Lt3.length + 2)) ? (s5.resets.image[At3] = pr, Nt3.highImagePreloads && (Nt3.highImagePreloads += ", "), Nt3.highImagePreloads += Lt3) : (pushLinkImpl$1(Ot3 = [], { rel: "preload", as: "image", href: _t3 ? void 0 : Et3, imageSrcSet: _t3, imageSizes: It3, crossOrigin: Bt3, integrity: n5.integrity, type: n5.type, fetchPriority: n5.fetchPriority, referrerPolicy: n5.referrerPolicy }), "high" === n5.fetchPriority || 10 > s5.highImagePreloads.size ? s5.highImagePreloads.add(Ot3) : (s5.bulkPreloads.add(Ot3), Mt3.set(At3, Ot3)));
        }
      }
      return pushSelfClosing$1(e3, n5, "img");
    case "base":
    case "area":
    case "br":
    case "col":
    case "embed":
    case "hr":
    case "keygen":
    case "param":
    case "source":
    case "track":
    case "wbr":
      return pushSelfClosing$1(e3, n5, r6);
    case "head":
      if (2 > l5.insertionMode) {
        var zt3 = a5 || s5.preamble;
        if (zt3.headChunks) throw Error("The `<head>` tag may only be rendered once.");
        zt3.headChunks = [];
        var Dt3 = pushStartSingletonElement$1(zt3.headChunks, n5, "head");
      } else Dt3 = pushStartGenericElement$1(e3, n5, "head");
      return Dt3;
    case "body":
      if (2 > l5.insertionMode) {
        var Ht3 = a5 || s5.preamble;
        if (Ht3.bodyChunks) throw Error("The `<body>` tag may only be rendered once.");
        Ht3.bodyChunks = [];
        var Wt3 = pushStartSingletonElement$1(Ht3.bodyChunks, n5, "body");
      } else Wt3 = pushStartGenericElement$1(e3, n5, "body");
      return Wt3;
    case "html":
      if (0 === l5.insertionMode) {
        var qt3 = a5 || s5.preamble;
        if (qt3.htmlChunks) throw Error("The `<html>` tag may only be rendered once.");
        qt3.htmlChunks = [Jr];
        var Ut3 = pushStartSingletonElement$1(qt3.htmlChunks, n5, "html");
      } else Ut3 = pushStartGenericElement$1(e3, n5, "html");
      return Ut3;
    default:
      if (-1 !== r6.indexOf("-")) {
        e3.push(startChunkForTag$1(r6));
        var Kt3, Gt3 = null, Jt3 = null;
        for (Kt3 in n5) if (Qt.call(n5, Kt3)) {
          var Yt3 = n5[Kt3];
          if (null != Yt3) {
            var Zt3 = Kt3;
            switch (Kt3) {
              case "children":
                Gt3 = Yt3;
                break;
              case "dangerouslySetInnerHTML":
                Jt3 = Yt3;
                break;
              case "style":
                pushStyleAttribute$1(e3, Yt3);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
              case "ref":
                break;
              case "className":
                Zt3 = "class";
              default:
                if (isAttributeNameSafe$1(Kt3) && "function" != typeof Yt3 && "symbol" != typeof Yt3 && false !== Yt3) {
                  if (true === Yt3) Yt3 = "";
                  else if ("object" == typeof Yt3) continue;
                  e3.push(_r, stringToChunk(Zt3), Ir, stringToChunk(escapeTextForBrowser$1(Yt3)), Ar);
                }
            }
          }
        }
        return e3.push(jr), pushInnerHTML$1(e3, Jt3, Gt3), Gt3;
      }
  }
  return pushStartGenericElement$1(e3, n5, r6);
}
function endChunkForTag$1(e3) {
  var r6 = Xr.get(e3);
  return void 0 === r6 && (r6 = stringToPrecomputedChunk("</" + e3 + ">"), Xr.set(e3, r6)), r6;
}
function hoistPreambleState$1(e3, r6) {
  null === (e3 = e3.preamble).htmlChunks && r6.htmlChunks && (e3.htmlChunks = r6.htmlChunks, r6.contribution |= 1), null === e3.headChunks && r6.headChunks && (e3.headChunks = r6.headChunks, r6.contribution |= 4), null === e3.bodyChunks && r6.bodyChunks && (e3.bodyChunks = r6.bodyChunks, r6.contribution |= 2);
}
function writeBootstrap$1(e3, r6) {
  r6 = r6.bootstrapChunks;
  for (var n5 = 0; n5 < r6.length - 1; n5++) writeChunk(e3, r6[n5]);
  return !(n5 < r6.length) || (n5 = r6[n5], r6.length = 0, writeChunkAndReturn(e3, n5));
}
function writeStartPendingSuspenseBoundary$1(e3, r6, n5) {
  if (writeChunk(e3, en), null === n5) throw Error("An ID must have been assigned before we can complete the boundary.");
  return writeChunk(e3, r6.boundaryPrefix), writeChunk(e3, stringToChunk(n5.toString(16))), writeChunkAndReturn(e3, tn);
}
function writePreambleContribution$1(e3, r6) {
  0 !== (r6 = r6.contribution) && (writeChunk(e3, un), writeChunk(e3, stringToChunk("" + r6)), writeChunk(e3, cn));
}
function escapeJSStringsForInstructionScripts$1(e3) {
  return JSON.stringify(e3).replace(Xn, function(e4) {
    switch (e4) {
      case "<":
        return "\\u003c";
      case "\u2028":
        return "\\u2028";
      case "\u2029":
        return "\\u2029";
      default:
        throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
    }
  });
}
function escapeJSObjectForInstructionScripts$1(e3) {
  return JSON.stringify(e3).replace(Qn, function(e4) {
    switch (e4) {
      case "&":
        return "\\u0026";
      case ">":
        return "\\u003e";
      case "<":
        return "\\u003c";
      case "\u2028":
        return "\\u2028";
      case "\u2029":
        return "\\u2029";
      default:
        throw Error("escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
    }
  });
}
function flushStyleTagsLateForBoundary$1(e3) {
  var r6 = e3.rules, n5 = e3.hrefs, o3 = 0;
  if (n5.length) {
    for (writeChunk(this, Yn), writeChunk(this, e3.precedence), writeChunk(this, Zn); o3 < n5.length - 1; o3++) writeChunk(this, n5[o3]), writeChunk(this, io);
    for (writeChunk(this, n5[o3]), writeChunk(this, eo), o3 = 0; o3 < r6.length; o3++) writeChunk(this, r6[o3]);
    no = writeChunkAndReturn(this, to), ro = true, r6.length = 0, n5.length = 0;
  }
}
function hasStylesToHoist$1(e3) {
  return 2 !== e3.state && (ro = true);
}
function writeHoistablesForBoundary$1(e3, r6, n5) {
  return ro = false, no = true, r6.styles.forEach(flushStyleTagsLateForBoundary$1, e3), r6.stylesheets.forEach(hasStylesToHoist$1), ro && (n5.stylesToHoist = true), no;
}
function flushResource$1(e3) {
  for (var r6 = 0; r6 < e3.length; r6++) writeChunk(this, e3[r6]);
  e3.length = 0;
}
function flushStyleInPreamble$1(e3) {
  pushLinkImpl$1(oo, e3.props);
  for (var r6 = 0; r6 < oo.length; r6++) writeChunk(this, oo[r6]);
  oo.length = 0, e3.state = 2;
}
function flushStylesInPreamble$1(e3) {
  var r6 = 0 < e3.sheets.size;
  e3.sheets.forEach(flushStyleInPreamble$1, this), e3.sheets.clear();
  var n5 = e3.rules, o3 = e3.hrefs;
  if (!r6 || o3.length) {
    if (writeChunk(this, so), writeChunk(this, e3.precedence), e3 = 0, o3.length) {
      for (writeChunk(this, ao); e3 < o3.length - 1; e3++) writeChunk(this, o3[e3]), writeChunk(this, io);
      writeChunk(this, o3[e3]);
    }
    for (writeChunk(this, lo), e3 = 0; e3 < n5.length; e3++) writeChunk(this, n5[e3]);
    writeChunk(this, uo), n5.length = 0, o3.length = 0;
  }
}
function preloadLateStyle$1(e3) {
  if (0 === e3.state) {
    e3.state = 1;
    var r6 = e3.props;
    for (pushLinkImpl$1(oo, { rel: "preload", as: "style", href: e3.props.href, crossOrigin: r6.crossOrigin, fetchPriority: r6.fetchPriority, integrity: r6.integrity, media: r6.media, hrefLang: r6.hrefLang, referrerPolicy: r6.referrerPolicy }), e3 = 0; e3 < oo.length; e3++) writeChunk(this, oo[e3]);
    oo.length = 0;
  }
}
function preloadLateStyles$1(e3) {
  e3.sheets.forEach(preloadLateStyle$1, this), e3.sheets.clear();
}
function writeStyleResourceAttributeInJS$1(e3, r6, n5) {
  var o3 = r6.toLowerCase();
  switch (typeof n5) {
    case "function":
    case "symbol":
      return;
  }
  switch (r6) {
    case "innerHTML":
    case "dangerouslySetInnerHTML":
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "style":
    case "ref":
      return;
    case "className":
      o3 = "class", r6 = "" + n5;
      break;
    case "hidden":
      if (false === n5) return;
      r6 = "";
      break;
    case "src":
    case "href":
      r6 = "" + (n5 = sanitizeURL$1(n5));
      break;
    default:
      if (2 < r6.length && ("o" === r6[0] || "O" === r6[0]) && ("n" === r6[1] || "N" === r6[1]) || !isAttributeNameSafe$1(r6)) return;
      r6 = "" + n5;
  }
  writeChunk(e3, po), writeChunk(e3, stringToChunk(escapeJSObjectForInstructionScripts$1(o3))), writeChunk(e3, po), writeChunk(e3, stringToChunk(escapeJSObjectForInstructionScripts$1(r6)));
}
function createHoistableState$1() {
  return { styles: /* @__PURE__ */ new Set(), stylesheets: /* @__PURE__ */ new Set() };
}
function adoptPreloadCredentials$1(e3, r6) {
  null == e3.crossOrigin && (e3.crossOrigin = r6[0]), null == e3.integrity && (e3.integrity = r6[1]);
}
function getPreloadAsHeader$1(e3, r6, n5) {
  for (var o3 in r6 = "<" + (e3 = ("" + e3).replace(mo, escapeHrefForLinkHeaderURLContextReplacer$1)) + '>; rel=preload; as="' + (r6 = ("" + r6).replace(go, escapeStringForLinkHeaderQuotedParamValueContextReplacer$1)) + '"', n5) Qt.call(n5, o3) && ("string" == typeof (e3 = n5[o3]) && (r6 += "; " + o3.toLowerCase() + '="' + ("" + e3).replace(go, escapeStringForLinkHeaderQuotedParamValueContextReplacer$1) + '"'));
  return r6;
}
function escapeHrefForLinkHeaderURLContextReplacer$1(e3) {
  switch (e3) {
    case "<":
      return "%3C";
    case ">":
      return "%3E";
    case "\n":
      return "%0A";
    case "\r":
      return "%0D";
    default:
      throw Error("escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
  }
}
function escapeStringForLinkHeaderQuotedParamValueContextReplacer$1(e3) {
  switch (e3) {
    case '"':
      return "%22";
    case "'":
      return "%27";
    case ";":
      return "%3B";
    case ",":
      return "%2C";
    case "\n":
      return "%0A";
    case "\r":
      return "%0D";
    default:
      throw Error("escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
  }
}
function hoistStyleQueueDependency$1(e3) {
  this.styles.add(e3);
}
function hoistStylesheetDependency$1(e3) {
  this.stylesheets.add(e3);
}
function getComponentNameFromType$1(e3) {
  if (null == e3) return null;
  if ("function" == typeof e3) return e3.$$typeof === So ? null : e3.displayName || e3.name || null;
  if ("string" == typeof e3) return e3;
  switch (e3) {
    case $t:
      return "Fragment";
    case Ft:
      return "Profiler";
    case Tt:
      return "StrictMode";
    case Mt:
      return "Suspense";
    case Ot:
      return "SuspenseList";
    case Nt:
      return "Activity";
  }
  if ("object" == typeof e3) switch (e3.$$typeof) {
    case xt:
      return "Portal";
    case It:
      return (e3.displayName || "Context") + ".Provider";
    case _t:
      return (e3._context.displayName || "Context") + ".Consumer";
    case At:
      var r6 = e3.render;
      return (e3 = e3.displayName) || (e3 = "" !== (e3 = r6.displayName || r6.name || "") ? "ForwardRef(" + e3 + ")" : "ForwardRef"), e3;
    case Lt:
      return null !== (r6 = e3.displayName || null) ? r6 : getComponentNameFromType$1(e3.type) || "Memo";
    case jt:
      r6 = e3._payload, e3 = e3._init;
      try {
        return getComponentNameFromType$1(e3(r6));
      } catch (e4) {
      }
  }
  return null;
}
function popToNearestCommonAncestor$1(e3, r6) {
  if (e3 !== r6) {
    e3.context._currentValue = e3.parentValue, e3 = e3.parent;
    var n5 = r6.parent;
    if (null === e3) {
      if (null !== n5) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
    } else {
      if (null === n5) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
      popToNearestCommonAncestor$1(e3, n5);
    }
    r6.context._currentValue = r6.value;
  }
}
function popAllPrevious$1(e3) {
  e3.context._currentValue = e3.parentValue, null !== (e3 = e3.parent) && popAllPrevious$1(e3);
}
function pushAllNext$1(e3) {
  var r6 = e3.parent;
  null !== r6 && pushAllNext$1(r6), e3.context._currentValue = e3.value;
}
function popPreviousToCommonLevel$1(e3, r6) {
  if (e3.context._currentValue = e3.parentValue, null === (e3 = e3.parent)) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
  e3.depth === r6.depth ? popToNearestCommonAncestor$1(e3, r6) : popPreviousToCommonLevel$1(e3, r6);
}
function popNextToCommonLevel$1(e3, r6) {
  var n5 = r6.parent;
  if (null === n5) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
  e3.depth === n5.depth ? popToNearestCommonAncestor$1(e3, n5) : popNextToCommonLevel$1(e3, n5), r6.context._currentValue = r6.value;
}
function switchContext$1(e3) {
  var r6 = Co;
  r6 !== e3 && (null === r6 ? pushAllNext$1(e3) : null === e3 ? popAllPrevious$1(r6) : r6.depth === e3.depth ? popToNearestCommonAncestor$1(r6, e3) : r6.depth > e3.depth ? popPreviousToCommonLevel$1(r6, e3) : popNextToCommonLevel$1(r6, e3), Co = e3);
}
function pushTreeContext$1(e3, r6, n5) {
  var o3 = e3.id;
  e3 = e3.overflow;
  var s5 = 32 - Ro(o3) - 1;
  o3 &= ~(1 << s5), n5 += 1;
  var a5 = 32 - Ro(r6) + s5;
  if (30 < a5) {
    var i6 = s5 - s5 % 5;
    return a5 = (o3 & (1 << i6) - 1).toString(32), o3 >>= i6, s5 -= i6, { id: 1 << 32 - Ro(r6) + s5 | n5 << s5 | o3, overflow: a5 + e3 };
  }
  return { id: 1 << a5 | n5 << s5 | o3, overflow: e3 };
}
function noop$2$1() {
}
function getSuspendedThenable$1() {
  if (null === Fo) throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");
  var e3 = Fo;
  return Fo = null, e3;
}
function resolveCurrentlyRenderingComponent$1() {
  if (null === _o) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
  return _o;
}
function createHook$1() {
  if (0 < qo) throw Error("Rendered more hooks than during the previous render");
  return { memoizedState: null, queue: null, next: null };
}
function createWorkInProgressHook$1() {
  return null === Lo ? null === Oo ? (jo = false, Oo = Lo = createHook$1()) : (jo = true, Lo = Oo) : null === Lo.next ? (jo = false, Lo = Lo.next = createHook$1()) : (jo = true, Lo = Lo.next), Lo;
}
function getThenableStateAfterSuspending$1() {
  var e3 = Wo;
  return Wo = null, e3;
}
function resetHooksState$1() {
  Mo = Ao = Io = _o = null, Bo = false, Oo = null, qo = 0, Lo = Vo = null;
}
function basicStateReducer$1(e3, r6) {
  return "function" == typeof r6 ? r6(e3) : r6;
}
function useReducer$1(e3, r6, n5) {
  if (_o = resolveCurrentlyRenderingComponent$1(), Lo = createWorkInProgressHook$1(), jo) {
    var o3 = Lo.queue;
    if (r6 = o3.dispatch, null !== Vo && void 0 !== (n5 = Vo.get(o3))) {
      Vo.delete(o3), o3 = Lo.memoizedState;
      do {
        o3 = e3(o3, n5.action), n5 = n5.next;
      } while (null !== n5);
      return Lo.memoizedState = o3, [o3, r6];
    }
    return [Lo.memoizedState, r6];
  }
  return e3 = e3 === basicStateReducer$1 ? "function" == typeof r6 ? r6() : r6 : void 0 !== n5 ? n5(r6) : r6, Lo.memoizedState = e3, e3 = (e3 = Lo.queue = { last: null, dispatch: null }).dispatch = dispatchAction$1.bind(null, _o, e3), [Lo.memoizedState, e3];
}
function useMemo$1(e3, r6) {
  if (_o = resolveCurrentlyRenderingComponent$1(), r6 = void 0 === r6 ? null : r6, null !== (Lo = createWorkInProgressHook$1())) {
    var n5 = Lo.memoizedState;
    if (null !== n5 && null !== r6) {
      var o3 = n5[1];
      e: if (null === o3) o3 = false;
      else {
        for (var s5 = 0; s5 < o3.length && s5 < r6.length; s5++) if (!Eo(r6[s5], o3[s5])) {
          o3 = false;
          break e;
        }
        o3 = true;
      }
      if (o3) return n5[0];
    }
  }
  return e3 = e3(), Lo.memoizedState = [e3, r6], e3;
}
function dispatchAction$1(e3, r6, n5) {
  if (25 <= qo) throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
  if (e3 === _o) if (Bo = true, e3 = { action: n5, next: null }, null === Vo && (Vo = /* @__PURE__ */ new Map()), void 0 === (n5 = Vo.get(r6))) Vo.set(r6, e3);
  else {
    for (r6 = n5; null !== r6.next; ) r6 = r6.next;
    r6.next = e3;
  }
}
function unsupportedStartTransition$1() {
  throw Error("startTransition cannot be called during server rendering.");
}
function unsupportedSetOptimisticState$1() {
  throw Error("Cannot update optimistic state while rendering.");
}
function useActionState$1(e3, r6, n5) {
  resolveCurrentlyRenderingComponent$1();
  var o3 = zo++, s5 = Ao;
  if ("function" == typeof e3.$$FORM_ACTION) {
    var a5 = null, i6 = Mo;
    s5 = s5.formState;
    var l5 = e3.$$IS_SIGNATURE_EQUAL;
    if (null !== s5 && "function" == typeof l5) {
      var u4 = s5[1];
      l5.call(e3, s5[2], s5[3]) && (u4 === (a5 = void 0 !== n5 ? "p" + n5 : "k" + murmurhash3_32_gc$1(JSON.stringify([i6, null, o3]), 0)) && (Do = o3, r6 = s5[0]));
    }
    var c4 = e3.bind(null, r6);
    return e3 = /* @__PURE__ */ __name(function(e4) {
      c4(e4);
    }, "e"), "function" == typeof c4.$$FORM_ACTION && (e3.$$FORM_ACTION = function(e4) {
      e4 = c4.$$FORM_ACTION(e4), void 0 !== n5 && (n5 += "", e4.action = n5);
      var r7 = e4.data;
      return r7 && (null === a5 && (a5 = void 0 !== n5 ? "p" + n5 : "k" + murmurhash3_32_gc$1(JSON.stringify([i6, null, o3]), 0)), r7.append("$ACTION_KEY", a5)), e4;
    }), [r6, e3, false];
  }
  var h4 = e3.bind(null, r6);
  return [r6, function(e4) {
    h4(e4);
  }, false];
}
function unwrapThenable$1(e3) {
  var r6 = Ho;
  return Ho += 1, null === Wo && (Wo = []), function(e4, r7, n5) {
    switch (void 0 === (n5 = e4[n5]) ? e4.push(r7) : n5 !== r7 && (r7.then(noop$2$1, noop$2$1), r7 = n5), r7.status) {
      case "fulfilled":
        return r7.value;
      case "rejected":
        throw r7.reason;
      default:
        switch ("string" == typeof r7.status ? r7.then(noop$2$1, noop$2$1) : ((e4 = r7).status = "pending", e4.then(function(e5) {
          if ("pending" === r7.status) {
            var n6 = r7;
            n6.status = "fulfilled", n6.value = e5;
          }
        }, function(e5) {
          if ("pending" === r7.status) {
            var n6 = r7;
            n6.status = "rejected", n6.reason = e5;
          }
        })), r7.status) {
          case "fulfilled":
            return r7.value;
          case "rejected":
            throw r7.reason;
        }
        throw Fo = r7, To;
    }
  }(Wo, e3, r6);
}
function unsupportedRefresh$1() {
  throw Error("Cache cannot be refreshed during server rendering.");
}
function noop$1$1() {
}
function prepareStackTrace(e3, r6) {
  e3 = (e3.name || "Error") + ": " + (e3.message || "");
  for (var n5 = 0; n5 < r6.length; n5++) e3 += "\n    at " + r6[n5].toString();
  return e3;
}
function describeBuiltInComponentFrame$1(e3) {
  if (void 0 === Uo) try {
    throw Error();
  } catch (e4) {
    var r6 = e4.stack.trim().match(/\n( *(at )?)/);
    Uo = r6 && r6[1] || "", Ko = -1 < e4.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e4.stack.indexOf("@") ? "@unknown:0:0" : "";
  }
  return "\n" + Uo + e3 + Ko;
}
function describeNativeComponentFrame$1(e3, r6) {
  if (!e3 || Qo) return "";
  Qo = true;
  var n5 = Error.prepareStackTrace;
  Error.prepareStackTrace = prepareStackTrace;
  try {
    var o3 = { DetermineComponentFrameRoot: /* @__PURE__ */ __name(function() {
      try {
        if (r6) {
          var Fake = /* @__PURE__ */ __name(function() {
            throw Error();
          }, "Fake");
          if (Object.defineProperty(Fake.prototype, "props", { set: /* @__PURE__ */ __name(function() {
            throw Error();
          }, "set") }), "object" == typeof Reflect && Reflect.construct) {
            try {
              Reflect.construct(Fake, []);
            } catch (e4) {
              var n6 = e4;
            }
            Reflect.construct(e3, [], Fake);
          } else {
            try {
              Fake.call();
            } catch (e4) {
              n6 = e4;
            }
            e3.call(Fake.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (e4) {
            n6 = e4;
          }
          (Fake = e3()) && "function" == typeof Fake.catch && Fake.catch(function() {
          });
        }
      } catch (e4) {
        if (e4 && n6 && "string" == typeof e4.stack) return [e4.stack, n6.stack];
      }
      return [null, null];
    }, "DetermineComponentFrameRoot") };
    o3.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
    var s5 = Object.getOwnPropertyDescriptor(o3.DetermineComponentFrameRoot, "name");
    s5 && s5.configurable && Object.defineProperty(o3.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
    var a5 = o3.DetermineComponentFrameRoot(), i6 = a5[0], l5 = a5[1];
    if (i6 && l5) {
      var u4 = i6.split("\n"), c4 = l5.split("\n");
      for (s5 = o3 = 0; o3 < u4.length && !u4[o3].includes("DetermineComponentFrameRoot"); ) o3++;
      for (; s5 < c4.length && !c4[s5].includes("DetermineComponentFrameRoot"); ) s5++;
      if (o3 === u4.length || s5 === c4.length) for (o3 = u4.length - 1, s5 = c4.length - 1; 1 <= o3 && 0 <= s5 && u4[o3] !== c4[s5]; ) s5--;
      for (; 1 <= o3 && 0 <= s5; o3--, s5--) if (u4[o3] !== c4[s5]) {
        if (1 !== o3 || 1 !== s5) do {
          if (o3--, 0 > --s5 || u4[o3] !== c4[s5]) {
            var h4 = "\n" + u4[o3].replace(" at new ", " at ");
            return e3.displayName && h4.includes("<anonymous>") && (h4 = h4.replace("<anonymous>", e3.displayName)), h4;
          }
        } while (1 <= o3 && 0 <= s5);
        break;
      }
    }
  } finally {
    Qo = false, Error.prepareStackTrace = n5;
  }
  return (n5 = e3 ? e3.displayName || e3.name : "") ? describeBuiltInComponentFrame$1(n5) : "";
}
function describeComponentStackByType$1(e3) {
  if ("string" == typeof e3) return describeBuiltInComponentFrame$1(e3);
  if ("function" == typeof e3) return e3.prototype && e3.prototype.isReactComponent ? describeNativeComponentFrame$1(e3, true) : describeNativeComponentFrame$1(e3, false);
  if ("object" == typeof e3 && null !== e3) {
    switch (e3.$$typeof) {
      case At:
        return describeNativeComponentFrame$1(e3.render, false);
      case Lt:
        return describeNativeComponentFrame$1(e3.type, false);
      case jt:
        var r6 = e3, n5 = r6._payload;
        r6 = r6._init;
        try {
          e3 = r6(n5);
        } catch (e4) {
          return describeBuiltInComponentFrame$1("Lazy");
        }
        return describeComponentStackByType$1(e3);
    }
    if ("string" == typeof e3.name) return n5 = e3.env, describeBuiltInComponentFrame$1(e3.name + (n5 ? " [" + n5 + "]" : ""));
  }
  switch (e3) {
    case Ot:
      return describeBuiltInComponentFrame$1("SuspenseList");
    case Mt:
      return describeBuiltInComponentFrame$1("Suspense");
  }
  return "";
}
function defaultErrorHandler$1(e3) {
  if ("object" == typeof e3 && null !== e3 && "string" == typeof e3.environmentName) {
    var r6 = e3.environmentName;
    "string" == typeof (e3 = [e3].slice(0))[0] ? e3.splice(0, 1, "\x1B[0m\x1B[7m%c%s\x1B[0m%c " + e3[0], "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", " " + r6 + " ", "") : e3.splice(0, 0, "\x1B[0m\x1B[7m%c%s\x1B[0m%c ", "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", " " + r6 + " ", ""), e3.unshift(console), (r6 = yo.apply(console.error, e3))();
  } else console.error(e3);
  return null;
}
function noop$3() {
}
function RequestInstance$1(e3, r6, n5, o3, s5, a5, i6, l5, u4, c4, h4) {
  var p4 = /* @__PURE__ */ new Set();
  this.destination = null, this.flushScheduled = false, this.resumableState = e3, this.renderState = r6, this.rootFormatContext = n5, this.progressiveChunkSize = void 0 === o3 ? 12800 : o3, this.status = 10, this.fatalError = null, this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0, this.completedPreambleSegments = this.completedRootSegment = null, this.abortableTasks = p4, this.pingedTasks = [], this.clientRenderedBoundaries = [], this.completedBoundaries = [], this.partialBoundaries = [], this.trackedPostpones = null, this.onError = void 0 === s5 ? defaultErrorHandler$1 : s5, this.onPostpone = void 0 === c4 ? noop$3 : c4, this.onAllReady = void 0 === a5 ? noop$3 : a5, this.onShellReady = void 0 === i6 ? noop$3 : i6, this.onShellError = void 0 === l5 ? noop$3 : l5, this.onFatalError = void 0 === u4 ? noop$3 : u4, this.formState = void 0 === h4 ? null : h4;
}
function createRequest$1(e3, r6, n5, o3, s5, a5, i6, l5, u4, c4, h4, p4) {
  return (n5 = createPendingSegment$1(r6 = new RequestInstance$1(r6, n5, o3, s5, a5, i6, l5, u4, c4, h4, p4), 0, null, o3, false, false)).parentFlushed = true, pushComponentStack$1(e3 = createRenderTask$1(r6, null, e3, -1, null, n5, null, null, r6.abortableTasks, null, o3, null, Po, null, false)), r6.pingedTasks.push(e3), r6;
}
function resolveRequest() {
  if (Yo) return Yo;
  if (vo) {
    var e3 = bo.getStore();
    if (e3) return e3;
  }
  return null;
}
function pingTask$1(e3, r6) {
  e3.pingedTasks.push(r6), 1 === e3.pingedTasks.length && (e3.flushScheduled = null !== e3.destination, null !== e3.trackedPostpones || 10 === e3.status ? Ut(function() {
    return performWork$1(e3);
  }) : setTimeout(function() {
    return performWork$1(e3);
  }, 0));
}
function createSuspenseBoundary$1(e3, r6, n5, o3) {
  return { status: 0, rootSegmentID: -1, parentFlushed: false, pendingTasks: 0, completedSegments: [], byteSize: 0, fallbackAbortableTasks: r6, errorDigest: null, contentState: createHoistableState$1(), fallbackState: createHoistableState$1(), contentPreamble: n5, fallbackPreamble: o3, trackedContentKeyPath: null, trackedFallbackNode: null };
}
function createRenderTask$1(e3, r6, n5, o3, s5, a5, i6, l5, u4, c4, h4, p4, g3, y3, v3) {
  e3.allPendingTasks++, null === s5 ? e3.pendingRootTasks++ : s5.pendingTasks++;
  var b3 = { replay: null, node: n5, childIndex: o3, ping: /* @__PURE__ */ __name(function() {
    return pingTask$1(e3, b3);
  }, "ping"), blockedBoundary: s5, blockedSegment: a5, blockedPreamble: i6, hoistableState: l5, abortSet: u4, keyPath: c4, formatContext: h4, context: p4, treeContext: g3, componentStack: y3, thenableState: r6, isFallback: v3 };
  return u4.add(b3), b3;
}
function createReplayTask$1(e3, r6, n5, o3, s5, a5, i6, l5, u4, c4, h4, p4, g3, y3) {
  e3.allPendingTasks++, null === a5 ? e3.pendingRootTasks++ : a5.pendingTasks++, n5.pendingTasks++;
  var v3 = { replay: n5, node: o3, childIndex: s5, ping: /* @__PURE__ */ __name(function() {
    return pingTask$1(e3, v3);
  }, "ping"), blockedBoundary: a5, blockedSegment: null, blockedPreamble: null, hoistableState: i6, abortSet: l5, keyPath: u4, formatContext: c4, context: h4, treeContext: p4, componentStack: g3, thenableState: r6, isFallback: y3 };
  return l5.add(v3), v3;
}
function createPendingSegment$1(e3, r6, n5, o3, s5, a5) {
  return { status: 0, parentFlushed: false, id: -1, index: r6, chunks: [], children: [], preambleChildren: [], parentFormatContext: o3, boundary: n5, lastPushedText: s5, textEmbedded: a5 };
}
function pushComponentStack$1(e3) {
  var r6 = e3.node;
  if ("object" == typeof r6 && null !== r6 && r6.$$typeof === Rt) e3.componentStack = { parent: e3.componentStack, type: r6.type };
}
function getThrownInfo$1(e3) {
  var r6 = {};
  return e3 && Object.defineProperty(r6, "componentStack", { configurable: true, enumerable: true, get: /* @__PURE__ */ __name(function() {
    try {
      var n5 = "", o3 = e3;
      do {
        n5 += describeComponentStackByType$1(o3.type), o3 = o3.parent;
      } while (o3);
      var s5 = n5;
    } catch (e4) {
      s5 = "\nError generating stack: " + e4.message + "\n" + e4.stack;
    }
    return Object.defineProperty(r6, "componentStack", { value: s5 }), s5;
  }, "get") }), r6;
}
function logRecoverableError$1(e3, r6, n5) {
  if (null == (r6 = (e3 = e3.onError)(r6, n5)) || "string" == typeof r6) return r6;
}
function fatalError$1(e3, r6) {
  var n5 = e3.onShellError, o3 = e3.onFatalError;
  n5(r6), o3(r6), null !== e3.destination ? (e3.status = 14, closeWithError(e3.destination, r6)) : (e3.status = 13, e3.fatalError = r6);
}
function renderWithHooks$1(e3, r6, n5, o3, s5, a5) {
  var i6 = r6.thenableState;
  for (r6.thenableState = null, _o = {}, Io = r6, Ao = e3, Mo = n5, zo = No = 0, Do = -1, Ho = 0, Wo = i6, e3 = o3(s5, a5); Bo; ) Bo = false, zo = No = 0, Do = -1, Ho = 0, qo += 1, Lo = null, e3 = o3(s5, a5);
  return resetHooksState$1(), e3;
}
function finishFunctionComponent$1(e3, r6, n5, o3, s5, a5, i6) {
  var l5 = false;
  if (0 !== a5 && null !== e3.formState) {
    var u4 = r6.blockedSegment;
    if (null !== u4) {
      l5 = true, u4 = u4.chunks;
      for (var c4 = 0; c4 < a5; c4++) c4 === i6 ? u4.push(Wr) : u4.push(Vr);
    }
  }
  a5 = r6.keyPath, r6.keyPath = n5, s5 ? (n5 = r6.treeContext, r6.treeContext = pushTreeContext$1(n5, 1, 0), renderNode$1(e3, r6, o3, -1), r6.treeContext = n5) : l5 ? renderNode$1(e3, r6, o3, -1) : renderNodeDestructive$1(e3, r6, o3, -1), r6.keyPath = a5;
}
function renderElement$1(e3, r6, n5, o3, s5, a5) {
  if ("function" == typeof o3) if (o3.prototype && o3.prototype.isReactComponent) {
    var i6 = s5;
    if ("ref" in s5) for (var l5 in i6 = {}, s5) "ref" !== l5 && (i6[l5] = s5[l5]);
    var u4 = o3.defaultProps;
    if (u4) for (var c4 in i6 === s5 && (i6 = Xt({}, i6, s5)), u4) void 0 === i6[c4] && (i6[c4] = u4[c4]);
    s5 = i6, i6 = ko, "object" == typeof (u4 = o3.contextType) && null !== u4 && (i6 = u4._currentValue);
    var h4 = void 0 !== (i6 = new o3(s5, i6)).state ? i6.state : null;
    if (i6.updater = wo, i6.props = s5, i6.state = h4, u4 = { queue: [], replace: false }, i6._reactInternals = u4, a5 = o3.contextType, i6.context = "object" == typeof a5 && null !== a5 ? a5._currentValue : ko, "function" == typeof (a5 = o3.getDerivedStateFromProps) && (h4 = null == (a5 = a5(s5, h4)) ? h4 : Xt({}, h4, a5), i6.state = h4), "function" != typeof o3.getDerivedStateFromProps && "function" != typeof i6.getSnapshotBeforeUpdate && ("function" == typeof i6.UNSAFE_componentWillMount || "function" == typeof i6.componentWillMount)) if (o3 = i6.state, "function" == typeof i6.componentWillMount && i6.componentWillMount(), "function" == typeof i6.UNSAFE_componentWillMount && i6.UNSAFE_componentWillMount(), o3 !== i6.state && wo.enqueueReplaceState(i6, i6.state, null), null !== u4.queue && 0 < u4.queue.length) if (o3 = u4.queue, a5 = u4.replace, u4.queue = null, u4.replace = false, a5 && 1 === o3.length) i6.state = o3[0];
    else {
      for (u4 = a5 ? o3[0] : i6.state, h4 = true, a5 = a5 ? 1 : 0; a5 < o3.length; a5++) null != (c4 = "function" == typeof (c4 = o3[a5]) ? c4.call(i6, u4, s5, void 0) : c4) && (h4 ? (h4 = false, u4 = Xt({}, u4, c4)) : Xt(u4, c4));
      i6.state = u4;
    }
    else u4.queue = null;
    if (o3 = i6.render(), 12 === e3.status) throw null;
    s5 = r6.keyPath, r6.keyPath = n5, renderNodeDestructive$1(e3, r6, o3, -1), r6.keyPath = s5;
  } else {
    if (o3 = renderWithHooks$1(e3, r6, n5, o3, s5, void 0), 12 === e3.status) throw null;
    finishFunctionComponent$1(e3, r6, n5, o3, 0 !== No, zo, Do);
  }
  else {
    if ("string" != typeof o3) {
      switch (o3) {
        case zt:
        case Tt:
        case Ft:
        case $t:
          return o3 = r6.keyPath, r6.keyPath = n5, renderNodeDestructive$1(e3, r6, s5.children, -1), void (r6.keyPath = o3);
        case Nt:
          return void ("hidden" !== s5.mode && (o3 = r6.keyPath, r6.keyPath = n5, renderNodeDestructive$1(e3, r6, s5.children, -1), r6.keyPath = o3));
        case Ot:
          return o3 = r6.keyPath, r6.keyPath = n5, renderNodeDestructive$1(e3, r6, s5.children, -1), void (r6.keyPath = o3);
        case Ht:
        case Bt:
          throw Error("ReactDOMServer does not yet support scope components.");
        case Mt:
          e: if (null !== r6.replay) {
            o3 = r6.keyPath, r6.keyPath = n5, n5 = s5.children;
            try {
              renderNode$1(e3, r6, n5, -1);
            } finally {
              r6.keyPath = o3;
            }
          } else {
            o3 = r6.keyPath;
            var p4 = r6.blockedBoundary;
            a5 = r6.blockedPreamble;
            var g3 = r6.hoistableState;
            c4 = r6.blockedSegment, l5 = s5.fallback, s5 = s5.children;
            var y3 = /* @__PURE__ */ new Set(), v3 = 2 > r6.formatContext.insertionMode ? createSuspenseBoundary$1(0, y3, { htmlChunks: null, headChunks: null, bodyChunks: null, contribution: 0 }, { htmlChunks: null, headChunks: null, bodyChunks: null, contribution: 0 }) : createSuspenseBoundary$1(0, y3, null, null);
            null !== e3.trackedPostpones && (v3.trackedContentKeyPath = n5);
            var b3 = createPendingSegment$1(0, c4.chunks.length, v3, r6.formatContext, false, false);
            c4.children.push(b3), c4.lastPushedText = false;
            var k4 = createPendingSegment$1(0, 0, null, r6.formatContext, false, false);
            if (k4.parentFlushed = true, null !== e3.trackedPostpones) {
              u4 = [(i6 = [n5[0], "Suspense Fallback", n5[2]])[1], i6[2], [], null], e3.trackedPostpones.workingMap.set(i6, u4), v3.trackedFallbackNode = u4, r6.blockedSegment = b3, r6.blockedPreamble = v3.fallbackPreamble, r6.keyPath = i6, b3.status = 6;
              try {
                renderNode$1(e3, r6, l5, -1), b3.lastPushedText && b3.textEmbedded && b3.chunks.push(xr), b3.status = 1;
              } catch (r7) {
                throw b3.status = 12 === e3.status ? 3 : 4, r7;
              } finally {
                r6.blockedSegment = c4, r6.blockedPreamble = a5, r6.keyPath = o3;
              }
              pushComponentStack$1(r6 = createRenderTask$1(e3, null, s5, -1, v3, k4, v3.contentPreamble, v3.contentState, r6.abortSet, n5, r6.formatContext, r6.context, r6.treeContext, r6.componentStack, r6.isFallback)), e3.pingedTasks.push(r6);
            } else {
              r6.blockedBoundary = v3, r6.blockedPreamble = v3.contentPreamble, r6.hoistableState = v3.contentState, r6.blockedSegment = k4, r6.keyPath = n5, k4.status = 6;
              try {
                if (renderNode$1(e3, r6, s5, -1), k4.lastPushedText && k4.textEmbedded && k4.chunks.push(xr), k4.status = 1, queueCompletedSegment$1(v3, k4), 0 === v3.pendingTasks && 0 === v3.status) {
                  v3.status = 1, 0 === e3.pendingRootTasks && r6.blockedPreamble && preparePreamble$1(e3);
                  break e;
                }
              } catch (n6) {
                v3.status = 4, 12 === e3.status ? (k4.status = 3, i6 = e3.fatalError) : (k4.status = 4, i6 = n6), h4 = logRecoverableError$1(e3, i6, u4 = getThrownInfo$1(r6.componentStack)), v3.errorDigest = h4, untrackBoundary$1(e3, v3);
              } finally {
                r6.blockedBoundary = p4, r6.blockedPreamble = a5, r6.hoistableState = g3, r6.blockedSegment = c4, r6.keyPath = o3;
              }
              pushComponentStack$1(r6 = createRenderTask$1(e3, null, l5, -1, p4, b3, v3.fallbackPreamble, v3.fallbackState, y3, [n5[0], "Suspense Fallback", n5[2]], r6.formatContext, r6.context, r6.treeContext, r6.componentStack, true)), e3.pingedTasks.push(r6);
            }
          }
          return;
      }
      if ("object" == typeof o3 && null !== o3) switch (o3.$$typeof) {
        case At:
          if ("ref" in s5) for (v3 in i6 = {}, s5) "ref" !== v3 && (i6[v3] = s5[v3]);
          else i6 = s5;
          return void finishFunctionComponent$1(e3, r6, n5, o3 = renderWithHooks$1(e3, r6, n5, o3.render, i6, a5), 0 !== No, zo, Do);
        case Lt:
          return void renderElement$1(e3, r6, n5, o3.type, s5, a5);
        case Et:
        case It:
          if (u4 = s5.children, i6 = r6.keyPath, s5 = s5.value, h4 = o3._currentValue, o3._currentValue = s5, Co = o3 = { parent: a5 = Co, depth: null === a5 ? 0 : a5.depth + 1, context: o3, parentValue: h4, value: s5 }, r6.context = o3, r6.keyPath = n5, renderNodeDestructive$1(e3, r6, u4, -1), null === (e3 = Co)) throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");
          return e3.context._currentValue = e3.parentValue, e3 = Co = e3.parent, r6.context = e3, void (r6.keyPath = i6);
        case _t:
          return o3 = (s5 = s5.children)(o3._context._currentValue), s5 = r6.keyPath, r6.keyPath = n5, renderNodeDestructive$1(e3, r6, o3, -1), void (r6.keyPath = s5);
        case jt:
          if (o3 = (i6 = o3._init)(o3._payload), 12 === e3.status) throw null;
          return void renderElement$1(e3, r6, n5, o3, s5, a5);
      }
      throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (null == o3 ? o3 : typeof o3) + ".");
    }
    if (null === (i6 = r6.blockedSegment)) i6 = s5.children, u4 = r6.formatContext, h4 = r6.keyPath, r6.formatContext = getChildFormatContext$1(u4, o3, s5), r6.keyPath = n5, renderNode$1(e3, r6, i6, -1), r6.formatContext = u4, r6.keyPath = h4;
    else {
      a5 = pushStartInstance$1(i6.chunks, o3, s5, e3.resumableState, e3.renderState, r6.blockedPreamble, r6.hoistableState, r6.formatContext, i6.lastPushedText, r6.isFallback), i6.lastPushedText = false, u4 = r6.formatContext, h4 = r6.keyPath, r6.keyPath = n5, 3 === (r6.formatContext = getChildFormatContext$1(u4, o3, s5)).insertionMode ? (n5 = createPendingSegment$1(0, 0, null, r6.formatContext, false, false), i6.preambleChildren.push(n5), pushComponentStack$1(n5 = createRenderTask$1(e3, null, a5, -1, r6.blockedBoundary, n5, r6.blockedPreamble, r6.hoistableState, e3.abortableTasks, r6.keyPath, r6.formatContext, r6.context, r6.treeContext, r6.componentStack, r6.isFallback)), e3.pingedTasks.push(n5)) : renderNode$1(e3, r6, a5, -1), r6.formatContext = u4, r6.keyPath = h4;
      e: {
        switch (r6 = i6.chunks, e3 = e3.resumableState, o3) {
          case "title":
          case "style":
          case "script":
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "input":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
            break e;
          case "body":
            if (1 >= u4.insertionMode) {
              e3.hasBody = true;
              break e;
            }
            break;
          case "html":
            if (0 === u4.insertionMode) {
              e3.hasHtml = true;
              break e;
            }
            break;
          case "head":
            if (1 >= u4.insertionMode) break e;
        }
        r6.push(endChunkForTag$1(o3));
      }
      i6.lastPushedText = false;
    }
  }
}
function resumeNode$1(e3, r6, n5, o3, s5) {
  var a5 = r6.replay, i6 = r6.blockedBoundary, l5 = createPendingSegment$1(0, 0, null, r6.formatContext, false, false);
  l5.id = n5, l5.parentFlushed = true;
  try {
    r6.replay = null, r6.blockedSegment = l5, renderNode$1(e3, r6, o3, s5), l5.status = 1, null === i6 ? e3.completedRootSegment = l5 : (queueCompletedSegment$1(i6, l5), i6.parentFlushed && e3.partialBoundaries.push(i6));
  } finally {
    r6.replay = a5, r6.blockedSegment = null;
  }
}
function renderNodeDestructive$1(e3, r6, n5, o3) {
  null !== r6.replay && "number" == typeof r6.replay.slots ? resumeNode$1(e3, r6, r6.replay.slots, n5, o3) : (r6.node = n5, r6.childIndex = o3, n5 = r6.componentStack, pushComponentStack$1(r6), retryNode$1(e3, r6), r6.componentStack = n5);
}
function retryNode$1(e3, r6) {
  var n5 = r6.node, o3 = r6.childIndex;
  if (null !== n5) {
    if ("object" == typeof n5) {
      switch (n5.$$typeof) {
        case Rt:
          var s5 = n5.type, a5 = n5.key, i6 = n5.props, l5 = void 0 !== (n5 = i6.ref) ? n5 : null, u4 = getComponentNameFromType$1(s5), c4 = null == a5 ? -1 === o3 ? 0 : o3 : a5;
          if (a5 = [r6.keyPath, u4, c4], null !== r6.replay) e: {
            var h4 = r6.replay;
            for (o3 = h4.nodes, n5 = 0; n5 < o3.length; n5++) {
              var p4 = o3[n5];
              if (c4 === p4[1]) {
                if (4 === p4.length) {
                  if (null !== u4 && u4 !== p4[0]) throw Error("Expected the resume to render <" + p4[0] + "> in this slot but instead it rendered <" + u4 + ">. The tree doesn't match so React will fallback to client rendering.");
                  var g3 = p4[2];
                  u4 = p4[3], c4 = r6.node, r6.replay = { nodes: g3, slots: u4, pendingTasks: 1 };
                  try {
                    if (renderElement$1(e3, r6, a5, s5, i6, l5), 1 === r6.replay.pendingTasks && 0 < r6.replay.nodes.length) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
                    r6.replay.pendingTasks--;
                  } catch (n6) {
                    if ("object" == typeof n6 && null !== n6 && (n6 === To || "function" == typeof n6.then)) throw r6.node === c4 && (r6.replay = h4), n6;
                    r6.replay.pendingTasks--, i6 = getThrownInfo$1(r6.componentStack), abortRemainingReplayNodes$1(e3, a5 = r6.blockedBoundary, g3, u4, s5 = n6, i6 = logRecoverableError$1(e3, s5, i6));
                  }
                  r6.replay = h4;
                } else {
                  if (s5 !== Mt) throw Error("Expected the resume to render <Suspense> in this slot but instead it rendered <" + (getComponentNameFromType$1(s5) || "Unknown") + ">. The tree doesn't match so React will fallback to client rendering.");
                  t: {
                    h4 = void 0, s5 = p4[5], l5 = p4[2], u4 = p4[3], c4 = null === p4[4] ? [] : p4[4][2], p4 = null === p4[4] ? null : p4[4][3];
                    var y3 = r6.keyPath, v3 = r6.replay, b3 = r6.blockedBoundary, k4 = r6.hoistableState, C4 = i6.children, P4 = i6.fallback, R4 = /* @__PURE__ */ new Set();
                    (i6 = 2 > r6.formatContext.insertionMode ? createSuspenseBoundary$1(0, R4, createPreambleState$1(), createPreambleState$1()) : createSuspenseBoundary$1(0, R4, null, null)).parentFlushed = true, i6.rootSegmentID = s5, r6.blockedBoundary = i6, r6.hoistableState = i6.contentState, r6.keyPath = a5, r6.replay = { nodes: l5, slots: u4, pendingTasks: 1 };
                    try {
                      if (renderNode$1(e3, r6, C4, -1), 1 === r6.replay.pendingTasks && 0 < r6.replay.nodes.length) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
                      if (r6.replay.pendingTasks--, 0 === i6.pendingTasks && 0 === i6.status) {
                        i6.status = 1, e3.completedBoundaries.push(i6);
                        break t;
                      }
                    } catch (n6) {
                      i6.status = 4, h4 = logRecoverableError$1(e3, n6, g3 = getThrownInfo$1(r6.componentStack)), i6.errorDigest = h4, r6.replay.pendingTasks--, e3.clientRenderedBoundaries.push(i6);
                    } finally {
                      r6.blockedBoundary = b3, r6.hoistableState = k4, r6.replay = v3, r6.keyPath = y3;
                    }
                    pushComponentStack$1(r6 = createReplayTask$1(e3, null, { nodes: c4, slots: p4, pendingTasks: 0 }, P4, -1, b3, i6.fallbackState, R4, [a5[0], "Suspense Fallback", a5[2]], r6.formatContext, r6.context, r6.treeContext, r6.componentStack, true)), e3.pingedTasks.push(r6);
                  }
                }
                o3.splice(n5, 1);
                break e;
              }
            }
          }
          else renderElement$1(e3, r6, a5, s5, i6, l5);
          return;
        case xt:
          throw Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
        case jt:
          if (n5 = (g3 = n5._init)(n5._payload), 12 === e3.status) throw null;
          return void renderNodeDestructive$1(e3, r6, n5, o3);
      }
      if (Vt(n5)) return void renderChildrenArray$1(e3, r6, n5, o3);
      if (null === n5 || "object" != typeof n5 ? g3 = null : g3 = "function" == typeof (g3 = Wt && n5[Wt] || n5["@@iterator"]) ? g3 : null, g3 && (g3 = g3.call(n5))) {
        if (!(n5 = g3.next()).done) {
          i6 = [];
          do {
            i6.push(n5.value), n5 = g3.next();
          } while (!n5.done);
          renderChildrenArray$1(e3, r6, i6, o3);
        }
        return;
      }
      if ("function" == typeof n5.then) return r6.thenableState = null, renderNodeDestructive$1(e3, r6, unwrapThenable$1(n5), o3);
      if (n5.$$typeof === It) return renderNodeDestructive$1(e3, r6, n5._currentValue, o3);
      throw o3 = Object.prototype.toString.call(n5), Error("Objects are not valid as a React child (found: " + ("[object Object]" === o3 ? "object with keys {" + Object.keys(n5).join(", ") + "}" : o3) + "). If you meant to render a collection of children, use an array instead.");
    }
    "string" == typeof n5 ? null !== (o3 = r6.blockedSegment) && (o3.lastPushedText = pushTextInstance$1(o3.chunks, n5, e3.renderState, o3.lastPushedText)) : "number" != typeof n5 && "bigint" != typeof n5 || null !== (o3 = r6.blockedSegment) && (o3.lastPushedText = pushTextInstance$1(o3.chunks, "" + n5, e3.renderState, o3.lastPushedText));
  }
}
function renderChildrenArray$1(e3, r6, n5, o3) {
  var s5 = r6.keyPath;
  if (-1 === o3 || (r6.keyPath = [r6.keyPath, "Fragment", o3], null === r6.replay)) {
    if (a5 = r6.treeContext, i6 = n5.length, null !== r6.replay && (null !== (l5 = r6.replay.slots) && "object" == typeof l5)) {
      for (o3 = 0; o3 < i6; o3++) u4 = n5[o3], r6.treeContext = pushTreeContext$1(a5, i6, o3), "number" == typeof (c4 = l5[o3]) ? (resumeNode$1(e3, r6, c4, u4, o3), delete l5[o3]) : renderNode$1(e3, r6, u4, o3);
      return r6.treeContext = a5, void (r6.keyPath = s5);
    }
    for (l5 = 0; l5 < i6; l5++) o3 = n5[l5], r6.treeContext = pushTreeContext$1(a5, i6, l5), renderNode$1(e3, r6, o3, l5);
    r6.treeContext = a5, r6.keyPath = s5;
  } else {
    for (var a5 = r6.replay, i6 = a5.nodes, l5 = 0; l5 < i6.length; l5++) {
      var u4 = i6[l5];
      if (u4[1] === o3) {
        o3 = u4[2], u4 = u4[3], r6.replay = { nodes: o3, slots: u4, pendingTasks: 1 };
        try {
          if (renderChildrenArray$1(e3, r6, n5, -1), 1 === r6.replay.pendingTasks && 0 < r6.replay.nodes.length) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
          r6.replay.pendingTasks--;
        } catch (s6) {
          if ("object" == typeof s6 && null !== s6 && (s6 === To || "function" == typeof s6.then)) throw s6;
          r6.replay.pendingTasks--, n5 = getThrownInfo$1(r6.componentStack);
          var c4 = r6.blockedBoundary;
          abortRemainingReplayNodes$1(e3, c4, o3, u4, s6, n5 = logRecoverableError$1(e3, s6, n5));
        }
        r6.replay = a5, i6.splice(l5, 1);
        break;
      }
    }
    r6.keyPath = s5;
  }
}
function untrackBoundary$1(e3, r6) {
  null !== (e3 = e3.trackedPostpones) && (null !== (r6 = r6.trackedContentKeyPath) && (void 0 !== (r6 = e3.workingMap.get(r6)) && (r6.length = 4, r6[2] = [], r6[3] = null)));
}
function spawnNewSuspendedReplayTask$1(e3, r6, n5) {
  return createReplayTask$1(e3, n5, r6.replay, r6.node, r6.childIndex, r6.blockedBoundary, r6.hoistableState, r6.abortSet, r6.keyPath, r6.formatContext, r6.context, r6.treeContext, r6.componentStack, r6.isFallback);
}
function spawnNewSuspendedRenderTask$1(e3, r6, n5) {
  var o3 = r6.blockedSegment, s5 = createPendingSegment$1(0, o3.chunks.length, null, r6.formatContext, o3.lastPushedText, true);
  return o3.children.push(s5), o3.lastPushedText = false, createRenderTask$1(e3, n5, r6.node, r6.childIndex, r6.blockedBoundary, s5, r6.blockedPreamble, r6.hoistableState, r6.abortSet, r6.keyPath, r6.formatContext, r6.context, r6.treeContext, r6.componentStack, r6.isFallback);
}
function renderNode$1(e3, r6, n5, o3) {
  var s5 = r6.formatContext, a5 = r6.context, i6 = r6.keyPath, l5 = r6.treeContext, u4 = r6.componentStack, c4 = r6.blockedSegment;
  if (null === c4) try {
    return renderNodeDestructive$1(e3, r6, n5, o3);
  } catch (c5) {
    if (resetHooksState$1(), "object" == typeof (n5 = c5 === To ? getSuspendedThenable$1() : c5) && null !== n5) {
      if ("function" == typeof n5.then) return e3 = spawnNewSuspendedReplayTask$1(e3, r6, o3 = getThenableStateAfterSuspending$1()).ping, n5.then(e3, e3), r6.formatContext = s5, r6.context = a5, r6.keyPath = i6, r6.treeContext = l5, r6.componentStack = u4, void switchContext$1(a5);
      if ("Maximum call stack size exceeded" === n5.message) return n5 = spawnNewSuspendedReplayTask$1(e3, r6, n5 = getThenableStateAfterSuspending$1()), e3.pingedTasks.push(n5), r6.formatContext = s5, r6.context = a5, r6.keyPath = i6, r6.treeContext = l5, r6.componentStack = u4, void switchContext$1(a5);
    }
  }
  else {
    var h4 = c4.children.length, p4 = c4.chunks.length;
    try {
      return renderNodeDestructive$1(e3, r6, n5, o3);
    } catch (g3) {
      if (resetHooksState$1(), c4.children.length = h4, c4.chunks.length = p4, "object" == typeof (n5 = g3 === To ? getSuspendedThenable$1() : g3) && null !== n5) {
        if ("function" == typeof n5.then) return e3 = spawnNewSuspendedRenderTask$1(e3, r6, o3 = getThenableStateAfterSuspending$1()).ping, n5.then(e3, e3), r6.formatContext = s5, r6.context = a5, r6.keyPath = i6, r6.treeContext = l5, r6.componentStack = u4, void switchContext$1(a5);
        if ("Maximum call stack size exceeded" === n5.message) return n5 = spawnNewSuspendedRenderTask$1(e3, r6, n5 = getThenableStateAfterSuspending$1()), e3.pingedTasks.push(n5), r6.formatContext = s5, r6.context = a5, r6.keyPath = i6, r6.treeContext = l5, r6.componentStack = u4, void switchContext$1(a5);
      }
    }
  }
  throw r6.formatContext = s5, r6.context = a5, r6.keyPath = i6, r6.treeContext = l5, switchContext$1(a5), n5;
}
function abortTaskSoft$1(e3) {
  var r6 = e3.blockedBoundary;
  null !== (e3 = e3.blockedSegment) && (e3.status = 3, finishedTask$1(this, r6, e3));
}
function abortRemainingReplayNodes$1(e3, r6, n5, o3, s5, a5) {
  for (var i6 = 0; i6 < n5.length; i6++) {
    var l5 = n5[i6];
    if (4 === l5.length) abortRemainingReplayNodes$1(e3, r6, l5[2], l5[3], s5, a5);
    else {
      l5 = l5[5];
      var u4 = e3, c4 = a5, h4 = createSuspenseBoundary$1(0, /* @__PURE__ */ new Set(), null, null);
      h4.parentFlushed = true, h4.rootSegmentID = l5, h4.status = 4, h4.errorDigest = c4, h4.parentFlushed && u4.clientRenderedBoundaries.push(h4);
    }
  }
  if (n5.length = 0, null !== o3) {
    if (null === r6) throw Error("We should not have any resumable nodes in the shell. This is a bug in React.");
    if (4 !== r6.status && (r6.status = 4, r6.errorDigest = a5, r6.parentFlushed && e3.clientRenderedBoundaries.push(r6)), "object" == typeof o3) for (var p4 in o3) delete o3[p4];
  }
}
function abortTask$1(e3, r6, n5) {
  var o3 = e3.blockedBoundary, s5 = e3.blockedSegment;
  if (null !== s5) {
    if (6 === s5.status) return;
    s5.status = 3;
  }
  if (s5 = getThrownInfo$1(e3.componentStack), null === o3) {
    if (13 !== r6.status && 14 !== r6.status) {
      if (null === (o3 = e3.replay)) return logRecoverableError$1(r6, n5, s5), void fatalError$1(r6, n5);
      o3.pendingTasks--, 0 === o3.pendingTasks && 0 < o3.nodes.length && (e3 = logRecoverableError$1(r6, n5, s5), abortRemainingReplayNodes$1(r6, null, o3.nodes, o3.slots, n5, e3)), r6.pendingRootTasks--, 0 === r6.pendingRootTasks && completeShell$1(r6);
    }
  } else o3.pendingTasks--, 4 !== o3.status && (o3.status = 4, e3 = logRecoverableError$1(r6, n5, s5), o3.status = 4, o3.errorDigest = e3, untrackBoundary$1(r6, o3), o3.parentFlushed && r6.clientRenderedBoundaries.push(o3)), o3.fallbackAbortableTasks.forEach(function(e4) {
    return abortTask$1(e4, r6, n5);
  }), o3.fallbackAbortableTasks.clear();
  r6.allPendingTasks--, 0 === r6.allPendingTasks && completeAll$1(r6);
}
function safelyEmitEarlyPreloads$1(e3, r6) {
  try {
    var n5 = e3.renderState, o3 = n5.onHeaders;
    if (o3) {
      var s5 = n5.headers;
      if (s5) {
        n5.headers = null;
        var a5 = s5.preconnects;
        if (s5.fontPreloads && (a5 && (a5 += ", "), a5 += s5.fontPreloads), s5.highImagePreloads && (a5 && (a5 += ", "), a5 += s5.highImagePreloads), !r6) {
          var i6 = n5.styles.values(), l5 = i6.next();
          e: for (; 0 < s5.remainingCapacity && !l5.done; l5 = i6.next()) for (var u4 = l5.value.sheets.values(), c4 = u4.next(); 0 < s5.remainingCapacity && !c4.done; c4 = u4.next()) {
            var h4 = c4.value, p4 = h4.props, g3 = p4.href, y3 = h4.props, v3 = getPreloadAsHeader$1(y3.href, "style", { crossOrigin: y3.crossOrigin, integrity: y3.integrity, nonce: y3.nonce, type: y3.type, fetchPriority: y3.fetchPriority, referrerPolicy: y3.referrerPolicy, media: y3.media });
            if (!(0 <= (s5.remainingCapacity -= v3.length + 2))) break e;
            n5.resets.style[g3] = pr, a5 && (a5 += ", "), a5 += v3, n5.resets.style[g3] = "string" == typeof p4.crossOrigin || "string" == typeof p4.integrity ? [p4.crossOrigin, p4.integrity] : pr;
          }
        }
        o3(a5 ? { Link: a5 } : {});
      }
    }
  } catch (r7) {
    logRecoverableError$1(e3, r7, {});
  }
}
function completeShell$1(e3) {
  null === e3.trackedPostpones && safelyEmitEarlyPreloads$1(e3, true), null === e3.trackedPostpones && preparePreamble$1(e3), e3.onShellError = noop$3, (e3 = e3.onShellReady)();
}
function completeAll$1(e3) {
  safelyEmitEarlyPreloads$1(e3, null === e3.trackedPostpones || (null === e3.completedRootSegment || 5 !== e3.completedRootSegment.status)), preparePreamble$1(e3), (e3 = e3.onAllReady)();
}
function queueCompletedSegment$1(e3, r6) {
  if (0 === r6.chunks.length && 1 === r6.children.length && null === r6.children[0].boundary && -1 === r6.children[0].id) {
    var n5 = r6.children[0];
    n5.id = r6.id, n5.parentFlushed = true, 1 === n5.status && queueCompletedSegment$1(e3, n5);
  } else e3.completedSegments.push(r6);
}
function finishedTask$1(e3, r6, n5) {
  if (null === r6) {
    if (null !== n5 && n5.parentFlushed) {
      if (null !== e3.completedRootSegment) throw Error("There can only be one root segment. This is a bug in React.");
      e3.completedRootSegment = n5;
    }
    e3.pendingRootTasks--, 0 === e3.pendingRootTasks && completeShell$1(e3);
  } else r6.pendingTasks--, 4 !== r6.status && (0 === r6.pendingTasks ? (0 === r6.status && (r6.status = 1), null !== n5 && n5.parentFlushed && 1 === n5.status && queueCompletedSegment$1(r6, n5), r6.parentFlushed && e3.completedBoundaries.push(r6), 1 === r6.status && (r6.fallbackAbortableTasks.forEach(abortTaskSoft$1, e3), r6.fallbackAbortableTasks.clear(), 0 === e3.pendingRootTasks && null === e3.trackedPostpones && null !== r6.contentPreamble && preparePreamble$1(e3))) : null !== n5 && n5.parentFlushed && 1 === n5.status && (queueCompletedSegment$1(r6, n5), 1 === r6.completedSegments.length && r6.parentFlushed && e3.partialBoundaries.push(r6)));
  e3.allPendingTasks--, 0 === e3.allPendingTasks && completeAll$1(e3);
}
function performWork$1(e3) {
  if (14 !== e3.status && 13 !== e3.status) {
    var r6 = Co, n5 = lr.H;
    lr.H = Go;
    var o3 = lr.A;
    lr.A = Xo;
    var s5 = Yo;
    Yo = e3;
    var a5 = Jo;
    Jo = e3.resumableState;
    try {
      var i6, l5 = e3.pingedTasks;
      for (i6 = 0; i6 < l5.length; i6++) {
        var u4 = l5[i6], c4 = e3, h4 = u4.blockedSegment;
        if (null === h4) {
          var p4 = c4;
          if (0 !== u4.replay.pendingTasks) {
            switchContext$1(u4.context);
            try {
              if ("number" == typeof u4.replay.slots ? resumeNode$1(p4, u4, u4.replay.slots, u4.node, u4.childIndex) : retryNode$1(p4, u4), 1 === u4.replay.pendingTasks && 0 < u4.replay.nodes.length) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
              u4.replay.pendingTasks--, u4.abortSet.delete(u4), finishedTask$1(p4, u4.blockedBoundary, null);
            } catch (e4) {
              resetHooksState$1();
              var g3 = e4 === To ? getSuspendedThenable$1() : e4;
              if ("object" == typeof g3 && null !== g3 && "function" == typeof g3.then) {
                var y3 = u4.ping;
                g3.then(y3, y3), u4.thenableState = getThenableStateAfterSuspending$1();
              } else {
                u4.replay.pendingTasks--, u4.abortSet.delete(u4);
                var v3 = getThrownInfo$1(u4.componentStack);
                c4 = void 0;
                var b3 = p4, k4 = u4.blockedBoundary, C4 = 12 === p4.status ? p4.fatalError : g3;
                abortRemainingReplayNodes$1(b3, k4, u4.replay.nodes, u4.replay.slots, C4, c4 = logRecoverableError$1(b3, C4, v3)), p4.pendingRootTasks--, 0 === p4.pendingRootTasks && completeShell$1(p4), p4.allPendingTasks--, 0 === p4.allPendingTasks && completeAll$1(p4);
              }
            }
          }
        } else if (p4 = void 0, 0 === (b3 = h4).status) {
          b3.status = 6, switchContext$1(u4.context);
          var P4 = b3.children.length, R4 = b3.chunks.length;
          try {
            retryNode$1(c4, u4), b3.lastPushedText && b3.textEmbedded && b3.chunks.push(xr), u4.abortSet.delete(u4), b3.status = 1, finishedTask$1(c4, u4.blockedBoundary, b3);
          } catch (e4) {
            resetHooksState$1(), b3.children.length = P4, b3.chunks.length = R4;
            var $3 = e4 === To ? getSuspendedThenable$1() : 12 === c4.status ? c4.fatalError : e4;
            if ("object" == typeof $3 && null !== $3 && "function" == typeof $3.then) {
              b3.status = 0, u4.thenableState = getThenableStateAfterSuspending$1();
              var T4 = u4.ping;
              $3.then(T4, T4);
            } else {
              var F4 = getThrownInfo$1(u4.componentStack);
              u4.abortSet.delete(u4), b3.status = 4;
              var E4 = u4.blockedBoundary;
              p4 = logRecoverableError$1(c4, $3, F4), null === E4 ? fatalError$1(c4, $3) : (E4.pendingTasks--, 4 !== E4.status && (E4.status = 4, E4.errorDigest = p4, untrackBoundary$1(c4, E4), E4.parentFlushed && c4.clientRenderedBoundaries.push(E4), 0 === c4.pendingRootTasks && null === c4.trackedPostpones && null !== E4.contentPreamble && preparePreamble$1(c4))), c4.allPendingTasks--, 0 === c4.allPendingTasks && completeAll$1(c4);
            }
          }
        }
      }
      l5.splice(0, i6), null !== e3.destination && flushCompletedQueues$1(e3, e3.destination);
    } catch (r7) {
      logRecoverableError$1(e3, r7, {}), fatalError$1(e3, r7);
    } finally {
      Jo = a5, lr.H = n5, lr.A = o3, n5 === Go && switchContext$1(r6), Yo = s5;
    }
  }
}
function preparePreambleFromSubtree$1(e3, r6, n5) {
  r6.preambleChildren.length && n5.push(r6.preambleChildren);
  for (var o3 = false, s5 = 0; s5 < r6.children.length; s5++) o3 = preparePreambleFromSegment$1(e3, r6.children[s5], n5) || o3;
  return o3;
}
function preparePreambleFromSegment$1(e3, r6, n5) {
  var o3 = r6.boundary;
  if (null === o3) return preparePreambleFromSubtree$1(e3, r6, n5);
  var s5 = o3.contentPreamble, a5 = o3.fallbackPreamble;
  if (null === s5 || null === a5) return false;
  switch (o3.status) {
    case 1:
      if (hoistPreambleState$1(e3.renderState, s5), !(r6 = o3.completedSegments[0])) throw Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
      return preparePreambleFromSubtree$1(e3, r6, n5);
    case 5:
      if (null !== e3.trackedPostpones) return true;
    case 4:
      if (1 === r6.status) return hoistPreambleState$1(e3.renderState, a5), preparePreambleFromSubtree$1(e3, r6, n5);
    default:
      return true;
  }
}
function preparePreamble$1(e3) {
  if (e3.completedRootSegment && null === e3.completedPreambleSegments) {
    var r6 = [], n5 = preparePreambleFromSegment$1(e3, e3.completedRootSegment, r6), o3 = e3.renderState.preamble;
    (false === n5 || o3.headChunks && o3.bodyChunks) && (e3.completedPreambleSegments = r6);
  }
}
function flushSubtree$1(e3, r6, n5, o3) {
  switch (n5.parentFlushed = true, n5.status) {
    case 0:
      n5.id = e3.nextSegmentId++;
    case 5:
      return o3 = n5.id, n5.lastPushedText = false, n5.textEmbedded = false, e3 = e3.renderState, writeChunk(r6, Qr), writeChunk(r6, e3.placeholderPrefix), writeChunk(r6, e3 = stringToChunk(o3.toString(16))), writeChunkAndReturn(r6, Yr);
    case 1:
      n5.status = 2;
      var s5 = true, a5 = n5.chunks, i6 = 0;
      n5 = n5.children;
      for (var l5 = 0; l5 < n5.length; l5++) {
        for (s5 = n5[l5]; i6 < s5.index; i6++) writeChunk(r6, a5[i6]);
        s5 = flushSegment$1(e3, r6, s5, o3);
      }
      for (; i6 < a5.length - 1; i6++) writeChunk(r6, a5[i6]);
      return i6 < a5.length && (s5 = writeChunkAndReturn(r6, a5[i6])), s5;
    default:
      throw Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
  }
}
function flushSegment$1(e3, r6, n5, o3) {
  var s5 = n5.boundary;
  if (null === s5) return flushSubtree$1(e3, r6, n5, o3);
  if (s5.parentFlushed = true, 4 === s5.status) {
    var a5 = s5.errorDigest;
    return writeChunkAndReturn(r6, rn), writeChunk(r6, on2), a5 && (writeChunk(r6, an), writeChunk(r6, stringToChunk(escapeTextForBrowser$1(a5))), writeChunk(r6, sn)), writeChunkAndReturn(r6, ln), flushSubtree$1(e3, r6, n5, o3), (e3 = s5.fallbackPreamble) && writePreambleContribution$1(r6, e3), writeChunkAndReturn(r6, nn);
  }
  if (1 !== s5.status) return 0 === s5.status && (s5.rootSegmentID = e3.nextSegmentId++), 0 < s5.completedSegments.length && e3.partialBoundaries.push(s5), writeStartPendingSuspenseBoundary$1(r6, e3.renderState, s5.rootSegmentID), o3 && ((s5 = s5.fallbackState).styles.forEach(hoistStyleQueueDependency$1, o3), s5.stylesheets.forEach(hoistStylesheetDependency$1, o3)), flushSubtree$1(e3, r6, n5, o3), writeChunkAndReturn(r6, nn);
  if (s5.byteSize > e3.progressiveChunkSize) return s5.rootSegmentID = e3.nextSegmentId++, e3.completedBoundaries.push(s5), writeStartPendingSuspenseBoundary$1(r6, e3.renderState, s5.rootSegmentID), flushSubtree$1(e3, r6, n5, o3), writeChunkAndReturn(r6, nn);
  if (o3 && ((n5 = s5.contentState).styles.forEach(hoistStyleQueueDependency$1, o3), n5.stylesheets.forEach(hoistStylesheetDependency$1, o3)), writeChunkAndReturn(r6, Zr), 1 !== (n5 = s5.completedSegments).length) throw Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
  return flushSegment$1(e3, r6, n5[0], o3), (e3 = s5.contentPreamble) && writePreambleContribution$1(r6, e3), writeChunkAndReturn(r6, nn);
}
function flushSegmentContainer$1(e3, r6, n5, o3) {
  return function(e4, r7, n6, o4) {
    switch (n6.insertionMode) {
      case 0:
      case 1:
      case 3:
      case 2:
        return writeChunk(e4, dn), writeChunk(e4, r7.segmentPrefix), writeChunk(e4, stringToChunk(o4.toString(16))), writeChunkAndReturn(e4, hn);
      case 4:
        return writeChunk(e4, fn), writeChunk(e4, r7.segmentPrefix), writeChunk(e4, stringToChunk(o4.toString(16))), writeChunkAndReturn(e4, mn);
      case 5:
        return writeChunk(e4, yn), writeChunk(e4, r7.segmentPrefix), writeChunk(e4, stringToChunk(o4.toString(16))), writeChunkAndReturn(e4, vn);
      case 6:
        return writeChunk(e4, Sn), writeChunk(e4, r7.segmentPrefix), writeChunk(e4, stringToChunk(o4.toString(16))), writeChunkAndReturn(e4, kn);
      case 7:
        return writeChunk(e4, wn), writeChunk(e4, r7.segmentPrefix), writeChunk(e4, stringToChunk(o4.toString(16))), writeChunkAndReturn(e4, Pn);
      case 8:
        return writeChunk(e4, xn), writeChunk(e4, r7.segmentPrefix), writeChunk(e4, stringToChunk(o4.toString(16))), writeChunkAndReturn(e4, $n);
      case 9:
        return writeChunk(e4, Fn), writeChunk(e4, r7.segmentPrefix), writeChunk(e4, stringToChunk(o4.toString(16))), writeChunkAndReturn(e4, En);
      default:
        throw Error("Unknown insertion mode. This is a bug in React.");
    }
  }(r6, e3.renderState, n5.parentFormatContext, n5.id), flushSegment$1(e3, r6, n5, o3), function(e4, r7) {
    switch (r7.insertionMode) {
      case 0:
      case 1:
      case 3:
      case 2:
        return writeChunkAndReturn(e4, pn);
      case 4:
        return writeChunkAndReturn(e4, gn);
      case 5:
        return writeChunkAndReturn(e4, bn);
      case 6:
        return writeChunkAndReturn(e4, Cn);
      case 7:
        return writeChunkAndReturn(e4, Rn);
      case 8:
        return writeChunkAndReturn(e4, Tn);
      case 9:
        return writeChunkAndReturn(e4, _n);
      default:
        throw Error("Unknown insertion mode. This is a bug in React.");
    }
  }(r6, n5.parentFormatContext);
}
function flushCompletedBoundary$1(e3, r6, n5) {
  for (var o3 = n5.completedSegments, s5 = 0; s5 < o3.length; s5++) flushPartiallyCompletedSegment$1(e3, r6, n5, o3[s5]);
  o3.length = 0, writeHoistablesForBoundary$1(r6, n5.contentState, e3.renderState), o3 = e3.resumableState, e3 = e3.renderState, s5 = n5.rootSegmentID, n5 = n5.contentState;
  var a5 = e3.stylesToHoist;
  return e3.stylesToHoist = false, writeChunk(r6, e3.startInlineScript), a5 ? 2 & o3.instructions ? 8 & o3.instructions ? writeChunk(r6, zn) : (o3.instructions |= 8, writeChunk(r6, Nn)) : (o3.instructions |= 10, writeChunk(r6, Bn)) : 2 & o3.instructions ? writeChunk(r6, jn) : (o3.instructions |= 2, writeChunk(r6, Ln)), o3 = stringToChunk(s5.toString(16)), writeChunk(r6, e3.boundaryPrefix), writeChunk(r6, o3), writeChunk(r6, Dn), writeChunk(r6, e3.segmentPrefix), writeChunk(r6, o3), a5 ? (writeChunk(r6, Hn), function(e4, r7) {
    writeChunk(e4, co);
    var n6 = co;
    r7.stylesheets.forEach(function(r8) {
      if (2 !== r8.state) if (3 === r8.state) writeChunk(e4, n6), writeChunk(e4, stringToChunk(escapeJSObjectForInstructionScripts$1("" + r8.props.href))), writeChunk(e4, fo), n6 = ho;
      else {
        writeChunk(e4, n6);
        var o4 = r8.props["data-precedence"], s6 = r8.props, a6 = sanitizeURL$1("" + r8.props.href);
        for (var i6 in writeChunk(e4, stringToChunk(escapeJSObjectForInstructionScripts$1(a6))), o4 = "" + o4, writeChunk(e4, po), writeChunk(e4, stringToChunk(escapeJSObjectForInstructionScripts$1(o4))), s6) if (Qt.call(s6, i6) && null != (o4 = s6[i6])) switch (i6) {
          case "href":
          case "rel":
          case "precedence":
          case "data-precedence":
            break;
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error("link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
          default:
            writeStyleResourceAttributeInJS$1(e4, i6, o4);
        }
        writeChunk(e4, fo), n6 = ho, r8.state = 3;
      }
    }), writeChunk(e4, fo);
  }(r6, n5)) : writeChunk(r6, Wn), n5 = writeChunkAndReturn(r6, Vn), writeBootstrap$1(r6, e3) && n5;
}
function flushPartiallyCompletedSegment$1(e3, r6, n5, o3) {
  if (2 === o3.status) return true;
  var s5 = n5.contentState, a5 = o3.id;
  if (-1 === a5) {
    if (-1 === (o3.id = n5.rootSegmentID)) throw Error("A root segment ID must have been assigned by now. This is a bug in React.");
    return flushSegmentContainer$1(e3, r6, o3, s5);
  }
  return a5 === n5.rootSegmentID ? flushSegmentContainer$1(e3, r6, o3, s5) : (flushSegmentContainer$1(e3, r6, o3, s5), n5 = e3.resumableState, writeChunk(r6, (e3 = e3.renderState).startInlineScript), 1 & n5.instructions ? writeChunk(r6, An) : (n5.instructions |= 1, writeChunk(r6, In)), writeChunk(r6, e3.segmentPrefix), writeChunk(r6, a5 = stringToChunk(a5.toString(16))), writeChunk(r6, Mn), writeChunk(r6, e3.placeholderPrefix), writeChunk(r6, a5), r6 = writeChunkAndReturn(r6, On));
}
function flushCompletedQueues$1(e3, r6) {
  Kt = new Uint8Array(2048), Gt = 0;
  try {
    if (!(0 < e3.pendingRootTasks)) {
      var n5, o3 = e3.completedRootSegment;
      if (null !== o3) {
        if (5 === o3.status) return;
        var s5 = e3.completedPreambleSegments;
        if (null === s5) return;
        var a5, i6 = e3.renderState, l5 = i6.preamble, u4 = l5.htmlChunks, c4 = l5.headChunks;
        if (u4) {
          for (a5 = 0; a5 < u4.length; a5++) writeChunk(r6, u4[a5]);
          if (c4) for (a5 = 0; a5 < c4.length; a5++) writeChunk(r6, c4[a5]);
          else writeChunk(r6, startChunkForTag$1("head")), writeChunk(r6, jr);
        } else if (c4) for (a5 = 0; a5 < c4.length; a5++) writeChunk(r6, c4[a5]);
        var h4 = i6.charsetChunks;
        for (a5 = 0; a5 < h4.length; a5++) writeChunk(r6, h4[a5]);
        h4.length = 0, i6.preconnects.forEach(flushResource$1, r6), i6.preconnects.clear();
        var p4 = i6.viewportChunks;
        for (a5 = 0; a5 < p4.length; a5++) writeChunk(r6, p4[a5]);
        p4.length = 0, i6.fontPreloads.forEach(flushResource$1, r6), i6.fontPreloads.clear(), i6.highImagePreloads.forEach(flushResource$1, r6), i6.highImagePreloads.clear(), i6.styles.forEach(flushStylesInPreamble$1, r6);
        var g3 = i6.importMapChunks;
        for (a5 = 0; a5 < g3.length; a5++) writeChunk(r6, g3[a5]);
        g3.length = 0, i6.bootstrapScripts.forEach(flushResource$1, r6), i6.scripts.forEach(flushResource$1, r6), i6.scripts.clear(), i6.bulkPreloads.forEach(flushResource$1, r6), i6.bulkPreloads.clear();
        var y3 = i6.hoistableChunks;
        for (a5 = 0; a5 < y3.length; a5++) writeChunk(r6, y3[a5]);
        for (i6 = y3.length = 0; i6 < s5.length; i6++) {
          var v3 = s5[i6];
          for (l5 = 0; l5 < v3.length; l5++) flushSegment$1(e3, r6, v3[l5], null);
        }
        var b3 = e3.renderState.preamble, k4 = b3.headChunks;
        (b3.htmlChunks || k4) && writeChunk(r6, endChunkForTag$1("head"));
        var C4 = b3.bodyChunks;
        if (C4) for (s5 = 0; s5 < C4.length; s5++) writeChunk(r6, C4[s5]);
        flushSegment$1(e3, r6, o3, null), e3.completedRootSegment = null, writeBootstrap$1(r6, e3.renderState);
      }
      var P4 = e3.renderState;
      o3 = 0;
      var R4 = P4.viewportChunks;
      for (o3 = 0; o3 < R4.length; o3++) writeChunk(r6, R4[o3]);
      R4.length = 0, P4.preconnects.forEach(flushResource$1, r6), P4.preconnects.clear(), P4.fontPreloads.forEach(flushResource$1, r6), P4.fontPreloads.clear(), P4.highImagePreloads.forEach(flushResource$1, r6), P4.highImagePreloads.clear(), P4.styles.forEach(preloadLateStyles$1, r6), P4.scripts.forEach(flushResource$1, r6), P4.scripts.clear(), P4.bulkPreloads.forEach(flushResource$1, r6), P4.bulkPreloads.clear();
      var $3 = P4.hoistableChunks;
      for (o3 = 0; o3 < $3.length; o3++) writeChunk(r6, $3[o3]);
      $3.length = 0;
      var T4 = e3.clientRenderedBoundaries;
      for (n5 = 0; n5 < T4.length; n5++) {
        var F4 = T4[n5];
        P4 = r6;
        var E4 = e3.resumableState, I4 = e3.renderState, A4 = F4.rootSegmentID, O4 = F4.errorDigest;
        writeChunk(P4, I4.startInlineScript), 4 & E4.instructions ? writeChunk(P4, Un) : (E4.instructions |= 4, writeChunk(P4, qn)), writeChunk(P4, I4.boundaryPrefix), writeChunk(P4, stringToChunk(A4.toString(16))), writeChunk(P4, Kn), O4 && (writeChunk(P4, Gn), writeChunk(P4, stringToChunk(escapeJSStringsForInstructionScripts$1(O4 || ""))));
        var B3 = writeChunkAndReturn(P4, Jn);
        if (!B3) return e3.destination = null, n5++, void T4.splice(0, n5);
      }
      T4.splice(0, n5);
      var N4 = e3.completedBoundaries;
      for (n5 = 0; n5 < N4.length; n5++) if (!flushCompletedBoundary$1(e3, r6, N4[n5])) return e3.destination = null, n5++, void N4.splice(0, n5);
      N4.splice(0, n5), completeWriting(r6), Kt = new Uint8Array(2048), Gt = 0;
      var D4 = e3.partialBoundaries;
      for (n5 = 0; n5 < D4.length; n5++) {
        var H3 = D4[n5];
        e: {
          T4 = e3, F4 = r6;
          var W4 = H3.completedSegments;
          for (B3 = 0; B3 < W4.length; B3++) if (!flushPartiallyCompletedSegment$1(T4, F4, H3, W4[B3])) {
            B3++, W4.splice(0, B3);
            var V4 = false;
            break e;
          }
          W4.splice(0, B3), V4 = writeHoistablesForBoundary$1(F4, H3.contentState, T4.renderState);
        }
        if (!V4) return e3.destination = null, n5++, void D4.splice(0, n5);
      }
      D4.splice(0, n5);
      var q3 = e3.completedBoundaries;
      for (n5 = 0; n5 < q3.length; n5++) if (!flushCompletedBoundary$1(e3, r6, q3[n5])) return e3.destination = null, n5++, void q3.splice(0, n5);
      q3.splice(0, n5);
    }
  } finally {
    0 === e3.allPendingTasks && 0 === e3.pingedTasks.length && 0 === e3.clientRenderedBoundaries.length && 0 === e3.completedBoundaries.length ? (e3.flushScheduled = false, (n5 = e3.resumableState).hasBody && writeChunk(r6, endChunkForTag$1("body")), n5.hasHtml && writeChunk(r6, endChunkForTag$1("html")), completeWriting(r6), e3.status = 14, r6.close(), e3.destination = null) : completeWriting(r6);
  }
}
function startWork(e3) {
  e3.flushScheduled = null !== e3.destination, Ut(vo ? function() {
    return bo.run(e3, performWork$1, e3);
  } : function() {
    return performWork$1(e3);
  }), setTimeout(function() {
    10 === e3.status && (e3.status = 11), null === e3.trackedPostpones && (vo ? bo.run(e3, enqueueEarlyPreloadsAfterInitialWork, e3) : enqueueEarlyPreloadsAfterInitialWork(e3));
  }, 0);
}
function enqueueEarlyPreloadsAfterInitialWork(e3) {
  safelyEmitEarlyPreloads$1(e3, 0 === e3.pendingRootTasks);
}
function enqueueFlush$1(e3) {
  false === e3.flushScheduled && 0 === e3.pingedTasks.length && null !== e3.destination && (e3.flushScheduled = true, setTimeout(function() {
    var r6 = e3.destination;
    r6 ? flushCompletedQueues$1(e3, r6) : e3.flushScheduled = false;
  }, 0));
}
function startFlowing$1(e3, r6) {
  if (13 === e3.status) e3.status = 14, closeWithError(r6, e3.fatalError);
  else if (14 !== e3.status && null === e3.destination) {
    e3.destination = r6;
    try {
      flushCompletedQueues$1(e3, r6);
    } catch (r7) {
      logRecoverableError$1(e3, r7, {}), fatalError$1(e3, r7);
    }
  }
}
function abort$1(e3, r6) {
  11 !== e3.status && 10 !== e3.status || (e3.status = 12);
  try {
    var n5 = e3.abortableTasks;
    if (0 < n5.size) {
      var o3 = void 0 === r6 ? Error("The render was aborted by the server without a reason.") : "object" == typeof r6 && null !== r6 && "function" == typeof r6.then ? Error("The render was aborted by the server with a promise.") : r6;
      e3.fatalError = o3, n5.forEach(function(r7) {
        return abortTask$1(r7, e3, o3);
      }), n5.clear();
    }
    null !== e3.destination && flushCompletedQueues$1(e3, e3.destination);
  } catch (r7) {
    logRecoverableError$1(e3, r7, {}), fatalError$1(e3, r7);
  }
}
function ensureCorrectIsomorphicReactVersion() {
  var e3 = wt.version;
  if ("19.1.1" !== e3) throw Error('Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:\n  - react:      ' + e3 + "\n  - react-dom:  19.1.1\nLearn more: https://react.dev/warnings/version-mismatch");
}
function formatProdErrorMessage(e3) {
  var r6 = "https://react.dev/errors/" + e3;
  if (1 < arguments.length) {
    r6 += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var n5 = 2; n5 < arguments.length; n5++) r6 += "&args[]=" + encodeURIComponent(arguments[n5]);
  }
  return "Minified React error #" + e3 + "; visit " + r6 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
function murmurhash3_32_gc(e3, r6) {
  var n5 = 3 & e3.length, o3 = e3.length - n5, s5 = r6;
  for (r6 = 0; r6 < o3; ) {
    var a5 = 255 & e3.charCodeAt(r6) | (255 & e3.charCodeAt(++r6)) << 8 | (255 & e3.charCodeAt(++r6)) << 16 | (255 & e3.charCodeAt(++r6)) << 24;
    ++r6, s5 = 27492 + (65535 & (s5 = 5 * (65535 & (s5 = (s5 ^= a5 = 461845907 * (65535 & (a5 = (a5 = 3432918353 * (65535 & a5) + ((3432918353 * (a5 >>> 16) & 65535) << 16) & 4294967295) << 15 | a5 >>> 17)) + ((461845907 * (a5 >>> 16) & 65535) << 16) & 4294967295) << 13 | s5 >>> 19)) + ((5 * (s5 >>> 16) & 65535) << 16) & 4294967295)) + (((s5 >>> 16) + 58964 & 65535) << 16);
  }
  switch (a5 = 0, n5) {
    case 3:
      a5 ^= (255 & e3.charCodeAt(r6 + 2)) << 16;
    case 2:
      a5 ^= (255 & e3.charCodeAt(r6 + 1)) << 8;
    case 1:
      s5 ^= 461845907 * (65535 & (a5 = (a5 = 3432918353 * (65535 & (a5 ^= 255 & e3.charCodeAt(r6))) + ((3432918353 * (a5 >>> 16) & 65535) << 16) & 4294967295) << 15 | a5 >>> 17)) + ((461845907 * (a5 >>> 16) & 65535) << 16) & 4294967295;
  }
  return s5 ^= e3.length, s5 = 2246822507 * (65535 & (s5 ^= s5 >>> 16)) + ((2246822507 * (s5 >>> 16) & 65535) << 16) & 4294967295, ((s5 = 3266489909 * (65535 & (s5 ^= s5 >>> 13)) + ((3266489909 * (s5 >>> 16) & 65535) << 16) & 4294967295) ^ s5 >>> 16) >>> 0;
}
function isAttributeNameSafe(e3) {
  return !!ws.call(xs, e3) || !ws.call(Rs, e3) && (Ps.test(e3) ? xs[e3] = true : (Rs[e3] = true, false));
}
function escapeTextForBrowser(e3) {
  if ("boolean" == typeof e3 || "number" == typeof e3 || "bigint" == typeof e3) return "" + e3;
  e3 = "" + e3;
  var r6 = Fs.exec(e3);
  if (r6) {
    var n5, o3 = "", s5 = 0;
    for (n5 = r6.index; n5 < e3.length; n5++) {
      switch (e3.charCodeAt(n5)) {
        case 34:
          r6 = "&quot;";
          break;
        case 38:
          r6 = "&amp;";
          break;
        case 39:
          r6 = "&#x27;";
          break;
        case 60:
          r6 = "&lt;";
          break;
        case 62:
          r6 = "&gt;";
          break;
        default:
          continue;
      }
      s5 !== n5 && (o3 += e3.slice(s5, n5)), s5 = n5 + 1, o3 += r6;
    }
    e3 = s5 !== n5 ? o3 + e3.slice(s5, n5) : o3;
  }
  return e3;
}
function sanitizeURL(e3) {
  return Is.test("" + e3) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e3;
}
function scriptReplacer(e3, r6, n5, o3) {
  return r6 + ("s" === n5 ? "\\u0073" : "\\u0053") + o3;
}
function createPreambleState() {
  return { htmlChunks: null, headChunks: null, bodyChunks: null, contribution: 0 };
}
function createFormatContext(e3, r6, n5) {
  return { insertionMode: e3, selectedValue: r6, tagScope: n5 };
}
function getChildFormatContext(e3, r6, n5) {
  switch (r6) {
    case "noscript":
      return createFormatContext(2, null, 1 | e3.tagScope);
    case "select":
      return createFormatContext(2, null != n5.value ? n5.value : n5.defaultValue, e3.tagScope);
    case "svg":
      return createFormatContext(4, null, e3.tagScope);
    case "picture":
      return createFormatContext(2, null, 2 | e3.tagScope);
    case "math":
      return createFormatContext(5, null, e3.tagScope);
    case "foreignObject":
      return createFormatContext(2, null, e3.tagScope);
    case "table":
      return createFormatContext(6, null, e3.tagScope);
    case "thead":
    case "tbody":
    case "tfoot":
      return createFormatContext(7, null, e3.tagScope);
    case "colgroup":
      return createFormatContext(9, null, e3.tagScope);
    case "tr":
      return createFormatContext(8, null, e3.tagScope);
    case "head":
      if (2 > e3.insertionMode) return createFormatContext(3, null, e3.tagScope);
      break;
    case "html":
      if (0 === e3.insertionMode) return createFormatContext(1, null, e3.tagScope);
  }
  return 6 <= e3.insertionMode || 2 > e3.insertionMode ? createFormatContext(2, null, e3.tagScope) : e3;
}
function pushStyleAttribute(e3, r6) {
  if ("object" != typeof r6) throw Error(formatProdErrorMessage(62));
  var n5, o3 = true;
  for (n5 in r6) if (ws.call(r6, n5)) {
    var s5 = r6[n5];
    if (null != s5 && "boolean" != typeof s5 && "" !== s5) {
      if (0 === n5.indexOf("--")) {
        var a5 = escapeTextForBrowser(n5);
        s5 = escapeTextForBrowser(("" + s5).trim());
      } else void 0 === (a5 = Ns.get(n5)) && (a5 = escapeTextForBrowser(n5.replace(Es, "-$1").toLowerCase().replace(_s, "-ms-")), Ns.set(n5, a5)), s5 = "number" == typeof s5 ? 0 === s5 || $s.has(n5) ? "" + s5 : s5 + "px" : escapeTextForBrowser(("" + s5).trim());
      o3 ? (o3 = false, e3.push(' style="', a5, ":", s5)) : e3.push(";", a5, ":", s5);
    }
  }
  o3 || e3.push('"');
}
function pushBooleanAttribute(e3, r6, n5) {
  n5 && "function" != typeof n5 && "symbol" != typeof n5 && e3.push(" ", r6, '=""');
}
function pushStringAttribute(e3, r6, n5) {
  "function" != typeof n5 && "symbol" != typeof n5 && "boolean" != typeof n5 && e3.push(" ", r6, '="', escapeTextForBrowser(n5), '"');
}
function pushAdditionalFormField(e3, r6) {
  this.push('<input type="hidden"'), validateAdditionalFormField(e3), pushStringAttribute(this, "name", r6), pushStringAttribute(this, "value", e3), this.push("/>");
}
function validateAdditionalFormField(e3) {
  if ("string" != typeof e3) throw Error(formatProdErrorMessage(480));
}
function getCustomFormFields(e3, r6) {
  if ("function" == typeof r6.$$FORM_ACTION) {
    var n5 = e3.nextFormID++;
    e3 = e3.idPrefix + n5;
    try {
      var o3 = r6.$$FORM_ACTION(e3);
      if (o3) {
        var s5 = o3.data;
        null != s5 && s5.forEach(validateAdditionalFormField);
      }
      return o3;
    } catch (e4) {
      if ("object" == typeof e4 && null !== e4 && "function" == typeof e4.then) throw e4;
    }
  }
  return null;
}
function pushFormActionAttribute(e3, r6, n5, o3, s5, a5, i6, l5) {
  var u4 = null;
  if ("function" == typeof o3) {
    var c4 = getCustomFormFields(r6, o3);
    null !== c4 ? (l5 = c4.name, o3 = c4.action || "", s5 = c4.encType, a5 = c4.method, i6 = c4.target, u4 = c4.data) : (e3.push(" ", "formAction", '="', zs, '"'), i6 = a5 = s5 = o3 = l5 = null, injectFormReplayingRuntime(r6, n5));
  }
  return null != l5 && pushAttribute(e3, "name", l5), null != o3 && pushAttribute(e3, "formAction", o3), null != s5 && pushAttribute(e3, "formEncType", s5), null != a5 && pushAttribute(e3, "formMethod", a5), null != i6 && pushAttribute(e3, "formTarget", i6), u4;
}
function pushAttribute(e3, r6, n5) {
  switch (r6) {
    case "className":
      pushStringAttribute(e3, "class", n5);
      break;
    case "tabIndex":
      pushStringAttribute(e3, "tabindex", n5);
      break;
    case "dir":
    case "role":
    case "viewBox":
    case "width":
    case "height":
      pushStringAttribute(e3, r6, n5);
      break;
    case "style":
      pushStyleAttribute(e3, n5);
      break;
    case "src":
    case "href":
      if ("" === n5) break;
    case "action":
    case "formAction":
      if (null == n5 || "function" == typeof n5 || "symbol" == typeof n5 || "boolean" == typeof n5) break;
      n5 = sanitizeURL("" + n5), e3.push(" ", r6, '="', escapeTextForBrowser(n5), '"');
      break;
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "ref":
      break;
    case "autoFocus":
    case "multiple":
    case "muted":
      pushBooleanAttribute(e3, r6.toLowerCase(), n5);
      break;
    case "xlinkHref":
      if ("function" == typeof n5 || "symbol" == typeof n5 || "boolean" == typeof n5) break;
      n5 = sanitizeURL("" + n5), e3.push(" ", "xlink:href", '="', escapeTextForBrowser(n5), '"');
      break;
    case "contentEditable":
    case "spellCheck":
    case "draggable":
    case "value":
    case "autoReverse":
    case "externalResourcesRequired":
    case "focusable":
    case "preserveAlpha":
      "function" != typeof n5 && "symbol" != typeof n5 && e3.push(" ", r6, '="', escapeTextForBrowser(n5), '"');
      break;
    case "inert":
    case "allowFullScreen":
    case "async":
    case "autoPlay":
    case "controls":
    case "default":
    case "defer":
    case "disabled":
    case "disablePictureInPicture":
    case "disableRemotePlayback":
    case "formNoValidate":
    case "hidden":
    case "loop":
    case "noModule":
    case "noValidate":
    case "open":
    case "playsInline":
    case "readOnly":
    case "required":
    case "reversed":
    case "scoped":
    case "seamless":
    case "itemScope":
      n5 && "function" != typeof n5 && "symbol" != typeof n5 && e3.push(" ", r6, '=""');
      break;
    case "capture":
    case "download":
      true === n5 ? e3.push(" ", r6, '=""') : false !== n5 && "function" != typeof n5 && "symbol" != typeof n5 && e3.push(" ", r6, '="', escapeTextForBrowser(n5), '"');
      break;
    case "cols":
    case "rows":
    case "size":
    case "span":
      "function" != typeof n5 && "symbol" != typeof n5 && !isNaN(n5) && 1 <= n5 && e3.push(" ", r6, '="', escapeTextForBrowser(n5), '"');
      break;
    case "rowSpan":
    case "start":
      "function" == typeof n5 || "symbol" == typeof n5 || isNaN(n5) || e3.push(" ", r6, '="', escapeTextForBrowser(n5), '"');
      break;
    case "xlinkActuate":
      pushStringAttribute(e3, "xlink:actuate", n5);
      break;
    case "xlinkArcrole":
      pushStringAttribute(e3, "xlink:arcrole", n5);
      break;
    case "xlinkRole":
      pushStringAttribute(e3, "xlink:role", n5);
      break;
    case "xlinkShow":
      pushStringAttribute(e3, "xlink:show", n5);
      break;
    case "xlinkTitle":
      pushStringAttribute(e3, "xlink:title", n5);
      break;
    case "xlinkType":
      pushStringAttribute(e3, "xlink:type", n5);
      break;
    case "xmlBase":
      pushStringAttribute(e3, "xml:base", n5);
      break;
    case "xmlLang":
      pushStringAttribute(e3, "xml:lang", n5);
      break;
    case "xmlSpace":
      pushStringAttribute(e3, "xml:space", n5);
      break;
    default:
      if ((!(2 < r6.length) || "o" !== r6[0] && "O" !== r6[0] || "n" !== r6[1] && "N" !== r6[1]) && isAttributeNameSafe(r6 = Ts.get(r6) || r6)) {
        switch (typeof n5) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            var o3 = r6.toLowerCase().slice(0, 5);
            if ("data-" !== o3 && "aria-" !== o3) return;
        }
        e3.push(" ", r6, '="', escapeTextForBrowser(n5), '"');
      }
  }
}
function pushInnerHTML(e3, r6, n5) {
  if (null != r6) {
    if (null != n5) throw Error(formatProdErrorMessage(60));
    if ("object" != typeof r6 || !("__html" in r6)) throw Error(formatProdErrorMessage(61));
    null != (r6 = r6.__html) && e3.push("" + r6);
  }
}
function injectFormReplayingRuntime(e3, r6) {
  !(16 & e3.instructions) && (e3.instructions |= 16, r6.bootstrapChunks.unshift(r6.startInlineScript, `addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});`, "<\/script>"));
}
function pushLinkImpl(e3, r6) {
  for (var n5 in e3.push(startChunkForTag("link")), r6) if (ws.call(r6, n5)) {
    var o3 = r6[n5];
    if (null != o3) switch (n5) {
      case "children":
      case "dangerouslySetInnerHTML":
        throw Error(formatProdErrorMessage(399, "link"));
      default:
        pushAttribute(e3, n5, o3);
    }
  }
  return e3.push("/>"), null;
}
function styleReplacer(e3, r6, n5, o3) {
  return r6 + ("s" === n5 ? "\\73 " : "\\53 ") + o3;
}
function pushSelfClosing(e3, r6, n5) {
  for (var o3 in e3.push(startChunkForTag(n5)), r6) if (ws.call(r6, o3)) {
    var s5 = r6[o3];
    if (null != s5) switch (o3) {
      case "children":
      case "dangerouslySetInnerHTML":
        throw Error(formatProdErrorMessage(399, n5));
      default:
        pushAttribute(e3, o3, s5);
    }
  }
  return e3.push("/>"), null;
}
function pushTitleImpl(e3, r6) {
  e3.push(startChunkForTag("title"));
  var n5, o3 = null, s5 = null;
  for (n5 in r6) if (ws.call(r6, n5)) {
    var a5 = r6[n5];
    if (null != a5) switch (n5) {
      case "children":
        o3 = a5;
        break;
      case "dangerouslySetInnerHTML":
        s5 = a5;
        break;
      default:
        pushAttribute(e3, n5, a5);
    }
  }
  return e3.push(">"), "function" != typeof (r6 = Array.isArray(o3) ? 2 > o3.length ? o3[0] : null : o3) && "symbol" != typeof r6 && null != r6 && e3.push(escapeTextForBrowser("" + r6)), pushInnerHTML(e3, s5, o3), e3.push(endChunkForTag("title")), null;
}
function pushScriptImpl(e3, r6) {
  e3.push(startChunkForTag("script"));
  var n5, o3 = null, s5 = null;
  for (n5 in r6) if (ws.call(r6, n5)) {
    var a5 = r6[n5];
    if (null != a5) switch (n5) {
      case "children":
        o3 = a5;
        break;
      case "dangerouslySetInnerHTML":
        s5 = a5;
        break;
      default:
        pushAttribute(e3, n5, a5);
    }
  }
  return e3.push(">"), pushInnerHTML(e3, s5, o3), "string" == typeof o3 && e3.push(("" + o3).replace(Bs, scriptReplacer)), e3.push(endChunkForTag("script")), null;
}
function pushStartSingletonElement(e3, r6, n5) {
  e3.push(startChunkForTag(n5));
  var o3, s5 = n5 = null;
  for (o3 in r6) if (ws.call(r6, o3)) {
    var a5 = r6[o3];
    if (null != a5) switch (o3) {
      case "children":
        n5 = a5;
        break;
      case "dangerouslySetInnerHTML":
        s5 = a5;
        break;
      default:
        pushAttribute(e3, o3, a5);
    }
  }
  return e3.push(">"), pushInnerHTML(e3, s5, n5), n5;
}
function pushStartGenericElement(e3, r6, n5) {
  e3.push(startChunkForTag(n5));
  var o3, s5 = n5 = null;
  for (o3 in r6) if (ws.call(r6, o3)) {
    var a5 = r6[o3];
    if (null != a5) switch (o3) {
      case "children":
        n5 = a5;
        break;
      case "dangerouslySetInnerHTML":
        s5 = a5;
        break;
      default:
        pushAttribute(e3, o3, a5);
    }
  }
  return e3.push(">"), pushInnerHTML(e3, s5, n5), "string" == typeof n5 ? (e3.push(escapeTextForBrowser(n5)), null) : n5;
}
function startChunkForTag(e3) {
  var r6 = Ws.get(e3);
  if (void 0 === r6) {
    if (!Hs.test(e3)) throw Error(formatProdErrorMessage(65, e3));
    r6 = "<" + e3, Ws.set(e3, r6);
  }
  return r6;
}
function pushStartInstance(e3, r6, n5, o3, s5, a5, i6, l5, u4, c4) {
  switch (r6) {
    case "div":
    case "span":
    case "svg":
    case "path":
    case "g":
    case "p":
    case "li":
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      break;
    case "a":
      e3.push(startChunkForTag("a"));
      var h4, p4 = null, g3 = null;
      for (h4 in n5) if (ws.call(n5, h4)) {
        var y3 = n5[h4];
        if (null != y3) switch (h4) {
          case "children":
            p4 = y3;
            break;
          case "dangerouslySetInnerHTML":
            g3 = y3;
            break;
          case "href":
            "" === y3 ? pushStringAttribute(e3, "href", "") : pushAttribute(e3, h4, y3);
            break;
          default:
            pushAttribute(e3, h4, y3);
        }
      }
      if (e3.push(">"), pushInnerHTML(e3, g3, p4), "string" == typeof p4) {
        e3.push(escapeTextForBrowser(p4));
        var v3 = null;
      } else v3 = p4;
      return v3;
    case "select":
      e3.push(startChunkForTag("select"));
      var b3, k4 = null, C4 = null;
      for (b3 in n5) if (ws.call(n5, b3)) {
        var P4 = n5[b3];
        if (null != P4) switch (b3) {
          case "children":
            k4 = P4;
            break;
          case "dangerouslySetInnerHTML":
            C4 = P4;
            break;
          case "defaultValue":
          case "value":
            break;
          default:
            pushAttribute(e3, b3, P4);
        }
      }
      return e3.push(">"), pushInnerHTML(e3, C4, k4), k4;
    case "option":
      var R4 = l5.selectedValue;
      e3.push(startChunkForTag("option"));
      var $3, T4 = null, F4 = null, E4 = null, I4 = null;
      for ($3 in n5) if (ws.call(n5, $3)) {
        var A4 = n5[$3];
        if (null != A4) switch ($3) {
          case "children":
            T4 = A4;
            break;
          case "selected":
            E4 = A4;
            break;
          case "dangerouslySetInnerHTML":
            I4 = A4;
            break;
          case "value":
            F4 = A4;
          default:
            pushAttribute(e3, $3, A4);
        }
      }
      if (null != R4) {
        var O4 = null !== F4 ? "" + F4 : function(e4) {
          var r7 = "";
          return es.Children.forEach(e4, function(e5) {
            null != e5 && (r7 += e5);
          }), r7;
        }(T4);
        if (ks(R4)) {
          for (var B3 = 0; B3 < R4.length; B3++) if ("" + R4[B3] === O4) {
            e3.push(' selected=""');
            break;
          }
        } else "" + R4 === O4 && e3.push(' selected=""');
      } else E4 && e3.push(' selected=""');
      return e3.push(">"), pushInnerHTML(e3, I4, T4), T4;
    case "textarea":
      e3.push(startChunkForTag("textarea"));
      var N4, D4 = null, H3 = null, W4 = null;
      for (N4 in n5) if (ws.call(n5, N4)) {
        var V4 = n5[N4];
        if (null != V4) switch (N4) {
          case "children":
            W4 = V4;
            break;
          case "value":
            D4 = V4;
            break;
          case "defaultValue":
            H3 = V4;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(formatProdErrorMessage(91));
          default:
            pushAttribute(e3, N4, V4);
        }
      }
      if (null === D4 && null !== H3 && (D4 = H3), e3.push(">"), null != W4) {
        if (null != D4) throw Error(formatProdErrorMessage(92));
        if (ks(W4)) {
          if (1 < W4.length) throw Error(formatProdErrorMessage(93));
          D4 = "" + W4[0];
        }
        D4 = "" + W4;
      }
      return "string" == typeof D4 && "\n" === D4[0] && e3.push("\n"), null !== D4 && e3.push(escapeTextForBrowser("" + D4)), null;
    case "input":
      e3.push(startChunkForTag("input"));
      var q3, G3 = null, X4 = null, Q3 = null, Y4 = null, Z3 = null, ee3 = null, te3 = null, re3 = null, ne3 = null;
      for (q3 in n5) if (ws.call(n5, q3)) {
        var oe3 = n5[q3];
        if (null != oe3) switch (q3) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(formatProdErrorMessage(399, "input"));
          case "name":
            G3 = oe3;
            break;
          case "formAction":
            X4 = oe3;
            break;
          case "formEncType":
            Q3 = oe3;
            break;
          case "formMethod":
            Y4 = oe3;
            break;
          case "formTarget":
            Z3 = oe3;
            break;
          case "defaultChecked":
            ne3 = oe3;
            break;
          case "defaultValue":
            te3 = oe3;
            break;
          case "checked":
            re3 = oe3;
            break;
          case "value":
            ee3 = oe3;
            break;
          default:
            pushAttribute(e3, q3, oe3);
        }
      }
      var ae3 = pushFormActionAttribute(e3, o3, s5, X4, Q3, Y4, Z3, G3);
      return null !== re3 ? pushBooleanAttribute(e3, "checked", re3) : null !== ne3 && pushBooleanAttribute(e3, "checked", ne3), null !== ee3 ? pushAttribute(e3, "value", ee3) : null !== te3 && pushAttribute(e3, "value", te3), e3.push("/>"), null != ae3 && ae3.forEach(pushAdditionalFormField, e3), null;
    case "button":
      e3.push(startChunkForTag("button"));
      var ie3, le3 = null, ue3 = null, ce3 = null, de3 = null, he3 = null, pe3 = null, ge3 = null;
      for (ie3 in n5) if (ws.call(n5, ie3)) {
        var ye3 = n5[ie3];
        if (null != ye3) switch (ie3) {
          case "children":
            le3 = ye3;
            break;
          case "dangerouslySetInnerHTML":
            ue3 = ye3;
            break;
          case "name":
            ce3 = ye3;
            break;
          case "formAction":
            de3 = ye3;
            break;
          case "formEncType":
            he3 = ye3;
            break;
          case "formMethod":
            pe3 = ye3;
            break;
          case "formTarget":
            ge3 = ye3;
            break;
          default:
            pushAttribute(e3, ie3, ye3);
        }
      }
      var ve3 = pushFormActionAttribute(e3, o3, s5, de3, he3, pe3, ge3, ce3);
      if (e3.push(">"), null != ve3 && ve3.forEach(pushAdditionalFormField, e3), pushInnerHTML(e3, ue3, le3), "string" == typeof le3) {
        e3.push(escapeTextForBrowser(le3));
        var be3 = null;
      } else be3 = le3;
      return be3;
    case "form":
      e3.push(startChunkForTag("form"));
      var Se3, ke3 = null, Ce3 = null, we3 = null, Pe3 = null, Re3 = null, xe3 = null;
      for (Se3 in n5) if (ws.call(n5, Se3)) {
        var $e3 = n5[Se3];
        if (null != $e3) switch (Se3) {
          case "children":
            ke3 = $e3;
            break;
          case "dangerouslySetInnerHTML":
            Ce3 = $e3;
            break;
          case "action":
            we3 = $e3;
            break;
          case "encType":
            Pe3 = $e3;
            break;
          case "method":
            Re3 = $e3;
            break;
          case "target":
            xe3 = $e3;
            break;
          default:
            pushAttribute(e3, Se3, $e3);
        }
      }
      var Te3 = null, Fe3 = null;
      if ("function" == typeof we3) {
        var Ee3 = getCustomFormFields(o3, we3);
        null !== Ee3 ? (we3 = Ee3.action || "", Pe3 = Ee3.encType, Re3 = Ee3.method, xe3 = Ee3.target, Te3 = Ee3.data, Fe3 = Ee3.name) : (e3.push(" ", "action", '="', zs, '"'), xe3 = Re3 = Pe3 = we3 = null, injectFormReplayingRuntime(o3, s5));
      }
      if (null != we3 && pushAttribute(e3, "action", we3), null != Pe3 && pushAttribute(e3, "encType", Pe3), null != Re3 && pushAttribute(e3, "method", Re3), null != xe3 && pushAttribute(e3, "target", xe3), e3.push(">"), null !== Fe3 && (e3.push('<input type="hidden"'), pushStringAttribute(e3, "name", Fe3), e3.push("/>"), null != Te3 && Te3.forEach(pushAdditionalFormField, e3)), pushInnerHTML(e3, Ce3, ke3), "string" == typeof ke3) {
        e3.push(escapeTextForBrowser(ke3));
        var _e3 = null;
      } else _e3 = ke3;
      return _e3;
    case "menuitem":
      for (var Ie3 in e3.push(startChunkForTag("menuitem")), n5) if (ws.call(n5, Ie3)) {
        var Ae3 = n5[Ie3];
        if (null != Ae3) switch (Ie3) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(formatProdErrorMessage(400));
          default:
            pushAttribute(e3, Ie3, Ae3);
        }
      }
      return e3.push(">"), null;
    case "object":
      e3.push(startChunkForTag("object"));
      var Me3, Oe3 = null, Be3 = null;
      for (Me3 in n5) if (ws.call(n5, Me3)) {
        var Ne3 = n5[Me3];
        if (null != Ne3) switch (Me3) {
          case "children":
            Oe3 = Ne3;
            break;
          case "dangerouslySetInnerHTML":
            Be3 = Ne3;
            break;
          case "data":
            var ze3 = sanitizeURL("" + Ne3);
            if ("" === ze3) break;
            e3.push(" ", "data", '="', escapeTextForBrowser(ze3), '"');
            break;
          default:
            pushAttribute(e3, Me3, Ne3);
        }
      }
      if (e3.push(">"), pushInnerHTML(e3, Be3, Oe3), "string" == typeof Oe3) {
        e3.push(escapeTextForBrowser(Oe3));
        var De3 = null;
      } else De3 = Oe3;
      return De3;
    case "title":
      if (4 === l5.insertionMode || 1 & l5.tagScope || null != n5.itemProp) var He3 = pushTitleImpl(e3, n5);
      else c4 ? He3 = null : (pushTitleImpl(s5.hoistableChunks, n5), He3 = void 0);
      return He3;
    case "link":
      var We3 = n5.rel, Ve3 = n5.href, qe3 = n5.precedence;
      if (4 === l5.insertionMode || 1 & l5.tagScope || null != n5.itemProp || "string" != typeof We3 || "string" != typeof Ve3 || "" === Ve3) {
        pushLinkImpl(e3, n5);
        var Ue3 = null;
      } else if ("stylesheet" === n5.rel) if ("string" != typeof qe3 || null != n5.disabled || n5.onLoad || n5.onError) Ue3 = pushLinkImpl(e3, n5);
      else {
        var Ke3 = s5.styles.get(qe3), Ge3 = o3.styleResources.hasOwnProperty(Ve3) ? o3.styleResources[Ve3] : void 0;
        if (null !== Ge3) {
          o3.styleResources[Ve3] = null, Ke3 || (Ke3 = { precedence: escapeTextForBrowser(qe3), rules: [], hrefs: [], sheets: /* @__PURE__ */ new Map() }, s5.styles.set(qe3, Ke3));
          var Je3 = { state: 0, props: Cs({}, n5, { "data-precedence": n5.precedence, precedence: null }) };
          if (Ge3) {
            2 === Ge3.length && adoptPreloadCredentials(Je3.props, Ge3);
            var Xe3 = s5.preloads.stylesheets.get(Ve3);
            Xe3 && 0 < Xe3.length ? Xe3.length = 0 : Je3.state = 1;
          }
          Ke3.sheets.set(Ve3, Je3), i6 && i6.stylesheets.add(Je3);
        } else if (Ke3) {
          var Qe3 = Ke3.sheets.get(Ve3);
          Qe3 && i6 && i6.stylesheets.add(Qe3);
        }
        u4 && e3.push("<!-- -->"), Ue3 = null;
      }
      else n5.onLoad || n5.onError ? Ue3 = pushLinkImpl(e3, n5) : (u4 && e3.push("<!-- -->"), Ue3 = c4 ? null : pushLinkImpl(s5.hoistableChunks, n5));
      return Ue3;
    case "script":
      var Ze3 = n5.async;
      if ("string" != typeof n5.src || !n5.src || !Ze3 || "function" == typeof Ze3 || "symbol" == typeof Ze3 || n5.onLoad || n5.onError || 4 === l5.insertionMode || 1 & l5.tagScope || null != n5.itemProp) var et3 = pushScriptImpl(e3, n5);
      else {
        var tt3 = n5.src;
        if ("module" === n5.type) var rt3 = o3.moduleScriptResources, nt3 = s5.preloads.moduleScripts;
        else rt3 = o3.scriptResources, nt3 = s5.preloads.scripts;
        var ot3 = rt3.hasOwnProperty(tt3) ? rt3[tt3] : void 0;
        if (null !== ot3) {
          rt3[tt3] = null;
          var st3 = n5;
          if (ot3) {
            2 === ot3.length && adoptPreloadCredentials(st3 = Cs({}, n5), ot3);
            var at3 = nt3.get(tt3);
            at3 && (at3.length = 0);
          }
          var it3 = [];
          s5.scripts.add(it3), pushScriptImpl(it3, st3);
        }
        u4 && e3.push("<!-- -->"), et3 = null;
      }
      return et3;
    case "style":
      var lt3 = n5.precedence, ut3 = n5.href;
      if (4 === l5.insertionMode || 1 & l5.tagScope || null != n5.itemProp || "string" != typeof lt3 || "string" != typeof ut3 || "" === ut3) {
        e3.push(startChunkForTag("style"));
        var ct3, dt3 = null, ht3 = null;
        for (ct3 in n5) if (ws.call(n5, ct3)) {
          var pt3 = n5[ct3];
          if (null != pt3) switch (ct3) {
            case "children":
              dt3 = pt3;
              break;
            case "dangerouslySetInnerHTML":
              ht3 = pt3;
              break;
            default:
              pushAttribute(e3, ct3, pt3);
          }
        }
        e3.push(">");
        var ft3 = Array.isArray(dt3) ? 2 > dt3.length ? dt3[0] : null : dt3;
        "function" != typeof ft3 && "symbol" != typeof ft3 && null != ft3 && e3.push(("" + ft3).replace(Ds, styleReplacer)), pushInnerHTML(e3, ht3, dt3), e3.push(endChunkForTag("style"));
        var mt3 = null;
      } else {
        var gt3 = s5.styles.get(lt3);
        if (null !== (o3.styleResources.hasOwnProperty(ut3) ? o3.styleResources[ut3] : void 0)) {
          o3.styleResources[ut3] = null, gt3 ? gt3.hrefs.push(escapeTextForBrowser(ut3)) : (gt3 = { precedence: escapeTextForBrowser(lt3), rules: [], hrefs: [escapeTextForBrowser(ut3)], sheets: /* @__PURE__ */ new Map() }, s5.styles.set(lt3, gt3));
          var yt3, vt3 = gt3.rules, bt3 = null, St3 = null;
          for (yt3 in n5) if (ws.call(n5, yt3)) {
            var kt3 = n5[yt3];
            if (null != kt3) switch (yt3) {
              case "children":
                bt3 = kt3;
                break;
              case "dangerouslySetInnerHTML":
                St3 = kt3;
            }
          }
          var Ct3 = Array.isArray(bt3) ? 2 > bt3.length ? bt3[0] : null : bt3;
          "function" != typeof Ct3 && "symbol" != typeof Ct3 && null != Ct3 && vt3.push(("" + Ct3).replace(Ds, styleReplacer)), pushInnerHTML(vt3, St3, bt3);
        }
        gt3 && i6 && i6.styles.add(gt3), u4 && e3.push("<!-- -->"), mt3 = void 0;
      }
      return mt3;
    case "meta":
      if (4 === l5.insertionMode || 1 & l5.tagScope || null != n5.itemProp) var wt3 = pushSelfClosing(e3, n5, "meta");
      else u4 && e3.push("<!-- -->"), wt3 = c4 ? null : "string" == typeof n5.charSet ? pushSelfClosing(s5.charsetChunks, n5, "meta") : "viewport" === n5.name ? pushSelfClosing(s5.viewportChunks, n5, "meta") : pushSelfClosing(s5.hoistableChunks, n5, "meta");
      return wt3;
    case "listing":
    case "pre":
      e3.push(startChunkForTag(r6));
      var Pt3, Rt3 = null, xt3 = null;
      for (Pt3 in n5) if (ws.call(n5, Pt3)) {
        var $t3 = n5[Pt3];
        if (null != $t3) switch (Pt3) {
          case "children":
            Rt3 = $t3;
            break;
          case "dangerouslySetInnerHTML":
            xt3 = $t3;
            break;
          default:
            pushAttribute(e3, Pt3, $t3);
        }
      }
      if (e3.push(">"), null != xt3) {
        if (null != Rt3) throw Error(formatProdErrorMessage(60));
        if ("object" != typeof xt3 || !("__html" in xt3)) throw Error(formatProdErrorMessage(61));
        var Tt3 = xt3.__html;
        null != Tt3 && ("string" == typeof Tt3 && 0 < Tt3.length && "\n" === Tt3[0] ? e3.push("\n", Tt3) : e3.push("" + Tt3));
      }
      return "string" == typeof Rt3 && "\n" === Rt3[0] && e3.push("\n"), Rt3;
    case "img":
      var Ft3 = n5.src, Et3 = n5.srcSet;
      if (!("lazy" === n5.loading || !Ft3 && !Et3 || "string" != typeof Ft3 && null != Ft3 || "string" != typeof Et3 && null != Et3) && "low" !== n5.fetchPriority && false == !!(3 & l5.tagScope) && ("string" != typeof Ft3 || ":" !== Ft3[4] || "d" !== Ft3[0] && "D" !== Ft3[0] || "a" !== Ft3[1] && "A" !== Ft3[1] || "t" !== Ft3[2] && "T" !== Ft3[2] || "a" !== Ft3[3] && "A" !== Ft3[3]) && ("string" != typeof Et3 || ":" !== Et3[4] || "d" !== Et3[0] && "D" !== Et3[0] || "a" !== Et3[1] && "A" !== Et3[1] || "t" !== Et3[2] && "T" !== Et3[2] || "a" !== Et3[3] && "A" !== Et3[3])) {
        var _t3 = "string" == typeof n5.sizes ? n5.sizes : void 0, It3 = Et3 ? Et3 + "\n" + (_t3 || "") : Ft3, At3 = s5.preloads.images, Mt3 = At3.get(It3);
        if (Mt3) ("high" === n5.fetchPriority || 10 > s5.highImagePreloads.size) && (At3.delete(It3), s5.highImagePreloads.add(Mt3));
        else if (!o3.imageResources.hasOwnProperty(It3)) {
          o3.imageResources[It3] = js;
          var Ot3, Lt3 = n5.crossOrigin, jt3 = "string" == typeof Lt3 ? "use-credentials" === Lt3 ? Lt3 : "" : void 0, Bt3 = s5.headers;
          Bt3 && 0 < Bt3.remainingCapacity && "string" != typeof n5.srcSet && ("high" === n5.fetchPriority || 500 > Bt3.highImagePreloads.length) && (Ot3 = getPreloadAsHeader(Ft3, "image", { imageSrcSet: n5.srcSet, imageSizes: n5.sizes, crossOrigin: jt3, integrity: n5.integrity, nonce: n5.nonce, type: n5.type, fetchPriority: n5.fetchPriority, referrerPolicy: n5.refererPolicy }), 0 <= (Bt3.remainingCapacity -= Ot3.length + 2)) ? (s5.resets.image[It3] = js, Bt3.highImagePreloads && (Bt3.highImagePreloads += ", "), Bt3.highImagePreloads += Ot3) : (pushLinkImpl(Mt3 = [], { rel: "preload", as: "image", href: Et3 ? void 0 : Ft3, imageSrcSet: Et3, imageSizes: _t3, crossOrigin: jt3, integrity: n5.integrity, type: n5.type, fetchPriority: n5.fetchPriority, referrerPolicy: n5.referrerPolicy }), "high" === n5.fetchPriority || 10 > s5.highImagePreloads.size ? s5.highImagePreloads.add(Mt3) : (s5.bulkPreloads.add(Mt3), At3.set(It3, Mt3)));
        }
      }
      return pushSelfClosing(e3, n5, "img");
    case "base":
    case "area":
    case "br":
    case "col":
    case "embed":
    case "hr":
    case "keygen":
    case "param":
    case "source":
    case "track":
    case "wbr":
      return pushSelfClosing(e3, n5, r6);
    case "head":
      if (2 > l5.insertionMode) {
        var Nt3 = a5 || s5.preamble;
        if (Nt3.headChunks) throw Error(formatProdErrorMessage(545, "`<head>`"));
        Nt3.headChunks = [];
        var zt3 = pushStartSingletonElement(Nt3.headChunks, n5, "head");
      } else zt3 = pushStartGenericElement(e3, n5, "head");
      return zt3;
    case "body":
      if (2 > l5.insertionMode) {
        var Dt3 = a5 || s5.preamble;
        if (Dt3.bodyChunks) throw Error(formatProdErrorMessage(545, "`<body>`"));
        Dt3.bodyChunks = [];
        var Ht3 = pushStartSingletonElement(Dt3.bodyChunks, n5, "body");
      } else Ht3 = pushStartGenericElement(e3, n5, "body");
      return Ht3;
    case "html":
      if (0 === l5.insertionMode) {
        var Wt3 = a5 || s5.preamble;
        if (Wt3.htmlChunks) throw Error(formatProdErrorMessage(545, "`<html>`"));
        Wt3.htmlChunks = [""];
        var Vt3 = pushStartSingletonElement(Wt3.htmlChunks, n5, "html");
      } else Vt3 = pushStartGenericElement(e3, n5, "html");
      return Vt3;
    default:
      if (-1 !== r6.indexOf("-")) {
        e3.push(startChunkForTag(r6));
        var qt3, Ut3 = null, Kt3 = null;
        for (qt3 in n5) if (ws.call(n5, qt3)) {
          var Gt3 = n5[qt3];
          if (null != Gt3) {
            var Jt3 = qt3;
            switch (qt3) {
              case "children":
                Ut3 = Gt3;
                break;
              case "dangerouslySetInnerHTML":
                Kt3 = Gt3;
                break;
              case "style":
                pushStyleAttribute(e3, Gt3);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
              case "ref":
                break;
              case "className":
                Jt3 = "class";
              default:
                if (isAttributeNameSafe(qt3) && "function" != typeof Gt3 && "symbol" != typeof Gt3 && false !== Gt3) {
                  if (true === Gt3) Gt3 = "";
                  else if ("object" == typeof Gt3) continue;
                  e3.push(" ", Jt3, '="', escapeTextForBrowser(Gt3), '"');
                }
            }
          }
        }
        return e3.push(">"), pushInnerHTML(e3, Kt3, Ut3), Ut3;
      }
  }
  return pushStartGenericElement(e3, n5, r6);
}
function endChunkForTag(e3) {
  var r6 = Vs.get(e3);
  return void 0 === r6 && (r6 = "</" + e3 + ">", Vs.set(e3, r6)), r6;
}
function hoistPreambleState(e3, r6) {
  null === (e3 = e3.preamble).htmlChunks && r6.htmlChunks && (e3.htmlChunks = r6.htmlChunks, r6.contribution |= 1), null === e3.headChunks && r6.headChunks && (e3.headChunks = r6.headChunks, r6.contribution |= 4), null === e3.bodyChunks && r6.bodyChunks && (e3.bodyChunks = r6.bodyChunks, r6.contribution |= 2);
}
function writeBootstrap(e3, r6) {
  r6 = r6.bootstrapChunks;
  for (var n5 = 0; n5 < r6.length - 1; n5++) e3.push(r6[n5]);
  return !(n5 < r6.length) || (n5 = r6[n5], r6.length = 0, e3.push(n5));
}
function writeStartPendingSuspenseBoundary(e3, r6, n5) {
  if (e3.push('<!--$?--><template id="'), null === n5) throw Error(formatProdErrorMessage(395));
  return e3.push(r6.boundaryPrefix), r6 = n5.toString(16), e3.push(r6), e3.push('"></template>');
}
function writePreambleContribution(e3, r6) {
  0 !== (r6 = r6.contribution) && (e3.push("<!--"), e3.push("" + r6), e3.push("-->"));
}
function escapeJSStringsForInstructionScripts(e3) {
  return JSON.stringify(e3).replace(qs, function(e4) {
    switch (e4) {
      case "<":
        return "\\u003c";
      case "\u2028":
        return "\\u2028";
      case "\u2029":
        return "\\u2029";
      default:
        throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
    }
  });
}
function escapeJSObjectForInstructionScripts(e3) {
  return JSON.stringify(e3).replace(Us, function(e4) {
    switch (e4) {
      case "&":
        return "\\u0026";
      case ">":
        return "\\u003e";
      case "<":
        return "\\u003c";
      case "\u2028":
        return "\\u2028";
      case "\u2029":
        return "\\u2029";
      default:
        throw Error("escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
    }
  });
}
function flushStyleTagsLateForBoundary(e3) {
  var r6 = e3.rules, n5 = e3.hrefs, o3 = 0;
  if (n5.length) {
    for (this.push('<style media="not all" data-precedence="'), this.push(e3.precedence), this.push('" data-href="'); o3 < n5.length - 1; o3++) this.push(n5[o3]), this.push(" ");
    for (this.push(n5[o3]), this.push('">'), o3 = 0; o3 < r6.length; o3++) this.push(r6[o3]);
    Gs = this.push("</style>"), Ks = true, r6.length = 0, n5.length = 0;
  }
}
function hasStylesToHoist(e3) {
  return 2 !== e3.state && (Ks = true);
}
function writeHoistablesForBoundary(e3, r6, n5) {
  return Ks = false, Gs = true, r6.styles.forEach(flushStyleTagsLateForBoundary, e3), r6.stylesheets.forEach(hasStylesToHoist), Ks && (n5.stylesToHoist = true), Gs;
}
function flushResource(e3) {
  for (var r6 = 0; r6 < e3.length; r6++) this.push(e3[r6]);
  e3.length = 0;
}
function flushStyleInPreamble(e3) {
  pushLinkImpl(Js, e3.props);
  for (var r6 = 0; r6 < Js.length; r6++) this.push(Js[r6]);
  Js.length = 0, e3.state = 2;
}
function flushStylesInPreamble(e3) {
  var r6 = 0 < e3.sheets.size;
  e3.sheets.forEach(flushStyleInPreamble, this), e3.sheets.clear();
  var n5 = e3.rules, o3 = e3.hrefs;
  if (!r6 || o3.length) {
    if (this.push('<style data-precedence="'), this.push(e3.precedence), e3 = 0, o3.length) {
      for (this.push('" data-href="'); e3 < o3.length - 1; e3++) this.push(o3[e3]), this.push(" ");
      this.push(o3[e3]);
    }
    for (this.push('">'), e3 = 0; e3 < n5.length; e3++) this.push(n5[e3]);
    this.push("</style>"), n5.length = 0, o3.length = 0;
  }
}
function preloadLateStyle(e3) {
  if (0 === e3.state) {
    e3.state = 1;
    var r6 = e3.props;
    for (pushLinkImpl(Js, { rel: "preload", as: "style", href: e3.props.href, crossOrigin: r6.crossOrigin, fetchPriority: r6.fetchPriority, integrity: r6.integrity, media: r6.media, hrefLang: r6.hrefLang, referrerPolicy: r6.referrerPolicy }), e3 = 0; e3 < Js.length; e3++) this.push(Js[e3]);
    Js.length = 0;
  }
}
function preloadLateStyles(e3) {
  e3.sheets.forEach(preloadLateStyle, this), e3.sheets.clear();
}
function writeStyleResourceAttributeInJS(e3, r6, n5) {
  var o3 = r6.toLowerCase();
  switch (typeof n5) {
    case "function":
    case "symbol":
      return;
  }
  switch (r6) {
    case "innerHTML":
    case "dangerouslySetInnerHTML":
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "style":
    case "ref":
      return;
    case "className":
      o3 = "class", r6 = "" + n5;
      break;
    case "hidden":
      if (false === n5) return;
      r6 = "";
      break;
    case "src":
    case "href":
      r6 = "" + (n5 = sanitizeURL(n5));
      break;
    default:
      if (2 < r6.length && ("o" === r6[0] || "O" === r6[0]) && ("n" === r6[1] || "N" === r6[1]) || !isAttributeNameSafe(r6)) return;
      r6 = "" + n5;
  }
  e3.push(","), o3 = escapeJSObjectForInstructionScripts(o3), e3.push(o3), e3.push(","), o3 = escapeJSObjectForInstructionScripts(r6), e3.push(o3);
}
function createHoistableState() {
  return { styles: /* @__PURE__ */ new Set(), stylesheets: /* @__PURE__ */ new Set() };
}
function adoptPreloadCredentials(e3, r6) {
  null == e3.crossOrigin && (e3.crossOrigin = r6[0]), null == e3.integrity && (e3.integrity = r6[1]);
}
function getPreloadAsHeader(e3, r6, n5) {
  for (var o3 in r6 = "<" + (e3 = ("" + e3).replace(Xs, escapeHrefForLinkHeaderURLContextReplacer)) + '>; rel=preload; as="' + (r6 = ("" + r6).replace(Qs, escapeStringForLinkHeaderQuotedParamValueContextReplacer)) + '"', n5) ws.call(n5, o3) && ("string" == typeof (e3 = n5[o3]) && (r6 += "; " + o3.toLowerCase() + '="' + ("" + e3).replace(Qs, escapeStringForLinkHeaderQuotedParamValueContextReplacer) + '"'));
  return r6;
}
function escapeHrefForLinkHeaderURLContextReplacer(e3) {
  switch (e3) {
    case "<":
      return "%3C";
    case ">":
      return "%3E";
    case "\n":
      return "%0A";
    case "\r":
      return "%0D";
    default:
      throw Error("escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
  }
}
function escapeStringForLinkHeaderQuotedParamValueContextReplacer(e3) {
  switch (e3) {
    case '"':
      return "%22";
    case "'":
      return "%27";
    case ";":
      return "%3B";
    case ",":
      return "%2C";
    case "\n":
      return "%0A";
    case "\r":
      return "%0D";
    default:
      throw Error("escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
  }
}
function hoistStyleQueueDependency(e3) {
  this.styles.add(e3);
}
function hoistStylesheetDependency(e3) {
  this.stylesheets.add(e3);
}
function pushTextInstance(e3, r6, n5, o3) {
  return n5.generateStaticMarkup ? (e3.push(escapeTextForBrowser(r6)), false) : ("" === r6 ? e3 = o3 : (o3 && e3.push("<!-- -->"), e3.push(escapeTextForBrowser(r6)), e3 = true), e3);
}
function pushSegmentFinale(e3, r6, n5, o3) {
  r6.generateStaticMarkup || n5 && o3 && e3.push("<!-- -->");
}
function getComponentNameFromType(e3) {
  if (null == e3) return null;
  if ("function" == typeof e3) return e3.$$typeof === Zs ? null : e3.displayName || e3.name || null;
  if ("string" == typeof e3) return e3;
  switch (e3) {
    case os:
      return "Fragment";
    case as:
      return "Profiler";
    case ss:
      return "StrictMode";
    case ds:
      return "Suspense";
    case hs:
      return "SuspenseList";
    case gs:
      return "Activity";
  }
  if ("object" == typeof e3) switch (e3.$$typeof) {
    case ns:
      return "Portal";
    case us:
      return (e3.displayName || "Context") + ".Provider";
    case ls:
      return (e3._context.displayName || "Context") + ".Consumer";
    case cs:
      var r6 = e3.render;
      return (e3 = e3.displayName) || (e3 = "" !== (e3 = r6.displayName || r6.name || "") ? "ForwardRef(" + e3 + ")" : "ForwardRef"), e3;
    case ps:
      return null !== (r6 = e3.displayName || null) ? r6 : getComponentNameFromType(e3.type) || "Memo";
    case fs:
      r6 = e3._payload, e3 = e3._init;
      try {
        return getComponentNameFromType(e3(r6));
      } catch (e4) {
      }
  }
  return null;
}
function popToNearestCommonAncestor(e3, r6) {
  if (e3 !== r6) {
    e3.context._currentValue2 = e3.parentValue, e3 = e3.parent;
    var n5 = r6.parent;
    if (null === e3) {
      if (null !== n5) throw Error(formatProdErrorMessage(401));
    } else {
      if (null === n5) throw Error(formatProdErrorMessage(401));
      popToNearestCommonAncestor(e3, n5);
    }
    r6.context._currentValue2 = r6.value;
  }
}
function popAllPrevious(e3) {
  e3.context._currentValue2 = e3.parentValue, null !== (e3 = e3.parent) && popAllPrevious(e3);
}
function pushAllNext(e3) {
  var r6 = e3.parent;
  null !== r6 && pushAllNext(r6), e3.context._currentValue2 = e3.value;
}
function popPreviousToCommonLevel(e3, r6) {
  if (e3.context._currentValue2 = e3.parentValue, null === (e3 = e3.parent)) throw Error(formatProdErrorMessage(402));
  e3.depth === r6.depth ? popToNearestCommonAncestor(e3, r6) : popPreviousToCommonLevel(e3, r6);
}
function popNextToCommonLevel(e3, r6) {
  var n5 = r6.parent;
  if (null === n5) throw Error(formatProdErrorMessage(402));
  e3.depth === n5.depth ? popToNearestCommonAncestor(e3, n5) : popNextToCommonLevel(e3, n5), r6.context._currentValue2 = r6.value;
}
function switchContext(e3) {
  var r6 = ta;
  r6 !== e3 && (null === r6 ? pushAllNext(e3) : null === e3 ? popAllPrevious(r6) : r6.depth === e3.depth ? popToNearestCommonAncestor(r6, e3) : r6.depth > e3.depth ? popPreviousToCommonLevel(r6, e3) : popNextToCommonLevel(r6, e3), ta = e3);
}
function pushTreeContext(e3, r6, n5) {
  var o3 = e3.id;
  e3 = e3.overflow;
  var s5 = 32 - oa(o3) - 1;
  o3 &= ~(1 << s5), n5 += 1;
  var a5 = 32 - oa(r6) + s5;
  if (30 < a5) {
    var i6 = s5 - s5 % 5;
    return a5 = (o3 & (1 << i6) - 1).toString(32), o3 >>= i6, s5 -= i6, { id: 1 << 32 - oa(r6) + s5 | n5 << s5 | o3, overflow: a5 + e3 };
  }
  return { id: 1 << a5 | n5 << s5 | o3, overflow: e3 };
}
function noop$2() {
}
function getSuspendedThenable() {
  if (null === la) throw Error(formatProdErrorMessage(459));
  var e3 = la;
  return la = null, e3;
}
function resolveCurrentlyRenderingComponent() {
  if (null === ca) throw Error(formatProdErrorMessage(321));
  return ca;
}
function createHook() {
  if (0 < Pa) throw Error(formatProdErrorMessage(312));
  return { memoizedState: null, queue: null, next: null };
}
function createWorkInProgressHook() {
  return null === ma ? null === fa ? (ga = false, fa = ma = createHook()) : (ga = true, ma = fa) : null === ma.next ? (ga = false, ma = ma.next = createHook()) : (ga = true, ma = ma.next), ma;
}
function getThenableStateAfterSuspending() {
  var e3 = Ca;
  return Ca = null, e3;
}
function resetHooksState() {
  pa = ha = da = ca = null, ya = false, fa = null, Pa = 0, ma = wa = null;
}
function basicStateReducer(e3, r6) {
  return "function" == typeof r6 ? r6(e3) : r6;
}
function useReducer(e3, r6, n5) {
  if (ca = resolveCurrentlyRenderingComponent(), ma = createWorkInProgressHook(), ga) {
    var o3 = ma.queue;
    if (r6 = o3.dispatch, null !== wa && void 0 !== (n5 = wa.get(o3))) {
      wa.delete(o3), o3 = ma.memoizedState;
      do {
        o3 = e3(o3, n5.action), n5 = n5.next;
      } while (null !== n5);
      return ma.memoizedState = o3, [o3, r6];
    }
    return [ma.memoizedState, r6];
  }
  return e3 = e3 === basicStateReducer ? "function" == typeof r6 ? r6() : r6 : void 0 !== n5 ? n5(r6) : r6, ma.memoizedState = e3, e3 = (e3 = ma.queue = { last: null, dispatch: null }).dispatch = dispatchAction.bind(null, ca, e3), [ma.memoizedState, e3];
}
function useMemo(e3, r6) {
  if (ca = resolveCurrentlyRenderingComponent(), r6 = void 0 === r6 ? null : r6, null !== (ma = createWorkInProgressHook())) {
    var n5 = ma.memoizedState;
    if (null !== n5 && null !== r6) {
      var o3 = n5[1];
      e: if (null === o3) o3 = false;
      else {
        for (var s5 = 0; s5 < o3.length && s5 < r6.length; s5++) if (!ua(r6[s5], o3[s5])) {
          o3 = false;
          break e;
        }
        o3 = true;
      }
      if (o3) return n5[0];
    }
  }
  return e3 = e3(), ma.memoizedState = [e3, r6], e3;
}
function dispatchAction(e3, r6, n5) {
  if (25 <= Pa) throw Error(formatProdErrorMessage(301));
  if (e3 === ca) if (ya = true, e3 = { action: n5, next: null }, null === wa && (wa = /* @__PURE__ */ new Map()), void 0 === (n5 = wa.get(r6))) wa.set(r6, e3);
  else {
    for (r6 = n5; null !== r6.next; ) r6 = r6.next;
    r6.next = e3;
  }
}
function unsupportedStartTransition() {
  throw Error(formatProdErrorMessage(394));
}
function unsupportedSetOptimisticState() {
  throw Error(formatProdErrorMessage(479));
}
function useActionState(e3, r6, n5) {
  resolveCurrentlyRenderingComponent();
  var o3 = ba++, s5 = ha;
  if ("function" == typeof e3.$$FORM_ACTION) {
    var a5 = null, i6 = pa;
    s5 = s5.formState;
    var l5 = e3.$$IS_SIGNATURE_EQUAL;
    if (null !== s5 && "function" == typeof l5) {
      var u4 = s5[1];
      l5.call(e3, s5[2], s5[3]) && (u4 === (a5 = void 0 !== n5 ? "p" + n5 : "k" + murmurhash3_32_gc(JSON.stringify([i6, null, o3]), 0)) && (Sa = o3, r6 = s5[0]));
    }
    var c4 = e3.bind(null, r6);
    return e3 = /* @__PURE__ */ __name(function(e4) {
      c4(e4);
    }, "e"), "function" == typeof c4.$$FORM_ACTION && (e3.$$FORM_ACTION = function(e4) {
      e4 = c4.$$FORM_ACTION(e4), void 0 !== n5 && (n5 += "", e4.action = n5);
      var r7 = e4.data;
      return r7 && (null === a5 && (a5 = void 0 !== n5 ? "p" + n5 : "k" + murmurhash3_32_gc(JSON.stringify([i6, null, o3]), 0)), r7.append("$ACTION_KEY", a5)), e4;
    }), [r6, e3, false];
  }
  var h4 = e3.bind(null, r6);
  return [r6, function(e4) {
    h4(e4);
  }, false];
}
function unwrapThenable(e3) {
  var r6 = ka;
  return ka += 1, null === Ca && (Ca = []), function(e4, r7, n5) {
    switch (void 0 === (n5 = e4[n5]) ? e4.push(r7) : n5 !== r7 && (r7.then(noop$2, noop$2), r7 = n5), r7.status) {
      case "fulfilled":
        return r7.value;
      case "rejected":
        throw r7.reason;
      default:
        switch ("string" == typeof r7.status ? r7.then(noop$2, noop$2) : ((e4 = r7).status = "pending", e4.then(function(e5) {
          if ("pending" === r7.status) {
            var n6 = r7;
            n6.status = "fulfilled", n6.value = e5;
          }
        }, function(e5) {
          if ("pending" === r7.status) {
            var n6 = r7;
            n6.status = "rejected", n6.reason = e5;
          }
        })), r7.status) {
          case "fulfilled":
            return r7.value;
          case "rejected":
            throw r7.reason;
        }
        throw la = r7, ia;
    }
  }(Ca, e3, r6);
}
function unsupportedRefresh() {
  throw Error(formatProdErrorMessage(393));
}
function noop$1() {
}
function describeBuiltInComponentFrame(e3) {
  if (void 0 === Ra) try {
    throw Error();
  } catch (e4) {
    var r6 = e4.stack.trim().match(/\n( *(at )?)/);
    Ra = r6 && r6[1] || "", xa = -1 < e4.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e4.stack.indexOf("@") ? "@unknown:0:0" : "";
  }
  return "\n" + Ra + e3 + xa;
}
function describeNativeComponentFrame(e3, r6) {
  if (!e3 || Ea) return "";
  Ea = true;
  var n5 = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    var o3 = { DetermineComponentFrameRoot: /* @__PURE__ */ __name(function() {
      try {
        if (r6) {
          var Fake = /* @__PURE__ */ __name(function() {
            throw Error();
          }, "Fake");
          if (Object.defineProperty(Fake.prototype, "props", { set: /* @__PURE__ */ __name(function() {
            throw Error();
          }, "set") }), "object" == typeof Reflect && Reflect.construct) {
            try {
              Reflect.construct(Fake, []);
            } catch (e4) {
              var n6 = e4;
            }
            Reflect.construct(e3, [], Fake);
          } else {
            try {
              Fake.call();
            } catch (e4) {
              n6 = e4;
            }
            e3.call(Fake.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (e4) {
            n6 = e4;
          }
          (Fake = e3()) && "function" == typeof Fake.catch && Fake.catch(function() {
          });
        }
      } catch (e4) {
        if (e4 && n6 && "string" == typeof e4.stack) return [e4.stack, n6.stack];
      }
      return [null, null];
    }, "DetermineComponentFrameRoot") };
    o3.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
    var s5 = Object.getOwnPropertyDescriptor(o3.DetermineComponentFrameRoot, "name");
    s5 && s5.configurable && Object.defineProperty(o3.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
    var a5 = o3.DetermineComponentFrameRoot(), i6 = a5[0], l5 = a5[1];
    if (i6 && l5) {
      var u4 = i6.split("\n"), c4 = l5.split("\n");
      for (s5 = o3 = 0; o3 < u4.length && !u4[o3].includes("DetermineComponentFrameRoot"); ) o3++;
      for (; s5 < c4.length && !c4[s5].includes("DetermineComponentFrameRoot"); ) s5++;
      if (o3 === u4.length || s5 === c4.length) for (o3 = u4.length - 1, s5 = c4.length - 1; 1 <= o3 && 0 <= s5 && u4[o3] !== c4[s5]; ) s5--;
      for (; 1 <= o3 && 0 <= s5; o3--, s5--) if (u4[o3] !== c4[s5]) {
        if (1 !== o3 || 1 !== s5) do {
          if (o3--, 0 > --s5 || u4[o3] !== c4[s5]) {
            var h4 = "\n" + u4[o3].replace(" at new ", " at ");
            return e3.displayName && h4.includes("<anonymous>") && (h4 = h4.replace("<anonymous>", e3.displayName)), h4;
          }
        } while (1 <= o3 && 0 <= s5);
        break;
      }
    }
  } finally {
    Ea = false, Error.prepareStackTrace = n5;
  }
  return (n5 = e3 ? e3.displayName || e3.name : "") ? describeBuiltInComponentFrame(n5) : "";
}
function describeComponentStackByType(e3) {
  if ("string" == typeof e3) return describeBuiltInComponentFrame(e3);
  if ("function" == typeof e3) return e3.prototype && e3.prototype.isReactComponent ? describeNativeComponentFrame(e3, true) : describeNativeComponentFrame(e3, false);
  if ("object" == typeof e3 && null !== e3) {
    switch (e3.$$typeof) {
      case cs:
        return describeNativeComponentFrame(e3.render, false);
      case ps:
        return describeNativeComponentFrame(e3.type, false);
      case fs:
        var r6 = e3, n5 = r6._payload;
        r6 = r6._init;
        try {
          e3 = r6(n5);
        } catch (e4) {
          return describeBuiltInComponentFrame("Lazy");
        }
        return describeComponentStackByType(e3);
    }
    if ("string" == typeof e3.name) return n5 = e3.env, describeBuiltInComponentFrame(e3.name + (n5 ? " [" + n5 + "]" : ""));
  }
  switch (e3) {
    case hs:
      return describeBuiltInComponentFrame("SuspenseList");
    case ds:
      return describeBuiltInComponentFrame("Suspense");
  }
  return "";
}
function defaultErrorHandler(e3) {
  if ("object" == typeof e3 && null !== e3 && "string" == typeof e3.environmentName) {
    var r6 = e3.environmentName;
    "string" == typeof (e3 = [e3].slice(0))[0] ? e3.splice(0, 1, "[%s] " + e3[0], " " + r6 + " ") : e3.splice(0, 0, "[%s] ", " " + r6 + " "), e3.unshift(console), (r6 = Ys.apply(console.error, e3))();
  } else console.error(e3);
  return null;
}
function noop() {
}
function RequestInstance(e3, r6, n5, o3, s5, a5, i6, l5, u4, c4, h4) {
  var p4 = /* @__PURE__ */ new Set();
  this.destination = null, this.flushScheduled = false, this.resumableState = e3, this.renderState = r6, this.rootFormatContext = n5, this.progressiveChunkSize = void 0 === o3 ? 12800 : o3, this.status = 10, this.fatalError = null, this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0, this.completedPreambleSegments = this.completedRootSegment = null, this.abortableTasks = p4, this.pingedTasks = [], this.clientRenderedBoundaries = [], this.completedBoundaries = [], this.partialBoundaries = [], this.trackedPostpones = null, this.onError = void 0 === s5 ? defaultErrorHandler : s5, this.onPostpone = void 0 === c4 ? noop : c4, this.onAllReady = void 0 === a5 ? noop : a5, this.onShellReady = void 0 === i6 ? noop : i6, this.onShellError = void 0 === l5 ? noop : l5, this.onFatalError = void 0 === u4 ? noop : u4, this.formState = void 0 === h4 ? null : h4;
}
function pingTask(e3, r6) {
  e3.pingedTasks.push(r6), 1 === e3.pingedTasks.length && (e3.flushScheduled = null !== e3.destination, performWork(e3));
}
function createSuspenseBoundary(e3, r6, n5, o3) {
  return { status: 0, rootSegmentID: -1, parentFlushed: false, pendingTasks: 0, completedSegments: [], byteSize: 0, fallbackAbortableTasks: r6, errorDigest: null, contentState: createHoistableState(), fallbackState: createHoistableState(), contentPreamble: n5, fallbackPreamble: o3, trackedContentKeyPath: null, trackedFallbackNode: null };
}
function createRenderTask(e3, r6, n5, o3, s5, a5, i6, l5, u4, c4, h4, p4, g3, y3, v3) {
  e3.allPendingTasks++, null === s5 ? e3.pendingRootTasks++ : s5.pendingTasks++;
  var b3 = { replay: null, node: n5, childIndex: o3, ping: /* @__PURE__ */ __name(function() {
    return pingTask(e3, b3);
  }, "ping"), blockedBoundary: s5, blockedSegment: a5, blockedPreamble: i6, hoistableState: l5, abortSet: u4, keyPath: c4, formatContext: h4, context: p4, treeContext: g3, componentStack: y3, thenableState: r6, isFallback: v3 };
  return u4.add(b3), b3;
}
function createReplayTask(e3, r6, n5, o3, s5, a5, i6, l5, u4, c4, h4, p4, g3, y3) {
  e3.allPendingTasks++, null === a5 ? e3.pendingRootTasks++ : a5.pendingTasks++, n5.pendingTasks++;
  var v3 = { replay: n5, node: o3, childIndex: s5, ping: /* @__PURE__ */ __name(function() {
    return pingTask(e3, v3);
  }, "ping"), blockedBoundary: a5, blockedSegment: null, blockedPreamble: null, hoistableState: i6, abortSet: l5, keyPath: u4, formatContext: c4, context: h4, treeContext: p4, componentStack: g3, thenableState: r6, isFallback: y3 };
  return l5.add(v3), v3;
}
function createPendingSegment(e3, r6, n5, o3, s5, a5) {
  return { status: 0, parentFlushed: false, id: -1, index: r6, chunks: [], children: [], preambleChildren: [], parentFormatContext: o3, boundary: n5, lastPushedText: s5, textEmbedded: a5 };
}
function pushComponentStack(e3) {
  var r6 = e3.node;
  if ("object" == typeof r6 && null !== r6 && r6.$$typeof === rs) e3.componentStack = { parent: e3.componentStack, type: r6.type };
}
function getThrownInfo(e3) {
  var r6 = {};
  return e3 && Object.defineProperty(r6, "componentStack", { configurable: true, enumerable: true, get: /* @__PURE__ */ __name(function() {
    try {
      var n5 = "", o3 = e3;
      do {
        n5 += describeComponentStackByType(o3.type), o3 = o3.parent;
      } while (o3);
      var s5 = n5;
    } catch (e4) {
      s5 = "\nError generating stack: " + e4.message + "\n" + e4.stack;
    }
    return Object.defineProperty(r6, "componentStack", { value: s5 }), s5;
  }, "get") }), r6;
}
function logRecoverableError(e3, r6, n5) {
  if (null == (r6 = (e3 = e3.onError)(r6, n5)) || "string" == typeof r6) return r6;
}
function fatalError(e3, r6) {
  var n5 = e3.onShellError, o3 = e3.onFatalError;
  n5(r6), o3(r6), null !== e3.destination ? (e3.status = 14, e3.destination.destroy(r6)) : (e3.status = 13, e3.fatalError = r6);
}
function renderWithHooks(e3, r6, n5, o3, s5, a5) {
  var i6 = r6.thenableState;
  for (r6.thenableState = null, ca = {}, da = r6, ha = e3, pa = n5, ba = va = 0, Sa = -1, ka = 0, Ca = i6, e3 = o3(s5, a5); ya; ) ya = false, ba = va = 0, Sa = -1, ka = 0, Pa += 1, ma = null, e3 = o3(s5, a5);
  return resetHooksState(), e3;
}
function finishFunctionComponent(e3, r6, n5, o3, s5, a5, i6) {
  var l5 = false;
  if (0 !== a5 && null !== e3.formState) {
    var u4 = r6.blockedSegment;
    if (null !== u4) {
      l5 = true, u4 = u4.chunks;
      for (var c4 = 0; c4 < a5; c4++) c4 === i6 ? u4.push("<!--F!-->") : u4.push("<!--F-->");
    }
  }
  a5 = r6.keyPath, r6.keyPath = n5, s5 ? (n5 = r6.treeContext, r6.treeContext = pushTreeContext(n5, 1, 0), renderNode(e3, r6, o3, -1), r6.treeContext = n5) : l5 ? renderNode(e3, r6, o3, -1) : renderNodeDestructive(e3, r6, o3, -1), r6.keyPath = a5;
}
function renderElement(e3, r6, n5, o3, s5, a5) {
  if ("function" == typeof o3) if (o3.prototype && o3.prototype.isReactComponent) {
    var i6 = s5;
    if ("ref" in s5) for (var l5 in i6 = {}, s5) "ref" !== l5 && (i6[l5] = s5[l5]);
    var u4 = o3.defaultProps;
    if (u4) for (var c4 in i6 === s5 && (i6 = Cs({}, i6, s5)), u4) void 0 === i6[c4] && (i6[c4] = u4[c4]);
    s5 = i6, i6 = ea, "object" == typeof (u4 = o3.contextType) && null !== u4 && (i6 = u4._currentValue2);
    var h4 = void 0 !== (i6 = new o3(s5, i6)).state ? i6.state : null;
    if (i6.updater = ra, i6.props = s5, i6.state = h4, u4 = { queue: [], replace: false }, i6._reactInternals = u4, a5 = o3.contextType, i6.context = "object" == typeof a5 && null !== a5 ? a5._currentValue2 : ea, "function" == typeof (a5 = o3.getDerivedStateFromProps) && (h4 = null == (a5 = a5(s5, h4)) ? h4 : Cs({}, h4, a5), i6.state = h4), "function" != typeof o3.getDerivedStateFromProps && "function" != typeof i6.getSnapshotBeforeUpdate && ("function" == typeof i6.UNSAFE_componentWillMount || "function" == typeof i6.componentWillMount)) if (o3 = i6.state, "function" == typeof i6.componentWillMount && i6.componentWillMount(), "function" == typeof i6.UNSAFE_componentWillMount && i6.UNSAFE_componentWillMount(), o3 !== i6.state && ra.enqueueReplaceState(i6, i6.state, null), null !== u4.queue && 0 < u4.queue.length) if (o3 = u4.queue, a5 = u4.replace, u4.queue = null, u4.replace = false, a5 && 1 === o3.length) i6.state = o3[0];
    else {
      for (u4 = a5 ? o3[0] : i6.state, h4 = true, a5 = a5 ? 1 : 0; a5 < o3.length; a5++) null != (c4 = "function" == typeof (c4 = o3[a5]) ? c4.call(i6, u4, s5, void 0) : c4) && (h4 ? (h4 = false, u4 = Cs({}, u4, c4)) : Cs(u4, c4));
      i6.state = u4;
    }
    else u4.queue = null;
    if (o3 = i6.render(), 12 === e3.status) throw null;
    s5 = r6.keyPath, r6.keyPath = n5, renderNodeDestructive(e3, r6, o3, -1), r6.keyPath = s5;
  } else {
    if (o3 = renderWithHooks(e3, r6, n5, o3, s5, void 0), 12 === e3.status) throw null;
    finishFunctionComponent(e3, r6, n5, o3, 0 !== va, ba, Sa);
  }
  else {
    if ("string" != typeof o3) {
      switch (o3) {
        case ys:
        case ss:
        case as:
        case os:
          return o3 = r6.keyPath, r6.keyPath = n5, renderNodeDestructive(e3, r6, s5.children, -1), void (r6.keyPath = o3);
        case gs:
          return void ("hidden" !== s5.mode && (o3 = r6.keyPath, r6.keyPath = n5, renderNodeDestructive(e3, r6, s5.children, -1), r6.keyPath = o3));
        case hs:
          return o3 = r6.keyPath, r6.keyPath = n5, renderNodeDestructive(e3, r6, s5.children, -1), void (r6.keyPath = o3);
        case bs:
        case ms:
          throw Error(formatProdErrorMessage(343));
        case ds:
          e: if (null !== r6.replay) {
            o3 = r6.keyPath, r6.keyPath = n5, n5 = s5.children;
            try {
              renderNode(e3, r6, n5, -1);
            } finally {
              r6.keyPath = o3;
            }
          } else {
            o3 = r6.keyPath;
            var p4 = r6.blockedBoundary;
            a5 = r6.blockedPreamble;
            var g3 = r6.hoistableState;
            c4 = r6.blockedSegment, l5 = s5.fallback, s5 = s5.children;
            var y3 = /* @__PURE__ */ new Set(), v3 = 2 > r6.formatContext.insertionMode ? createSuspenseBoundary(0, y3, { htmlChunks: null, headChunks: null, bodyChunks: null, contribution: 0 }, { htmlChunks: null, headChunks: null, bodyChunks: null, contribution: 0 }) : createSuspenseBoundary(0, y3, null, null);
            null !== e3.trackedPostpones && (v3.trackedContentKeyPath = n5);
            var b3 = createPendingSegment(0, c4.chunks.length, v3, r6.formatContext, false, false);
            c4.children.push(b3), c4.lastPushedText = false;
            var k4 = createPendingSegment(0, 0, null, r6.formatContext, false, false);
            if (k4.parentFlushed = true, null !== e3.trackedPostpones) {
              u4 = [(i6 = [n5[0], "Suspense Fallback", n5[2]])[1], i6[2], [], null], e3.trackedPostpones.workingMap.set(i6, u4), v3.trackedFallbackNode = u4, r6.blockedSegment = b3, r6.blockedPreamble = v3.fallbackPreamble, r6.keyPath = i6, b3.status = 6;
              try {
                renderNode(e3, r6, l5, -1), pushSegmentFinale(b3.chunks, e3.renderState, b3.lastPushedText, b3.textEmbedded), b3.status = 1;
              } catch (r7) {
                throw b3.status = 12 === e3.status ? 3 : 4, r7;
              } finally {
                r6.blockedSegment = c4, r6.blockedPreamble = a5, r6.keyPath = o3;
              }
              pushComponentStack(r6 = createRenderTask(e3, null, s5, -1, v3, k4, v3.contentPreamble, v3.contentState, r6.abortSet, n5, r6.formatContext, r6.context, r6.treeContext, r6.componentStack, r6.isFallback)), e3.pingedTasks.push(r6);
            } else {
              r6.blockedBoundary = v3, r6.blockedPreamble = v3.contentPreamble, r6.hoistableState = v3.contentState, r6.blockedSegment = k4, r6.keyPath = n5, k4.status = 6;
              try {
                if (renderNode(e3, r6, s5, -1), pushSegmentFinale(k4.chunks, e3.renderState, k4.lastPushedText, k4.textEmbedded), k4.status = 1, queueCompletedSegment(v3, k4), 0 === v3.pendingTasks && 0 === v3.status) {
                  v3.status = 1, 0 === e3.pendingRootTasks && r6.blockedPreamble && preparePreamble(e3);
                  break e;
                }
              } catch (n6) {
                v3.status = 4, 12 === e3.status ? (k4.status = 3, i6 = e3.fatalError) : (k4.status = 4, i6 = n6), h4 = logRecoverableError(e3, i6, u4 = getThrownInfo(r6.componentStack)), v3.errorDigest = h4, untrackBoundary(e3, v3);
              } finally {
                r6.blockedBoundary = p4, r6.blockedPreamble = a5, r6.hoistableState = g3, r6.blockedSegment = c4, r6.keyPath = o3;
              }
              pushComponentStack(r6 = createRenderTask(e3, null, l5, -1, p4, b3, v3.fallbackPreamble, v3.fallbackState, y3, [n5[0], "Suspense Fallback", n5[2]], r6.formatContext, r6.context, r6.treeContext, r6.componentStack, true)), e3.pingedTasks.push(r6);
            }
          }
          return;
      }
      if ("object" == typeof o3 && null !== o3) switch (o3.$$typeof) {
        case cs:
          if ("ref" in s5) for (v3 in i6 = {}, s5) "ref" !== v3 && (i6[v3] = s5[v3]);
          else i6 = s5;
          return void finishFunctionComponent(e3, r6, n5, o3 = renderWithHooks(e3, r6, n5, o3.render, i6, a5), 0 !== va, ba, Sa);
        case ps:
          return void renderElement(e3, r6, n5, o3.type, s5, a5);
        case is:
        case us:
          if (u4 = s5.children, i6 = r6.keyPath, s5 = s5.value, h4 = o3._currentValue2, o3._currentValue2 = s5, ta = o3 = { parent: a5 = ta, depth: null === a5 ? 0 : a5.depth + 1, context: o3, parentValue: h4, value: s5 }, r6.context = o3, r6.keyPath = n5, renderNodeDestructive(e3, r6, u4, -1), null === (e3 = ta)) throw Error(formatProdErrorMessage(403));
          return e3.context._currentValue2 = e3.parentValue, e3 = ta = e3.parent, r6.context = e3, void (r6.keyPath = i6);
        case ls:
          return o3 = (s5 = s5.children)(o3._context._currentValue2), s5 = r6.keyPath, r6.keyPath = n5, renderNodeDestructive(e3, r6, o3, -1), void (r6.keyPath = s5);
        case fs:
          if (o3 = (i6 = o3._init)(o3._payload), 12 === e3.status) throw null;
          return void renderElement(e3, r6, n5, o3, s5, a5);
      }
      throw Error(formatProdErrorMessage(130, null == o3 ? o3 : typeof o3, ""));
    }
    if (null === (i6 = r6.blockedSegment)) i6 = s5.children, u4 = r6.formatContext, h4 = r6.keyPath, r6.formatContext = getChildFormatContext(u4, o3, s5), r6.keyPath = n5, renderNode(e3, r6, i6, -1), r6.formatContext = u4, r6.keyPath = h4;
    else {
      a5 = pushStartInstance(i6.chunks, o3, s5, e3.resumableState, e3.renderState, r6.blockedPreamble, r6.hoistableState, r6.formatContext, i6.lastPushedText, r6.isFallback), i6.lastPushedText = false, u4 = r6.formatContext, h4 = r6.keyPath, r6.keyPath = n5, 3 === (r6.formatContext = getChildFormatContext(u4, o3, s5)).insertionMode ? (n5 = createPendingSegment(0, 0, null, r6.formatContext, false, false), i6.preambleChildren.push(n5), pushComponentStack(n5 = createRenderTask(e3, null, a5, -1, r6.blockedBoundary, n5, r6.blockedPreamble, r6.hoistableState, e3.abortableTasks, r6.keyPath, r6.formatContext, r6.context, r6.treeContext, r6.componentStack, r6.isFallback)), e3.pingedTasks.push(n5)) : renderNode(e3, r6, a5, -1), r6.formatContext = u4, r6.keyPath = h4;
      e: {
        switch (r6 = i6.chunks, e3 = e3.resumableState, o3) {
          case "title":
          case "style":
          case "script":
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "input":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
            break e;
          case "body":
            if (1 >= u4.insertionMode) {
              e3.hasBody = true;
              break e;
            }
            break;
          case "html":
            if (0 === u4.insertionMode) {
              e3.hasHtml = true;
              break e;
            }
            break;
          case "head":
            if (1 >= u4.insertionMode) break e;
        }
        r6.push(endChunkForTag(o3));
      }
      i6.lastPushedText = false;
    }
  }
}
function resumeNode(e3, r6, n5, o3, s5) {
  var a5 = r6.replay, i6 = r6.blockedBoundary, l5 = createPendingSegment(0, 0, null, r6.formatContext, false, false);
  l5.id = n5, l5.parentFlushed = true;
  try {
    r6.replay = null, r6.blockedSegment = l5, renderNode(e3, r6, o3, s5), l5.status = 1, null === i6 ? e3.completedRootSegment = l5 : (queueCompletedSegment(i6, l5), i6.parentFlushed && e3.partialBoundaries.push(i6));
  } finally {
    r6.replay = a5, r6.blockedSegment = null;
  }
}
function renderNodeDestructive(e3, r6, n5, o3) {
  null !== r6.replay && "number" == typeof r6.replay.slots ? resumeNode(e3, r6, r6.replay.slots, n5, o3) : (r6.node = n5, r6.childIndex = o3, n5 = r6.componentStack, pushComponentStack(r6), retryNode(e3, r6), r6.componentStack = n5);
}
function retryNode(e3, r6) {
  var n5 = r6.node, o3 = r6.childIndex;
  if (null !== n5) {
    if ("object" == typeof n5) {
      switch (n5.$$typeof) {
        case rs:
          var s5 = n5.type, a5 = n5.key, i6 = n5.props, l5 = void 0 !== (n5 = i6.ref) ? n5 : null, u4 = getComponentNameFromType(s5), c4 = null == a5 ? -1 === o3 ? 0 : o3 : a5;
          if (a5 = [r6.keyPath, u4, c4], null !== r6.replay) e: {
            var h4 = r6.replay;
            for (o3 = h4.nodes, n5 = 0; n5 < o3.length; n5++) {
              var p4 = o3[n5];
              if (c4 === p4[1]) {
                if (4 === p4.length) {
                  if (null !== u4 && u4 !== p4[0]) throw Error(formatProdErrorMessage(490, p4[0], u4));
                  var g3 = p4[2];
                  u4 = p4[3], c4 = r6.node, r6.replay = { nodes: g3, slots: u4, pendingTasks: 1 };
                  try {
                    if (renderElement(e3, r6, a5, s5, i6, l5), 1 === r6.replay.pendingTasks && 0 < r6.replay.nodes.length) throw Error(formatProdErrorMessage(488));
                    r6.replay.pendingTasks--;
                  } catch (n6) {
                    if ("object" == typeof n6 && null !== n6 && (n6 === ia || "function" == typeof n6.then)) throw r6.node === c4 && (r6.replay = h4), n6;
                    r6.replay.pendingTasks--, i6 = getThrownInfo(r6.componentStack), abortRemainingReplayNodes(e3, a5 = r6.blockedBoundary, g3, u4, s5 = n6, i6 = logRecoverableError(e3, s5, i6));
                  }
                  r6.replay = h4;
                } else {
                  if (s5 !== ds) throw Error(formatProdErrorMessage(490, "Suspense", getComponentNameFromType(s5) || "Unknown"));
                  t: {
                    h4 = void 0, s5 = p4[5], l5 = p4[2], u4 = p4[3], c4 = null === p4[4] ? [] : p4[4][2], p4 = null === p4[4] ? null : p4[4][3];
                    var y3 = r6.keyPath, v3 = r6.replay, b3 = r6.blockedBoundary, k4 = r6.hoistableState, C4 = i6.children, P4 = i6.fallback, R4 = /* @__PURE__ */ new Set();
                    (i6 = 2 > r6.formatContext.insertionMode ? createSuspenseBoundary(0, R4, createPreambleState(), createPreambleState()) : createSuspenseBoundary(0, R4, null, null)).parentFlushed = true, i6.rootSegmentID = s5, r6.blockedBoundary = i6, r6.hoistableState = i6.contentState, r6.keyPath = a5, r6.replay = { nodes: l5, slots: u4, pendingTasks: 1 };
                    try {
                      if (renderNode(e3, r6, C4, -1), 1 === r6.replay.pendingTasks && 0 < r6.replay.nodes.length) throw Error(formatProdErrorMessage(488));
                      if (r6.replay.pendingTasks--, 0 === i6.pendingTasks && 0 === i6.status) {
                        i6.status = 1, e3.completedBoundaries.push(i6);
                        break t;
                      }
                    } catch (n6) {
                      i6.status = 4, h4 = logRecoverableError(e3, n6, g3 = getThrownInfo(r6.componentStack)), i6.errorDigest = h4, r6.replay.pendingTasks--, e3.clientRenderedBoundaries.push(i6);
                    } finally {
                      r6.blockedBoundary = b3, r6.hoistableState = k4, r6.replay = v3, r6.keyPath = y3;
                    }
                    pushComponentStack(r6 = createReplayTask(e3, null, { nodes: c4, slots: p4, pendingTasks: 0 }, P4, -1, b3, i6.fallbackState, R4, [a5[0], "Suspense Fallback", a5[2]], r6.formatContext, r6.context, r6.treeContext, r6.componentStack, true)), e3.pingedTasks.push(r6);
                  }
                }
                o3.splice(n5, 1);
                break e;
              }
            }
          }
          else renderElement(e3, r6, a5, s5, i6, l5);
          return;
        case ns:
          throw Error(formatProdErrorMessage(257));
        case fs:
          if (n5 = (g3 = n5._init)(n5._payload), 12 === e3.status) throw null;
          return void renderNodeDestructive(e3, r6, n5, o3);
      }
      if (ks(n5)) return void renderChildrenArray(e3, r6, n5, o3);
      if (null === n5 || "object" != typeof n5 ? g3 = null : g3 = "function" == typeof (g3 = Ss && n5[Ss] || n5["@@iterator"]) ? g3 : null, g3 && (g3 = g3.call(n5))) {
        if (!(n5 = g3.next()).done) {
          i6 = [];
          do {
            i6.push(n5.value), n5 = g3.next();
          } while (!n5.done);
          renderChildrenArray(e3, r6, i6, o3);
        }
        return;
      }
      if ("function" == typeof n5.then) return r6.thenableState = null, renderNodeDestructive(e3, r6, unwrapThenable(n5), o3);
      if (n5.$$typeof === us) return renderNodeDestructive(e3, r6, n5._currentValue2, o3);
      throw o3 = Object.prototype.toString.call(n5), Error(formatProdErrorMessage(31, "[object Object]" === o3 ? "object with keys {" + Object.keys(n5).join(", ") + "}" : o3));
    }
    "string" == typeof n5 ? null !== (o3 = r6.blockedSegment) && (o3.lastPushedText = pushTextInstance(o3.chunks, n5, e3.renderState, o3.lastPushedText)) : "number" != typeof n5 && "bigint" != typeof n5 || null !== (o3 = r6.blockedSegment) && (o3.lastPushedText = pushTextInstance(o3.chunks, "" + n5, e3.renderState, o3.lastPushedText));
  }
}
function renderChildrenArray(e3, r6, n5, o3) {
  var s5 = r6.keyPath;
  if (-1 === o3 || (r6.keyPath = [r6.keyPath, "Fragment", o3], null === r6.replay)) {
    if (a5 = r6.treeContext, i6 = n5.length, null !== r6.replay && (null !== (l5 = r6.replay.slots) && "object" == typeof l5)) {
      for (o3 = 0; o3 < i6; o3++) u4 = n5[o3], r6.treeContext = pushTreeContext(a5, i6, o3), "number" == typeof (c4 = l5[o3]) ? (resumeNode(e3, r6, c4, u4, o3), delete l5[o3]) : renderNode(e3, r6, u4, o3);
      return r6.treeContext = a5, void (r6.keyPath = s5);
    }
    for (l5 = 0; l5 < i6; l5++) o3 = n5[l5], r6.treeContext = pushTreeContext(a5, i6, l5), renderNode(e3, r6, o3, l5);
    r6.treeContext = a5, r6.keyPath = s5;
  } else {
    for (var a5 = r6.replay, i6 = a5.nodes, l5 = 0; l5 < i6.length; l5++) {
      var u4 = i6[l5];
      if (u4[1] === o3) {
        o3 = u4[2], u4 = u4[3], r6.replay = { nodes: o3, slots: u4, pendingTasks: 1 };
        try {
          if (renderChildrenArray(e3, r6, n5, -1), 1 === r6.replay.pendingTasks && 0 < r6.replay.nodes.length) throw Error(formatProdErrorMessage(488));
          r6.replay.pendingTasks--;
        } catch (s6) {
          if ("object" == typeof s6 && null !== s6 && (s6 === ia || "function" == typeof s6.then)) throw s6;
          r6.replay.pendingTasks--, n5 = getThrownInfo(r6.componentStack);
          var c4 = r6.blockedBoundary;
          abortRemainingReplayNodes(e3, c4, o3, u4, s6, n5 = logRecoverableError(e3, s6, n5));
        }
        r6.replay = a5, i6.splice(l5, 1);
        break;
      }
    }
    r6.keyPath = s5;
  }
}
function untrackBoundary(e3, r6) {
  null !== (e3 = e3.trackedPostpones) && (null !== (r6 = r6.trackedContentKeyPath) && (void 0 !== (r6 = e3.workingMap.get(r6)) && (r6.length = 4, r6[2] = [], r6[3] = null)));
}
function spawnNewSuspendedReplayTask(e3, r6, n5) {
  return createReplayTask(e3, n5, r6.replay, r6.node, r6.childIndex, r6.blockedBoundary, r6.hoistableState, r6.abortSet, r6.keyPath, r6.formatContext, r6.context, r6.treeContext, r6.componentStack, r6.isFallback);
}
function spawnNewSuspendedRenderTask(e3, r6, n5) {
  var o3 = r6.blockedSegment, s5 = createPendingSegment(0, o3.chunks.length, null, r6.formatContext, o3.lastPushedText, true);
  return o3.children.push(s5), o3.lastPushedText = false, createRenderTask(e3, n5, r6.node, r6.childIndex, r6.blockedBoundary, s5, r6.blockedPreamble, r6.hoistableState, r6.abortSet, r6.keyPath, r6.formatContext, r6.context, r6.treeContext, r6.componentStack, r6.isFallback);
}
function renderNode(e3, r6, n5, o3) {
  var s5 = r6.formatContext, a5 = r6.context, i6 = r6.keyPath, l5 = r6.treeContext, u4 = r6.componentStack, c4 = r6.blockedSegment;
  if (null === c4) try {
    return renderNodeDestructive(e3, r6, n5, o3);
  } catch (c5) {
    if (resetHooksState(), "object" == typeof (n5 = c5 === ia ? getSuspendedThenable() : c5) && null !== n5) {
      if ("function" == typeof n5.then) return e3 = spawnNewSuspendedReplayTask(e3, r6, o3 = getThenableStateAfterSuspending()).ping, n5.then(e3, e3), r6.formatContext = s5, r6.context = a5, r6.keyPath = i6, r6.treeContext = l5, r6.componentStack = u4, void switchContext(a5);
      if ("Maximum call stack size exceeded" === n5.message) return n5 = spawnNewSuspendedReplayTask(e3, r6, n5 = getThenableStateAfterSuspending()), e3.pingedTasks.push(n5), r6.formatContext = s5, r6.context = a5, r6.keyPath = i6, r6.treeContext = l5, r6.componentStack = u4, void switchContext(a5);
    }
  }
  else {
    var h4 = c4.children.length, p4 = c4.chunks.length;
    try {
      return renderNodeDestructive(e3, r6, n5, o3);
    } catch (g3) {
      if (resetHooksState(), c4.children.length = h4, c4.chunks.length = p4, "object" == typeof (n5 = g3 === ia ? getSuspendedThenable() : g3) && null !== n5) {
        if ("function" == typeof n5.then) return e3 = spawnNewSuspendedRenderTask(e3, r6, o3 = getThenableStateAfterSuspending()).ping, n5.then(e3, e3), r6.formatContext = s5, r6.context = a5, r6.keyPath = i6, r6.treeContext = l5, r6.componentStack = u4, void switchContext(a5);
        if ("Maximum call stack size exceeded" === n5.message) return n5 = spawnNewSuspendedRenderTask(e3, r6, n5 = getThenableStateAfterSuspending()), e3.pingedTasks.push(n5), r6.formatContext = s5, r6.context = a5, r6.keyPath = i6, r6.treeContext = l5, r6.componentStack = u4, void switchContext(a5);
      }
    }
  }
  throw r6.formatContext = s5, r6.context = a5, r6.keyPath = i6, r6.treeContext = l5, switchContext(a5), n5;
}
function abortTaskSoft(e3) {
  var r6 = e3.blockedBoundary;
  null !== (e3 = e3.blockedSegment) && (e3.status = 3, finishedTask(this, r6, e3));
}
function abortRemainingReplayNodes(e3, r6, n5, o3, s5, a5) {
  for (var i6 = 0; i6 < n5.length; i6++) {
    var l5 = n5[i6];
    if (4 === l5.length) abortRemainingReplayNodes(e3, r6, l5[2], l5[3], s5, a5);
    else {
      l5 = l5[5];
      var u4 = e3, c4 = a5, h4 = createSuspenseBoundary(0, /* @__PURE__ */ new Set(), null, null);
      h4.parentFlushed = true, h4.rootSegmentID = l5, h4.status = 4, h4.errorDigest = c4, h4.parentFlushed && u4.clientRenderedBoundaries.push(h4);
    }
  }
  if (n5.length = 0, null !== o3) {
    if (null === r6) throw Error(formatProdErrorMessage(487));
    if (4 !== r6.status && (r6.status = 4, r6.errorDigest = a5, r6.parentFlushed && e3.clientRenderedBoundaries.push(r6)), "object" == typeof o3) for (var p4 in o3) delete o3[p4];
  }
}
function abortTask(e3, r6, n5) {
  var o3 = e3.blockedBoundary, s5 = e3.blockedSegment;
  if (null !== s5) {
    if (6 === s5.status) return;
    s5.status = 3;
  }
  if (s5 = getThrownInfo(e3.componentStack), null === o3) {
    if (13 !== r6.status && 14 !== r6.status) {
      if (null === (o3 = e3.replay)) return logRecoverableError(r6, n5, s5), void fatalError(r6, n5);
      o3.pendingTasks--, 0 === o3.pendingTasks && 0 < o3.nodes.length && (e3 = logRecoverableError(r6, n5, s5), abortRemainingReplayNodes(r6, null, o3.nodes, o3.slots, n5, e3)), r6.pendingRootTasks--, 0 === r6.pendingRootTasks && completeShell(r6);
    }
  } else o3.pendingTasks--, 4 !== o3.status && (o3.status = 4, e3 = logRecoverableError(r6, n5, s5), o3.status = 4, o3.errorDigest = e3, untrackBoundary(r6, o3), o3.parentFlushed && r6.clientRenderedBoundaries.push(o3)), o3.fallbackAbortableTasks.forEach(function(e4) {
    return abortTask(e4, r6, n5);
  }), o3.fallbackAbortableTasks.clear();
  r6.allPendingTasks--, 0 === r6.allPendingTasks && completeAll(r6);
}
function safelyEmitEarlyPreloads(e3, r6) {
  try {
    var n5 = e3.renderState, o3 = n5.onHeaders;
    if (o3) {
      var s5 = n5.headers;
      if (s5) {
        n5.headers = null;
        var a5 = s5.preconnects;
        if (s5.fontPreloads && (a5 && (a5 += ", "), a5 += s5.fontPreloads), s5.highImagePreloads && (a5 && (a5 += ", "), a5 += s5.highImagePreloads), !r6) {
          var i6 = n5.styles.values(), l5 = i6.next();
          e: for (; 0 < s5.remainingCapacity && !l5.done; l5 = i6.next()) for (var u4 = l5.value.sheets.values(), c4 = u4.next(); 0 < s5.remainingCapacity && !c4.done; c4 = u4.next()) {
            var h4 = c4.value, p4 = h4.props, g3 = p4.href, y3 = h4.props, v3 = getPreloadAsHeader(y3.href, "style", { crossOrigin: y3.crossOrigin, integrity: y3.integrity, nonce: y3.nonce, type: y3.type, fetchPriority: y3.fetchPriority, referrerPolicy: y3.referrerPolicy, media: y3.media });
            if (!(0 <= (s5.remainingCapacity -= v3.length + 2))) break e;
            n5.resets.style[g3] = js, a5 && (a5 += ", "), a5 += v3, n5.resets.style[g3] = "string" == typeof p4.crossOrigin || "string" == typeof p4.integrity ? [p4.crossOrigin, p4.integrity] : js;
          }
        }
        o3(a5 ? { Link: a5 } : {});
      }
    }
  } catch (r7) {
    logRecoverableError(e3, r7, {});
  }
}
function completeShell(e3) {
  null === e3.trackedPostpones && safelyEmitEarlyPreloads(e3, true), null === e3.trackedPostpones && preparePreamble(e3), e3.onShellError = noop, (e3 = e3.onShellReady)();
}
function completeAll(e3) {
  safelyEmitEarlyPreloads(e3, null === e3.trackedPostpones || (null === e3.completedRootSegment || 5 !== e3.completedRootSegment.status)), preparePreamble(e3), (e3 = e3.onAllReady)();
}
function queueCompletedSegment(e3, r6) {
  if (0 === r6.chunks.length && 1 === r6.children.length && null === r6.children[0].boundary && -1 === r6.children[0].id) {
    var n5 = r6.children[0];
    n5.id = r6.id, n5.parentFlushed = true, 1 === n5.status && queueCompletedSegment(e3, n5);
  } else e3.completedSegments.push(r6);
}
function finishedTask(e3, r6, n5) {
  if (null === r6) {
    if (null !== n5 && n5.parentFlushed) {
      if (null !== e3.completedRootSegment) throw Error(formatProdErrorMessage(389));
      e3.completedRootSegment = n5;
    }
    e3.pendingRootTasks--, 0 === e3.pendingRootTasks && completeShell(e3);
  } else r6.pendingTasks--, 4 !== r6.status && (0 === r6.pendingTasks ? (0 === r6.status && (r6.status = 1), null !== n5 && n5.parentFlushed && 1 === n5.status && queueCompletedSegment(r6, n5), r6.parentFlushed && e3.completedBoundaries.push(r6), 1 === r6.status && (r6.fallbackAbortableTasks.forEach(abortTaskSoft, e3), r6.fallbackAbortableTasks.clear(), 0 === e3.pendingRootTasks && null === e3.trackedPostpones && null !== r6.contentPreamble && preparePreamble(e3))) : null !== n5 && n5.parentFlushed && 1 === n5.status && (queueCompletedSegment(r6, n5), 1 === r6.completedSegments.length && r6.parentFlushed && e3.partialBoundaries.push(r6)));
  e3.allPendingTasks--, 0 === e3.allPendingTasks && completeAll(e3);
}
function performWork(e3) {
  if (14 !== e3.status && 13 !== e3.status) {
    var r6 = ta, n5 = As.H;
    As.H = $a;
    var o3 = As.A;
    As.A = Fa;
    var s5 = Aa;
    Aa = e3;
    var a5 = Ta;
    Ta = e3.resumableState;
    try {
      var i6, l5 = e3.pingedTasks;
      for (i6 = 0; i6 < l5.length; i6++) {
        var u4 = l5[i6], c4 = e3, h4 = u4.blockedSegment;
        if (null === h4) {
          var p4 = c4;
          if (0 !== u4.replay.pendingTasks) {
            switchContext(u4.context);
            try {
              if ("number" == typeof u4.replay.slots ? resumeNode(p4, u4, u4.replay.slots, u4.node, u4.childIndex) : retryNode(p4, u4), 1 === u4.replay.pendingTasks && 0 < u4.replay.nodes.length) throw Error(formatProdErrorMessage(488));
              u4.replay.pendingTasks--, u4.abortSet.delete(u4), finishedTask(p4, u4.blockedBoundary, null);
            } catch (e4) {
              resetHooksState();
              var g3 = e4 === ia ? getSuspendedThenable() : e4;
              if ("object" == typeof g3 && null !== g3 && "function" == typeof g3.then) {
                var y3 = u4.ping;
                g3.then(y3, y3), u4.thenableState = getThenableStateAfterSuspending();
              } else {
                u4.replay.pendingTasks--, u4.abortSet.delete(u4);
                var v3 = getThrownInfo(u4.componentStack);
                c4 = void 0;
                var b3 = p4, k4 = u4.blockedBoundary, C4 = 12 === p4.status ? p4.fatalError : g3;
                abortRemainingReplayNodes(b3, k4, u4.replay.nodes, u4.replay.slots, C4, c4 = logRecoverableError(b3, C4, v3)), p4.pendingRootTasks--, 0 === p4.pendingRootTasks && completeShell(p4), p4.allPendingTasks--, 0 === p4.allPendingTasks && completeAll(p4);
              }
            }
          }
        } else if (p4 = void 0, 0 === (b3 = h4).status) {
          b3.status = 6, switchContext(u4.context);
          var P4 = b3.children.length, R4 = b3.chunks.length;
          try {
            retryNode(c4, u4), pushSegmentFinale(b3.chunks, c4.renderState, b3.lastPushedText, b3.textEmbedded), u4.abortSet.delete(u4), b3.status = 1, finishedTask(c4, u4.blockedBoundary, b3);
          } catch (e4) {
            resetHooksState(), b3.children.length = P4, b3.chunks.length = R4;
            var $3 = e4 === ia ? getSuspendedThenable() : 12 === c4.status ? c4.fatalError : e4;
            if ("object" == typeof $3 && null !== $3 && "function" == typeof $3.then) {
              b3.status = 0, u4.thenableState = getThenableStateAfterSuspending();
              var T4 = u4.ping;
              $3.then(T4, T4);
            } else {
              var F4 = getThrownInfo(u4.componentStack);
              u4.abortSet.delete(u4), b3.status = 4;
              var E4 = u4.blockedBoundary;
              p4 = logRecoverableError(c4, $3, F4), null === E4 ? fatalError(c4, $3) : (E4.pendingTasks--, 4 !== E4.status && (E4.status = 4, E4.errorDigest = p4, untrackBoundary(c4, E4), E4.parentFlushed && c4.clientRenderedBoundaries.push(E4), 0 === c4.pendingRootTasks && null === c4.trackedPostpones && null !== E4.contentPreamble && preparePreamble(c4))), c4.allPendingTasks--, 0 === c4.allPendingTasks && completeAll(c4);
            }
          }
        }
      }
      l5.splice(0, i6), null !== e3.destination && flushCompletedQueues(e3, e3.destination);
    } catch (r7) {
      logRecoverableError(e3, r7, {}), fatalError(e3, r7);
    } finally {
      Ta = a5, As.H = n5, As.A = o3, n5 === $a && switchContext(r6), Aa = s5;
    }
  }
}
function preparePreambleFromSubtree(e3, r6, n5) {
  r6.preambleChildren.length && n5.push(r6.preambleChildren);
  for (var o3 = false, s5 = 0; s5 < r6.children.length; s5++) o3 = preparePreambleFromSegment(e3, r6.children[s5], n5) || o3;
  return o3;
}
function preparePreambleFromSegment(e3, r6, n5) {
  var o3 = r6.boundary;
  if (null === o3) return preparePreambleFromSubtree(e3, r6, n5);
  var s5 = o3.contentPreamble, a5 = o3.fallbackPreamble;
  if (null === s5 || null === a5) return false;
  switch (o3.status) {
    case 1:
      if (hoistPreambleState(e3.renderState, s5), !(r6 = o3.completedSegments[0])) throw Error(formatProdErrorMessage(391));
      return preparePreambleFromSubtree(e3, r6, n5);
    case 5:
      if (null !== e3.trackedPostpones) return true;
    case 4:
      if (1 === r6.status) return hoistPreambleState(e3.renderState, a5), preparePreambleFromSubtree(e3, r6, n5);
    default:
      return true;
  }
}
function preparePreamble(e3) {
  if (e3.completedRootSegment && null === e3.completedPreambleSegments) {
    var r6 = [], n5 = preparePreambleFromSegment(e3, e3.completedRootSegment, r6), o3 = e3.renderState.preamble;
    (false === n5 || o3.headChunks && o3.bodyChunks) && (e3.completedPreambleSegments = r6);
  }
}
function flushSubtree(e3, r6, n5, o3) {
  switch (n5.parentFlushed = true, n5.status) {
    case 0:
      n5.id = e3.nextSegmentId++;
    case 5:
      return o3 = n5.id, n5.lastPushedText = false, n5.textEmbedded = false, e3 = e3.renderState, r6.push('<template id="'), r6.push(e3.placeholderPrefix), e3 = o3.toString(16), r6.push(e3), r6.push('"></template>');
    case 1:
      n5.status = 2;
      var s5 = true, a5 = n5.chunks, i6 = 0;
      n5 = n5.children;
      for (var l5 = 0; l5 < n5.length; l5++) {
        for (s5 = n5[l5]; i6 < s5.index; i6++) r6.push(a5[i6]);
        s5 = flushSegment(e3, r6, s5, o3);
      }
      for (; i6 < a5.length - 1; i6++) r6.push(a5[i6]);
      return i6 < a5.length && (s5 = r6.push(a5[i6])), s5;
    default:
      throw Error(formatProdErrorMessage(390));
  }
}
function flushSegment(e3, r6, n5, o3) {
  var s5 = n5.boundary;
  if (null === s5) return flushSubtree(e3, r6, n5, o3);
  if (s5.parentFlushed = true, 4 === s5.status) {
    if (!e3.renderState.generateStaticMarkup) {
      var a5 = s5.errorDigest;
      r6.push("<!--$!-->"), r6.push("<template"), a5 && (r6.push(' data-dgst="'), a5 = escapeTextForBrowser(a5), r6.push(a5), r6.push('"')), r6.push("></template>");
    }
    return flushSubtree(e3, r6, n5, o3), e3.renderState.generateStaticMarkup ? r6 = true : ((e3 = s5.fallbackPreamble) && writePreambleContribution(r6, e3), r6 = r6.push("<!--/$-->")), r6;
  }
  if (1 !== s5.status) return 0 === s5.status && (s5.rootSegmentID = e3.nextSegmentId++), 0 < s5.completedSegments.length && e3.partialBoundaries.push(s5), writeStartPendingSuspenseBoundary(r6, e3.renderState, s5.rootSegmentID), o3 && ((s5 = s5.fallbackState).styles.forEach(hoistStyleQueueDependency, o3), s5.stylesheets.forEach(hoistStylesheetDependency, o3)), flushSubtree(e3, r6, n5, o3), r6.push("<!--/$-->");
  if (s5.byteSize > e3.progressiveChunkSize) return s5.rootSegmentID = e3.nextSegmentId++, e3.completedBoundaries.push(s5), writeStartPendingSuspenseBoundary(r6, e3.renderState, s5.rootSegmentID), flushSubtree(e3, r6, n5, o3), r6.push("<!--/$-->");
  if (o3 && ((n5 = s5.contentState).styles.forEach(hoistStyleQueueDependency, o3), n5.stylesheets.forEach(hoistStylesheetDependency, o3)), e3.renderState.generateStaticMarkup || r6.push("<!--$-->"), 1 !== (n5 = s5.completedSegments).length) throw Error(formatProdErrorMessage(391));
  return flushSegment(e3, r6, n5[0], o3), e3.renderState.generateStaticMarkup ? r6 = true : ((e3 = s5.contentPreamble) && writePreambleContribution(r6, e3), r6 = r6.push("<!--/$-->")), r6;
}
function flushSegmentContainer(e3, r6, n5, o3) {
  return function(e4, r7, n6, o4) {
    switch (n6.insertionMode) {
      case 0:
      case 1:
      case 3:
      case 2:
        return e4.push('<div hidden id="'), e4.push(r7.segmentPrefix), r7 = o4.toString(16), e4.push(r7), e4.push('">');
      case 4:
        return e4.push('<svg aria-hidden="true" style="display:none" id="'), e4.push(r7.segmentPrefix), r7 = o4.toString(16), e4.push(r7), e4.push('">');
      case 5:
        return e4.push('<math aria-hidden="true" style="display:none" id="'), e4.push(r7.segmentPrefix), r7 = o4.toString(16), e4.push(r7), e4.push('">');
      case 6:
        return e4.push('<table hidden id="'), e4.push(r7.segmentPrefix), r7 = o4.toString(16), e4.push(r7), e4.push('">');
      case 7:
        return e4.push('<table hidden><tbody id="'), e4.push(r7.segmentPrefix), r7 = o4.toString(16), e4.push(r7), e4.push('">');
      case 8:
        return e4.push('<table hidden><tr id="'), e4.push(r7.segmentPrefix), r7 = o4.toString(16), e4.push(r7), e4.push('">');
      case 9:
        return e4.push('<table hidden><colgroup id="'), e4.push(r7.segmentPrefix), r7 = o4.toString(16), e4.push(r7), e4.push('">');
      default:
        throw Error(formatProdErrorMessage(397));
    }
  }(r6, e3.renderState, n5.parentFormatContext, n5.id), flushSegment(e3, r6, n5, o3), function(e4, r7) {
    switch (r7.insertionMode) {
      case 0:
      case 1:
      case 3:
      case 2:
        return e4.push("</div>");
      case 4:
        return e4.push("</svg>");
      case 5:
        return e4.push("</math>");
      case 6:
        return e4.push("</table>");
      case 7:
        return e4.push("</tbody></table>");
      case 8:
        return e4.push("</tr></table>");
      case 9:
        return e4.push("</colgroup></table>");
      default:
        throw Error(formatProdErrorMessage(397));
    }
  }(r6, n5.parentFormatContext);
}
function flushCompletedBoundary(e3, r6, n5) {
  for (var o3 = n5.completedSegments, s5 = 0; s5 < o3.length; s5++) flushPartiallyCompletedSegment(e3, r6, n5, o3[s5]);
  o3.length = 0, writeHoistablesForBoundary(r6, n5.contentState, e3.renderState), o3 = e3.resumableState, e3 = e3.renderState, s5 = n5.rootSegmentID, n5 = n5.contentState;
  var a5 = e3.stylesToHoist;
  return e3.stylesToHoist = false, r6.push(e3.startInlineScript), a5 ? 2 & o3.instructions ? 8 & o3.instructions ? r6.push('$RR("') : (o3.instructions |= 8, r6.push('$RM=new Map;\n$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=\nd;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,\nt,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("')) : (o3.instructions |= 10, r6.push('$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RM=new Map;\n$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=\nd;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,\nt,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("')) : 2 & o3.instructions ? r6.push('$RC("') : (o3.instructions |= 2, r6.push('$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RC("')), o3 = s5.toString(16), r6.push(e3.boundaryPrefix), r6.push(o3), r6.push('","'), r6.push(e3.segmentPrefix), r6.push(o3), a5 ? (r6.push('",'), function(e4, r7) {
    e4.push("[");
    var n6 = "[";
    r7.stylesheets.forEach(function(r8) {
      if (2 !== r8.state) if (3 === r8.state) e4.push(n6), r8 = escapeJSObjectForInstructionScripts("" + r8.props.href), e4.push(r8), e4.push("]"), n6 = ",[";
      else {
        e4.push(n6);
        var o4 = r8.props["data-precedence"], s6 = r8.props, a6 = sanitizeURL("" + r8.props.href);
        for (var i6 in a6 = escapeJSObjectForInstructionScripts(a6), e4.push(a6), o4 = "" + o4, e4.push(","), o4 = escapeJSObjectForInstructionScripts(o4), e4.push(o4), s6) if (ws.call(s6, i6) && null != (o4 = s6[i6])) switch (i6) {
          case "href":
          case "rel":
          case "precedence":
          case "data-precedence":
            break;
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(formatProdErrorMessage(399, "link"));
          default:
            writeStyleResourceAttributeInJS(e4, i6, o4);
        }
        e4.push("]"), n6 = ",[", r8.state = 3;
      }
    }), e4.push("]");
  }(r6, n5)) : r6.push('"'), n5 = r6.push(")<\/script>"), writeBootstrap(r6, e3) && n5;
}
function flushPartiallyCompletedSegment(e3, r6, n5, o3) {
  if (2 === o3.status) return true;
  var s5 = n5.contentState, a5 = o3.id;
  if (-1 === a5) {
    if (-1 === (o3.id = n5.rootSegmentID)) throw Error(formatProdErrorMessage(392));
    return flushSegmentContainer(e3, r6, o3, s5);
  }
  return a5 === n5.rootSegmentID ? flushSegmentContainer(e3, r6, o3, s5) : (flushSegmentContainer(e3, r6, o3, s5), n5 = e3.resumableState, e3 = e3.renderState, r6.push(e3.startInlineScript), 1 & n5.instructions ? r6.push('$RS("') : (n5.instructions |= 1, r6.push('$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), r6.push(e3.segmentPrefix), a5 = a5.toString(16), r6.push(a5), r6.push('","'), r6.push(e3.placeholderPrefix), r6.push(a5), r6 = r6.push('")<\/script>'));
}
function flushCompletedQueues(e3, r6) {
  try {
    if (!(0 < e3.pendingRootTasks)) {
      var n5, o3 = e3.completedRootSegment;
      if (null !== o3) {
        if (5 === o3.status) return;
        var s5 = e3.completedPreambleSegments;
        if (null === s5) return;
        var a5, i6 = e3.renderState, l5 = i6.preamble, u4 = l5.htmlChunks, c4 = l5.headChunks;
        if (u4) {
          for (a5 = 0; a5 < u4.length; a5++) r6.push(u4[a5]);
          if (c4) for (a5 = 0; a5 < c4.length; a5++) r6.push(c4[a5]);
          else {
            var h4 = startChunkForTag("head");
            r6.push(h4), r6.push(">");
          }
        } else if (c4) for (a5 = 0; a5 < c4.length; a5++) r6.push(c4[a5]);
        var p4 = i6.charsetChunks;
        for (a5 = 0; a5 < p4.length; a5++) r6.push(p4[a5]);
        p4.length = 0, i6.preconnects.forEach(flushResource, r6), i6.preconnects.clear();
        var g3 = i6.viewportChunks;
        for (a5 = 0; a5 < g3.length; a5++) r6.push(g3[a5]);
        g3.length = 0, i6.fontPreloads.forEach(flushResource, r6), i6.fontPreloads.clear(), i6.highImagePreloads.forEach(flushResource, r6), i6.highImagePreloads.clear(), i6.styles.forEach(flushStylesInPreamble, r6);
        var y3 = i6.importMapChunks;
        for (a5 = 0; a5 < y3.length; a5++) r6.push(y3[a5]);
        y3.length = 0, i6.bootstrapScripts.forEach(flushResource, r6), i6.scripts.forEach(flushResource, r6), i6.scripts.clear(), i6.bulkPreloads.forEach(flushResource, r6), i6.bulkPreloads.clear();
        var v3 = i6.hoistableChunks;
        for (a5 = 0; a5 < v3.length; a5++) r6.push(v3[a5]);
        for (i6 = v3.length = 0; i6 < s5.length; i6++) {
          var b3 = s5[i6];
          for (l5 = 0; l5 < b3.length; l5++) flushSegment(e3, r6, b3[l5], null);
        }
        var k4 = e3.renderState.preamble, C4 = k4.headChunks;
        if (k4.htmlChunks || C4) {
          var P4 = endChunkForTag("head");
          r6.push(P4);
        }
        var R4 = k4.bodyChunks;
        if (R4) for (s5 = 0; s5 < R4.length; s5++) r6.push(R4[s5]);
        flushSegment(e3, r6, o3, null), e3.completedRootSegment = null, writeBootstrap(r6, e3.renderState);
      }
      var $3 = e3.renderState;
      o3 = 0;
      var T4 = $3.viewportChunks;
      for (o3 = 0; o3 < T4.length; o3++) r6.push(T4[o3]);
      T4.length = 0, $3.preconnects.forEach(flushResource, r6), $3.preconnects.clear(), $3.fontPreloads.forEach(flushResource, r6), $3.fontPreloads.clear(), $3.highImagePreloads.forEach(flushResource, r6), $3.highImagePreloads.clear(), $3.styles.forEach(preloadLateStyles, r6), $3.scripts.forEach(flushResource, r6), $3.scripts.clear(), $3.bulkPreloads.forEach(flushResource, r6), $3.bulkPreloads.clear();
      var F4 = $3.hoistableChunks;
      for (o3 = 0; o3 < F4.length; o3++) r6.push(F4[o3]);
      F4.length = 0;
      var E4 = e3.clientRenderedBoundaries;
      for (n5 = 0; n5 < E4.length; n5++) {
        var I4 = E4[n5];
        $3 = r6;
        var A4 = e3.resumableState, O4 = e3.renderState, B3 = I4.rootSegmentID, N4 = I4.errorDigest;
        $3.push(O4.startInlineScript), 4 & A4.instructions ? $3.push('$RX("') : (A4.instructions |= 4, $3.push('$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("')), $3.push(O4.boundaryPrefix);
        var D4 = B3.toString(16);
        if ($3.push(D4), $3.push('"'), N4) {
          $3.push(",");
          var H3 = escapeJSStringsForInstructionScripts(N4 || "");
          $3.push(H3);
        }
        var W4 = $3.push(")<\/script>");
        if (!W4) return e3.destination = null, n5++, void E4.splice(0, n5);
      }
      E4.splice(0, n5);
      var V4 = e3.completedBoundaries;
      for (n5 = 0; n5 < V4.length; n5++) if (!flushCompletedBoundary(e3, r6, V4[n5])) return e3.destination = null, n5++, void V4.splice(0, n5);
      V4.splice(0, n5);
      var q3 = e3.partialBoundaries;
      for (n5 = 0; n5 < q3.length; n5++) {
        var G3 = q3[n5];
        e: {
          E4 = e3, I4 = r6;
          var X4 = G3.completedSegments;
          for (W4 = 0; W4 < X4.length; W4++) if (!flushPartiallyCompletedSegment(E4, I4, G3, X4[W4])) {
            W4++, X4.splice(0, W4);
            var Q3 = false;
            break e;
          }
          X4.splice(0, W4), Q3 = writeHoistablesForBoundary(I4, G3.contentState, E4.renderState);
        }
        if (!Q3) return e3.destination = null, n5++, void q3.splice(0, n5);
      }
      q3.splice(0, n5);
      var Y4 = e3.completedBoundaries;
      for (n5 = 0; n5 < Y4.length; n5++) if (!flushCompletedBoundary(e3, r6, Y4[n5])) return e3.destination = null, n5++, void Y4.splice(0, n5);
      Y4.splice(0, n5);
    }
  } finally {
    0 === e3.allPendingTasks && 0 === e3.pingedTasks.length && 0 === e3.clientRenderedBoundaries.length && 0 === e3.completedBoundaries.length && (e3.flushScheduled = false, (n5 = e3.resumableState).hasBody && (q3 = endChunkForTag("body"), r6.push(q3)), n5.hasHtml && (n5 = endChunkForTag("html"), r6.push(n5)), e3.status = 14, r6.push(null), e3.destination = null);
  }
}
function enqueueFlush(e3) {
  if (false === e3.flushScheduled && 0 === e3.pingedTasks.length && null !== e3.destination) {
    e3.flushScheduled = true;
    var r6 = e3.destination;
    r6 ? flushCompletedQueues(e3, r6) : e3.flushScheduled = false;
  }
}
function startFlowing(e3, r6) {
  if (13 === e3.status) e3.status = 14, r6.destroy(e3.fatalError);
  else if (14 !== e3.status && null === e3.destination) {
    e3.destination = r6;
    try {
      flushCompletedQueues(e3, r6);
    } catch (r7) {
      logRecoverableError(e3, r7, {}), fatalError(e3, r7);
    }
  }
}
function abort2(e3, r6) {
  11 !== e3.status && 10 !== e3.status || (e3.status = 12);
  try {
    var n5 = e3.abortableTasks;
    if (0 < n5.size) {
      var o3 = void 0 === r6 ? Error(formatProdErrorMessage(432)) : "object" == typeof r6 && null !== r6 && "function" == typeof r6.then ? Error(formatProdErrorMessage(530)) : r6;
      e3.fatalError = o3, n5.forEach(function(r7) {
        return abortTask(r7, e3, o3);
      }), n5.clear();
    }
    null !== e3.destination && flushCompletedQueues(e3, e3.destination);
  } catch (r7) {
    logRecoverableError(e3, r7, {}), fatalError(e3, r7);
  }
}
function onError() {
}
function renderToStringImpl(e3, r6, n5, o3) {
  var s5, a5, i6, l5, u4 = false, c4 = null, h4 = "", p4 = false;
  if (e3 = function(e4, r7, n6, o4, s6, a6, i7, l6, u5, c5, h5, p5) {
    return (n6 = createPendingSegment(r7 = new RequestInstance(r7, n6, o4, s6, a6, i7, l6, u5, c5, h5, p5), 0, null, o4, false, false)).parentFlushed = true, pushComponentStack(e4 = createRenderTask(r7, null, e4, -1, null, n6, null, null, r7.abortableTasks, null, o4, null, na, null, false)), r7.pingedTasks.push(e4), r7;
  }(e3, r6 = { idPrefix: void 0 === (s5 = r6 ? r6.identifierPrefix : void 0) ? "" : s5, nextFormID: 0, streamingFormat: 0, bootstrapScriptContent: a5, bootstrapScripts: i6, bootstrapModules: l5, instructions: 0, hasBody: false, hasHtml: false, unknownResources: {}, dnsResources: {}, connectResources: { default: {}, anonymous: {}, credentials: {} }, imageResources: {}, styleResources: {}, scriptResources: {}, moduleUnknownResources: {}, moduleScriptResources: {} }, function(e4, r7) {
    var n6 = e4.idPrefix, o4 = [], s6 = e4.bootstrapScriptContent, a6 = e4.bootstrapScripts, i7 = e4.bootstrapModules;
    void 0 !== s6 && o4.push("<script>", ("" + s6).replace(Bs, scriptReplacer), "<\/script>"), s6 = n6 + "P:";
    var l6 = n6 + "S:";
    n6 += "B:";
    var u5 = { htmlChunks: null, headChunks: null, bodyChunks: null, contribution: 0 }, c5 = /* @__PURE__ */ new Set(), h5 = /* @__PURE__ */ new Set(), p5 = /* @__PURE__ */ new Set(), g3 = /* @__PURE__ */ new Map(), y3 = /* @__PURE__ */ new Set(), v3 = /* @__PURE__ */ new Set(), b3 = /* @__PURE__ */ new Set(), k4 = { images: /* @__PURE__ */ new Map(), stylesheets: /* @__PURE__ */ new Map(), scripts: /* @__PURE__ */ new Map(), moduleScripts: /* @__PURE__ */ new Map() };
    if (void 0 !== a6) for (var C4 = 0; C4 < a6.length; C4++) {
      var P4, R4 = a6[C4], $3 = void 0, T4 = void 0, F4 = { rel: "preload", as: "script", fetchPriority: "low", nonce: void 0 };
      "string" == typeof R4 ? F4.href = P4 = R4 : (F4.href = P4 = R4.src, F4.integrity = T4 = "string" == typeof R4.integrity ? R4.integrity : void 0, F4.crossOrigin = $3 = "string" == typeof R4 || null == R4.crossOrigin ? void 0 : "use-credentials" === R4.crossOrigin ? "use-credentials" : "");
      var E4 = P4;
      (R4 = e4).scriptResources[E4] = null, R4.moduleScriptResources[E4] = null, pushLinkImpl(R4 = [], F4), y3.add(R4), o4.push('<script src="', escapeTextForBrowser(P4)), "string" == typeof T4 && o4.push('" integrity="', escapeTextForBrowser(T4)), "string" == typeof $3 && o4.push('" crossorigin="', escapeTextForBrowser($3)), o4.push('" async=""><\/script>');
    }
    if (void 0 !== i7) for (a6 = 0; a6 < i7.length; a6++) $3 = P4 = void 0, T4 = { rel: "modulepreload", fetchPriority: "low", nonce: void 0 }, "string" == typeof (F4 = i7[a6]) ? T4.href = C4 = F4 : (T4.href = C4 = F4.src, T4.integrity = $3 = "string" == typeof F4.integrity ? F4.integrity : void 0, T4.crossOrigin = P4 = "string" == typeof F4 || null == F4.crossOrigin ? void 0 : "use-credentials" === F4.crossOrigin ? "use-credentials" : ""), R4 = C4, (F4 = e4).scriptResources[R4] = null, F4.moduleScriptResources[R4] = null, pushLinkImpl(F4 = [], T4), y3.add(F4), o4.push('<script type="module" src="', escapeTextForBrowser(C4)), "string" == typeof $3 && o4.push('" integrity="', escapeTextForBrowser($3)), "string" == typeof P4 && o4.push('" crossorigin="', escapeTextForBrowser(P4)), o4.push('" async=""><\/script>');
    return { placeholderPrefix: s6, segmentPrefix: l6, boundaryPrefix: n6, startInlineScript: "<script>", preamble: u5, externalRuntimeScript: null, bootstrapChunks: o4, importMapChunks: [], onHeaders: void 0, headers: null, resets: { font: {}, dns: {}, connect: { default: {}, anonymous: {}, credentials: {} }, image: {}, style: {} }, charsetChunks: [], viewportChunks: [], hoistableChunks: [], preconnects: c5, fontPreloads: h5, highImagePreloads: p5, styles: g3, bootstrapScripts: y3, scripts: v3, bulkPreloads: b3, preloads: k4, stylesToHoist: false, generateStaticMarkup: r7 };
  }(r6, n5), createFormatContext(0, null, 0), 1 / 0, onError, void 0, function() {
    p4 = true;
  }, void 0, void 0, void 0), e3.flushScheduled = null !== e3.destination, performWork(e3), 10 === e3.status && (e3.status = 11), null === e3.trackedPostpones && safelyEmitEarlyPreloads(e3, 0 === e3.pendingRootTasks), abort2(e3, o3), startFlowing(e3, { push: /* @__PURE__ */ __name(function(e4) {
    return null !== e4 && (h4 += e4), true;
  }, "push"), destroy: /* @__PURE__ */ __name(function(e4) {
    u4 = true, c4 = e4;
  }, "destroy") }), u4 && c4 !== o3) throw c4;
  if (!p4) throw Error(formatProdErrorMessage(426));
  return h4;
}
function isbot(e3) {
  return Boolean(e3) && function() {
    if (Ma instanceof RegExp) return Ma;
    try {
      Ma = new RegExp(" daum[ /]| deusu/| yadirectfetcher|(?:^|[^g])news(?!sapphire)|(?<! (?:channel/|google/))google(?!(app|/google| pixel))|(?<! cu)bots?(?:\\b|_)|(?<!(?:lib))http|(?<![hg]m)score|(?<!cam)scan|@[a-z][\\w-]+\\.|\\(\\)|\\.com\\b|\\btime/|\\||^<|^[\\w \\.\\-\\(?:\\):%]+(?:/v?\\d+(?:\\.\\d+)?(?:\\.\\d{1,10})*?)?(?:,|$)|^[^ ]{50,}$|^\\d+\\b|^\\w*search\\b|^\\w+/[\\w\\(\\)]*$|^active|^ad muncher|^amaya|^avsdevicesdk/|^azure|^biglotron|^bot|^bw/|^clamav[ /]|^client/|^cobweb/|^custom|^ddg[_-]android|^discourse|^dispatch/\\d|^downcast/|^duckduckgo|^email|^facebook|^getright/|^gozilla/|^hobbit|^hotzonu|^hwcdn/|^igetter/|^jeode/|^jetty/|^jigsaw|^microsoft bits|^movabletype|^mozilla/\\d\\.\\d\\s[\\w\\.-]+$|^mozilla/\\d\\.\\d\\s\\(compatible;?(?:\\s\\w+\\/\\d+\\.\\d+)?\\)$|^navermailapp|^netsurf|^offline|^openai/|^owler|^php|^postman|^python|^rank|^read|^reed|^rest|^rss|^snapchat|^space bison|^svn|^swcd |^taringa|^thumbor/|^track|^w3c|^webbandit/|^webcopier|^wget|^whatsapp|^wordpress|^xenu link sleuth|^yahoo|^yandex|^zdm/\\d|^zoom marketplace/|^{{.*}}$|analyzer|archive|ask jeeves/teoma|audit|bit\\.ly/|bluecoat drtr|browsex|burpcollaborator|capture|catch|check\\b|checker|chrome-lighthouse|chromeframe|classifier|cloudflare|convertify|crawl|cypress/|dareboost|datanyze|dejaclick|detect|dmbrowser|download|evc-batch/|exaleadcloudview|feed|firephp|functionize|gomezagent|grab|headless|httrack|hubspot marketing grader|hydra|ibisbrowser|infrawatch|insight|inspect|iplabel|ips-agent|java(?!;)|library|linkcheck|mail\\.ru/|manager|measure|neustar wpm|node|nutch|offbyone|onetrust|optimize|pageburst|pagespeed|parser|perl|phantomjs|pingdom|powermarks|preview|proxy|ptst[ /]\\d|retriever|rexx;|rigor|rss\\b|scrape|server|sogou|sparkler/|speedcurve|spider|splash|statuscake|supercleaner|synapse|synthetic|tools|torrent|transcoder|url|validator|virtuoso|wappalyzer|webglance|webkit2png|whatcms/|xtate/", "i");
    } catch (e4) {
      Ma = Oa;
    }
    return Ma;
  }().test(e3);
}
function StartServer(e3) {
  return p2.jsx(RouterProvider, { router: e3.router });
}
function assignKeyAndIndex(e3, r6) {
  r6 || (r6 = {});
  const n5 = createRandomKey();
  return { ...r6, key: n5, __TSR_key: n5, [La]: e3 };
}
function createMemoryHistory(e3 = { initialEntries: ["/"] }) {
  const r6 = e3.initialEntries;
  let n5 = e3.initialIndex ? Math.min(Math.max(e3.initialIndex, 0), r6.length - 1) : r6.length - 1;
  const o3 = r6.map((e4, r7) => assignKeyAndIndex(r7, void 0));
  return function(e4) {
    let r7 = e4.getLocation();
    const n6 = /* @__PURE__ */ new Set(), notify = /* @__PURE__ */ __name((o4) => {
      r7 = e4.getLocation(), n6.forEach((e5) => e5({ location: r7, action: o4 }));
    }, "notify"), handleIndexChange = /* @__PURE__ */ __name((n7) => {
      e4.notifyOnIndexChange ?? 1 ? notify(n7) : r7 = e4.getLocation();
    }, "handleIndexChange"), tryNavigation = /* @__PURE__ */ __name(async ({ task: n7, navigateOpts: o4, ...s5 }) => {
      var a5, i6;
      if (null == o4 ? void 0 : o4.ignoreBlocker) return void n7();
      const l5 = (null == (a5 = e4.getBlockers) ? void 0 : a5.call(e4)) ?? [], u4 = "PUSH" === s5.type || "REPLACE" === s5.type;
      if ("undefined" != typeof document && l5.length && u4) for (const n8 of l5) {
        const o5 = parseHref(s5.path, s5.state);
        if (await n8.blockerFn({ currentLocation: r7, nextLocation: o5, action: s5.type })) return void (null == (i6 = e4.onBlocked) || i6.call(e4));
      }
      n7();
    }, "tryNavigation");
    return { get location() {
      return r7;
    }, get length() {
      return e4.getLength();
    }, subscribers: n6, subscribe: /* @__PURE__ */ __name((e5) => (n6.add(e5), () => {
      n6.delete(e5);
    }), "subscribe"), push: /* @__PURE__ */ __name((n7, o4, s5) => {
      const a5 = r7.state[La];
      o4 = assignKeyAndIndex(a5 + 1, o4), tryNavigation({ task: /* @__PURE__ */ __name(() => {
        e4.pushState(n7, o4), notify({ type: "PUSH" });
      }, "task"), navigateOpts: s5, type: "PUSH", path: n7, state: o4 });
    }, "push"), replace: /* @__PURE__ */ __name((n7, o4, s5) => {
      const a5 = r7.state[La];
      o4 = assignKeyAndIndex(a5, o4), tryNavigation({ task: /* @__PURE__ */ __name(() => {
        e4.replaceState(n7, o4), notify({ type: "REPLACE" });
      }, "task"), navigateOpts: s5, type: "REPLACE", path: n7, state: o4 });
    }, "replace"), go: /* @__PURE__ */ __name((r8, n7) => {
      tryNavigation({ task: /* @__PURE__ */ __name(() => {
        e4.go(r8), handleIndexChange({ type: "GO", index: r8 });
      }, "task"), navigateOpts: n7, type: "GO" });
    }, "go"), back: /* @__PURE__ */ __name((r8) => {
      tryNavigation({ task: /* @__PURE__ */ __name(() => {
        e4.back((null == r8 ? void 0 : r8.ignoreBlocker) ?? false), handleIndexChange({ type: "BACK" });
      }, "task"), navigateOpts: r8, type: "BACK" });
    }, "back"), forward: /* @__PURE__ */ __name((r8) => {
      tryNavigation({ task: /* @__PURE__ */ __name(() => {
        e4.forward((null == r8 ? void 0 : r8.ignoreBlocker) ?? false), handleIndexChange({ type: "FORWARD" });
      }, "task"), navigateOpts: r8, type: "FORWARD" });
    }, "forward"), canGoBack: /* @__PURE__ */ __name(() => 0 !== r7.state[La], "canGoBack"), createHref: /* @__PURE__ */ __name((r8) => e4.createHref(r8), "createHref"), block: /* @__PURE__ */ __name((r8) => {
      var n7;
      if (!e4.setBlockers) return () => {
      };
      const o4 = (null == (n7 = e4.getBlockers) ? void 0 : n7.call(e4)) ?? [];
      return e4.setBlockers([...o4, r8]), () => {
        var n8, o5;
        const s5 = (null == (n8 = e4.getBlockers) ? void 0 : n8.call(e4)) ?? [];
        null == (o5 = e4.setBlockers) || o5.call(e4, s5.filter((e5) => e5 !== r8));
      };
    }, "block"), flush: /* @__PURE__ */ __name(() => {
      var r8;
      return null == (r8 = e4.flush) ? void 0 : r8.call(e4);
    }, "flush"), destroy: /* @__PURE__ */ __name(() => {
      var r8;
      return null == (r8 = e4.destroy) ? void 0 : r8.call(e4);
    }, "destroy"), notify };
  }({ getLocation: /* @__PURE__ */ __name(() => parseHref(r6[n5], o3[n5]), "getLocation"), getLength: /* @__PURE__ */ __name(() => r6.length, "getLength"), pushState: /* @__PURE__ */ __name((e4, s5) => {
    n5 < r6.length - 1 && (r6.splice(n5 + 1), o3.splice(n5 + 1)), o3.push(s5), r6.push(e4), n5 = Math.max(r6.length - 1, 0);
  }, "pushState"), replaceState: /* @__PURE__ */ __name((e4, s5) => {
    o3[n5] = s5, r6[n5] = e4;
  }, "replaceState"), back: /* @__PURE__ */ __name(() => {
    n5 = Math.max(n5 - 1, 0);
  }, "back"), forward: /* @__PURE__ */ __name(() => {
    n5 = Math.min(n5 + 1, r6.length - 1);
  }, "forward"), go: /* @__PURE__ */ __name((e4) => {
    n5 = Math.min(Math.max(n5 + e4, 0), r6.length - 1);
  }, "go"), createHref: /* @__PURE__ */ __name((e4) => e4, "createHref") });
}
function parseHref(e3, r6) {
  const n5 = e3.indexOf("#"), o3 = e3.indexOf("?"), s5 = createRandomKey();
  return { href: e3, pathname: e3.substring(0, n5 > 0 ? o3 > 0 ? Math.min(n5, o3) : n5 : o3 > 0 ? o3 : e3.length), hash: n5 > -1 ? e3.substring(n5) : "", search: o3 > -1 ? e3.slice(o3, -1 === n5 ? void 0 : n5) : "", state: r6 || { [La]: 0, key: s5, __TSR_key: s5 } };
}
function createRandomKey() {
  return (Math.random() + 1).toString(36).substring(7);
}
function splitSetCookieString(e3) {
  if (Array.isArray(e3)) return e3.flatMap((e4) => splitSetCookieString(e4));
  if ("string" != typeof e3) return [];
  const r6 = [];
  let n5, o3, s5, a5, i6, l5 = 0;
  const skipWhitespace = /* @__PURE__ */ __name(() => {
    for (; l5 < e3.length && /\s/.test(e3.charAt(l5)); ) l5 += 1;
    return l5 < e3.length;
  }, "skipWhitespace"), notSpecialChar = /* @__PURE__ */ __name(() => (o3 = e3.charAt(l5), "=" !== o3 && ";" !== o3 && "," !== o3), "notSpecialChar");
  for (; l5 < e3.length; ) {
    for (n5 = l5, i6 = false; skipWhitespace(); ) if (o3 = e3.charAt(l5), "," === o3) {
      for (s5 = l5, l5 += 1, skipWhitespace(), a5 = l5; l5 < e3.length && notSpecialChar(); ) l5 += 1;
      l5 < e3.length && "=" === e3.charAt(l5) ? (i6 = true, l5 = a5, r6.push(e3.slice(n5, s5)), n5 = l5) : l5 = s5 + 1;
    } else l5 += 1;
    (!i6 || l5 >= e3.length) && r6.push(e3.slice(n5, e3.length));
  }
  return r6;
}
function mergeHeaders(...e3) {
  return e3.reduce((e4, r6) => {
    const n5 = (o3 = r6) instanceof Headers || Array.isArray(o3) || "object" == typeof o3 ? new Headers(o3) : new Headers();
    var o3;
    for (const [r7, o4] of n5.entries()) if ("set-cookie" === r7) {
      splitSetCookieString(o4).forEach((r8) => e4.append("set-cookie", r8));
    } else e4.set(r7, o4);
    return e4;
  }, new Headers());
}
function json(e3, r6) {
  return new Response(JSON.stringify(e3), { ...r6, headers: mergeHeaders({ "content-type": "application/json" }, null == r6 ? void 0 : r6.headers) });
}
function invariant(e3, r6) {
  if (!e3) throw new Error("Invariant failed");
}
function isPlainObject(e3) {
  if (!hasObjectPrototype(e3)) return false;
  const r6 = e3.constructor;
  if (void 0 === r6) return true;
  const n5 = r6.prototype;
  return !!hasObjectPrototype(n5) && !!n5.hasOwnProperty("isPrototypeOf");
}
function hasObjectPrototype(e3) {
  return "[object Object]" === Object.prototype.toString.call(e3);
}
function joinPaths(e3) {
  return cleanPath(e3.filter((e4) => void 0 !== e4).join("/"));
}
function cleanPath(e3) {
  return e3.replace(/\/{2,}/g, "/");
}
function trimPathLeft(e3) {
  return "/" === e3 ? e3 : e3.replace(/^\/{1,}/, "");
}
function trimPathRight(e3) {
  return "/" === e3 ? e3 : e3.replace(/\/{1,}$/, "");
}
function matchPathname(e3, r6, n5, o3) {
  const s5 = function(e4, r7, { to: n6, fuzzy: o4, caseSensitive: s6 }, a5) {
    if ("/" !== e4 && !r7.startsWith(e4)) return;
    r7 = removeBasepath(e4, r7, s6), n6 = removeBasepath(e4, `${n6 ?? "$"}`, s6);
    const i6 = parsePathname(r7.startsWith("/") ? r7 : `/${r7}`, a5), l5 = parsePathname(n6.startsWith("/") ? n6 : `/${n6}`, a5), u4 = {};
    return function(e5, r8, n7, o5, s7) {
      var a6, i7, l6;
      let u5 = 0, c4 = 0;
      for (; u5 < e5.length || c4 < r8.length; ) {
        const o6 = e5[u5], h4 = r8[c4];
        if (h4) {
          if (2 === h4.type) {
            const r9 = e5.slice(u5);
            let s8;
            if (h4.prefixSegment || h4.suffixSegment) {
              if (!o6) return false;
              const n8 = h4.prefixSegment || "", i8 = h4.suffixSegment || "", l7 = o6.value;
              if ("prefixSegment" in h4 && !l7.startsWith(n8)) return false;
              if ("suffixSegment" in h4 && !(null == (a6 = e5[e5.length - 1]) ? void 0 : a6.value.endsWith(i8))) return false;
              let u6 = decodeURI(joinPaths(r9.map((e6) => e6.value)));
              n8 && u6.startsWith(n8) && (u6 = u6.slice(n8.length)), i8 && u6.endsWith(i8) && (u6 = u6.slice(0, u6.length - i8.length)), s8 = u6;
            } else s8 = decodeURI(joinPaths(r9.map((e6) => e6.value)));
            return n7["*"] = s8, n7._splat = s8, true;
          }
          if (0 === h4.type) {
            if ("/" === h4.value && !(null == o6 ? void 0 : o6.value)) {
              c4++;
              continue;
            }
            if (o6) {
              if (s7) {
                if (h4.value !== o6.value) return false;
              } else if (h4.value.toLowerCase() !== o6.value.toLowerCase()) return false;
              u5++, c4++;
              continue;
            }
            return false;
          }
          if (1 === h4.type) {
            if (!o6) return false;
            if ("/" === o6.value) return false;
            let e6 = "", r9 = false;
            if (h4.prefixSegment || h4.suffixSegment) {
              const n8 = h4.prefixSegment || "", s8 = h4.suffixSegment || "", a7 = o6.value;
              if (n8 && !a7.startsWith(n8)) return false;
              if (s8 && !a7.endsWith(s8)) return false;
              let i8 = a7;
              n8 && i8.startsWith(n8) && (i8 = i8.slice(n8.length)), s8 && i8.endsWith(s8) && (i8 = i8.slice(0, i8.length - s8.length)), e6 = decodeURIComponent(i8), r9 = true;
            } else e6 = decodeURIComponent(o6.value), r9 = true;
            r9 && (n7[h4.value.substring(1)] = e6, u5++), c4++;
            continue;
          }
          if (3 === h4.type) {
            if (!o6) {
              c4++;
              continue;
            }
            if ("/" === o6.value) {
              c4++;
              continue;
            }
            let s8 = "", a7 = false;
            if (h4.prefixSegment || h4.suffixSegment) {
              const e6 = h4.prefixSegment || "", r9 = h4.suffixSegment || "", n8 = o6.value;
              if ((!e6 || n8.startsWith(e6)) && (!r9 || n8.endsWith(r9))) {
                let o7 = n8;
                e6 && o7.startsWith(e6) && (o7 = o7.slice(e6.length)), r9 && o7.endsWith(r9) && (o7 = o7.slice(0, o7.length - r9.length)), s8 = decodeURIComponent(o7), a7 = true;
              }
            } else {
              let n8 = true;
              for (let s9 = c4 + 1; s9 < r8.length; s9++) {
                const a8 = r8[s9];
                if (0 === (null == a8 ? void 0 : a8.type) && a8.value === o6.value) {
                  n8 = false;
                  break;
                }
                if (1 === (null == a8 ? void 0 : a8.type) || 2 === (null == a8 ? void 0 : a8.type)) {
                  e5.length < r8.length && (n8 = false);
                  break;
                }
              }
              n8 && (s8 = decodeURIComponent(o6.value), a7 = true);
            }
            a7 && (n7[h4.value.substring(1)] = s8, u5++), c4++;
            continue;
          }
        }
        if (u5 < e5.length && c4 >= r8.length) return n7["**"] = joinPaths(e5.slice(u5).map((e6) => e6.value)), "/" !== (null == (i7 = r8[r8.length - 1]) ? void 0 : i7.value);
        if (c4 < r8.length && u5 >= e5.length) {
          for (let e6 = c4; e6 < r8.length; e6++) if (3 !== (null == (l6 = r8[e6]) ? void 0 : l6.type)) return false;
          break;
        }
        break;
      }
      return true;
    }(i6, l5, u4, 0, s6) ? u4 : void 0;
  }(e3, r6, n5, o3);
  if (!n5.to || s5) return s5 ?? {};
}
function removeBasepath(e3, r6, n5 = false) {
  const o3 = n5 ? e3 : e3.toLowerCase(), s5 = n5 ? r6 : r6.toLowerCase();
  switch (true) {
    case "/" === o3:
      return r6;
    case s5 === o3:
      return "";
    case r6.length < e3.length:
    case "/" !== s5[o3.length]:
      return r6;
    case s5.startsWith(o3):
      return r6.slice(e3.length);
    default:
      return r6;
  }
}
function isNotFound(e3) {
  return !!(null == e3 ? void 0 : e3.isNotFound);
}
function isRedirect(e3) {
  return e3 instanceof Response && !!e3.options;
}
function handleParam(e3, r6) {
  return e3.prefixSegment && e3.suffixSegment ? r6 + 0.05 : e3.prefixSegment ? r6 + 0.02 : e3.suffixSegment ? r6 + 0.01 : r6;
}
function createServerFn(e3, r6) {
  const n5 = r6 || e3 || {};
  return void 0 === n5.method && (n5.method = "GET"), { options: n5, middleware: /* @__PURE__ */ __name((e4) => createServerFn(void 0, Object.assign(n5, { middleware: e4 })), "middleware"), validator: /* @__PURE__ */ __name((e4) => createServerFn(void 0, Object.assign(n5, { validator: e4 })), "validator"), type: /* @__PURE__ */ __name((e4) => createServerFn(void 0, Object.assign(n5, { type: e4 })), "type"), handler: /* @__PURE__ */ __name((...e4) => {
    const [r7, o3] = e4;
    Object.assign(n5, { ...r7, extractedFn: r7, serverFn: o3 });
    const s5 = [...n5.middleware || [], serverFnBaseToMiddleware(n5)];
    return Object.assign(async (e5) => executeMiddleware$1(s5, "client", { ...r7, ...n5, data: null == e5 ? void 0 : e5.data, headers: null == e5 ? void 0 : e5.headers, signal: null == e5 ? void 0 : e5.signal, context: {}, router: getRouterInstance() }).then((e6) => {
      if ("full" === n5.response) return e6;
      if (e6.error) throw e6.error;
      return e6.result;
    }), { ...r7, __executeServer: /* @__PURE__ */ __name(async (e5, o4) => {
      const a5 = e5 instanceof FormData ? function(e6) {
        const r8 = e6.get("__TSR_CONTEXT");
        if (e6.delete("__TSR_CONTEXT"), "string" != typeof r8) return { context: {}, data: e6 };
        try {
          return { context: Wa.parse(r8), data: e6 };
        } catch {
          return { data: e6 };
        }
      }(e5) : e5;
      a5.type = "function" == typeof n5.type ? n5.type(a5) : n5.type;
      const i6 = { ...r7, ...a5, signal: o4 }, run = /* @__PURE__ */ __name(() => executeMiddleware$1(s5, "server", i6).then((e6) => ({ result: e6.result, error: e6.error, context: e6.sendContext })), "run");
      if ("static" === i6.type) {
        let e6;
        if ((null == Ka ? void 0 : Ka.getItem) && (e6 = await Ka.getItem(i6)), e6 || (e6 = await run().then((e7) => ({ ctx: e7, error: null })).catch((e7) => ({ ctx: void 0, error: e7 })), (null == Ka ? void 0 : Ka.setItem) && await Ka.setItem(i6, e6)), invariant(e6), e6.error) throw e6.error;
        return e6.ctx;
      }
      return run();
    }, "__executeServer") });
  }, "handler") };
}
async function executeMiddleware$1(e3, r6, n5) {
  const o3 = flattenMiddlewares([...Ua, ...e3]), next = /* @__PURE__ */ __name(async (e4) => {
    const n6 = o3.shift();
    if (!n6) return e4;
    n6.options.validator && ("client" !== r6 || n6.options.validateClient) && (e4.data = await function(e5, r7) {
      if (null == e5) return {};
      if ("~standard" in e5) {
        const n7 = e5["~standard"].validate(r7);
        if (n7 instanceof Promise) throw new Error("Async validation not supported");
        if (n7.issues) throw new Error(JSON.stringify(n7.issues, void 0, 2));
        return n7.value;
      }
      if ("parse" in e5) return e5.parse(r7);
      if ("function" == typeof e5) return e5(r7);
      throw new Error("Invalid validator type!");
    }(n6.options.validator, e4.data));
    const s5 = "client" === r6 ? n6.options.client : n6.options.server;
    return s5 ? applyMiddleware(s5, e4, async (e5) => next(e5).catch((r7) => {
      if (isRedirect(r7) || isNotFound(r7)) return { ...e5, error: r7 };
      throw r7;
    })) : next(e4);
  }, "next");
  return next({ ...n5, headers: n5.headers || {}, sendContext: n5.sendContext || {}, context: n5.context || {} });
}
function flattenMiddlewares(e3) {
  const r6 = /* @__PURE__ */ new Set(), n5 = [], recurse = /* @__PURE__ */ __name((e4) => {
    e4.forEach((e5) => {
      e5.options.middleware && recurse(e5.options.middleware), r6.has(e5) || (r6.add(e5), n5.push(e5));
    });
  }, "recurse");
  return recurse(e3), n5;
}
function serverFnBaseToMiddleware(e3) {
  return { _types: void 0, options: { validator: e3.validator, validateClient: e3.validateClient, client: /* @__PURE__ */ __name(async ({ next: r6, sendContext: n5, ...o3 }) => {
    var s5;
    const a5 = { ...o3, context: n5, type: "function" == typeof o3.type ? o3.type(o3) : o3.type };
    if ("static" === o3.type && "undefined" != typeof document) {
      invariant(Ka);
      const e4 = await Ka.fetchItem(a5);
      if (e4) {
        if (e4.error) throw e4.error;
        return r6(e4.ctx);
      }
      a5.functionId, JSON.stringify(a5.data);
    }
    return r6(await (null == (s5 = e3.extractedFn) ? void 0 : s5.call(e3, a5)));
  }, "client"), server: /* @__PURE__ */ __name(async ({ next: r6, ...n5 }) => {
    var o3;
    const s5 = await (null == (o3 = e3.serverFn) ? void 0 : o3.call(e3, n5));
    return r6({ ...n5, result: s5 });
  }, "server") } };
}
function createMiddleware(e3, r6) {
  const n5 = { type: "function", ...r6 || e3 };
  return { options: n5, middleware: /* @__PURE__ */ __name((e4) => createMiddleware({}, Object.assign(n5, { middleware: e4 })), "middleware"), validator: /* @__PURE__ */ __name((e4) => createMiddleware({}, Object.assign(n5, { validator: e4 })), "validator"), client: /* @__PURE__ */ __name((e4) => createMiddleware({}, Object.assign(n5, { client: e4 })), "client"), server: /* @__PURE__ */ __name((e4) => createMiddleware({}, Object.assign(n5, { server: e4 })), "server") };
}
function Nr(e3) {
  switch (e3) {
    case '"':
      return '\\"';
    case "\\":
      return "\\\\";
    case "\n":
      return "\\n";
    case "\r":
      return "\\r";
    case "\b":
      return "\\b";
    case "	":
      return "\\t";
    case "\f":
      return "\\f";
    case "<":
      return "\\x3C";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return;
  }
}
function d2(e3) {
  let r6, n5 = "", o3 = 0;
  for (let s5 = 0, a5 = e3.length; s5 < a5; s5++) r6 = Nr(e3[s5]), r6 && (n5 += e3.slice(o3, s5) + r6, o3 = s5 + 1);
  return 0 === o3 ? n5 = e3 : n5 += e3.slice(o3), n5;
}
function f2(e3, r6) {
  if (!e3) throw r6;
}
function je(e3) {
  return Za.has(e3);
}
function Hr(e3) {
  return e3;
}
function Ye(e3, r6) {
  for (let n5 = 0, o3 = r6.length; n5 < o3; n5++) {
    let o4 = r6[n5];
    e3.has(o4) || (e3.add(o4), o4.extends && Ye(e3, o4.extends));
  }
}
function m3(e3) {
  if (e3) {
    let r6 = /* @__PURE__ */ new Set();
    return Ye(r6, e3), [...r6];
  }
}
function u$1(e3, r6, n5, o3, s5, a5, i6, l5, u4, c4, h4, p4) {
  return { t: e3, i: r6, s: n5, l: o3, c: s5, m: a5, p: i6, e: l5, a: u4, f: c4, b: h4, o: p4 };
}
function x(e3) {
  return u$1(2, si, e3, si, si, si, si, si, si, si, si, si);
}
function me(e3) {
  return e3 instanceof EvalError ? 1 : e3 instanceof RangeError ? 2 : e3 instanceof ReferenceError ? 3 : e3 instanceof SyntaxError ? 4 : e3 instanceof TypeError ? 5 : e3 instanceof URIError ? 6 : 0;
}
function j(e3, r6) {
  let n5 = function(e4) {
    let r7 = oi[me(e4)];
    return e4.name !== r7 ? { name: e4.name } : e4.constructor.name !== r7 ? { name: e4.constructor.name } : {};
  }(e3), o3 = Object.getOwnPropertyNames(e3);
  for (let s5, a5 = 0, i6 = o3.length; a5 < i6; a5++) s5 = o3[a5], "name" !== s5 && "message" !== s5 && ("stack" === s5 ? 4 & r6 && (n5 = n5 || {}, n5[s5] = e3[s5]) : (n5 = n5 || {}, n5[s5] = e3[s5]));
  return n5;
}
function fe(e3) {
  return Object.isFrozen(e3) ? 3 : Object.isSealed(e3) ? 2 : Object.isExtensible(e3) ? 0 : 1;
}
function w$1(e3) {
  return u$1(1, si, d2(e3), si, si, si, si, si, si, si, si, si);
}
function nr(e3, r6) {
  return u$1(18, e3, d2(function(e4) {
    return f2(je(e4), new ki(e4)), Za.get(e4);
  }(r6)), si, si, si, si, si, si, si, si, si);
}
function _(e3, r6, n5) {
  return u$1(25, e3, n5, si, d2(r6), si, si, si, si, si, si, si);
}
function M(e3, r6) {
  return u$1(28, si, si, si, si, si, si, si, [e3, r6], si, si, si);
}
function U2(e3, r6) {
  return u$1(30, si, si, si, si, si, si, si, [e3, r6], si, si, si);
}
function L2(e3, r6, n5) {
  return u$1(31, e3, si, si, si, si, si, si, n5, r6, si, si);
}
function z(e3, r6, n5) {
  return 2 & e3 ? (1 === r6.length ? r6[0] : "(" + r6.join(",") + ")") + "=>" + (n5.startsWith("{") ? "(" + n5 + ")" : n5) : "function(" + r6.join(",") + "){return " + n5 + "}";
}
function S2(e3, r6, n5) {
  return 2 & e3 ? (1 === r6.length ? r6[0] : "(" + r6.join(",") + ")") + "=>{" + n5 + "}" : "function(" + r6.join(",") + "){" + n5 + "}";
}
function cr(e3, r6) {
  switch (r6) {
    case 0:
      return "[]";
    case 1:
      return function(e4) {
        return z(e4, ["r"], "(r.p=new Promise(" + S2(e4, ["s", "f"], "r.s=s,r.f=f") + "))");
      }(e3);
    case 2:
      return function(e4) {
        return S2(e4, ["r", "d"], "r.s(d),r.p.s=1,r.p.v=d");
      }(e3);
    case 3:
      return function(e4) {
        return S2(e4, ["r", "d"], "r.f(d),r.p.s=2,r.p.v=d");
      }(e3);
    case 4:
      return function(e4) {
        return z(e4, ["b", "a", "s", "l", "p", "f", "e", "n"], "(b=[],a=!0,s=!1,l=[],p=0,f=" + S2(e4, ["v", "m", "x"], "for(x=0;x<p;x++)l[x]&&l[x][m](v)") + ",n=" + S2(e4, ["o", "x", "z", "c"], 'for(x=0,z=b.length;x<z;x++)(c=b[x],(!a&&x===z-1)?o[s?"return":"throw"](c):o.next(c))') + ",e=" + z(e4, ["o", "t"], "(a&&(l[t=p++]=o),n(o)," + S2(e4, [], "a&&(l[t]=void 0)") + ")") + ",{__SEROVAL_STREAM__:!0,on:" + z(e4, ["o"], "e(o)") + ",next:" + S2(e4, ["v"], 'a&&(b.push(v),f(v,"next"))') + ",throw:" + S2(e4, ["v"], 'a&&(b.push(v),f(v,"throw"),a=s=!1,l.length=0)') + ",return:" + S2(e4, ["v"], 'a&&(b.push(v),f(v,"return"),a=!1,s=!0,l.length=0)') + "})");
      }(e3);
    default:
      return "";
  }
}
function K2() {
  let e3 = /* @__PURE__ */ new Set(), r6 = [], n5 = true, o3 = true;
  return { __SEROVAL_STREAM__: true, on(s5) {
    n5 && e3.add(s5);
    for (let e4 = 0, a5 = r6.length; e4 < a5; e4++) {
      let i6 = r6[e4];
      e4 !== a5 - 1 || n5 ? s5.next(i6) : o3 ? s5.return(i6) : s5.throw(i6);
    }
    return () => {
      n5 && e3.delete(s5);
    };
  }, next(o4) {
    n5 && (r6.push(o4), function(r7) {
      for (let n6 of e3.keys()) n6.next(r7);
    }(o4));
  }, throw(s5) {
    n5 && (r6.push(s5), function(r7) {
      for (let n6 of e3.keys()) n6.throw(r7);
    }(s5), n5 = false, o3 = false, e3.clear());
  }, return(s5) {
    n5 && (r6.push(s5), function(r7) {
      for (let n6 of e3.keys()) n6.return(r7);
    }(s5), n5 = false, o3 = true, e3.clear());
  } };
}
function J(e3) {
  let r6 = [], n5 = -1, o3 = -1, s5 = e3[Symbol.iterator]();
  for (; ; ) try {
    let e4 = s5.next();
    if (r6.push(e4.value), e4.done) {
      o3 = r6.length - 1;
      break;
    }
  } catch (e4) {
    n5 = r6.length, r6.push(e4);
  }
  return { v: r6, t: n5, d: o3 };
}
function Le(e3) {
  let r6 = e3[0];
  return ("$" === r6 || "_" === r6 || r6 >= "A" && r6 <= "Z" || r6 >= "a" && r6 <= "z") && $i.test(e3);
}
function se(e3) {
  switch (e3.t) {
    case 0:
      return e3.s + "=" + e3.v;
    case 2:
      return e3.s + ".set(" + e3.k + "," + e3.v + ")";
    case 1:
      return e3.s + ".add(" + e3.v + ")";
    case 3:
      return e3.s + ".delete(" + e3.k + ")";
  }
}
function fr(e3) {
  if (e3.length) {
    let r6 = "", n5 = function(e4) {
      let r7 = [], n6 = e4[0];
      for (let o3, s5 = 1, a5 = e4.length, i6 = n6; s5 < a5; s5++) o3 = e4[s5], 0 === o3.t && o3.v === i6.v ? n6 = { t: 0, s: o3.s, k: si, v: se(n6) } : 2 === o3.t && o3.s === i6.s ? n6 = { t: 2, s: se(n6), k: o3.k, v: o3.v } : 1 === o3.t && o3.s === i6.s ? n6 = { t: 1, s: se(n6), k: si, v: o3.v } : 3 === o3.t && o3.s === i6.s ? n6 = { t: 3, s: se(n6), k: o3.k, v: si } : (r7.push(n6), n6 = o3), i6 = o3;
      return r7.push(n6), r7;
    }(e3);
    for (let e4 = 0, o3 = n5.length; e4 < o3; e4++) r6 += se(n5[e4]) + ",";
    return r6;
  }
  return si;
}
function w2(e3) {
  let r6 = K2(), n5 = e3.getReader();
  return (/* @__PURE__ */ __name(async function t4() {
    try {
      let e4 = await n5.read();
      e4.done ? r6.return(e4.value) : (r6.next(e4.value), await t4());
    } catch (e4) {
      r6.throw(e4);
    }
  }, "t"))().catch(() => {
  }), r6;
}
function dehydrateMatch(e3) {
  const r6 = { i: e3.id, u: e3.updatedAt, s: e3.status }, n5 = [["__beforeLoadContext", "b"], ["loaderData", "l"], ["error", "e"], ["ssr", "ssr"]];
  for (const [o3, s5] of n5) void 0 !== e3[o3] && (r6[s5] = e3[o3]);
  return r6;
}
function attachRouterServerSsrUtils(e3, r6) {
  e3.ssr = { manifest: r6 };
  const n5 = /* @__PURE__ */ new Map();
  let o3 = false;
  const getInitialScript = /* @__PURE__ */ __name(() => {
    return o3 ? "" : (o3 = true, (null == (e4 = "tsr") ? `${Ya}=${Ya}||[]` : `(${Ya}=${Ya}||{})["${d2(e4)}"]=[]`) + ';self.$_TSR={c:()=>{document.querySelectorAll(".\\\\$tsr").forEach(e=>{e.remove()})}};\n;');
    var e4;
  }, "getInitialScript");
  let s5 = false;
  const a5 = [];
  e3.serverSsr = { injectedHtml: [], injectHtml: /* @__PURE__ */ __name((r7) => {
    const n6 = Promise.resolve().then(r7);
    return e3.serverSsr.injectedHtml.push(n6), e3.emit({ type: "onInjectedHtml", promise: n6 }), n6.then(() => {
    });
  }, "injectHtml"), injectScript: /* @__PURE__ */ __name((r7) => e3.serverSsr.injectHtml(async () => {
    const e4 = await r7();
    return `<script class='$tsr'>${getInitialScript()}${e4};if (typeof $_TSR !== 'undefined') $_TSR.c()<\/script>`;
  }), "injectScript"), dehydrate: /* @__PURE__ */ __name(async () => {
    var r7, o4, a6;
    invariant(!s5);
    let i6 = e3.state.matches;
    e3.isShell() && (i6 = i6.slice(0, 1));
    const l5 = i6.map(dehydrateMatch), u4 = { manifest: e3.ssr.manifest, matches: l5 }, c4 = null == (r7 = i6[i6.length - 1]) ? void 0 : r7.id;
    c4 && (u4.lastMatchId = c4), u4.dehydratedData = await (null == (a6 = (o4 = e3.options).dehydrate) ? void 0 : a6.call(o4)), s5 = true;
    const h4 = function() {
      let e4, r8;
      const n6 = new Promise((n7, o5) => {
        e4 = n7, r8 = o5;
      });
      return n6.status = "pending", n6.resolve = (r9) => {
        n6.status = "resolved", n6.value = r9, e4(r9);
      }, n6.reject = (e5) => {
        n6.status = "rejected", r8(e5);
      }, n6;
    }();
    !function(e4, r8) {
      let n6 = m3(r8.plugins), o5 = new Ai({ plugins: n6, refs: r8.refs, disabledFeatures: r8.disabledFeatures, onParse(e5, s6) {
        let a7, i7 = new Ei({ plugins: n6, features: o5.features, scopeId: r8.scopeId, markedRefs: o5.marked });
        try {
          a7 = i7.serializeTop(e5);
        } catch (e6) {
          return void (r8.onError && r8.onError(e6));
        }
        r8.onSerialize(a7, s6);
      }, onError: r8.onError, onDone: r8.onDone });
      o5.start(e4), o5.destroy.bind(o5);
    }(u4, { refs: n5, plugins: [Li, ji], onSerialize: /* @__PURE__ */ __name((r8, n6) => {
      const o5 = n6 ? '$_TSR["router"]=' + r8 : r8;
      e3.serverSsr.injectScript(() => o5);
    }, "onSerialize"), scopeId: "tsr", onDone: /* @__PURE__ */ __name(() => h4.resolve(""), "onDone"), onError: /* @__PURE__ */ __name((e4) => h4.reject(e4), "onError") }), e3.serverSsr.injectHtml(() => h4);
  }, "dehydrate"), isDehydrated: /* @__PURE__ */ __name(() => s5, "isDehydrated"), onRenderFinished: /* @__PURE__ */ __name((e4) => a5.push(e4), "onRenderFinished"), setRenderFinished: /* @__PURE__ */ __name(() => {
    a5.forEach((e4) => e4());
  }, "setRenderFinished") };
}
function hasProp(e3, r6) {
  try {
    return r6 in e3;
  } catch {
    return false;
  }
}
function assertMethod(e3, r6, n5) {
  if (!function(e4, r7) {
    if ("string" == typeof r7) {
      if (e4.method === r7) return true;
    } else if (r7.includes(e4.method)) return true;
    return false;
  }(e3, r6)) throw function(e4) {
    if ("string" == typeof e4) return new H3Error(e4);
    if (function(e5) {
      var r8;
      return true === (null == (r8 = null == e5 ? void 0 : e5.constructor) ? void 0 : r8.__h3_error__);
    }(e4)) return e4;
    const r7 = new H3Error(e4.message ?? e4.statusMessage ?? "", { cause: e4.cause || e4 });
    if (hasProp(e4, "stack")) try {
      Object.defineProperty(r7, "stack", { get: /* @__PURE__ */ __name(() => e4.stack, "get") });
    } catch {
      try {
        r7.stack = e4.stack;
      } catch {
      }
    }
    if (e4.data && (r7.data = e4.data), e4.statusCode ? r7.statusCode = sanitizeStatusCode(e4.statusCode, r7.statusCode) : e4.status && (r7.statusCode = sanitizeStatusCode(e4.status, r7.statusCode)), e4.statusMessage ? r7.statusMessage = e4.statusMessage : e4.statusText && (r7.statusMessage = e4.statusText), r7.statusMessage) {
      const e5 = r7.statusMessage;
      sanitizeStatusMessage(r7.statusMessage) !== e5 && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.");
    }
    return void 0 !== e4.fatal && (r7.fatal = e4.fatal), void 0 !== e4.unhandled && (r7.unhandled = e4.unhandled), r7;
  }({ statusCode: 405, statusMessage: "HTTP method is not allowed." });
}
function toWebRequest(e3) {
  var r6;
  return (null == (r6 = e3.web) ? void 0 : r6.request) || new Request(function(e4, r7 = {}) {
    const n5 = function(e5, r8 = {}) {
      if (r8.xForwardedHost) {
        const r9 = e5.node.req.headers["x-forwarded-host"];
        if (r9) return r9;
      }
      return e5.node.req.headers.host || "localhost";
    }(e4, r7), o3 = function(e5, r8 = {}) {
      var n6;
      return false !== r8.xForwardedProto && "https" === e5.node.req.headers["x-forwarded-proto"] || (null == (n6 = e5.node.req.connection) ? void 0 : n6.encrypted) ? "https" : "http";
    }(e4, r7), s5 = (e4.node.req.originalUrl || e4.path).replace(/^[/\\]+/g, "/");
    return new URL(s5, `${o3}://${n5}`);
  }(e3), { duplex: "half", method: e3.method, headers: e3.headers, body: getRequestWebStream(e3) });
}
function getRequestWebStream(e3) {
  var r6, o3;
  if (!zi.includes(e3.method)) return;
  const s5 = (null == (o3 = null == (r6 = e3.web) ? void 0 : r6.request) ? void 0 : o3.body) || e3._requestBody;
  if (s5) return s5;
  return Ni in e3.node.req || "rawBody" in e3.node.req || "body" in e3.node.req || "__unenv__" in e3.node.req ? new ReadableStream({ async start(r7) {
    const o4 = await function(e4, r8 = "utf8") {
      var o5, s6;
      assertMethod(e4, zi);
      const a5 = e4._requestBody || (null == (s6 = null == (o5 = e4.web) ? void 0 : o5.request) ? void 0 : s6.body) || e4.node.req[Ni] || e4.node.req.rawBody || e4.node.req.body;
      if (a5) {
        const e5 = Promise.resolve(a5).then((e6) => n4.isBuffer(e6) ? e6 : "function" == typeof e6.pipeTo ? new Promise((r9, o6) => {
          const s7 = [];
          e6.pipeTo(new WritableStream({ write(e7) {
            s7.push(e7);
          }, close() {
            r9(n4.concat(s7));
          }, abort(e7) {
            o6(e7);
          } })).catch(o6);
        }) : "function" == typeof e6.pipe ? new Promise((r9, o6) => {
          const s7 = [];
          e6.on("data", (e7) => {
            s7.push(e7);
          }).on("end", () => {
            r9(n4.concat(s7));
          }).on("error", o6);
        }) : e6.constructor === Object ? n4.from(JSON.stringify(e6)) : e6 instanceof URLSearchParams ? n4.from(e6.toString()) : n4.from(e6));
        return r8 ? e5.then((e6) => e6.toString(r8)) : e5;
      }
      if (!Number.parseInt(e4.node.req.headers["content-length"] || "") && !String(e4.node.req.headers["transfer-encoding"] ?? "").split(",").map((e5) => e5.trim()).filter(Boolean).includes("chunked")) return Promise.resolve(void 0);
      const i6 = e4.node.req[Ni] = new Promise((r9, o6) => {
        const s7 = [];
        e4.node.req.on("error", (e5) => {
          o6(e5);
        }).on("data", (e5) => {
          s7.push(e5);
        }).on("end", () => {
          r9(n4.concat(s7));
        });
      });
      return r8 ? i6.then((e5) => e5.toString(r8)) : i6;
    }(e3, false);
    o4 && r7.enqueue(o4), r7.close();
  } }) : new ReadableStream({ start: /* @__PURE__ */ __name((r7) => {
    e3.node.req.on("data", (e4) => {
      r7.enqueue(e4);
    }), e3.node.req.on("end", () => {
      r7.close();
    }), e3.node.req.on("error", (e4) => {
      r7.error(e4);
    });
  }, "start") });
}
function sanitizeStatusMessage(e3 = "") {
  return e3.replace(Di, "");
}
function sanitizeStatusCode(e3, r6 = 200) {
  return e3 ? ("string" == typeof e3 && (e3 = Number.parseInt(e3, 10)), e3 < 100 || e3 > 999 ? r6 : e3) : r6;
}
function splitCookiesString(e3) {
  if (Array.isArray(e3)) return e3.flatMap((e4) => splitCookiesString(e4));
  if ("string" != typeof e3) return [];
  const r6 = [];
  let n5, o3, s5, a5, i6, l5 = 0;
  const skipWhitespace = /* @__PURE__ */ __name(() => {
    for (; l5 < e3.length && /\s/.test(e3.charAt(l5)); ) l5 += 1;
    return l5 < e3.length;
  }, "skipWhitespace"), notSpecialChar = /* @__PURE__ */ __name(() => (o3 = e3.charAt(l5), "=" !== o3 && ";" !== o3 && "," !== o3), "notSpecialChar");
  for (; l5 < e3.length; ) {
    for (n5 = l5, i6 = false; skipWhitespace(); ) if (o3 = e3.charAt(l5), "," === o3) {
      for (s5 = l5, l5 += 1, skipWhitespace(), a5 = l5; l5 < e3.length && notSpecialChar(); ) l5 += 1;
      l5 < e3.length && "=" === e3.charAt(l5) ? (i6 = true, l5 = a5, r6.push(e3.slice(n5, s5)), n5 = l5) : l5 = s5 + 1;
    } else l5 += 1;
    (!i6 || l5 >= e3.length) && r6.push(e3.slice(n5));
  }
  return r6;
}
function sendWebResponse(e3, r6) {
  for (const [n5, o3] of r6.headers) "set-cookie" === n5 ? e3.node.res.appendHeader(n5, splitCookiesString(o3)) : e3.node.res.setHeader(n5, o3);
  if (r6.status && (e3.node.res.statusCode = sanitizeStatusCode(r6.status, e3.node.res.statusCode)), r6.statusText && (e3.node.res.statusMessage = sanitizeStatusMessage(r6.statusText)), r6.redirected && e3.node.res.setHeader("location", r6.url), r6.body) return function(e4, r7) {
    if (!r7 || "object" != typeof r7) throw new Error("[h3] Invalid stream provided.");
    if (e4.node.res._data = r7, !e4.node.res.socket) return e4._handled = true, Promise.resolve();
    if (hasProp(r7, "pipeTo") && "function" == typeof r7.pipeTo) return r7.pipeTo(new WritableStream({ write(r8) {
      e4.node.res.write(r8);
    } })).then(() => {
      e4.node.res.end();
    });
    if (hasProp(r7, "pipe") && "function" == typeof r7.pipe) return new Promise((n5, o3) => {
      r7.pipe(e4.node.res), r7.on && (r7.on("end", () => {
        e4.node.res.end(), n5();
      }), r7.on("error", (e5) => {
        o3(e5);
      })), e4.node.res.on("close", () => {
        r7.abort && r7.abort();
      });
    });
    throw new Error("[h3] Invalid or incompatible stream provided.");
  }(e3, r6.body);
  e3.node.res.end();
}
function _normalizeArray(e3) {
  return e3 ? Array.isArray(e3) ? e3 : [e3] : void 0;
}
function getEvent() {
  const e3 = Wi.getStore();
  if (!e3) throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");
  return e3;
}
function createWrapperFunction(e3) {
  return function(...r6) {
    const n5 = r6[0];
    var o3;
    return "object" == typeof (o3 = n5) && (o3 instanceof H3Event || (null == o3 ? void 0 : o3[Vi]) instanceof H3Event || true === (null == o3 ? void 0 : o3.__is_event__)) ? r6[0] = n5 instanceof H3Event || n5.__is_event__ ? n5 : n5[Vi] : r6.unshift(getEvent()), e3(...r6);
  };
}
async function loadVirtualModule(e3) {
  switch (e3) {
    case Gi:
      return await Promise.resolve().then(() => su);
    case Ji:
      return await Promise.resolve().then(() => (init_tanstack_start_manifest_v_C251yWo9(), tanstack_start_manifest_v_C251yWo9_exports));
    case Xi:
      return await Promise.resolve().then(() => (init_tanstack_start_server_fn_manifest_v_B5uJQjVj(), tanstack_start_server_fn_manifest_v_B5uJQjVj_exports));
    default:
      throw new Error(`Unknown virtual module: ${e3}`);
  }
}
function isNotFoundResponse(e3) {
  const { headers: r6, ...n5 } = e3;
  return new Response(JSON.stringify(n5), { status: 200, headers: { "Content-Type": "application/json", ...r6 || {} } });
}
function handlerToMiddleware(e3) {
  return async ({ next: r6, ...n5 }) => {
    const o3 = await e3(n5);
    return o3 ? { response: o3 } : r6(n5);
  };
}
function handleCtxResult(e3) {
  return isSpecialResponse(e3) ? { response: e3 } : e3;
}
function isSpecialResponse(e3) {
  return e3 instanceof Response || isRedirect(e3);
}
function createServerFileRoute(e3) {
  return createServerRoute();
}
function createServerRoute(e3, r6) {
  const n5 = r6 || {}, o3 = { isRoot: false, path: "", id: "", fullPath: "", to: "", options: n5, parentRoute: void 0, _types: {}, middleware: /* @__PURE__ */ __name((e4) => createServerRoute(void 0, { ...n5, middleware: e4 }), "middleware"), methods: /* @__PURE__ */ __name((e4) => {
    const n6 = "function" == typeof e4 ? e4(createMethodBuilder()) : e4;
    return createServerRoute(void 0, { ...r6, methods: n6 });
  }, "methods"), update: /* @__PURE__ */ __name((e4) => createServerRoute(void 0, { ...n5, ...e4 }), "update"), init: /* @__PURE__ */ __name((e4) => {
    var r7;
    n5.originalIndex = e4.originalIndex;
    const s5 = !n5.path && !n5.id;
    if (o3.parentRoute = null == (r7 = n5.getParentRoute) ? void 0 : r7.call(n5), s5) o3.path = Ha;
    else if (!o3.parentRoute) throw new Error("Child Route instances must pass a 'getParentRoute: () => ParentRoute' option that returns a ServerRoute instance.");
    let a5 = s5 ? Ha : n5.path;
    a5 && "/" !== a5 && (a5 = trimPathLeft(a5));
    const i6 = n5.id || a5;
    let l5 = s5 ? Ha : joinPaths([o3.parentRoute.id === Ha ? "" : o3.parentRoute.id, i6]);
    a5 === Ha && (a5 = "/"), l5 !== Ha && (l5 = joinPaths(["/", l5]));
    const u4 = l5 === Ha ? "/" : joinPaths([o3.parentRoute.fullPath, a5]);
    o3.path = a5, o3.id = l5, o3.fullPath = u4, o3.to = u4, o3.isRoot = s5;
  }, "init"), _addFileChildren: /* @__PURE__ */ __name((e4) => (Array.isArray(e4) && (o3.children = e4), "object" == typeof e4 && null !== e4 && (o3.children = Object.values(e4)), o3), "_addFileChildren"), _addFileTypes: /* @__PURE__ */ __name(() => o3, "_addFileTypes") };
  return o3;
}
function DefaultCatchBoundary({ error: e3 }) {
  const r6 = useRouter(), n5 = useMatch({ strict: false, select: /* @__PURE__ */ __name((e4) => e4.id === G, "select") });
  return console.error("DefaultCatchBoundary Error:", e3), p2.jsxs("div", { className: "min-w-0 flex-1 p-4 flex flex-col items-center justify-center gap-6", children: [p2.jsx(ErrorComponent, { error: e3 }), p2.jsxs("div", { className: "flex gap-2 items-center flex-wrap", children: [p2.jsx("button", { onClick: /* @__PURE__ */ __name(() => {
    r6.invalidate();
  }, "onClick"), className: "px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded text-white uppercase font-extrabold", children: "Try Again" }), n5 ? p2.jsx(ct, { to: "/", className: "px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded text-white uppercase font-extrabold", children: "Home" }) : p2.jsx(ct, { to: "/", className: "px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded text-white uppercase font-extrabold", onClick: /* @__PURE__ */ __name((e4) => {
    e4.preventDefault(), window.history.back();
  }, "onClick"), children: "Go Back" })] })] });
}
function NotFound({ children: e3 }) {
  return p2.jsxs("div", { className: "space-y-2 p-2", children: [p2.jsx("div", { className: "text-gray-600 dark:text-gray-400", children: e3 || p2.jsx("p", { children: "The page you are looking for does not exist." }) }), p2.jsxs("p", { className: "flex items-center gap-2 flex-wrap", children: [p2.jsx("button", { onClick: /* @__PURE__ */ __name(() => window.history.back(), "onClick"), className: "bg-emerald-500 text-white px-2 py-1 rounded uppercase font-black text-sm", children: "Go back" }), p2.jsx(ct, { to: "/", className: "bg-cyan-600 text-white px-2 py-1 rounded uppercase font-black text-sm", children: "Start Over" })] })] });
}
function sanitizeBase(e3) {
  return e3.replace(/^\/|\/$/g, "");
}
var l3, u2, c2, h2, p2, g2, y, v, b, k2, C2, P2, R2, Store, Derived, $, T2, F2, parsePathname$1, E2, I2, A2, O2, B, N2, D2, defaultGetScrollRestorationKey, H, W2, V2, q, G, RouterCore, SearchParamError, PathParamError, normalize, X2, Q, Y2, Z, BaseRoute, BaseRootRoute, ee, te, re, ne, oe, ae, ie, le, ue, ce, de, he, pe, ge, ye, ve, be, Se, ke, Ce, we, Pe, Re, xe, $e, CatchBoundaryImpl, Te, Fe, Ee, _e, Ie, shim$1, Ae, Me, Oe, Be, Ne, ze, De, He, We, Ve, qe, Ue, Ke, Ge, Je, Xe, Qe, Ze, et, tt, rt, nt, ot, st, at, it, lt, ut, composeHandlers, ct, dt, RootRoute, FileRoute, LazyRoute, ht, pt, ft, Router, useTags, Scripts, mt, gt, yt, vt, bt, St, kt, Ct, wt, Pt, Rt, xt, $t, Tt, Ft, Et, _t, It, At, Mt, Ot, Lt, jt, Bt, Nt, zt, Dt, Ht, Wt, Vt, qt, Ut, Kt, Gt, Jt, Xt, Qt, Yt, Zt, er, tr, rr, or, sr, ar2, ir, lr, ur, dr, hr, pr, mr, gr, yr, vr, br, Sr, kr, Cr, wr, Pr, Rr, xr, $r, Tr, Fr, Er, _r, Ir, Ar, Mr, Or, Lr, jr, Br, zr, Dr, Wr, Vr, qr, Ur, Kr, Gr, Jr, Xr, Qr, Yr, Zr, en, tn, rn, nn, on2, sn, an, ln, un, cn, dn, hn, pn, fn, mn, gn, yn, vn, bn, Sn, kn, Cn, wn, Pn, Rn, xn, $n, Tn, Fn, En, _n, In, An, Mn, On, Ln, jn, Bn, Nn, zn, Dn, Hn, Wn, Vn, qn, Un, Kn, Gn, Jn, Xn, Qn, Yn, Zn, eo, to, ro, no, oo, so, ao, io, lo, uo, co, ho, po, fo, mo, go, yo, vo, bo, So, ko, Co, wo, Po, Ro, xo, $o, To, Fo, Eo, _o, Io, Ao, Mo, Oo, Lo, jo, Bo, No, zo, Do, Ho, Wo, Vo, qo, Uo, Ko, Go, Jo, Xo, Qo, Yo, Zo, es, ts, rs, ns, os, ss, as, is, ls, us, cs, ds, hs, ps, fs, ms, gs, ys, vs, bs, Ss, ks, Cs, ws, Ps, Rs, xs, $s, Ts, Fs, Es, _s, Is, As, Ms, Os, Ls, js, Bs, Ns, zs, Ds, Hs, Ws, Vs, qs, Us, Ks, Gs, Js, Xs, Qs, Ys, Zs, ea, ta, ra, na, oa, sa, aa, ia, la, ua, ca, da, ha, pa, fa, ma, ga, ya, va, ba, Sa, ka, Ca, wa, Pa, Ra, xa, $a, Ta, Fa, Ea, _a, Ia, Aa, Ma, Oa, renderRouterToStream, defaultStreamHandler, La, parsePathname, ja, Ba, Na, za, Da, Ha, Wa, createSerializer, Va, qa, Ua, getRouterInstance, Ka, applyMiddleware, Ga, Ja, Xa, Qa, Ya, Za, ei, ti, ri, ni, oi, si, ai, ii, li, ui, ci, di, hi, pi, fi, mi, gi, yi, vi, bi, Si, ki, Ci, wi, Pi, Ri, xi, $i, Ti, Fi, Ei, _i, Ii, Ai, Mi, Oi, Li, ji, Bi, __publicField$2, H3Error, Ni, zi, Di, Hi, __publicField, H3Event, Wi, Vi, qi, Ui, Ki, Gi, Ji, Xi, Qi, Yi, createMethodBuilder, TanStackRouterDevtools, seo, Zi, el, tl, createServerRpc, rl, nl, ol, sl, al, il, ll, ul, cl, dl, hl, pl, fl, ml, gl, yl, vl, bl, Sl, kl, Cl, wl, Pl, Rl, xl, $l, Tl, Fl, El, _l, Il, Al, Ml, Ol, Ll, jl, Bl, Nl, zl, Dl, Hl, Wl, Vl, ql, Ul, Kl, Gl, Jl, Xl, Ql, Yl, Zl, eu, tu, ru, nu, ou, su, au, iu, lu, uu;
var init_ssr = __esm({
  ".output/server/chunks/_/ssr.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_nitro();
    init_async_hooks();
    __name(getDefaultExportFromCjs, "getDefaultExportFromCjs");
    l3 = { exports: {} };
    u2 = {};
    c2 = Symbol.for("react.transitional.element");
    h2 = Symbol.for("react.fragment");
    __name(jsxProd, "jsxProd");
    u2.Fragment = h2, u2.jsx = jsxProd, u2.jsxs = jsxProd, l3.exports = u2;
    p2 = l3.exports;
    __name(invariant$1, "invariant$1");
    g2 = getDefaultExportFromCjs(function(e3, r6) {
    });
    y = /* @__PURE__ */ new WeakMap();
    v = /* @__PURE__ */ new WeakMap();
    b = { current: [] };
    k2 = false;
    C2 = 0;
    P2 = /* @__PURE__ */ new Set();
    R2 = /* @__PURE__ */ new Map();
    __name(__flush_internals, "__flush_internals");
    __name(__notifyListeners, "__notifyListeners");
    __name(__notifyDerivedListeners, "__notifyDerivedListeners");
    __name(__flush, "__flush");
    __name(batch, "batch");
    Store = class {
      static {
        __name(this, "Store");
      }
      constructor(e3, r6) {
        this.listeners = /* @__PURE__ */ new Set(), this.subscribe = (e4) => {
          var r7, n5;
          this.listeners.add(e4);
          const o3 = null == (n5 = null == (r7 = this.options) ? void 0 : r7.onSubscribe) ? void 0 : n5.call(r7, e4, this);
          return () => {
            this.listeners.delete(e4), null == o3 || o3();
          };
        }, this.prevState = e3, this.state = e3, this.options = r6;
      }
      setState(e3) {
        var r6, n5, o3;
        this.prevState = this.state, (null == (r6 = this.options) ? void 0 : r6.updateFn) ? this.state = this.options.updateFn(this.prevState)(e3) : !/* @__PURE__ */ function(e4) {
          return "function" == typeof e4;
        }(e3) ? this.state = e3 : this.state = e3(this.prevState), null == (o3 = null == (n5 = this.options) ? void 0 : n5.onUpdate) || o3.call(n5), __flush(this);
      }
    };
    Derived = class _Derived {
      static {
        __name(this, "Derived");
      }
      constructor(e3) {
        this.listeners = /* @__PURE__ */ new Set(), this._subscriptions = [], this.lastSeenDepValues = [], this.getDepVals = () => {
          const e4 = [], r6 = [];
          for (const n5 of this.options.deps) e4.push(n5.prevState), r6.push(n5.state);
          return this.lastSeenDepValues = r6, { prevDepVals: e4, currDepVals: r6, prevVal: this.prevState ?? void 0 };
        }, this.recompute = () => {
          var e4, r6;
          this.prevState = this.state;
          const { prevDepVals: n5, currDepVals: o3, prevVal: s5 } = this.getDepVals();
          this.state = this.options.fn({ prevDepVals: n5, currDepVals: o3, prevVal: s5 }), null == (r6 = (e4 = this.options).onUpdate) || r6.call(e4);
        }, this.checkIfRecalculationNeededDeeply = () => {
          for (const e5 of this.options.deps) e5 instanceof _Derived && e5.checkIfRecalculationNeededDeeply();
          let e4 = false;
          const r6 = this.lastSeenDepValues, { currDepVals: n5 } = this.getDepVals();
          for (let o3 = 0; o3 < n5.length; o3++) if (n5[o3] !== r6[o3]) {
            e4 = true;
            break;
          }
          e4 && this.recompute();
        }, this.mount = () => (this.registerOnGraph(), this.checkIfRecalculationNeededDeeply(), () => {
          this.unregisterFromGraph();
          for (const e4 of this._subscriptions) e4();
        }), this.subscribe = (e4) => {
          var r6, n5;
          this.listeners.add(e4);
          const o3 = null == (n5 = (r6 = this.options).onSubscribe) ? void 0 : n5.call(r6, e4, this);
          return () => {
            this.listeners.delete(e4), null == o3 || o3();
          };
        }, this.options = e3, this.state = e3.fn({ prevDepVals: void 0, prevVal: void 0, currDepVals: this.getDepVals().currDepVals });
      }
      registerOnGraph(e3 = this.options.deps) {
        for (const r6 of e3) if (r6 instanceof _Derived) r6.registerOnGraph(), this.registerOnGraph(r6.options.deps);
        else if (r6 instanceof Store) {
          let e4 = y.get(r6);
          e4 || (e4 = /* @__PURE__ */ new Set(), y.set(r6, e4)), e4.add(this);
          let n5 = v.get(this);
          n5 || (n5 = /* @__PURE__ */ new Set(), v.set(this, n5)), n5.add(r6);
        }
      }
      unregisterFromGraph(e3 = this.options.deps) {
        for (const r6 of e3) if (r6 instanceof _Derived) this.unregisterFromGraph(r6.options.deps);
        else if (r6 instanceof Store) {
          const e4 = y.get(r6);
          e4 && e4.delete(this);
          const n5 = v.get(this);
          n5 && n5.delete(r6);
        }
      }
    };
    $ = "__TSR_index";
    T2 = "popstate";
    F2 = "beforeunload";
    __name(createHistory$1, "createHistory$1");
    __name(assignKeyAndIndex$1, "assignKeyAndIndex$1");
    __name(parseHref$1, "parseHref$1");
    __name(createRandomKey$1, "createRandomKey$1");
    __name(last, "last");
    __name(functionalUpdate, "functionalUpdate");
    __name(pick, "pick");
    __name(replaceEqualDeep, "replaceEqualDeep");
    __name(isSimplePlainObject, "isSimplePlainObject");
    __name(isPlainObject$1, "isPlainObject$1");
    __name(hasObjectPrototype$1, "hasObjectPrototype$1");
    __name(isPlainArray, "isPlainArray");
    __name(getObjectKeys, "getObjectKeys");
    __name(deepEqual, "deepEqual");
    __name(createControlledPromise$1, "createControlledPromise$1");
    __name(joinPaths$1, "joinPaths$1");
    __name(cleanPath$1, "cleanPath$1");
    __name(trimPathLeft$1, "trimPathLeft$1");
    __name(trimPathRight$1, "trimPathRight$1");
    __name(trimPath$1, "trimPath$1");
    __name(removeTrailingSlash, "removeTrailingSlash");
    __name(segmentToString, "segmentToString");
    parsePathname$1 = /* @__PURE__ */ __name((e3, r6) => {
      if (!e3) return [];
      const n5 = null == r6 ? void 0 : r6.get(e3);
      if (n5) return n5;
      const o3 = function(e4) {
        e4 = cleanPath$1(e4);
        const r7 = [];
        "/" === e4.slice(0, 1) && (e4 = e4.substring(1), r7.push({ type: 0, value: "/" }));
        if (!e4) return r7;
        const n6 = e4.split("/").filter(Boolean);
        r7.push(...n6.map((e5) => {
          const r8 = e5.match(B);
          if (r8) {
            return { type: 2, value: "$", prefixSegment: r8[1] || void 0, suffixSegment: r8[2] || void 0 };
          }
          const n7 = e5.match(A2);
          if (n7) {
            const e6 = n7[1];
            return { type: 3, value: n7[2], prefixSegment: e6 || void 0, suffixSegment: n7[3] || void 0 };
          }
          const o4 = e5.match(I2);
          if (o4) {
            const e6 = o4[1];
            return { type: 1, value: "" + o4[2], prefixSegment: e6 || void 0, suffixSegment: o4[3] || void 0 };
          }
          if (E2.test(e5)) {
            return { type: 1, value: "$" + e5.substring(1), prefixSegment: void 0, suffixSegment: void 0 };
          }
          return O2.test(e5) ? { type: 2, value: "$", prefixSegment: void 0, suffixSegment: void 0 } : { type: 0, value: e5.includes("%25") ? e5.split("%25").map((e6) => decodeURI(e6)).join("%25") : decodeURI(e5) };
        })), "/" === e4.slice(-1) && (e4 = e4.substring(1), r7.push({ type: 0, value: "/" }));
        return r7;
      }(e3);
      return null == r6 || r6.set(e3, o3), o3;
    }, "parsePathname$1");
    E2 = /^\$.{1,}$/;
    I2 = /^(.*?)\{(\$[a-zA-Z_$][a-zA-Z0-9_$]*)\}(.*)$/;
    A2 = /^(.*?)\{-(\$[a-zA-Z_$][a-zA-Z0-9_$]*)\}(.*)$/;
    O2 = /^\$$/;
    B = /^(.*?)\{\$\}(.*)$/;
    __name(interpolatePath, "interpolatePath");
    __name(matchPathname$1, "matchPathname$1");
    __name(removeBasepath$1, "removeBasepath$1");
    __name(notFound, "notFound");
    __name(isNotFound$1, "isNotFound$1");
    N2 = "tsr-scroll-restoration-v1_3";
    D2 = function() {
      const e3 = void 0;
      if (!e3) return;
      const r6 = e3.getItem(N2);
      let n5 = r6 ? JSON.parse(r6) : {};
      return { state: n5, set: /* @__PURE__ */ __name((r7) => (n5 = functionalUpdate(r7, n5) || n5, e3.setItem(N2, JSON.stringify(n5))), "set") };
    }();
    defaultGetScrollRestorationKey = /* @__PURE__ */ __name((e3) => e3.state.__TSR_key || e3.href, "defaultGetScrollRestorationKey");
    H = false;
    __name(restoreScroll, "restoreScroll");
    __name(setupScrollRestoration, "setupScrollRestoration");
    __name(toValue, "toValue");
    W2 = (V2 = JSON.parse, (e3) => {
      "?" === e3.substring(0, 1) && (e3 = e3.substring(1));
      const r6 = [...new URLSearchParams(e3).entries()].reduce((e4, [r7, n5]) => {
        const o3 = e4[r7];
        return e4[r7] = null == o3 ? toValue(n5) : Array.isArray(o3) ? [...o3, toValue(n5)] : [o3, toValue(n5)], e4;
      }, {});
      for (const e4 in r6) {
        const n5 = r6[e4];
        if ("string" == typeof n5) try {
          r6[e4] = V2(n5);
        } catch (e5) {
        }
      }
      return r6;
    });
    q = /* @__PURE__ */ function(e3, r6) {
      return (n5) => {
        n5 = { ...n5 }, Object.keys(n5).forEach((o4) => {
          const s5 = n5[o4];
          void 0 === s5 || void 0 === s5 ? delete n5[o4] : n5[o4] = function(n6) {
            if ("object" == typeof n6 && null !== n6) try {
              return e3(n6);
            } catch (e4) {
            }
            else if ("string" == typeof n6 && "function" == typeof r6) try {
              return r6(n6), e3(n6);
            } catch (e4) {
            }
            return n6;
          }(s5);
        });
        const o3 = function(e4) {
          const r7 = Object.entries(e4).flatMap(([e5, r8]) => Array.isArray(r8) ? r8.map((r9) => [e5, String(r9)]) : [[e5, String(r8)]]);
          return "" + new URLSearchParams(r7).toString();
        }(n5).toString();
        return o3 ? `?${o3}` : "";
      };
    }(JSON.stringify, JSON.parse);
    G = "__root__";
    __name(redirect, "redirect");
    __name(isRedirect$1, "isRedirect$1");
    __name(defaultSerializeError, "defaultSerializeError");
    __name(getLocationChangeInfo, "getLocationChangeInfo");
    RouterCore = class {
      static {
        __name(this, "RouterCore");
      }
      constructor(e3) {
        this.tempLocationKey = `${Math.round(1e7 * Math.random())}`, this.resetNextScroll = true, this.shouldViewTransition = void 0, this.isViewTransitionTypesSupported = void 0, this.subscribers = /* @__PURE__ */ new Set(), this.isScrollRestoring = false, this.isScrollRestorationSetup = false, this.startTransition = (e4) => e4(), this.update = (e4) => {
          e4.notFoundRoute && console.warn("The notFoundRoute API is deprecated and will be removed in the next major version. See https://tanstack.com/router/v1/docs/framework/react/guide/not-found-errors#migrating-from-notfoundroute for more info.");
          const r6 = this.options;
          this.options = { ...this.options, ...e4 }, this.isServer = this.options.isServer ?? "undefined" == typeof document, this.pathParamsDecodeCharMap = this.options.pathParamsAllowedCharacters ? new Map(this.options.pathParamsAllowedCharacters.map((e5) => [encodeURIComponent(e5), e5])) : void 0, (!this.basepath || e4.basepath && e4.basepath !== r6.basepath) && (void 0 === e4.basepath || "" === e4.basepath || "/" === e4.basepath ? this.basepath = "/" : this.basepath = `/${trimPath$1(e4.basepath)}`), (!this.history || this.options.history && this.options.history !== this.history) && (this.history = this.options.history ?? (this.isServer ? function(e5 = { initialEntries: ["/"] }) {
            const r7 = e5.initialEntries;
            let n5 = e5.initialIndex ? Math.min(Math.max(e5.initialIndex, 0), r7.length - 1) : r7.length - 1;
            const o3 = r7.map((e6, r8) => assignKeyAndIndex$1(r8, void 0));
            return createHistory$1({ getLocation: /* @__PURE__ */ __name(() => parseHref$1(r7[n5], o3[n5]), "getLocation"), getLength: /* @__PURE__ */ __name(() => r7.length, "getLength"), pushState: /* @__PURE__ */ __name((e6, s5) => {
              n5 < r7.length - 1 && (r7.splice(n5 + 1), o3.splice(n5 + 1)), o3.push(s5), r7.push(e6), n5 = Math.max(r7.length - 1, 0);
            }, "pushState"), replaceState: /* @__PURE__ */ __name((e6, s5) => {
              o3[n5] = s5, r7[n5] = e6;
            }, "replaceState"), back: /* @__PURE__ */ __name(() => {
              n5 = Math.max(n5 - 1, 0);
            }, "back"), forward: /* @__PURE__ */ __name(() => {
              n5 = Math.min(n5 + 1, r7.length - 1);
            }, "forward"), go: /* @__PURE__ */ __name((e6) => {
              n5 = Math.min(Math.max(n5 + e6, 0), r7.length - 1);
            }, "go"), createHref: /* @__PURE__ */ __name((e6) => e6, "createHref") });
          }({ initialEntries: [this.basepath || "/"] }) : function() {
            var e5, r7;
            const n5 = "undefined" != typeof document ? window : void 0, o3 = n5.history.pushState, s5 = n5.history.replaceState;
            let a5 = [];
            const _getBlockers = /* @__PURE__ */ __name(() => a5, "_getBlockers"), parseLocation = /* @__PURE__ */ __name(() => parseHref$1(`${n5.location.pathname}${n5.location.search}${n5.location.hash}`, n5.history.state), "parseLocation");
            if (!(null == (e5 = n5.history.state) ? void 0 : e5.__TSR_key) && !(null == (r7 = n5.history.state) ? void 0 : r7.key)) {
              const e6 = createRandomKey$1();
              n5.history.replaceState({ [$]: 0, key: e6, __TSR_key: e6 }, "");
            }
            let i6, l5, u4, c4 = parseLocation(), h4 = false, p4 = false, g3 = false, y3 = false;
            const flush = /* @__PURE__ */ __name(() => {
              l5 && (v3._ignoreSubscribers = true, (l5.isPush ? n5.history.pushState : n5.history.replaceState)(l5.state, "", l5.href), v3._ignoreSubscribers = false, l5 = void 0, u4 = void 0, i6 = void 0);
            }, "flush"), queueHistoryAction = /* @__PURE__ */ __name((e6, r8, n6) => {
              const o4 = r8;
              u4 || (i6 = c4), c4 = parseHref$1(r8, n6), l5 = { href: o4, state: n6, isPush: (null == l5 ? void 0 : l5.isPush) || "push" === e6 }, u4 || (u4 = Promise.resolve().then(() => flush()));
            }, "queueHistoryAction"), onPushPop = /* @__PURE__ */ __name((e6) => {
              c4 = parseLocation(), v3.notify({ type: e6 });
            }, "onPushPop"), onPushPopEvent = /* @__PURE__ */ __name(async () => {
              if (p4) return void (p4 = false);
              const e6 = parseLocation(), r8 = e6.state[$] - c4.state[$], o4 = -1 === r8, s6 = !(1 === r8) && !o4 || h4;
              h4 = false;
              const a6 = s6 ? "GO" : o4 ? "BACK" : "FORWARD", i7 = s6 ? { type: "GO", index: r8 } : { type: o4 ? "BACK" : "FORWARD" };
              if (g3) g3 = false;
              else {
                const r9 = _getBlockers();
                if ("undefined" != typeof document && r9.length) {
                  for (const o5 of r9) if (await o5.blockerFn({ currentLocation: c4, nextLocation: e6, action: a6 })) return p4 = true, n5.history.go(1), void v3.notify(i7);
                }
              }
              c4 = parseLocation(), v3.notify(i7);
            }, "onPushPopEvent"), onBeforeUnload = /* @__PURE__ */ __name((e6) => {
              if (y3) return void (y3 = false);
              let r8 = false;
              const n6 = _getBlockers();
              if ("undefined" != typeof document && n6.length) for (const e7 of n6) {
                const n7 = e7.enableBeforeUnload ?? true;
                if (true === n7) {
                  r8 = true;
                  break;
                }
                if ("function" == typeof n7 && true === n7()) {
                  r8 = true;
                  break;
                }
              }
              return r8 ? (e6.preventDefault(), e6.returnValue = "") : void 0;
            }, "onBeforeUnload"), v3 = createHistory$1({ getLocation: /* @__PURE__ */ __name(() => c4, "getLocation"), getLength: /* @__PURE__ */ __name(() => n5.history.length, "getLength"), pushState: /* @__PURE__ */ __name((e6, r8) => queueHistoryAction("push", e6, r8), "pushState"), replaceState: /* @__PURE__ */ __name((e6, r8) => queueHistoryAction("replace", e6, r8), "replaceState"), back: /* @__PURE__ */ __name((e6) => (e6 && (g3 = true), y3 = true, n5.history.back()), "back"), forward: /* @__PURE__ */ __name((e6) => {
              e6 && (g3 = true), y3 = true, n5.history.forward();
            }, "forward"), go: /* @__PURE__ */ __name((e6) => {
              h4 = true, n5.history.go(e6);
            }, "go"), createHref: /* @__PURE__ */ __name((e6) => e6, "createHref"), flush, destroy: /* @__PURE__ */ __name(() => {
              n5.history.pushState = o3, n5.history.replaceState = s5, n5.removeEventListener(F2, onBeforeUnload, { capture: true }), n5.removeEventListener(T2, onPushPopEvent);
            }, "destroy"), onBlocked: /* @__PURE__ */ __name(() => {
              i6 && c4 !== i6 && (c4 = i6);
            }, "onBlocked"), getBlockers: _getBlockers, setBlockers: /* @__PURE__ */ __name((e6) => a5 = e6, "setBlockers"), notifyOnIndexChange: false });
            return n5.addEventListener(F2, onBeforeUnload, { capture: true }), n5.addEventListener(T2, onPushPopEvent), n5.history.pushState = function(...e6) {
              const r8 = o3.apply(n5.history, e6);
              return v3._ignoreSubscribers || onPushPop("PUSH"), r8;
            }, n5.history.replaceState = function(...e6) {
              const r8 = s5.apply(n5.history, e6);
              return v3._ignoreSubscribers || onPushPop("REPLACE"), r8;
            }, v3;
          }()), this.latestLocation = this.parseLocation()), this.options.routeTree !== this.routeTree && (this.routeTree = this.options.routeTree, this.buildRouteTree()), this.__store || (this.__store = new Store({ loadedAt: 0, isLoading: false, isTransitioning: false, status: "idle", resolvedLocation: void 0, location: this.latestLocation, matches: [], pendingMatches: [], cachedMatches: [], statusCode: 200 }, { onUpdate: /* @__PURE__ */ __name(() => {
            this.__store.state = { ...this.state, cachedMatches: this.state.cachedMatches.filter((e5) => !["redirected"].includes(e5.status)) };
          }, "onUpdate") }), setupScrollRestoration(this));
        }, this.buildRouteTree = () => {
          const { routesById: e4, routesByPath: r6, flatRoutes: n5 } = function({ routeTree: e5, initRoute: r7 }) {
            const n6 = {}, o4 = {}, recurseRoutes = /* @__PURE__ */ __name((e6) => {
              e6.forEach((e7, s6) => {
                null == r7 || r7(e7, s6);
                if (invariant$1(!n6[e7.id], String(e7.id)), n6[e7.id] = e7, !e7.isRoot && e7.path) {
                  const r8 = trimPathRight$1(e7.fullPath);
                  o4[r8] && !e7.fullPath.endsWith("/") || (o4[r8] = e7);
                }
                const a6 = e7.children;
                (null == a6 ? void 0 : a6.length) && recurseRoutes(a6);
              });
            }, "recurseRoutes");
            recurseRoutes([e5]);
            const s5 = [], a5 = Object.values(n6);
            a5.forEach((e6, r8) => {
              var n7;
              if (e6.isRoot || !e6.path) return;
              const o5 = trimPathLeft$1(e6.fullPath);
              let a6 = parsePathname$1(o5), i7 = 0;
              for (; a6.length > i7 + 1 && "/" === (null == (n7 = a6[i7]) ? void 0 : n7.value); ) i7++;
              i7 > 0 && (a6 = a6.slice(i7));
              let l5 = 0, u4 = false;
              const c4 = a6.map((e7, r9) => {
                if ("/" === e7.value) return 0.75;
                let n8;
                if (1 === e7.type ? n8 = Q : 3 === e7.type ? (n8 = Y2, l5++) : 2 === e7.type && (n8 = Z), n8) {
                  for (let o6 = r9 + 1; o6 < a6.length; o6++) {
                    const r10 = a6[o6];
                    if (0 === r10.type && "/" !== r10.value) return u4 = true, handleParam$1(e7, n8 + 0.2);
                  }
                  return handleParam$1(e7, n8);
                }
                return 1;
              });
              s5.push({ child: e6, trimmed: o5, parsed: a6, index: r8, scores: c4, optionalParamCount: l5, hasStaticAfter: u4 });
            });
            const i6 = s5.sort((e6, r8) => {
              const n7 = Math.min(e6.scores.length, r8.scores.length);
              for (let o5 = 0; o5 < n7; o5++) if (e6.scores[o5] !== r8.scores[o5]) return r8.scores[o5] - e6.scores[o5];
              if (e6.scores.length !== r8.scores.length) {
                if (e6.optionalParamCount !== r8.optionalParamCount) {
                  if (e6.hasStaticAfter === r8.hasStaticAfter) return e6.optionalParamCount - r8.optionalParamCount;
                  if (e6.hasStaticAfter && !r8.hasStaticAfter) return -1;
                  if (!e6.hasStaticAfter && r8.hasStaticAfter) return 1;
                }
                return r8.scores.length - e6.scores.length;
              }
              for (let o5 = 0; o5 < n7; o5++) if (e6.parsed[o5].value !== r8.parsed[o5].value) return e6.parsed[o5].value > r8.parsed[o5].value ? 1 : -1;
              return e6.index - r8.index;
            }).map((e6, r8) => (e6.child.rank = r8, e6.child));
            return { routesById: n6, routesByPath: o4, flatRoutes: i6 };
          }({ routeTree: this.routeTree, initRoute: /* @__PURE__ */ __name((e5, r7) => {
            e5.init({ originalIndex: r7 });
          }, "initRoute") });
          this.routesById = e4, this.routesByPath = r6, this.flatRoutes = n5;
          const o3 = this.options.notFoundRoute;
          o3 && (o3.init({ originalIndex: 99999999999 }), this.routesById[o3.id] = o3);
        }, this.subscribe = (e4, r6) => {
          const n5 = { eventType: e4, fn: r6 };
          return this.subscribers.add(n5), () => {
            this.subscribers.delete(n5);
          };
        }, this.emit = (e4) => {
          this.subscribers.forEach((r6) => {
            r6.eventType === e4.type && r6.fn(e4);
          });
        }, this.parseLocation = (e4, r6) => {
          const parse = /* @__PURE__ */ __name(({ pathname: r7, search: n6, hash: o4, state: s6 }) => {
            const a5 = this.options.parseSearch(n6), i6 = this.options.stringifySearch(a5);
            return { pathname: r7, searchStr: i6, search: replaceEqualDeep(null == e4 ? void 0 : e4.search, a5), hash: o4.split("#").reverse()[0] ?? "", href: `${r7}${i6}${o4}`, state: replaceEqualDeep(null == e4 ? void 0 : e4.state, s6) };
          }, "parse"), n5 = parse(r6 ?? this.history.location), { __tempLocation: o3, __tempKey: s5 } = n5.state;
          if (o3 && (!s5 || s5 === this.tempLocationKey)) {
            const e5 = parse(o3);
            return e5.state.key = n5.state.key, e5.state.__TSR_key = n5.state.__TSR_key, delete e5.state.__tempLocation, { ...e5, maskedLocation: n5 };
          }
          return n5;
        }, this.resolvePathWithBase = (e4, r6) => function({ basepath: e5, base: r7, to: n5, trailingSlash: o3 = "never", caseSensitive: s5, parseCache: a5 }) {
          var i6;
          r7 = removeBasepath$1(e5, r7, s5), n5 = removeBasepath$1(e5, n5, s5);
          let l5 = parsePathname$1(r7, a5).slice();
          const u4 = parsePathname$1(n5, a5);
          l5.length > 1 && "/" === (null == (i6 = last(l5)) ? void 0 : i6.value) && l5.pop();
          for (let e6 = 0, r8 = u4.length; e6 < r8; e6++) {
            const n6 = u4[e6], o4 = n6.value;
            "/" === o4 ? e6 ? e6 === r8 - 1 && l5.push(n6) : l5 = [n6] : ".." === o4 ? l5.pop() : "." === o4 || l5.push(n6);
          }
          return l5.length > 1 && ("/" === last(l5).value ? "never" === o3 && l5.pop() : "always" === o3 && l5.push({ type: 0, value: "/" })), joinPaths$1([e5, ...l5.map(segmentToString)]);
        }({ basepath: this.basepath, base: e4, to: cleanPath$1(r6), trailingSlash: this.options.trailingSlash, caseSensitive: this.options.caseSensitive, parseCache: this.parsePathnameCache }), this.matchRoutes = (e4, r6, n5) => "string" == typeof e4 ? this.matchRoutesInternal({ pathname: e4, search: r6 }, n5) : this.matchRoutesInternal(e4, r6), this.parsePathnameCache = /* @__PURE__ */ function(e4) {
          const r6 = /* @__PURE__ */ new Map();
          let n5, o3;
          const touch = /* @__PURE__ */ __name((e5) => {
            e5.next && (e5.prev ? (e5.prev.next = e5.next, e5.next.prev = e5.prev, e5.next = void 0, o3 && (o3.next = e5, e5.prev = o3)) : (e5.next.prev = void 0, n5 = e5.next, e5.next = void 0, o3 && (e5.prev = o3, o3.next = e5)), o3 = e5);
          }, "touch");
          return { get(e5) {
            const n6 = r6.get(e5);
            if (n6) return touch(n6), n6.value;
          }, set(s5, a5) {
            if (r6.size >= e4 && n5) {
              const e5 = n5;
              r6.delete(e5.key), e5.next && (n5 = e5.next, e5.next.prev = void 0), e5 === o3 && (o3 = void 0);
            }
            const i6 = r6.get(s5);
            if (i6) i6.value = a5, touch(i6);
            else {
              const e5 = { key: s5, value: a5, prev: o3 };
              o3 && (o3.next = e5), o3 = e5, n5 || (n5 = e5), r6.set(s5, e5);
            }
          } };
        }(1e3), this.getMatchedRoutes = (e4, r6) => function({ pathname: e5, routePathname: r7, basepath: n5, caseSensitive: o3, routesByPath: s5, routesById: a5, flatRoutes: i6, parseCache: l5 }) {
          let u4 = {};
          const c4 = trimPathRight$1(e5), getMatchedParams = /* @__PURE__ */ __name((e6) => {
            var r8;
            return matchPathname$1(n5, c4, { to: e6.fullPath, caseSensitive: (null == (r8 = e6.options) ? void 0 : r8.caseSensitive) ?? o3, fuzzy: true }, l5);
          }, "getMatchedParams");
          let h4 = void 0 !== r7 ? s5[r7] : void 0;
          if (h4) u4 = getMatchedParams(h4);
          else {
            let e6;
            for (const r8 of i6) {
              const n6 = getMatchedParams(r8);
              if (n6) {
                if ("/" === r8.path || !n6["**"]) {
                  h4 = r8, u4 = n6;
                  break;
                }
                e6 || (e6 = { foundRoute: r8, routeParams: n6 });
              }
            }
            !h4 && e6 && (h4 = e6.foundRoute, u4 = e6.routeParams);
          }
          let p4 = h4 || a5[G];
          const g3 = [p4];
          for (; p4.parentRoute; ) p4 = p4.parentRoute, g3.push(p4);
          return g3.reverse(), { matchedRoutes: g3, routeParams: u4, foundRoute: h4 };
        }({ pathname: e4, routePathname: r6, basepath: this.basepath, caseSensitive: this.options.caseSensitive, routesByPath: this.routesByPath, routesById: this.routesById, flatRoutes: this.flatRoutes, parseCache: this.parsePathnameCache }), this.cancelMatch = (e4) => {
          const r6 = this.getMatch(e4);
          r6 && (r6.abortController.abort(), this.updateMatch(e4, (e5) => (clearTimeout(e5.pendingTimeout), { ...e5, pendingTimeout: void 0 })));
        }, this.cancelMatches = () => {
          var e4;
          null == (e4 = this.state.pendingMatches) || e4.forEach((e5) => {
            this.cancelMatch(e5.id);
          });
        }, this.buildLocation = (e4) => {
          const build = /* @__PURE__ */ __name((r6 = {}) => {
            var n5;
            const o3 = r6._fromLocation || this.latestLocation, s5 = last(this.matchRoutes(o3, { _buildLocation: true }));
            let a5 = s5.fullPath;
            const i6 = r6.to ? this.resolvePathWithBase(a5, `${r6.to}`) : this.resolvePathWithBase(a5, "."), l5 = !!r6.to && !comparePaths(r6.to.toString(), a5) && !comparePaths(i6, a5);
            "path" === r6.unsafeRelative ? a5 = o3.pathname : l5 && r6.from && (a5 = r6.from);
            const u4 = s5.search, c4 = { ...s5.params }, h4 = r6.to ? this.resolvePathWithBase(a5, `${r6.to}`) : this.resolvePathWithBase(a5, ".");
            let p4 = false === r6.params || null === r6.params ? {} : true === (r6.params ?? true) ? c4 : { ...c4, ...functionalUpdate(r6.params, c4) };
            const g3 = interpolatePath({ path: h4, params: p4 ?? {}, parseCache: this.parsePathnameCache }).interpolatedPath, y3 = this.matchRoutes(g3, {}, { _buildLocation: true }).map((e5) => this.looseRoutesById[e5.routeId]);
            Object.keys(p4).length > 0 && y3.map((e5) => {
              var r7;
              return (null == (r7 = e5.options.params) ? void 0 : r7.stringify) ?? e5.options.stringifyParams;
            }).filter(Boolean).forEach((e5) => {
              p4 = { ...p4, ...e5(p4) };
            });
            const v3 = interpolatePath({ path: h4, params: p4 ?? {}, leaveWildcards: false, leaveParams: e4.leaveParams, decodeCharMap: this.pathParamsDecodeCharMap, parseCache: this.parsePathnameCache }).interpolatedPath;
            let b3 = u4;
            if (e4._includeValidateSearch && (null == (n5 = this.options.search) ? void 0 : n5.strict)) {
              let e5 = {};
              y3.forEach((r7) => {
                try {
                  r7.options.validateSearch && (e5 = { ...e5, ...validateSearch(r7.options.validateSearch, { ...e5, ...b3 }) ?? {} });
                } catch {
                }
              }), b3 = e5;
            }
            b3 = function({ search: e5, dest: r7, destRoutes: n6, _includeValidateSearch: o4 }) {
              const s6 = n6.reduce((e6, r8) => {
                var n7;
                const s7 = [];
                if ("search" in r8.options) (null == (n7 = r8.options.search) ? void 0 : n7.middlewares) && s7.push(...r8.options.search.middlewares);
                else if (r8.options.preSearchFilters || r8.options.postSearchFilters) {
                  const legacyMiddleware = /* @__PURE__ */ __name(({ search: e7, next: n8 }) => {
                    let o5 = e7;
                    "preSearchFilters" in r8.options && r8.options.preSearchFilters && (o5 = r8.options.preSearchFilters.reduce((e8, r9) => r9(e8), e7));
                    const s8 = n8(o5);
                    return "postSearchFilters" in r8.options && r8.options.postSearchFilters ? r8.options.postSearchFilters.reduce((e8, r9) => r9(e8), s8) : s8;
                  }, "legacyMiddleware");
                  s7.push(legacyMiddleware);
                }
                if (o4 && r8.options.validateSearch) {
                  const validate = /* @__PURE__ */ __name(({ search: e7, next: n8 }) => {
                    const o5 = n8(e7);
                    try {
                      return { ...o5, ...validateSearch(r8.options.validateSearch, o5) ?? {} };
                    } catch {
                      return o5;
                    }
                  }, "validate");
                  s7.push(validate);
                }
                return e6.concat(s7);
              }, []) ?? [], final = /* @__PURE__ */ __name(({ search: e6 }) => r7.search ? true === r7.search ? e6 : functionalUpdate(r7.search, e6) : {}, "final");
              s6.push(final);
              const applyNext = /* @__PURE__ */ __name((e6, r8) => {
                if (e6 >= s6.length) return r8;
                return (0, s6[e6])({ search: r8, next: /* @__PURE__ */ __name((r9) => applyNext(e6 + 1, r9), "next") });
              }, "applyNext");
              return applyNext(0, e5);
            }({ search: b3, dest: r6, destRoutes: y3, _includeValidateSearch: e4._includeValidateSearch }), b3 = replaceEqualDeep(u4, b3);
            const k4 = this.options.stringifySearch(b3), C4 = true === r6.hash ? o3.hash : r6.hash ? functionalUpdate(r6.hash, o3.hash) : void 0, P4 = C4 ? `#${C4}` : "";
            let R4 = true === r6.state ? o3.state : r6.state ? functionalUpdate(r6.state, o3.state) : {};
            return R4 = replaceEqualDeep(o3.state, R4), { pathname: v3, search: b3, searchStr: k4, state: R4, hash: C4 ?? "", href: `${v3}${k4}${P4}`, unmaskOnReload: r6.unmaskOnReload };
          }, "build"), buildWithMatches = /* @__PURE__ */ __name((r6 = {}, n5) => {
            var o3;
            const s5 = build(r6);
            let a5 = n5 ? build(n5) : void 0;
            if (!a5) {
              let r7 = {};
              const i6 = null == (o3 = this.options.routeMasks) ? void 0 : o3.find((e5) => {
                const n6 = matchPathname$1(this.basepath, s5.pathname, { to: e5.from, caseSensitive: false, fuzzy: false }, this.parsePathnameCache);
                return !!n6 && (r7 = n6, true);
              });
              if (i6) {
                const { from: o4, ...s6 } = i6;
                n5 = { ...pick(e4, ["from"]), ...s6, params: r7 }, a5 = build(n5);
              }
            }
            if (a5) {
              const e5 = build(n5);
              s5.maskedLocation = e5;
            }
            return s5;
          }, "buildWithMatches");
          return e4.mask ? buildWithMatches(e4, { ...pick(e4, ["from"]), ...e4.mask }) : buildWithMatches(e4);
        }, this.commitLocation = ({ viewTransition: e4, ignoreBlocker: r6, ...n5 }) => {
          const o3 = this.latestLocation.href === n5.href, s5 = this.commitLocationPromise;
          if (this.commitLocationPromise = createControlledPromise$1(() => {
            null == s5 || s5.resolve();
          }), o3 && (() => {
            const e5 = ["key", "__TSR_key", "__TSR_index", "__hashScrollIntoViewOptions"];
            e5.forEach((e6) => {
              n5.state[e6] = this.latestLocation.state[e6];
            });
            const r7 = deepEqual(n5.state, this.latestLocation.state);
            return e5.forEach((e6) => {
              delete n5.state[e6];
            }), r7;
          })()) this.load();
          else {
            let { maskedLocation: o4, hashScrollIntoView: s6, ...a5 } = n5;
            o4 && (a5 = { ...o4, state: { ...o4.state, __tempKey: void 0, __tempLocation: { ...a5, search: a5.searchStr, state: { ...a5.state, __tempKey: void 0, __tempLocation: void 0, __TSR_key: void 0, key: void 0 } } } }, (a5.unmaskOnReload ?? this.options.unmaskOnReload) && (a5.state.__tempKey = this.tempLocationKey)), a5.state.__hashScrollIntoViewOptions = s6 ?? this.options.defaultHashScrollIntoView ?? true, this.shouldViewTransition = e4, this.history[n5.replace ? "replace" : "push"](a5.href, a5.state, { ignoreBlocker: r6 });
          }
          return this.resetNextScroll = n5.resetScroll ?? true, this.history.subscribers.size || this.load(), this.commitLocationPromise;
        }, this.buildAndCommitLocation = ({ replace: e4, resetScroll: r6, hashScrollIntoView: n5, viewTransition: o3, ignoreBlocker: s5, href: a5, ...i6 } = {}) => {
          if (a5) {
            const r7 = this.history.location.state.__TSR_index, n6 = parseHref$1(a5, { __TSR_index: e4 ? r7 : r7 + 1 });
            i6.to = n6.pathname, i6.search = this.options.parseSearch(n6.search), i6.hash = n6.hash.slice(1);
          }
          const l5 = this.buildLocation({ ...i6, _includeValidateSearch: true });
          return this.commitLocation({ ...l5, viewTransition: o3, replace: e4, resetScroll: r6, hashScrollIntoView: n5, ignoreBlocker: s5 });
        }, this.navigate = ({ to: e4, reloadDocument: r6, href: n5, ...o3 }) => {
          if (!r6 && n5) try {
            new URL(`${n5}`), r6 = true;
          } catch {
          }
          if (r6) {
            if (!n5) {
              const r7 = this.buildLocation({ to: e4, ...o3 });
              n5 = this.history.createHref(r7.href);
            }
            return o3.replace ? window.location.replace(n5) : window.location.href = n5, Promise.resolve();
          }
          return this.buildAndCommitLocation({ ...o3, href: n5, to: e4, _isNavigate: true });
        }, this.beforeLoad = () => {
          if (this.cancelMatches(), this.latestLocation = this.parseLocation(this.latestLocation), this.isServer) {
            const e5 = this.buildLocation({ to: this.latestLocation.pathname, search: true, params: true, hash: true, state: true, _includeValidateSearch: true }), normalizeUrl = /* @__PURE__ */ __name((e6) => {
              try {
                return encodeURI(decodeURI(e6));
              } catch {
                return e6;
              }
            }, "normalizeUrl");
            if (trimPath$1(normalizeUrl(this.latestLocation.href)) !== trimPath$1(normalizeUrl(e5.href))) throw redirect({ href: e5.href });
          }
          const e4 = this.matchRoutes(this.latestLocation);
          this.__store.setState((r6) => ({ ...r6, status: "pending", statusCode: 200, isLoading: true, location: this.latestLocation, pendingMatches: e4, cachedMatches: r6.cachedMatches.filter((r7) => !e4.some((e5) => e5.id === r7.id)) }));
        }, this.load = async (e4) => {
          let r6, n5, o3;
          for (o3 = new Promise((s5) => {
            this.startTransition(async () => {
              var a5;
              try {
                this.beforeLoad();
                const r7 = this.latestLocation, n6 = this.state.resolvedLocation;
                this.state.redirect || this.emit({ type: "onBeforeNavigate", ...getLocationChangeInfo({ resolvedLocation: n6, location: r7 }) }), this.emit({ type: "onBeforeLoad", ...getLocationChangeInfo({ resolvedLocation: n6, location: r7 }) }), await this.loadMatches({ sync: null == e4 ? void 0 : e4.sync, matches: this.state.pendingMatches, location: r7, onReady: /* @__PURE__ */ __name(async () => {
                  this.startViewTransition(async () => {
                    let e5, r8, n7;
                    batch(() => {
                      this.__store.setState((o4) => {
                        const s6 = o4.matches, a6 = o4.pendingMatches || o4.matches;
                        return e5 = s6.filter((e6) => !a6.some((r9) => r9.id === e6.id)), r8 = a6.filter((e6) => !s6.some((r9) => r9.id === e6.id)), n7 = s6.filter((e6) => a6.some((r9) => r9.id === e6.id)), { ...o4, isLoading: false, loadedAt: Date.now(), matches: a6, pendingMatches: void 0, cachedMatches: [...o4.cachedMatches, ...e5.filter((e6) => "error" !== e6.status)] };
                      }), this.clearExpiredCache();
                    }), [[e5, "onLeave"], [r8, "onEnter"], [n7, "onStay"]].forEach(([e6, r9]) => {
                      e6.forEach((e7) => {
                        var n8, o4;
                        null == (o4 = (n8 = this.looseRoutesById[e7.routeId].options)[r9]) || o4.call(n8, e7);
                      });
                    });
                  });
                }, "onReady") });
              } catch (e5) {
                isRedirect$1(e5) ? (r6 = e5, this.isServer || this.navigate({ ...r6.options, replace: true, ignoreBlocker: true })) : isNotFound$1(e5) && (n5 = e5), this.__store.setState((e6) => ({ ...e6, statusCode: r6 ? r6.status : n5 ? 404 : e6.matches.some((e7) => "error" === e7.status) ? 500 : 200, redirect: r6 }));
              }
              this.latestLoadPromise === o3 && (null == (a5 = this.commitLocationPromise) || a5.resolve(), this.latestLoadPromise = void 0, this.commitLocationPromise = void 0), s5();
            });
          }), this.latestLoadPromise = o3, await o3; this.latestLoadPromise && o3 !== this.latestLoadPromise; ) await this.latestLoadPromise;
          this.hasNotFoundMatch() && this.__store.setState((e5) => ({ ...e5, statusCode: 404 }));
        }, this.startViewTransition = (e4) => {
          const r6 = this.shouldViewTransition ?? this.options.defaultViewTransition;
          if (delete this.shouldViewTransition, r6 && "undefined" != typeof document && "startViewTransition" in document && "function" == typeof document.startViewTransition) {
            let n5;
            if ("object" == typeof r6 && this.isViewTransitionTypesSupported) {
              const o3 = this.latestLocation, s5 = this.state.resolvedLocation;
              n5 = { update: e4, types: "function" == typeof r6.types ? r6.types(getLocationChangeInfo({ resolvedLocation: s5, location: o3 })) : r6.types };
            } else n5 = e4;
            document.startViewTransition(n5);
          } else e4();
        }, this.updateMatch = (e4, r6) => {
          var n5;
          const o3 = (null == (n5 = this.state.pendingMatches) ? void 0 : n5.some((r7) => r7.id === e4)) ? "pendingMatches" : this.state.matches.some((r7) => r7.id === e4) ? "matches" : this.state.cachedMatches.some((r7) => r7.id === e4) ? "cachedMatches" : "";
          o3 && this.__store.setState((n6) => {
            var s5;
            return { ...n6, [o3]: null == (s5 = n6[o3]) ? void 0 : s5.map((n7) => n7.id === e4 ? r6(n7) : n7) };
          });
        }, this.getMatch = (e4) => {
          var r6;
          const findFn = /* @__PURE__ */ __name((r7) => r7.id === e4, "findFn");
          return this.state.cachedMatches.find(findFn) ?? (null == (r6 = this.state.pendingMatches) ? void 0 : r6.find(findFn)) ?? this.state.matches.find(findFn);
        }, this.loadMatches = async ({ location: e4, matches: r6, preload: n5, onReady: o3, updateMatch: s5 = this.updateMatch, sync: a5 }) => {
          let i6, l5 = false;
          const triggerOnReady = /* @__PURE__ */ __name(async () => {
            l5 || (l5 = true, await (null == o3 ? void 0 : o3()));
          }, "triggerOnReady"), resolvePreload = /* @__PURE__ */ __name((e5) => !(!n5 || this.state.matches.some((r7) => r7.id === e5)), "resolvePreload");
          !this.isServer && this.state.matches.some((e5) => e5._forcePending) && triggerOnReady();
          const handleRedirectAndNotFound = /* @__PURE__ */ __name((n6, o4) => {
            var a6, i7, u4;
            if (isRedirect$1(o4) || isNotFound$1(o4)) {
              if (isRedirect$1(o4) && o4.redirectHandled && !o4.options.reloadDocument) throw o4;
              if (null == (a6 = n6.beforeLoadPromise) || a6.resolve(), null == (i7 = n6.loaderPromise) || i7.resolve(), s5(n6.id, (e5) => ({ ...e5, status: isRedirect$1(o4) ? "redirected" : isNotFound$1(o4) ? "notFound" : "error", isFetching: false, error: o4, beforeLoadPromise: void 0, loaderPromise: void 0 })), o4.routeId || (o4.routeId = n6.routeId), null == (u4 = n6.loadPromise) || u4.resolve(), isRedirect$1(o4)) throw l5 = true, o4.options._fromLocation = e4, o4.redirectHandled = true, o4 = this.resolveRedirect(o4);
              if (isNotFound$1(o4)) throw this._handleNotFound(r6, o4, { updateMatch: s5 }), o4;
            }
          }, "handleRedirectAndNotFound"), shouldSkipLoader = /* @__PURE__ */ __name((e5) => {
            const r7 = this.getMatch(e5);
            return !(this.isServer || !r7._dehydrated) || !(!this.isServer || false !== r7.ssr);
          }, "shouldSkipLoader");
          try {
            await new Promise((n6, l6) => {
              (async () => {
                var u4, c4, h4, p4;
                try {
                  const handleSerialError = /* @__PURE__ */ __name((e5, n7, o4) => {
                    var a6, l8;
                    const { id: u5, routeId: c5 } = r6[e5], h5 = this.looseRoutesById[c5];
                    if (n7 instanceof Promise) throw n7;
                    n7.routerCode = o4, i6 = i6 ?? e5, handleRedirectAndNotFound(this.getMatch(u5), n7);
                    try {
                      null == (l8 = (a6 = h5.options).onError) || l8.call(a6, n7);
                    } catch (e6) {
                      n7 = e6, handleRedirectAndNotFound(this.getMatch(u5), n7);
                    }
                    s5(u5, (e6) => {
                      var r7, o5;
                      return null == (r7 = e6.beforeLoadPromise) || r7.resolve(), null == (o5 = e6.loadPromise) || o5.resolve(), { ...e6, error: n7, status: "error", isFetching: false, updatedAt: Date.now(), abortController: new AbortController(), beforeLoadPromise: void 0 };
                    });
                  }, "handleSerialError");
                  for (const [n7, { id: a6, routeId: i7 }] of r6.entries()) {
                    const l8 = this.getMatch(a6), g4 = null == (u4 = r6[n7 - 1]) ? void 0 : u4.id, y3 = g4 ? this.getMatch(g4) : void 0, v3 = this.looseRoutesById[i7], b3 = v3.options.pendingMs ?? this.options.defaultPendingMs;
                    if (this.isServer) {
                      let n8;
                      if (this.isShell()) n8 = a6 === G;
                      else {
                        const o4 = this.options.defaultSsr ?? true;
                        if (false === (null == y3 ? void 0 : y3.ssr)) n8 = false;
                        else {
                          let s6;
                          if (void 0 === v3.options.ssr) s6 = o4;
                          else if ("function" == typeof v3.options.ssr) {
                            let makeMaybe = /* @__PURE__ */ __name(function(e5, r7) {
                              return r7 ? { status: "error", error: r7 } : { status: "success", value: e5 };
                            }, "makeMaybe");
                            const { search: n9, params: i8 } = this.getMatch(a6), u5 = { search: makeMaybe(n9, l8.searchError), params: makeMaybe(i8, l8.paramsError), location: e4, matches: r6.map((e5) => ({ index: e5.index, pathname: e5.pathname, fullPath: e5.fullPath, staticData: e5.staticData, id: e5.id, routeId: e5.routeId, search: makeMaybe(e5.search, e5.searchError), params: makeMaybe(e5.params, e5.paramsError), ssr: e5.ssr })) };
                            s6 = await v3.options.ssr(u5) ?? o4;
                          } else s6 = v3.options.ssr;
                          n8 = true === s6 && "data-only" === (null == y3 ? void 0 : y3.ssr) ? "data-only" : s6;
                        }
                      }
                      s5(a6, (e5) => ({ ...e5, ssr: n8 }));
                    }
                    if (shouldSkipLoader(a6)) continue;
                    const k4 = !(!o3 || this.isServer || resolvePreload(a6) || !(v3.options.loader || v3.options.beforeLoad || routeNeedsPreload(v3)) || "number" != typeof b3 || b3 === 1 / 0 || !(v3.options.pendingComponent ?? (null == (c4 = this.options) ? void 0 : c4.defaultPendingComponent)));
                    let C4 = true;
                    const setupPendingTimeout = /* @__PURE__ */ __name(() => {
                      if (k4 && void 0 === this.getMatch(a6).pendingTimeout) {
                        const e5 = setTimeout(() => {
                          try {
                            triggerOnReady();
                          } catch {
                          }
                        }, b3);
                        s5(a6, (r7) => ({ ...r7, pendingTimeout: e5 }));
                      }
                    }, "setupPendingTimeout");
                    if (l8.beforeLoadPromise || l8.loaderPromise) {
                      setupPendingTimeout(), await l8.beforeLoadPromise;
                      const e5 = this.getMatch(a6);
                      "error" === e5.status ? C4 = true : !e5.preload || "redirected" !== e5.status && "notFound" !== e5.status || handleRedirectAndNotFound(e5, e5.error);
                    }
                    if (C4) {
                      try {
                        s5(a6, (e5) => {
                          const r7 = e5.loadPromise;
                          return { ...e5, loadPromise: createControlledPromise$1(() => {
                            null == r7 || r7.resolve();
                          }), beforeLoadPromise: createControlledPromise$1() };
                        });
                        const { paramsError: o4, searchError: i8 } = this.getMatch(a6);
                        o4 && handleSerialError(n7, o4, "PARSE_PARAMS"), i8 && handleSerialError(n7, i8, "VALIDATE_SEARCH"), setupPendingTimeout();
                        const l9 = new AbortController(), u5 = (null == y3 ? void 0 : y3.context) ?? this.options.context ?? {};
                        s5(a6, (e5) => ({ ...e5, isFetching: "beforeLoad", fetchCount: e5.fetchCount + 1, abortController: l9, context: { ...u5, ...e5.__routeContext } }));
                        const { search: c5, params: g5, context: b4, cause: k5 } = this.getMatch(a6), C5 = resolvePreload(a6), P4 = { search: c5, abortController: l9, params: g5, preload: C5, context: b4, location: e4, navigate: /* @__PURE__ */ __name((r7) => this.navigate({ ...r7, _fromLocation: e4 }), "navigate"), buildLocation: this.buildLocation, cause: C5 ? "preload" : k5, matches: r6 }, R4 = await (null == (p4 = (h4 = v3.options).beforeLoad) ? void 0 : p4.call(h4, P4));
                        (isRedirect$1(R4) || isNotFound$1(R4)) && handleSerialError(n7, R4, "BEFORE_LOAD"), s5(a6, (e5) => ({ ...e5, __beforeLoadContext: R4, context: { ...u5, ...e5.__routeContext, ...R4 }, abortController: l9 }));
                      } catch (e5) {
                        handleSerialError(n7, e5, "BEFORE_LOAD");
                      }
                      s5(a6, (e5) => {
                        var r7;
                        return null == (r7 = e5.beforeLoadPromise) || r7.resolve(), { ...e5, beforeLoadPromise: void 0, isFetching: false };
                      });
                    }
                  }
                  const l7 = r6.slice(0, i6), g3 = [];
                  l7.forEach(({ id: n7, routeId: o4 }, i7) => {
                    g3.push((async () => {
                      let l8 = false, u5 = false;
                      const c5 = this.looseRoutesById[o4], executeHead = /* @__PURE__ */ __name(async () => {
                        var e5, o5, s6, a6, i8, l9;
                        const u6 = this.getMatch(n7);
                        if (!u6) return;
                        const h6 = { matches: r6, match: u6, params: u6.params, loaderData: u6.loaderData }, p5 = await (null == (o5 = (e5 = c5.options).head) ? void 0 : o5.call(e5, h6)), g4 = null == p5 ? void 0 : p5.meta, y3 = null == p5 ? void 0 : p5.links, v3 = null == p5 ? void 0 : p5.scripts, b3 = null == p5 ? void 0 : p5.styles, k4 = await (null == (a6 = (s6 = c5.options).scripts) ? void 0 : a6.call(s6, h6));
                        return { meta: g4, links: y3, headScripts: v3, headers: await (null == (l9 = (i8 = c5.options).headers) ? void 0 : l9.call(i8, h6)), scripts: k4, styles: b3 };
                      }, "executeHead"), potentialPendingMinPromise = /* @__PURE__ */ __name(async () => {
                        const e5 = this.getMatch(n7);
                        e5.minPendingPromise && await e5.minPendingPromise;
                      }, "potentialPendingMinPromise"), h5 = this.getMatch(n7);
                      if (shouldSkipLoader(n7)) {
                        if (this.isServer) {
                          const e5 = await executeHead();
                          return s5(n7, (r7) => ({ ...r7, ...e5 })), this.getMatch(n7);
                        }
                      } else if (h5.loaderPromise) {
                        if ("success" === h5.status && !a5 && !h5.preload) return this.getMatch(n7);
                        await h5.loaderPromise;
                        const e5 = this.getMatch(n7);
                        e5.error && handleRedirectAndNotFound(e5, e5.error);
                      } else {
                        const r7 = g3[i7 - 1], getLoaderContext = /* @__PURE__ */ __name(() => {
                          const { params: o6, loaderDeps: s6, abortController: a6, context: i8, cause: l9 } = this.getMatch(n7), u6 = resolvePreload(n7);
                          return { params: o6, deps: s6, preload: !!u6, parentMatchPromise: r7, abortController: a6, context: i8, location: e4, navigate: /* @__PURE__ */ __name((r8) => this.navigate({ ...r8, _fromLocation: e4 }), "navigate"), cause: u6 ? "preload" : l9, route: c5 };
                        }, "getLoaderContext"), o5 = Date.now() - this.getMatch(n7).updatedAt, h6 = resolvePreload(n7), p5 = h6 ? c5.options.preloadStaleTime ?? this.options.defaultPreloadStaleTime ?? 3e4 : c5.options.staleTime ?? this.options.defaultStaleTime ?? 0, y3 = c5.options.shouldReload, v3 = "function" == typeof y3 ? y3(getLoaderContext()) : y3;
                        s5(n7, (e5) => ({ ...e5, loaderPromise: createControlledPromise$1(), preload: !!h6 && !this.state.matches.some((e6) => e6.id === n7) }));
                        const runLoader = /* @__PURE__ */ __name(async () => {
                          var e5, r8, o6, a6;
                          try {
                            try {
                              (!this.isServer || this.isServer && true === this.getMatch(n7).ssr) && this.loadRouteChunk(c5), s5(n7, (e6) => ({ ...e6, isFetching: "loader" }));
                              const o7 = await (null == (r8 = (e5 = c5.options).loader) ? void 0 : r8.call(e5, getLoaderContext()));
                              handleRedirectAndNotFound(this.getMatch(n7), o7), s5(n7, (e6) => ({ ...e6, loaderData: o7 })), await c5._lazyPromise;
                              const a7 = await executeHead();
                              await potentialPendingMinPromise(), await c5._componentsPromise, s5(n7, (e6) => ({ ...e6, error: void 0, status: "success", isFetching: false, updatedAt: Date.now(), ...a7 }));
                            } catch (e6) {
                              let r9 = e6;
                              await potentialPendingMinPromise(), handleRedirectAndNotFound(this.getMatch(n7), e6);
                              try {
                                null == (a6 = (o6 = c5.options).onError) || a6.call(o6, e6);
                              } catch (e7) {
                                r9 = e7, handleRedirectAndNotFound(this.getMatch(n7), e7);
                              }
                              const i8 = await executeHead();
                              s5(n7, (e7) => ({ ...e7, error: r9, status: "error", isFetching: false, ...i8 }));
                            }
                          } catch (e6) {
                            const r9 = await executeHead();
                            s5(n7, (e7) => ({ ...e7, loaderPromise: void 0, ...r9 })), handleRedirectAndNotFound(this.getMatch(n7), e6);
                          }
                        }, "runLoader"), { status: b3, invalid: k4 } = this.getMatch(n7);
                        if (l8 = "success" === b3 && (k4 || (v3 ?? o5 > p5)), h6 && false === c5.options.preload) ;
                        else if (l8 && !a5) u5 = true, (async () => {
                          try {
                            await runLoader();
                            const { loaderPromise: e5, loadPromise: r8 } = this.getMatch(n7);
                            null == e5 || e5.resolve(), null == r8 || r8.resolve(), s5(n7, (e6) => ({ ...e6, loaderPromise: void 0 }));
                          } catch (e5) {
                            isRedirect$1(e5) && await this.navigate(e5.options);
                          }
                        })();
                        else if ("success" !== b3 || l8 && a5) await runLoader();
                        else {
                          const e5 = await executeHead();
                          s5(n7, (r8) => ({ ...r8, ...e5 }));
                        }
                      }
                      if (!u5) {
                        const { loaderPromise: e5, loadPromise: r7 } = this.getMatch(n7);
                        null == e5 || e5.resolve(), null == r7 || r7.resolve();
                      }
                      return s5(n7, (e5) => (clearTimeout(e5.pendingTimeout), { ...e5, isFetching: !!u5 && e5.isFetching, loaderPromise: u5 ? e5.loaderPromise : void 0, invalid: false, pendingTimeout: void 0, _dehydrated: void 0 })), this.getMatch(n7);
                    })());
                  }), await Promise.all(g3), n6();
                } catch (e5) {
                  l6(e5);
                }
              })();
            }), await triggerOnReady();
          } catch (e5) {
            if (isRedirect$1(e5) || isNotFound$1(e5)) throw isNotFound$1(e5) && !n5 && await triggerOnReady(), e5;
          }
          return r6;
        }, this.invalidate = (e4) => {
          const invalidate = /* @__PURE__ */ __name((r6) => {
            var n5;
            return (null == (n5 = null == e4 ? void 0 : e4.filter) ? void 0 : n5.call(e4, r6)) ?? 1 ? { ...r6, invalid: true, ...(null == e4 ? void 0 : e4.forcePending) || "error" === r6.status ? { status: "pending", error: void 0 } : {} } : r6;
          }, "invalidate");
          return this.__store.setState((e5) => {
            var r6;
            return { ...e5, matches: e5.matches.map(invalidate), cachedMatches: e5.cachedMatches.map(invalidate), pendingMatches: null == (r6 = e5.pendingMatches) ? void 0 : r6.map(invalidate) };
          }), this.shouldViewTransition = false, this.load({ sync: null == e4 ? void 0 : e4.sync });
        }, this.resolveRedirect = (e4) => (e4.options.href || (e4.options.href = this.buildLocation(e4.options).href, e4.headers.set("Location", e4.options.href)), e4.headers.get("Location") || e4.headers.set("Location", e4.options.href), e4), this.clearCache = (e4) => {
          const r6 = null == e4 ? void 0 : e4.filter;
          void 0 !== r6 ? this.__store.setState((e5) => ({ ...e5, cachedMatches: e5.cachedMatches.filter((e6) => !r6(e6)) })) : this.__store.setState((e5) => ({ ...e5, cachedMatches: [] }));
        }, this.clearExpiredCache = () => {
          this.clearCache({ filter: /* @__PURE__ */ __name((e4) => {
            const r6 = this.looseRoutesById[e4.routeId];
            if (!r6.options.loader) return true;
            const n5 = (e4.preload ? r6.options.preloadGcTime ?? this.options.defaultPreloadGcTime : r6.options.gcTime ?? this.options.defaultGcTime) ?? 3e5;
            if ("error" === e4.status) return true;
            return Date.now() - e4.updatedAt >= n5;
          }, "filter") });
        }, this.loadRouteChunk = (e4) => (void 0 === e4._lazyPromise && (e4.lazyFn ? e4._lazyPromise = e4.lazyFn().then((r6) => {
          const { id: n5, ...o3 } = r6.options;
          Object.assign(e4.options, o3);
        }) : e4._lazyPromise = Promise.resolve()), void 0 === e4._componentsPromise && (e4._componentsPromise = e4._lazyPromise.then(() => Promise.all(X2.map(async (r6) => {
          const n5 = e4.options[r6];
          (null == n5 ? void 0 : n5.preload) && await n5.preload();
        })))), e4._componentsPromise), this.preloadRoute = async (e4) => {
          const r6 = this.buildLocation(e4);
          let n5 = this.matchRoutes(r6, { throwOnError: true, preload: true, dest: e4 });
          const o3 = new Set([...this.state.matches, ...this.state.pendingMatches ?? []].map((e5) => e5.id)), s5 = /* @__PURE__ */ new Set([...o3, ...this.state.cachedMatches.map((e5) => e5.id)]);
          batch(() => {
            n5.forEach((e5) => {
              s5.has(e5.id) || this.__store.setState((r7) => ({ ...r7, cachedMatches: [...r7.cachedMatches, e5] }));
            });
          });
          try {
            return n5 = await this.loadMatches({ matches: n5, location: r6, preload: true, updateMatch: /* @__PURE__ */ __name((e5, r7) => {
              o3.has(e5) ? n5 = n5.map((n6) => n6.id === e5 ? r7(n6) : n6) : this.updateMatch(e5, r7);
            }, "updateMatch") }), n5;
          } catch (e5) {
            if (isRedirect$1(e5)) {
              if (e5.options.reloadDocument) return;
              return await this.preloadRoute({ ...e5.options, _fromLocation: r6 });
            }
            return void (isNotFound$1(e5) || console.error(e5));
          }
        }, this.matchRoute = (e4, r6) => {
          const n5 = { ...e4, to: e4.to ? this.resolvePathWithBase(e4.from || "", e4.to) : void 0, params: e4.params || {}, leaveParams: true }, o3 = this.buildLocation(n5);
          if ((null == r6 ? void 0 : r6.pending) && "pending" !== this.state.status) return false;
          const s5 = (void 0 === (null == r6 ? void 0 : r6.pending) ? !this.state.isLoading : r6.pending) ? this.latestLocation : this.state.resolvedLocation || this.state.location, a5 = matchPathname$1(this.basepath, s5.pathname, { ...r6, to: o3.pathname }, this.parsePathnameCache);
          return !!a5 && (!(e4.params && !deepEqual(a5, e4.params, { partial: true })) && (a5 && ((null == r6 ? void 0 : r6.includeSearch) ?? 1) ? !!deepEqual(s5.search, o3.search, { partial: true }) && a5 : a5));
        }, this._handleNotFound = (e4, r6, { updateMatch: n5 = this.updateMatch } = {}) => {
          var o3;
          const s5 = this.routesById[r6.routeId ?? ""] ?? this.routeTree, a5 = {};
          for (const r7 of e4) a5[r7.routeId] = r7;
          !s5.options.notFoundComponent && (null == (o3 = this.options) ? void 0 : o3.defaultNotFoundComponent) && (s5.options.notFoundComponent = this.options.defaultNotFoundComponent), invariant$1(s5.options.notFoundComponent);
          const i6 = a5[s5.id];
          invariant$1(i6, s5.id), n5(i6.id, (e5) => ({ ...e5, status: "notFound", error: r6, isFetching: false })), "BEFORE_LOAD" === r6.routerCode && s5.parentRoute && (r6.routeId = s5.parentRoute.id, this._handleNotFound(e4, r6, { updateMatch: n5 }));
        }, this.hasNotFoundMatch = () => this.__store.state.matches.some((e4) => "notFound" === e4.status || e4.globalNotFound), this.update({ defaultPreloadDelay: 50, defaultPendingMs: 1e3, defaultPendingMinMs: 500, context: void 0, ...e3, caseSensitive: e3.caseSensitive ?? false, notFoundMode: e3.notFoundMode ?? "fuzzy", stringifySearch: e3.stringifySearch ?? q, parseSearch: e3.parseSearch ?? W2 }), "undefined" != typeof document && (self.__TSR_ROUTER__ = this);
      }
      isShell() {
        return !!this.options.isShell;
      }
      isPrerendering() {
        return !!this.options.isPrerendering;
      }
      get state() {
        return this.__store.state;
      }
      get looseRoutesById() {
        return this.routesById;
      }
      matchRoutesInternal(e3, r6) {
        var n5;
        const { foundRoute: o3, matchedRoutes: s5, routeParams: a5 } = this.getMatchedRoutes(e3.pathname, null == (n5 = null == r6 ? void 0 : r6.dest) ? void 0 : n5.to);
        let i6 = false;
        (o3 ? "/" !== o3.path && a5["**"] : trimPathRight$1(e3.pathname)) && (this.options.notFoundRoute ? s5.push(this.options.notFoundRoute) : i6 = true);
        const l5 = (() => {
          if (i6) {
            if ("root" !== this.options.notFoundMode) for (let e4 = s5.length - 1; e4 >= 0; e4--) {
              const r7 = s5[e4];
              if (r7.children) return r7.id;
            }
            return G;
          }
        })(), u4 = s5.map((e4) => {
          var n6;
          let o4;
          const s6 = (null == (n6 = e4.options.params) ? void 0 : n6.parse) ?? e4.options.parseParams;
          if (s6) try {
            const e5 = s6(a5);
            Object.assign(a5, e5);
          } catch (e5) {
            if (o4 = new PathParamError(e5.message, { cause: e5 }), null == r6 ? void 0 : r6.throwOnError) throw o4;
            return o4;
          }
        }), c4 = [], getParentContext = /* @__PURE__ */ __name((e4) => (null == e4 ? void 0 : e4.id) ? e4.context ?? this.options.context ?? {} : this.options.context ?? {}, "getParentContext");
        return s5.forEach((n6, o4) => {
          var s6, i7;
          const h4 = c4[o4 - 1], [p4, g3, y3] = (() => {
            const o5 = (null == h4 ? void 0 : h4.search) ?? e3.search, s7 = (null == h4 ? void 0 : h4._strictSearch) ?? {};
            try {
              const e4 = validateSearch(n6.options.validateSearch, { ...o5 }) ?? {};
              return [{ ...o5, ...e4 }, { ...s7, ...e4 }, void 0];
            } catch (e4) {
              let n7 = e4;
              if (e4 instanceof SearchParamError || (n7 = new SearchParamError(e4.message, { cause: e4 })), null == r6 ? void 0 : r6.throwOnError) throw n7;
              return [o5, {}, n7];
            }
          })(), v3 = (null == (i7 = (s6 = n6.options).loaderDeps) ? void 0 : i7.call(s6, { search: p4 })) ?? "", b3 = v3 ? JSON.stringify(v3) : "", { usedParams: k4, interpolatedPath: C4 } = interpolatePath({ path: n6.fullPath, params: a5, decodeCharMap: this.pathParamsDecodeCharMap }), P4 = interpolatePath({ path: n6.id, params: a5, leaveWildcards: true, decodeCharMap: this.pathParamsDecodeCharMap, parseCache: this.parsePathnameCache }).interpolatedPath + b3, R4 = this.getMatch(P4), $3 = this.state.matches.find((e4) => e4.routeId === n6.id), T4 = $3 ? "stay" : "enter";
          let F4;
          if (R4) F4 = { ...R4, cause: T4, params: $3 ? replaceEqualDeep($3.params, a5) : a5, _strictParams: k4, search: replaceEqualDeep($3 ? $3.search : R4.search, p4), _strictSearch: g3 };
          else {
            const e4 = n6.options.loader || n6.options.beforeLoad || n6.lazyFn || routeNeedsPreload(n6) ? "pending" : "success";
            F4 = { id: P4, index: o4, routeId: n6.id, params: $3 ? replaceEqualDeep($3.params, a5) : a5, _strictParams: k4, pathname: joinPaths$1([this.basepath, C4]), updatedAt: Date.now(), search: $3 ? replaceEqualDeep($3.search, p4) : p4, _strictSearch: g3, searchError: void 0, status: e4, isFetching: false, error: void 0, paramsError: u4[o4], __routeContext: {}, __beforeLoadContext: void 0, context: {}, abortController: new AbortController(), fetchCount: 0, cause: T4, loaderDeps: $3 ? replaceEqualDeep($3.loaderDeps, v3) : v3, invalid: false, preload: false, links: void 0, scripts: void 0, headScripts: void 0, meta: void 0, staticData: n6.options.staticData || {}, loadPromise: createControlledPromise$1(), fullPath: n6.fullPath };
          }
          (null == r6 ? void 0 : r6.preload) || (F4.globalNotFound = l5 === n6.id), F4.searchError = y3;
          const E4 = getParentContext(h4);
          F4.context = { ...E4, ...F4.__routeContext, ...F4.__beforeLoadContext }, c4.push(F4);
        }), c4.forEach((n6, o4) => {
          var s6, a6;
          const i7 = this.looseRoutesById[n6.routeId];
          if (!this.getMatch(n6.id) && true !== (null == r6 ? void 0 : r6._buildLocation)) {
            const r7 = c4[o4 - 1], l6 = getParentContext(r7), u5 = { deps: n6.loaderDeps, params: n6.params, context: l6, location: e3, navigate: /* @__PURE__ */ __name((r8) => this.navigate({ ...r8, _fromLocation: e3 }), "navigate"), buildLocation: this.buildLocation, cause: n6.cause, abortController: n6.abortController, preload: !!n6.preload, matches: c4 };
            n6.__routeContext = (null == (a6 = (s6 = i7.options).context) ? void 0 : a6.call(s6, u5)) ?? {}, n6.context = { ...l6, ...n6.__routeContext, ...n6.__beforeLoadContext };
          }
        }), c4;
      }
    };
    SearchParamError = class extends Error {
      static {
        __name(this, "SearchParamError");
      }
    };
    PathParamError = class extends Error {
      static {
        __name(this, "PathParamError");
      }
    };
    normalize = /* @__PURE__ */ __name((e3) => e3.endsWith("/") && e3.length > 1 ? e3.slice(0, -1) : e3, "normalize");
    __name(comparePaths, "comparePaths");
    __name(validateSearch, "validateSearch");
    X2 = ["component", "errorComponent", "pendingComponent", "notFoundComponent"];
    __name(routeNeedsPreload, "routeNeedsPreload");
    Q = 0.5;
    Y2 = 0.4;
    Z = 0.25;
    __name(handleParam$1, "handleParam$1");
    BaseRoute = class {
      static {
        __name(this, "BaseRoute");
      }
      constructor(e3) {
        if (this.init = (e4) => {
          var r6, n5;
          this.originalIndex = e4.originalIndex;
          const o3 = this.options, s5 = !(null == o3 ? void 0 : o3.path) && !(null == o3 ? void 0 : o3.id);
          this.parentRoute = null == (n5 = (r6 = this.options).getParentRoute) ? void 0 : n5.call(r6), s5 ? this._path = G : this.parentRoute || invariant$1(false);
          let a5 = s5 ? G : null == o3 ? void 0 : o3.path;
          a5 && "/" !== a5 && (a5 = trimPathLeft$1(a5));
          const i6 = (null == o3 ? void 0 : o3.id) || a5;
          let l5 = s5 ? G : joinPaths$1([this.parentRoute.id === G ? "" : this.parentRoute.id, i6]);
          a5 === G && (a5 = "/"), l5 !== G && (l5 = joinPaths$1(["/", l5]));
          const u4 = l5 === G ? "/" : joinPaths$1([this.parentRoute.fullPath, a5]);
          this._path = a5, this._id = l5, this._fullPath = u4, this._to = u4;
        }, this.clone = (e4) => {
          this._path = e4._path, this._id = e4._id, this._fullPath = e4._fullPath, this._to = e4._to, this.options.getParentRoute = e4.options.getParentRoute, this.children = e4.children;
        }, this.addChildren = (e4) => this._addFileChildren(e4), this._addFileChildren = (e4) => (Array.isArray(e4) && (this.children = e4), "object" == typeof e4 && null !== e4 && (this.children = Object.values(e4)), this), this._addFileTypes = () => this, this.updateLoader = (e4) => (Object.assign(this.options, e4), this), this.update = (e4) => (Object.assign(this.options, e4), this), this.lazy = (e4) => (this.lazyFn = e4, this), this.options = e3 || {}, this.isRoot = !(null == e3 ? void 0 : e3.getParentRoute), (null == e3 ? void 0 : e3.id) && (null == e3 ? void 0 : e3.path)) throw new Error("Route cannot have both an 'id' and a 'path' option.");
      }
      get to() {
        return this._to;
      }
      get id() {
        return this._id;
      }
      get path() {
        return this._path;
      }
      get fullPath() {
        return this._fullPath;
      }
    };
    BaseRootRoute = class extends BaseRoute {
      static {
        __name(this, "BaseRootRoute");
      }
      constructor(e3) {
        super(e3);
      }
    };
    ee = { exports: {} };
    te = {};
    re = Symbol.for("react.transitional.element");
    ne = Symbol.for("react.portal");
    oe = Symbol.for("react.fragment");
    ae = Symbol.for("react.strict_mode");
    ie = Symbol.for("react.profiler");
    le = Symbol.for("react.consumer");
    ue = Symbol.for("react.context");
    ce = Symbol.for("react.forward_ref");
    de = Symbol.for("react.suspense");
    he = Symbol.for("react.memo");
    pe = Symbol.for("react.lazy");
    ge = Symbol.iterator;
    ye = { isMounted: /* @__PURE__ */ __name(function() {
      return false;
    }, "isMounted"), enqueueForceUpdate: /* @__PURE__ */ __name(function() {
    }, "enqueueForceUpdate"), enqueueReplaceState: /* @__PURE__ */ __name(function() {
    }, "enqueueReplaceState"), enqueueSetState: /* @__PURE__ */ __name(function() {
    }, "enqueueSetState") };
    ve = Object.assign;
    be = {};
    __name(Component, "Component");
    __name(ComponentDummy, "ComponentDummy");
    __name(PureComponent, "PureComponent");
    Component.prototype.isReactComponent = {}, Component.prototype.setState = function(e3, r6) {
      if ("object" != typeof e3 && "function" != typeof e3 && null != e3) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, e3, r6, "setState");
    }, Component.prototype.forceUpdate = function(e3) {
      this.updater.enqueueForceUpdate(this, e3, "forceUpdate");
    }, ComponentDummy.prototype = Component.prototype;
    Se = PureComponent.prototype = new ComponentDummy();
    Se.constructor = PureComponent, ve(Se, Component.prototype), Se.isPureReactComponent = true;
    ke = Array.isArray;
    Ce = { H: null, A: null, T: null, S: null, V: null };
    we = Object.prototype.hasOwnProperty;
    __name(ReactElement, "ReactElement");
    __name(isValidElement, "isValidElement");
    Pe = /\/+/g;
    __name(getElementKey, "getElementKey");
    __name(noop$1$2, "noop$1$2");
    __name(mapIntoArray, "mapIntoArray");
    __name(mapChildren, "mapChildren");
    __name(lazyInitializer, "lazyInitializer");
    Re = "function" == typeof reportError ? reportError : function(r6) {
      "object" != typeof g || "function" != typeof g.emit ? console.error(r6) : g.emit("uncaughtException", r6);
    };
    __name(noop$5, "noop$5");
    te.Children = { map: mapChildren, forEach: /* @__PURE__ */ __name(function(e3, r6, n5) {
      mapChildren(e3, function() {
        r6.apply(this, arguments);
      }, n5);
    }, "forEach"), count: /* @__PURE__ */ __name(function(e3) {
      var r6 = 0;
      return mapChildren(e3, function() {
        r6++;
      }), r6;
    }, "count"), toArray: /* @__PURE__ */ __name(function(e3) {
      return mapChildren(e3, function(e4) {
        return e4;
      }) || [];
    }, "toArray"), only: /* @__PURE__ */ __name(function(e3) {
      if (!isValidElement(e3)) throw Error("React.Children.only expected to receive a single React element child.");
      return e3;
    }, "only") }, te.Component = Component, te.Fragment = oe, te.Profiler = ie, te.PureComponent = PureComponent, te.StrictMode = ae, te.Suspense = de, te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Ce, te.__COMPILER_RUNTIME = { __proto__: null, c: /* @__PURE__ */ __name(function(e3) {
      return Ce.H.useMemoCache(e3);
    }, "c") }, te.cache = function(e3) {
      return function() {
        return e3.apply(null, arguments);
      };
    }, te.cloneElement = function(e3, r6, n5) {
      if (null == e3) throw Error("The argument must be a React element, but you passed " + e3 + ".");
      var o3 = ve({}, e3.props), s5 = e3.key;
      if (null != r6) for (a5 in void 0 !== r6.ref && void 0, void 0 !== r6.key && (s5 = "" + r6.key), r6) !we.call(r6, a5) || "key" === a5 || "__self" === a5 || "__source" === a5 || "ref" === a5 && void 0 === r6.ref || (o3[a5] = r6[a5]);
      var a5 = arguments.length - 2;
      if (1 === a5) o3.children = n5;
      else if (1 < a5) {
        for (var i6 = Array(a5), l5 = 0; l5 < a5; l5++) i6[l5] = arguments[l5 + 2];
        o3.children = i6;
      }
      return ReactElement(e3.type, s5, void 0, 0, 0, o3);
    }, te.createContext = function(e3) {
      return (e3 = { $$typeof: ue, _currentValue: e3, _currentValue2: e3, _threadCount: 0, Provider: null, Consumer: null }).Provider = e3, e3.Consumer = { $$typeof: le, _context: e3 }, e3;
    }, te.createElement = function(e3, r6, n5) {
      var o3, s5 = {}, a5 = null;
      if (null != r6) for (o3 in void 0 !== r6.key && (a5 = "" + r6.key), r6) we.call(r6, o3) && "key" !== o3 && "__self" !== o3 && "__source" !== o3 && (s5[o3] = r6[o3]);
      var i6 = arguments.length - 2;
      if (1 === i6) s5.children = n5;
      else if (1 < i6) {
        for (var l5 = Array(i6), u4 = 0; u4 < i6; u4++) l5[u4] = arguments[u4 + 2];
        s5.children = l5;
      }
      if (e3 && e3.defaultProps) for (o3 in i6 = e3.defaultProps) void 0 === s5[o3] && (s5[o3] = i6[o3]);
      return ReactElement(e3, a5, void 0, 0, 0, s5);
    }, te.createRef = function() {
      return { current: null };
    }, te.forwardRef = function(e3) {
      return { $$typeof: ce, render: e3 };
    }, te.isValidElement = isValidElement, te.lazy = function(e3) {
      return { $$typeof: pe, _payload: { _status: -1, _result: e3 }, _init: lazyInitializer };
    }, te.memo = function(e3, r6) {
      return { $$typeof: he, type: e3, compare: void 0 === r6 ? null : r6 };
    }, te.startTransition = function(e3) {
      var r6 = Ce.T, n5 = {};
      Ce.T = n5;
      try {
        var o3 = e3(), s5 = Ce.S;
        null !== s5 && s5(n5, o3), "object" == typeof o3 && null !== o3 && "function" == typeof o3.then && o3.then(noop$5, Re);
      } catch (e4) {
        Re(e4);
      } finally {
        Ce.T = r6;
      }
    }, te.unstable_useCacheRefresh = function() {
      return Ce.H.useCacheRefresh();
    }, te.use = function(e3) {
      return Ce.H.use(e3);
    }, te.useActionState = function(e3, r6, n5) {
      return Ce.H.useActionState(e3, r6, n5);
    }, te.useCallback = function(e3, r6) {
      return Ce.H.useCallback(e3, r6);
    }, te.useContext = function(e3) {
      return Ce.H.useContext(e3);
    }, te.useDebugValue = function() {
    }, te.useDeferredValue = function(e3, r6) {
      return Ce.H.useDeferredValue(e3, r6);
    }, te.useEffect = function(e3, r6, n5) {
      var o3 = Ce.H;
      if ("function" == typeof n5) throw Error("useEffect CRUD overload is not enabled in this build of React.");
      return o3.useEffect(e3, r6);
    }, te.useId = function() {
      return Ce.H.useId();
    }, te.useImperativeHandle = function(e3, r6, n5) {
      return Ce.H.useImperativeHandle(e3, r6, n5);
    }, te.useInsertionEffect = function(e3, r6) {
      return Ce.H.useInsertionEffect(e3, r6);
    }, te.useLayoutEffect = function(e3, r6) {
      return Ce.H.useLayoutEffect(e3, r6);
    }, te.useMemo = function(e3, r6) {
      return Ce.H.useMemo(e3, r6);
    }, te.useOptimistic = function(e3, r6) {
      return Ce.H.useOptimistic(e3, r6);
    }, te.useReducer = function(e3, r6, n5) {
      return Ce.H.useReducer(e3, r6, n5);
    }, te.useRef = function(e3) {
      return Ce.H.useRef(e3);
    }, te.useState = function(e3) {
      return Ce.H.useState(e3);
    }, te.useSyncExternalStore = function(e3, r6, n5) {
      return Ce.H.useSyncExternalStore(e3, r6, n5);
    }, te.useTransition = function() {
      return Ce.H.useTransition();
    }, te.version = "19.1.1", ee.exports = te;
    xe = ee.exports;
    $e = getDefaultExportFromCjs(xe);
    __name(CatchBoundary, "CatchBoundary");
    CatchBoundaryImpl = class extends xe.Component {
      static {
        __name(this, "CatchBoundaryImpl");
      }
      constructor() {
        super(...arguments), this.state = { error: null };
      }
      static getDerivedStateFromProps(e3) {
        return { resetKey: e3.getResetKey() };
      }
      static getDerivedStateFromError(e3) {
        return { error: e3 };
      }
      reset() {
        this.setState({ error: null });
      }
      componentDidUpdate(e3, r6) {
        r6.error && r6.resetKey !== this.state.resetKey && this.reset();
      }
      componentDidCatch(e3, r6) {
        this.props.onCatch && this.props.onCatch(e3, r6);
      }
      render() {
        return this.props.children({ error: this.state.resetKey !== this.props.getResetKey() ? null : this.state.error, reset: /* @__PURE__ */ __name(() => {
          this.reset();
        }, "reset") });
      }
    };
    __name(ErrorComponent, "ErrorComponent");
    __name(ClientOnly, "ClientOnly");
    __name(subscribe, "subscribe");
    Te = { exports: {} };
    Fe = {};
    Ee = { exports: {} };
    _e = {};
    Ie = xe;
    Ie.useState, Ie.useEffect, Ie.useLayoutEffect, Ie.useDebugValue;
    shim$1 = /* @__PURE__ */ __name(function(e3, r6) {
      return r6();
    }, "shim$1");
    _e.useSyncExternalStore = void 0 !== Ie.useSyncExternalStore ? Ie.useSyncExternalStore : shim$1, Ee.exports = _e;
    Ae = Ee.exports;
    Me = xe;
    Oe = Ae;
    Be = "function" == typeof Object.is ? Object.is : function(e3, r6) {
      return e3 === r6 && (0 !== e3 || 1 / e3 == 1 / r6) || e3 != e3 && r6 != r6;
    };
    Ne = Oe.useSyncExternalStore;
    ze = Me.useRef;
    De = Me.useEffect;
    He = Me.useMemo;
    We = Me.useDebugValue;
    Fe.useSyncExternalStoreWithSelector = function(e3, r6, n5, o3, s5) {
      var a5 = ze(null);
      if (null === a5.current) {
        var i6 = { hasValue: false, value: null };
        a5.current = i6;
      } else i6 = a5.current;
      a5 = He(function() {
        function memoizedSelector(r7) {
          if (!l6) {
            if (l6 = true, e4 = r7, r7 = o3(r7), void 0 !== s5 && i6.hasValue) {
              var n6 = i6.value;
              if (s5(n6, r7)) return a6 = n6;
            }
            return a6 = r7;
          }
          if (n6 = a6, Be(e4, r7)) return n6;
          var u5 = o3(r7);
          return void 0 !== s5 && s5(n6, u5) ? (e4 = r7, n6) : (e4 = r7, a6 = u5);
        }
        __name(memoizedSelector, "memoizedSelector");
        var e4, a6, l6 = false, u4 = void 0 === n5 ? null : n5;
        return [function() {
          return memoizedSelector(r6());
        }, null === u4 ? void 0 : function() {
          return memoizedSelector(u4());
        }];
      }, [r6, n5, o3, s5]);
      var l5 = Ne(e3, a5[0], a5[1]);
      return De(function() {
        i6.hasValue = true, i6.value = l5;
      }, [l5]), We(l5), l5;
    }, Te.exports = Fe;
    Ve = Te.exports;
    __name(shallow, "shallow");
    qe = xe.createContext(null);
    __name(getRouterContext, "getRouterContext");
    __name(useRouter, "useRouter");
    __name(useRouterState, "useRouterState");
    Ue = xe.createContext(void 0);
    Ke = xe.createContext(void 0);
    __name(useMatch, "useMatch");
    __name(useLoaderData, "useLoaderData");
    __name(useLoaderDeps, "useLoaderDeps");
    __name(useParams, "useParams");
    __name(useSearch, "useSearch");
    __name(useNavigate, "useNavigate");
    Ge = { exports: {} };
    Je = {};
    Xe = xe;
    __name(formatProdErrorMessage$1, "formatProdErrorMessage$1");
    __name(noop$4, "noop$4");
    Qe = { d: { f: noop$4, r: /* @__PURE__ */ __name(function() {
      throw Error(formatProdErrorMessage$1(522));
    }, "r"), D: noop$4, C: noop$4, L: noop$4, m: noop$4, X: noop$4, S: noop$4, M: noop$4 }, p: 0, findDOMNode: null };
    Ze = Symbol.for("react.portal");
    et = Xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    __name(getCrossOriginStringAs, "getCrossOriginStringAs");
    Je.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Qe, Je.createPortal = function(e3, r6) {
      var n5 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!r6 || 1 !== r6.nodeType && 9 !== r6.nodeType && 11 !== r6.nodeType) throw Error(formatProdErrorMessage$1(299));
      return function(e4, r7, n6) {
        var o3 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return { $$typeof: Ze, key: null == o3 ? null : "" + o3, children: e4, containerInfo: r7, implementation: n6 };
      }(e3, r6, null, n5);
    }, Je.flushSync = function(e3) {
      var r6 = et.T, n5 = Qe.p;
      try {
        if (et.T = null, Qe.p = 2, e3) return e3();
      } finally {
        et.T = r6, Qe.p = n5, Qe.d.f();
      }
    }, Je.preconnect = function(e3, r6) {
      "string" == typeof e3 && (r6 ? r6 = "string" == typeof (r6 = r6.crossOrigin) ? "use-credentials" === r6 ? r6 : "" : void 0 : r6 = null, Qe.d.C(e3, r6));
    }, Je.prefetchDNS = function(e3) {
      "string" == typeof e3 && Qe.d.D(e3);
    }, Je.preinit = function(e3, r6) {
      if ("string" == typeof e3 && r6 && "string" == typeof r6.as) {
        var n5 = r6.as, o3 = getCrossOriginStringAs(n5, r6.crossOrigin), s5 = "string" == typeof r6.integrity ? r6.integrity : void 0, a5 = "string" == typeof r6.fetchPriority ? r6.fetchPriority : void 0;
        "style" === n5 ? Qe.d.S(e3, "string" == typeof r6.precedence ? r6.precedence : void 0, { crossOrigin: o3, integrity: s5, fetchPriority: a5 }) : "script" === n5 && Qe.d.X(e3, { crossOrigin: o3, integrity: s5, fetchPriority: a5, nonce: "string" == typeof r6.nonce ? r6.nonce : void 0 });
      }
    }, Je.preinitModule = function(e3, r6) {
      if ("string" == typeof e3) if ("object" == typeof r6 && null !== r6) {
        if (null == r6.as || "script" === r6.as) {
          var n5 = getCrossOriginStringAs(r6.as, r6.crossOrigin);
          Qe.d.M(e3, { crossOrigin: n5, integrity: "string" == typeof r6.integrity ? r6.integrity : void 0, nonce: "string" == typeof r6.nonce ? r6.nonce : void 0 });
        }
      } else null == r6 && Qe.d.M(e3);
    }, Je.preload = function(e3, r6) {
      if ("string" == typeof e3 && "object" == typeof r6 && null !== r6 && "string" == typeof r6.as) {
        var n5 = r6.as, o3 = getCrossOriginStringAs(n5, r6.crossOrigin);
        Qe.d.L(e3, n5, { crossOrigin: o3, integrity: "string" == typeof r6.integrity ? r6.integrity : void 0, nonce: "string" == typeof r6.nonce ? r6.nonce : void 0, type: "string" == typeof r6.type ? r6.type : void 0, fetchPriority: "string" == typeof r6.fetchPriority ? r6.fetchPriority : void 0, referrerPolicy: "string" == typeof r6.referrerPolicy ? r6.referrerPolicy : void 0, imageSrcSet: "string" == typeof r6.imageSrcSet ? r6.imageSrcSet : void 0, imageSizes: "string" == typeof r6.imageSizes ? r6.imageSizes : void 0, media: "string" == typeof r6.media ? r6.media : void 0 });
      }
    }, Je.preloadModule = function(e3, r6) {
      if ("string" == typeof e3) if (r6) {
        var n5 = getCrossOriginStringAs(r6.as, r6.crossOrigin);
        Qe.d.m(e3, { as: "string" == typeof r6.as && "script" !== r6.as ? r6.as : void 0, crossOrigin: n5, integrity: "string" == typeof r6.integrity ? r6.integrity : void 0 });
      } else Qe.d.m(e3);
    }, Je.requestFormReset = function(e3) {
      Qe.d.r(e3);
    }, Je.unstable_batchedUpdates = function(e3, r6) {
      return e3(r6);
    }, Je.useFormState = function(e3, r6, n5) {
      return et.H.useFormState(e3, r6, n5);
    }, Je.useFormStatus = function() {
      return et.H.useHostTransitionStatus();
    }, Je.version = "19.1.1", (/* @__PURE__ */ __name(function checkDCE() {
      if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
      } catch (e3) {
        console.error(e3);
      }
    }, "checkDCE"))(), Ge.exports = Je;
    tt = Ge.exports;
    rt = xe.useEffect;
    __name(usePrevious, "usePrevious");
    __name(useLinkProps, "useLinkProps");
    nt = {};
    ot = { className: "active" };
    st = { role: "link", "aria-disabled": true };
    at = { "data-status": "active", "aria-current": "page" };
    it = { "data-transitioning": "transitioning" };
    lt = /* @__PURE__ */ new WeakMap();
    ut = { rootMargin: "100px" };
    composeHandlers = /* @__PURE__ */ __name((e3) => (r6) => {
      e3.filter(Boolean).forEach((e4) => {
        r6.defaultPrevented || e4(r6);
      });
    }, "composeHandlers");
    ct = xe.forwardRef((e3, r6) => {
      const { _asChild: n5, ...o3 } = e3, { type: s5, ref: a5, ...i6 } = useLinkProps(o3, r6), l5 = "function" == typeof o3.children ? o3.children({ isActive: "active" === i6["data-status"] }) : o3.children;
      return void 0 === n5 && delete i6.disabled, xe.createElement(n5 || "a", { ...i6, ref: a5 }, l5);
    });
    dt = class extends BaseRoute {
      static {
        __name(this, "dt");
      }
      constructor(e3) {
        super(e3), this.useMatch = (e4) => useMatch({ select: null == e4 ? void 0 : e4.select, from: this.id, structuralSharing: null == e4 ? void 0 : e4.structuralSharing }), this.useRouteContext = (e4) => useMatch({ ...e4, from: this.id, select: /* @__PURE__ */ __name((r6) => (null == e4 ? void 0 : e4.select) ? e4.select(r6.context) : r6.context, "select") }), this.useSearch = (e4) => useSearch({ select: null == e4 ? void 0 : e4.select, structuralSharing: null == e4 ? void 0 : e4.structuralSharing, from: this.id }), this.useParams = (e4) => useParams({ select: null == e4 ? void 0 : e4.select, structuralSharing: null == e4 ? void 0 : e4.structuralSharing, from: this.id }), this.useLoaderDeps = (e4) => useLoaderDeps({ ...e4, from: this.id }), this.useLoaderData = (e4) => useLoaderData({ ...e4, from: this.id }), this.useNavigate = () => useNavigate({ from: this.fullPath }), this.Link = $e.forwardRef((e4, r6) => p2.jsx(ct, { ref: r6, from: this.fullPath, ...e4 })), this.$$typeof = Symbol.for("react.memo");
      }
    };
    RootRoute = class extends BaseRootRoute {
      static {
        __name(this, "RootRoute");
      }
      constructor(e3) {
        super(e3), this.useMatch = (e4) => useMatch({ select: null == e4 ? void 0 : e4.select, from: this.id, structuralSharing: null == e4 ? void 0 : e4.structuralSharing }), this.useRouteContext = (e4) => useMatch({ ...e4, from: this.id, select: /* @__PURE__ */ __name((r6) => (null == e4 ? void 0 : e4.select) ? e4.select(r6.context) : r6.context, "select") }), this.useSearch = (e4) => useSearch({ select: null == e4 ? void 0 : e4.select, structuralSharing: null == e4 ? void 0 : e4.structuralSharing, from: this.id }), this.useParams = (e4) => useParams({ select: null == e4 ? void 0 : e4.select, structuralSharing: null == e4 ? void 0 : e4.structuralSharing, from: this.id }), this.useLoaderDeps = (e4) => useLoaderDeps({ ...e4, from: this.id }), this.useLoaderData = (e4) => useLoaderData({ ...e4, from: this.id }), this.useNavigate = () => useNavigate({ from: this.fullPath }), this.Link = $e.forwardRef((e4, r6) => p2.jsx(ct, { ref: r6, from: this.fullPath, ...e4 })), this.$$typeof = Symbol.for("react.memo");
      }
    };
    __name(createFileRoute, "createFileRoute");
    FileRoute = class {
      static {
        __name(this, "FileRoute");
      }
      constructor(e3, r6) {
        this.path = e3, this.createRoute = (e4) => {
          g2(this.silent, "FileRoute is deprecated and will be removed in the next major version. Use the createFileRoute(path)(options) function instead.");
          const r7 = function(e5) {
            return new dt(e5);
          }(e4);
          return r7.isRoot = false, r7;
        }, this.silent = null == r6 ? void 0 : r6.silent;
      }
    };
    LazyRoute = class {
      static {
        __name(this, "LazyRoute");
      }
      constructor(e3) {
        this.useMatch = (e4) => useMatch({ select: null == e4 ? void 0 : e4.select, from: this.options.id, structuralSharing: null == e4 ? void 0 : e4.structuralSharing }), this.useRouteContext = (e4) => useMatch({ from: this.options.id, select: /* @__PURE__ */ __name((r6) => (null == e4 ? void 0 : e4.select) ? e4.select(r6.context) : r6.context, "select") }), this.useSearch = (e4) => useSearch({ select: null == e4 ? void 0 : e4.select, structuralSharing: null == e4 ? void 0 : e4.structuralSharing, from: this.options.id }), this.useParams = (e4) => useParams({ select: null == e4 ? void 0 : e4.select, structuralSharing: null == e4 ? void 0 : e4.structuralSharing, from: this.options.id }), this.useLoaderDeps = (e4) => useLoaderDeps({ ...e4, from: this.options.id }), this.useLoaderData = (e4) => useLoaderData({ ...e4, from: this.options.id }), this.useNavigate = () => useNavigate({ from: useRouter().routesById[this.options.id].fullPath }), this.options = e3, this.$$typeof = Symbol.for("react.memo");
      }
    };
    __name(lazyRouteComponent, "lazyRouteComponent");
    __name(Transitioner, "Transitioner");
    __name(CatchNotFound, "CatchNotFound");
    __name(DefaultGlobalNotFound, "DefaultGlobalNotFound");
    __name(SafeFragment, "SafeFragment");
    __name(renderRouteNotFound, "renderRouteNotFound");
    __name(ScriptOnce, "ScriptOnce");
    __name(ScrollRestoration, "ScrollRestoration");
    ht = xe.memo(function({ matchId: e3 }) {
      var r6, n5;
      const o3 = useRouter(), s5 = useRouterState({ select: /* @__PURE__ */ __name((r7) => {
        const n6 = r7.matches.find((r8) => r8.id === e3);
        return invariant$1(n6), pick(n6, ["routeId", "ssr", "_displayPending"]);
      }, "select"), structuralSharing: true }), a5 = o3.routesById[s5.routeId], i6 = a5.options.pendingComponent ?? o3.options.defaultPendingComponent, l5 = i6 ? p2.jsx(i6, {}) : null, u4 = a5.options.errorComponent ?? o3.options.defaultErrorComponent, c4 = a5.options.onCatch ?? o3.options.defaultOnCatch, h4 = a5.isRoot ? a5.options.notFoundComponent ?? (null == (r6 = o3.options.notFoundRoute) ? void 0 : r6.options.component) : a5.options.notFoundComponent, y3 = false === s5.ssr || "data-only" === s5.ssr, v3 = (!a5.isRoot || a5.options.wrapInSuspense || y3) && (a5.options.wrapInSuspense ?? i6 ?? ((null == (n5 = a5.options.errorComponent) ? void 0 : n5.preload) || y3)) ? xe.Suspense : SafeFragment, b3 = u4 ? CatchBoundary : SafeFragment, k4 = h4 ? CatchNotFound : SafeFragment, C4 = useRouterState({ select: /* @__PURE__ */ __name((e4) => e4.loadedAt, "select") }), P4 = useRouterState({ select: /* @__PURE__ */ __name((r7) => {
        var n6;
        const o4 = r7.matches.findIndex((r8) => r8.id === e3);
        return null == (n6 = r7.matches[o4 - 1]) ? void 0 : n6.routeId;
      }, "select") }), R4 = a5.isRoot ? a5.options.shellComponent ?? SafeFragment : SafeFragment;
      return p2.jsxs(R4, { children: [p2.jsx(Ue.Provider, { value: e3, children: p2.jsx(v3, { fallback: l5, children: p2.jsx(b3, { getResetKey: /* @__PURE__ */ __name(() => C4, "getResetKey"), errorComponent: u4 || ErrorComponent, onCatch: /* @__PURE__ */ __name((r7, n6) => {
        if (isNotFound$1(r7)) throw r7;
        g2(false, `Error in route match: ${e3}`), null == c4 || c4(r7, n6);
      }, "onCatch"), children: p2.jsx(k4, { fallback: /* @__PURE__ */ __name((e4) => {
        if (!h4 || e4.routeId && e4.routeId !== s5.routeId || !e4.routeId && !a5.isRoot) throw e4;
        return xe.createElement(h4, e4);
      }, "fallback"), children: y3 || s5._displayPending ? p2.jsx(ClientOnly, { fallback: l5, children: p2.jsx(pt, { matchId: e3 }) }) : p2.jsx(pt, { matchId: e3 }) }) }) }) }), P4 === G && o3.options.scrollRestoration ? p2.jsxs(p2.Fragment, { children: [p2.jsx(OnRendered, {}), p2.jsx(ScrollRestoration, {})] }) : null] });
    });
    __name(OnRendered, "OnRendered");
    pt = xe.memo(function({ matchId: e3 }) {
      var r6, n5, o3, s5, a5;
      const i6 = useRouter(), { match: l5, key: u4, routeId: c4 } = useRouterState({ select: /* @__PURE__ */ __name((r7) => {
        const n6 = r7.matches.findIndex((r8) => r8.id === e3), o4 = r7.matches[n6], s6 = o4.routeId, a6 = i6.routesById[s6].options.remountDeps ?? i6.options.defaultRemountDeps, l6 = null == a6 ? void 0 : a6({ routeId: s6, loaderDeps: o4.loaderDeps, params: o4._strictParams, search: o4._strictSearch });
        return { key: l6 ? JSON.stringify(l6) : void 0, routeId: s6, match: pick(o4, ["id", "status", "error", "_forcePending", "_displayPending"]) };
      }, "select"), structuralSharing: true }), h4 = i6.routesById[c4], g3 = xe.useMemo(() => {
        const e4 = h4.options.component ?? i6.options.defaultComponent;
        return e4 ? p2.jsx(e4, {}, u4) : p2.jsx(ft, {});
      }, [u4, h4.options.component, i6.options.defaultComponent]);
      if (l5._displayPending) throw null == (r6 = i6.getMatch(l5.id)) ? void 0 : r6.displayPendingPromise;
      if (l5._forcePending) throw null == (n5 = i6.getMatch(l5.id)) ? void 0 : n5.minPendingPromise;
      if ("pending" === l5.status) {
        const e4 = h4.options.pendingMinMs ?? i6.options.defaultPendingMinMs;
        if (e4 && !(null == (o3 = i6.getMatch(l5.id)) ? void 0 : o3.minPendingPromise) && !i6.isServer) {
          const r7 = createControlledPromise$1();
          Promise.resolve().then(() => {
            i6.updateMatch(l5.id, (e5) => ({ ...e5, minPendingPromise: r7 }));
          }), setTimeout(() => {
            r7.resolve(), i6.updateMatch(l5.id, (e5) => ({ ...e5, minPendingPromise: void 0 }));
          }, e4);
        }
        throw null == (s5 = i6.getMatch(l5.id)) ? void 0 : s5.loadPromise;
      }
      if ("notFound" === l5.status) return invariant$1(isNotFound$1(l5.error)), renderRouteNotFound(i6, h4, l5.error);
      if ("redirected" === l5.status) throw invariant$1(isRedirect$1(l5.error)), null == (a5 = i6.getMatch(l5.id)) ? void 0 : a5.loadPromise;
      if ("error" === l5.status) {
        if (i6.isServer) {
          const e4 = (h4.options.errorComponent ?? i6.options.defaultErrorComponent) || ErrorComponent;
          return p2.jsx(e4, { error: l5.error, reset: void 0, info: { componentStack: "" } });
        }
        throw l5.error;
      }
      return g3;
    });
    ft = xe.memo(function() {
      const e3 = useRouter(), r6 = xe.useContext(Ue), n5 = useRouterState({ select: /* @__PURE__ */ __name((e4) => {
        var n6;
        return null == (n6 = e4.matches.find((e5) => e5.id === r6)) ? void 0 : n6.routeId;
      }, "select") }), o3 = e3.routesById[n5], s5 = useRouterState({ select: /* @__PURE__ */ __name((e4) => {
        const n6 = e4.matches.find((e5) => e5.id === r6);
        return invariant$1(n6), n6.globalNotFound;
      }, "select") }), a5 = useRouterState({ select: /* @__PURE__ */ __name((e4) => {
        var n6;
        const o4 = e4.matches, s6 = o4.findIndex((e5) => e5.id === r6);
        return null == (n6 = o4[s6 + 1]) ? void 0 : n6.id;
      }, "select") }), i6 = e3.options.defaultPendingComponent ? p2.jsx(e3.options.defaultPendingComponent, {}) : null;
      if (s5) return renderRouteNotFound(e3, o3, void 0);
      if (!a5) return null;
      const l5 = p2.jsx(ht, { matchId: a5 });
      return r6 === G ? p2.jsx(xe.Suspense, { fallback: i6, children: l5 }) : l5;
    });
    __name(Matches, "Matches");
    __name(MatchesInner, "MatchesInner");
    Router = class extends RouterCore {
      static {
        __name(this, "Router");
      }
      constructor(e3) {
        super(e3);
      }
    };
    __name(RouterContextProvider, "RouterContextProvider");
    __name(RouterProvider, "RouterProvider");
    __name(Asset, "Asset");
    __name(Script, "Script");
    "undefined" != typeof globalThis && (globalThis.createFileRoute = createFileRoute, globalThis.createLazyFileRoute = function(e3) {
      return "object" == typeof e3 ? new LazyRoute(e3) : (r6) => new LazyRoute({ id: e3, ...r6 });
    });
    useTags = /* @__PURE__ */ __name(() => {
      const e3 = useRouter(), r6 = useRouterState({ select: /* @__PURE__ */ __name((e4) => e4.matches.map((e5) => e5.meta).filter(Boolean), "select") }), n5 = xe.useMemo(() => {
        const e4 = [], n6 = {};
        let o4;
        return [...r6].reverse().forEach((r7) => {
          [...r7].reverse().forEach((r8) => {
            if (r8) if (r8.title) o4 || (o4 = { tag: "title", children: r8.title });
            else {
              const o5 = r8.name ?? r8.property;
              if (o5) {
                if (n6[o5]) return;
                n6[o5] = true;
              }
              e4.push({ tag: "meta", attrs: { ...r8 } });
            }
          });
        }), o4 && e4.push(o4), e4.reverse(), e4;
      }, [r6]), o3 = useRouterState({ select: /* @__PURE__ */ __name((r7) => {
        var n6;
        const o4 = r7.matches.map((e4) => e4.links).filter(Boolean).flat(1).map((e4) => ({ tag: "link", attrs: { ...e4 } })), s6 = null == (n6 = e3.ssr) ? void 0 : n6.manifest;
        return [...o4, ...r7.matches.map((e4) => {
          var r8;
          return (null == (r8 = null == s6 ? void 0 : s6.routes[e4.routeId]) ? void 0 : r8.assets) ?? [];
        }).filter(Boolean).flat(1).filter((e4) => "link" === e4.tag).map((e4) => ({ tag: "link", attrs: { ...e4.attrs, suppressHydrationWarning: true } }))];
      }, "select"), structuralSharing: true }), s5 = useRouterState({ select: /* @__PURE__ */ __name((r7) => {
        const n6 = [];
        return r7.matches.map((r8) => e3.looseRoutesById[r8.routeId]).forEach((r8) => {
          var o4, s6, a5, i6;
          return null == (i6 = null == (a5 = null == (s6 = null == (o4 = e3.ssr) ? void 0 : o4.manifest) ? void 0 : s6.routes[r8.id]) ? void 0 : a5.preloads) ? void 0 : i6.filter(Boolean).forEach((e4) => {
            n6.push({ tag: "link", attrs: { rel: "modulepreload", href: e4 } });
          });
        }), n6;
      }, "select"), structuralSharing: true });
      return function(e4, r7) {
        const n6 = /* @__PURE__ */ new Set();
        return e4.filter((e5) => {
          const o4 = r7(e5);
          return !n6.has(o4) && (n6.add(o4), true);
        });
      }([...n5, ...s5, ...o3, ...useRouterState({ select: /* @__PURE__ */ __name((e4) => e4.matches.map((e5) => e5.styles).flat(1).filter(Boolean).map(({ children: e5, ...r7 }) => ({ tag: "style", attrs: r7, children: e5 })), "select"), structuralSharing: true }), ...useRouterState({ select: /* @__PURE__ */ __name((e4) => e4.matches.map((e5) => e5.headScripts).flat(1).filter(Boolean).map(({ children: e5, ...r7 }) => ({ tag: "script", attrs: { ...r7 }, children: e5 })), "select"), structuralSharing: true })], (e4) => JSON.stringify(e4));
    }, "useTags");
    __name(HeadContent, "HeadContent");
    Scripts = /* @__PURE__ */ __name(() => {
      const e3 = useRouter(), r6 = useRouterState({ select: /* @__PURE__ */ __name((r7) => {
        var n6;
        const o4 = [], s5 = null == (n6 = e3.ssr) ? void 0 : n6.manifest;
        return s5 ? (r7.matches.map((r8) => e3.looseRoutesById[r8.routeId]).forEach((e4) => {
          var r8, n7;
          return null == (n7 = null == (r8 = s5.routes[e4.id]) ? void 0 : r8.assets) ? void 0 : n7.filter((e5) => "script" === e5.tag).forEach((e5) => {
            o4.push({ tag: "script", attrs: e5.attrs, children: e5.children });
          });
        }), o4) : [];
      }, "select"), structuralSharing: true }), { scripts: n5 } = useRouterState({ select: /* @__PURE__ */ __name((e4) => ({ scripts: e4.matches.map((e5) => e5.scripts).flat(1).filter(Boolean).map(({ children: e5, ...r7 }) => ({ tag: "script", attrs: { ...r7, suppressHydrationWarning: true }, children: e5 })) }), "select"), structuralSharing: true }), o3 = [...n5, ...r6];
      return p2.jsx(p2.Fragment, { children: o3.map((e4, r7) => xe.createElement(Asset, { ...e4, key: `tsr-scripts-${e4.tag}-${r7}` })) });
    }, "Scripts");
    mt = /(<body)/;
    gt = /(<\/body>)/;
    yt = /(<\/html>)/;
    vt = /(<head.*?>)/;
    bt = /(<\/[a-zA-Z][\w:.-]*?>)/g;
    St = new TextDecoder();
    __name(transformStreamWithRouter, "transformStreamWithRouter");
    kt = {};
    Ct = {};
    wt = xe;
    Pt = tt;
    Rt = Symbol.for("react.transitional.element");
    xt = Symbol.for("react.portal");
    $t = Symbol.for("react.fragment");
    Tt = Symbol.for("react.strict_mode");
    Ft = Symbol.for("react.profiler");
    Et = Symbol.for("react.provider");
    _t = Symbol.for("react.consumer");
    It = Symbol.for("react.context");
    At = Symbol.for("react.forward_ref");
    Mt = Symbol.for("react.suspense");
    Ot = Symbol.for("react.suspense_list");
    Lt = Symbol.for("react.memo");
    jt = Symbol.for("react.lazy");
    Bt = Symbol.for("react.scope");
    Nt = Symbol.for("react.activity");
    zt = Symbol.for("react.legacy_hidden");
    Dt = Symbol.for("react.memo_cache_sentinel");
    Ht = Symbol.for("react.view_transition");
    Wt = Symbol.iterator;
    Vt = Array.isArray;
    __name(murmurhash3_32_gc$1, "murmurhash3_32_gc$1");
    __name(handleErrorInNextTick, "handleErrorInNextTick");
    qt = Promise;
    Ut = "function" == typeof queueMicrotask ? queueMicrotask : function(e3) {
      qt.resolve(null).then(e3).catch(handleErrorInNextTick);
    };
    Kt = null;
    Gt = 0;
    __name(writeChunk, "writeChunk");
    __name(writeChunkAndReturn, "writeChunkAndReturn");
    __name(completeWriting, "completeWriting");
    Jt = new TextEncoder();
    __name(stringToChunk, "stringToChunk");
    __name(stringToPrecomputedChunk, "stringToPrecomputedChunk");
    __name(closeWithError, "closeWithError");
    Xt = Object.assign;
    Qt = Object.prototype.hasOwnProperty;
    Yt = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$");
    Zt = {};
    er = {};
    __name(isAttributeNameSafe$1, "isAttributeNameSafe$1");
    tr = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    rr = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]);
    or = /["'&<>]/;
    __name(escapeTextForBrowser$1, "escapeTextForBrowser$1");
    sr = /([A-Z])/g;
    ar2 = /^ms-/;
    ir = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    __name(sanitizeURL$1, "sanitizeURL$1");
    lr = wt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    ur = Pt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    dr = { pending: false, data: null, method: null, action: null };
    hr = ur.d;
    ur.d = { f: hr.f, r: hr.r, D: /* @__PURE__ */ __name(function(e3) {
      var r6 = resolveRequest();
      if (r6) {
        var n5 = r6.resumableState, o3 = r6.renderState;
        if ("string" == typeof e3 && e3) {
          var s5, a5;
          if (!n5.dnsResources.hasOwnProperty(e3)) n5.dnsResources[e3] = null, (a5 = (n5 = o3.headers) && 0 < n5.remainingCapacity) && (s5 = "<" + ("" + e3).replace(mo, escapeHrefForLinkHeaderURLContextReplacer$1) + ">; rel=dns-prefetch", a5 = 0 <= (n5.remainingCapacity -= s5.length + 2)), a5 ? (o3.resets.dns[e3] = null, n5.preconnects && (n5.preconnects += ", "), n5.preconnects += s5) : (pushLinkImpl$1(s5 = [], { href: e3, rel: "dns-prefetch" }), o3.preconnects.add(s5));
          enqueueFlush$1(r6);
        }
      } else hr.D(e3);
    }, "D"), C: /* @__PURE__ */ __name(function(e3, r6) {
      var n5 = resolveRequest();
      if (n5) {
        var o3 = n5.resumableState, s5 = n5.renderState;
        if ("string" == typeof e3 && e3) {
          var a5 = "use-credentials" === r6 ? "credentials" : "string" == typeof r6 ? "anonymous" : "default";
          if (!o3.connectResources[a5].hasOwnProperty(e3)) {
            var i6, l5;
            if (o3.connectResources[a5][e3] = null, l5 = (o3 = s5.headers) && 0 < o3.remainingCapacity) {
              if (l5 = "<" + ("" + e3).replace(mo, escapeHrefForLinkHeaderURLContextReplacer$1) + ">; rel=preconnect", "string" == typeof r6) l5 += '; crossorigin="' + ("" + r6).replace(go, escapeStringForLinkHeaderQuotedParamValueContextReplacer$1) + '"';
              i6 = l5, l5 = 0 <= (o3.remainingCapacity -= i6.length + 2);
            }
            l5 ? (s5.resets.connect[a5][e3] = null, o3.preconnects && (o3.preconnects += ", "), o3.preconnects += i6) : (pushLinkImpl$1(a5 = [], { rel: "preconnect", href: e3, crossOrigin: r6 }), s5.preconnects.add(a5));
          }
          enqueueFlush$1(n5);
        }
      } else hr.C(e3, r6);
    }, "C"), L: /* @__PURE__ */ __name(function(e3, r6, n5) {
      var o3 = resolveRequest();
      if (o3) {
        var s5 = o3.resumableState, a5 = o3.renderState;
        if (r6 && e3) {
          switch (r6) {
            case "image":
              if (n5) var i6 = n5.imageSrcSet, l5 = n5.imageSizes, u4 = n5.fetchPriority;
              var c4, h4 = i6 ? i6 + "\n" + (l5 || "") : e3;
              if (s5.imageResources.hasOwnProperty(h4)) return;
              s5.imageResources[h4] = pr, (s5 = a5.headers) && 0 < s5.remainingCapacity && "string" != typeof i6 && "high" === u4 && (c4 = getPreloadAsHeader$1(e3, r6, n5), 0 <= (s5.remainingCapacity -= c4.length + 2)) ? (a5.resets.image[h4] = pr, s5.highImagePreloads && (s5.highImagePreloads += ", "), s5.highImagePreloads += c4) : (pushLinkImpl$1(s5 = [], Xt({ rel: "preload", href: i6 ? void 0 : e3, as: r6 }, n5)), "high" === u4 ? a5.highImagePreloads.add(s5) : (a5.bulkPreloads.add(s5), a5.preloads.images.set(h4, s5)));
              break;
            case "style":
              if (s5.styleResources.hasOwnProperty(e3)) return;
              pushLinkImpl$1(i6 = [], Xt({ rel: "preload", href: e3, as: r6 }, n5)), s5.styleResources[e3] = !n5 || "string" != typeof n5.crossOrigin && "string" != typeof n5.integrity ? pr : [n5.crossOrigin, n5.integrity], a5.preloads.stylesheets.set(e3, i6), a5.bulkPreloads.add(i6);
              break;
            case "script":
              if (s5.scriptResources.hasOwnProperty(e3)) return;
              i6 = [], a5.preloads.scripts.set(e3, i6), a5.bulkPreloads.add(i6), pushLinkImpl$1(i6, Xt({ rel: "preload", href: e3, as: r6 }, n5)), s5.scriptResources[e3] = !n5 || "string" != typeof n5.crossOrigin && "string" != typeof n5.integrity ? pr : [n5.crossOrigin, n5.integrity];
              break;
            default:
              if (s5.unknownResources.hasOwnProperty(r6)) {
                if ((i6 = s5.unknownResources[r6]).hasOwnProperty(e3)) return;
              } else i6 = {}, s5.unknownResources[r6] = i6;
              if (i6[e3] = pr, (s5 = a5.headers) && 0 < s5.remainingCapacity && "font" === r6 && (h4 = getPreloadAsHeader$1(e3, r6, n5), 0 <= (s5.remainingCapacity -= h4.length + 2))) a5.resets.font[e3] = pr, s5.fontPreloads && (s5.fontPreloads += ", "), s5.fontPreloads += h4;
              else if ("font" === (pushLinkImpl$1(s5 = [], e3 = Xt({ rel: "preload", href: e3, as: r6 }, n5)), r6)) a5.fontPreloads.add(s5);
              else a5.bulkPreloads.add(s5);
          }
          enqueueFlush$1(o3);
        }
      } else hr.L(e3, r6, n5);
    }, "L"), m: /* @__PURE__ */ __name(function(e3, r6) {
      var n5 = resolveRequest();
      if (n5) {
        var o3 = n5.resumableState, s5 = n5.renderState;
        if (e3) {
          var a5 = r6 && "string" == typeof r6.as ? r6.as : "script";
          if ("script" === a5) {
            if (o3.moduleScriptResources.hasOwnProperty(e3)) return;
            a5 = [], o3.moduleScriptResources[e3] = !r6 || "string" != typeof r6.crossOrigin && "string" != typeof r6.integrity ? pr : [r6.crossOrigin, r6.integrity], s5.preloads.moduleScripts.set(e3, a5);
          } else {
            if (o3.moduleUnknownResources.hasOwnProperty(a5)) {
              var i6 = o3.unknownResources[a5];
              if (i6.hasOwnProperty(e3)) return;
            } else i6 = {}, o3.moduleUnknownResources[a5] = i6;
            a5 = [], i6[e3] = pr;
          }
          pushLinkImpl$1(a5, Xt({ rel: "modulepreload", href: e3 }, r6)), s5.bulkPreloads.add(a5), enqueueFlush$1(n5);
        }
      } else hr.m(e3, r6);
    }, "m"), X: /* @__PURE__ */ __name(function(e3, r6) {
      var n5 = resolveRequest();
      if (n5) {
        var o3 = n5.resumableState, s5 = n5.renderState;
        if (e3) {
          var a5 = o3.scriptResources.hasOwnProperty(e3) ? o3.scriptResources[e3] : void 0;
          null !== a5 && (o3.scriptResources[e3] = null, r6 = Xt({ src: e3, async: true }, r6), a5 && (2 === a5.length && adoptPreloadCredentials$1(r6, a5), e3 = s5.preloads.scripts.get(e3)) && (e3.length = 0), e3 = [], s5.scripts.add(e3), pushScriptImpl$1(e3, r6), enqueueFlush$1(n5));
        }
      } else hr.X(e3, r6);
    }, "X"), S: /* @__PURE__ */ __name(function(e3, r6, n5) {
      var o3 = resolveRequest();
      if (o3) {
        var s5 = o3.resumableState, a5 = o3.renderState;
        if (e3) {
          r6 = r6 || "default";
          var i6 = a5.styles.get(r6), l5 = s5.styleResources.hasOwnProperty(e3) ? s5.styleResources[e3] : void 0;
          null !== l5 && (s5.styleResources[e3] = null, i6 || (i6 = { precedence: stringToChunk(escapeTextForBrowser$1(r6)), rules: [], hrefs: [], sheets: /* @__PURE__ */ new Map() }, a5.styles.set(r6, i6)), r6 = { state: 0, props: Xt({ rel: "stylesheet", href: e3, "data-precedence": r6 }, n5) }, l5 && (2 === l5.length && adoptPreloadCredentials$1(r6.props, l5), (a5 = a5.preloads.stylesheets.get(e3)) && 0 < a5.length ? a5.length = 0 : r6.state = 1), i6.sheets.set(e3, r6), enqueueFlush$1(o3));
        }
      } else hr.S(e3, r6, n5);
    }, "S"), M: /* @__PURE__ */ __name(function(e3, r6) {
      var n5 = resolveRequest();
      if (n5) {
        var o3 = n5.resumableState, s5 = n5.renderState;
        if (e3) {
          var a5 = o3.moduleScriptResources.hasOwnProperty(e3) ? o3.moduleScriptResources[e3] : void 0;
          null !== a5 && (o3.moduleScriptResources[e3] = null, r6 = Xt({ src: e3, type: "module", async: true }, r6), a5 && (2 === a5.length && adoptPreloadCredentials$1(r6, a5), e3 = s5.preloads.moduleScripts.get(e3)) && (e3.length = 0), e3 = [], s5.scripts.add(e3), pushScriptImpl$1(e3, r6), enqueueFlush$1(n5));
        }
      } else hr.M(e3, r6);
    }, "M") };
    pr = [];
    stringToPrecomputedChunk('"></template>');
    mr = stringToPrecomputedChunk("<script>");
    gr = stringToPrecomputedChunk("<\/script>");
    yr = stringToPrecomputedChunk('<script src="');
    vr = stringToPrecomputedChunk('<script type="module" src="');
    br = stringToPrecomputedChunk('" nonce="');
    Sr = stringToPrecomputedChunk('" integrity="');
    kr = stringToPrecomputedChunk('" crossorigin="');
    Cr = stringToPrecomputedChunk('" async=""><\/script>');
    wr = /(<\/|<)(s)(cript)/gi;
    __name(scriptReplacer$1, "scriptReplacer$1");
    Pr = stringToPrecomputedChunk('<script type="importmap">');
    Rr = stringToPrecomputedChunk("<\/script>");
    __name(createRenderState$1, "createRenderState$1");
    __name(createResumableState$1, "createResumableState$1");
    __name(createPreambleState$1, "createPreambleState$1");
    __name(createFormatContext$1, "createFormatContext$1");
    __name(createRootFormatContext, "createRootFormatContext");
    __name(getChildFormatContext$1, "getChildFormatContext$1");
    xr = stringToPrecomputedChunk("<!-- -->");
    __name(pushTextInstance$1, "pushTextInstance$1");
    $r = /* @__PURE__ */ new Map();
    Tr = stringToPrecomputedChunk(' style="');
    Fr = stringToPrecomputedChunk(":");
    Er = stringToPrecomputedChunk(";");
    __name(pushStyleAttribute$1, "pushStyleAttribute$1");
    _r = stringToPrecomputedChunk(" ");
    Ir = stringToPrecomputedChunk('="');
    Ar = stringToPrecomputedChunk('"');
    Mr = stringToPrecomputedChunk('=""');
    __name(pushBooleanAttribute$1, "pushBooleanAttribute$1");
    __name(pushStringAttribute$1, "pushStringAttribute$1");
    Or = stringToPrecomputedChunk(escapeTextForBrowser$1("javascript:throw new Error('React form unexpectedly submitted.')"));
    Lr = stringToPrecomputedChunk('<input type="hidden"');
    __name(pushAdditionalFormField$1, "pushAdditionalFormField$1");
    __name(validateAdditionalFormField$1, "validateAdditionalFormField$1");
    __name(getCustomFormFields$1, "getCustomFormFields$1");
    __name(pushFormActionAttribute$1, "pushFormActionAttribute$1");
    __name(pushAttribute$1, "pushAttribute$1");
    jr = stringToPrecomputedChunk(">");
    Br = stringToPrecomputedChunk("/>");
    __name(pushInnerHTML$1, "pushInnerHTML$1");
    zr = stringToPrecomputedChunk(' selected=""');
    Dr = stringToPrecomputedChunk(`addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});`);
    __name(injectFormReplayingRuntime$1, "injectFormReplayingRuntime$1");
    Wr = stringToPrecomputedChunk("<!--F!-->");
    Vr = stringToPrecomputedChunk("<!--F-->");
    __name(pushLinkImpl$1, "pushLinkImpl$1");
    qr = /(<\/|<)(s)(tyle)/gi;
    __name(styleReplacer$1, "styleReplacer$1");
    __name(pushSelfClosing$1, "pushSelfClosing$1");
    __name(pushTitleImpl$1, "pushTitleImpl$1");
    __name(pushScriptImpl$1, "pushScriptImpl$1");
    __name(pushStartSingletonElement$1, "pushStartSingletonElement$1");
    __name(pushStartGenericElement$1, "pushStartGenericElement$1");
    Ur = stringToPrecomputedChunk("\n");
    Kr = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
    Gr = /* @__PURE__ */ new Map();
    __name(startChunkForTag$1, "startChunkForTag$1");
    Jr = stringToPrecomputedChunk("<!DOCTYPE html>");
    __name(pushStartInstance$1, "pushStartInstance$1");
    Xr = /* @__PURE__ */ new Map();
    __name(endChunkForTag$1, "endChunkForTag$1");
    __name(hoistPreambleState$1, "hoistPreambleState$1");
    __name(writeBootstrap$1, "writeBootstrap$1");
    Qr = stringToPrecomputedChunk('<template id="');
    Yr = stringToPrecomputedChunk('"></template>');
    Zr = stringToPrecomputedChunk("<!--$-->");
    en = stringToPrecomputedChunk('<!--$?--><template id="');
    tn = stringToPrecomputedChunk('"></template>');
    rn = stringToPrecomputedChunk("<!--$!-->");
    nn = stringToPrecomputedChunk("<!--/$-->");
    on2 = stringToPrecomputedChunk("<template");
    sn = stringToPrecomputedChunk('"');
    an = stringToPrecomputedChunk(' data-dgst="');
    stringToPrecomputedChunk(' data-msg="'), stringToPrecomputedChunk(' data-stck="'), stringToPrecomputedChunk(' data-cstck="');
    ln = stringToPrecomputedChunk("></template>");
    __name(writeStartPendingSuspenseBoundary$1, "writeStartPendingSuspenseBoundary$1");
    un = stringToPrecomputedChunk("<!--");
    cn = stringToPrecomputedChunk("-->");
    __name(writePreambleContribution$1, "writePreambleContribution$1");
    dn = stringToPrecomputedChunk('<div hidden id="');
    hn = stringToPrecomputedChunk('">');
    pn = stringToPrecomputedChunk("</div>");
    fn = stringToPrecomputedChunk('<svg aria-hidden="true" style="display:none" id="');
    mn = stringToPrecomputedChunk('">');
    gn = stringToPrecomputedChunk("</svg>");
    yn = stringToPrecomputedChunk('<math aria-hidden="true" style="display:none" id="');
    vn = stringToPrecomputedChunk('">');
    bn = stringToPrecomputedChunk("</math>");
    Sn = stringToPrecomputedChunk('<table hidden id="');
    kn = stringToPrecomputedChunk('">');
    Cn = stringToPrecomputedChunk("</table>");
    wn = stringToPrecomputedChunk('<table hidden><tbody id="');
    Pn = stringToPrecomputedChunk('">');
    Rn = stringToPrecomputedChunk("</tbody></table>");
    xn = stringToPrecomputedChunk('<table hidden><tr id="');
    $n = stringToPrecomputedChunk('">');
    Tn = stringToPrecomputedChunk("</tr></table>");
    Fn = stringToPrecomputedChunk('<table hidden><colgroup id="');
    En = stringToPrecomputedChunk('">');
    _n = stringToPrecomputedChunk("</colgroup></table>");
    In = stringToPrecomputedChunk('$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("');
    An = stringToPrecomputedChunk('$RS("');
    Mn = stringToPrecomputedChunk('","');
    On = stringToPrecomputedChunk('")<\/script>');
    stringToPrecomputedChunk('<template data-rsi="" data-sid="'), stringToPrecomputedChunk('" data-pid="');
    Ln = stringToPrecomputedChunk('$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RC("');
    jn = stringToPrecomputedChunk('$RC("');
    Bn = stringToPrecomputedChunk('$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RM=new Map;\n$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=\nd;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,\nt,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("');
    Nn = stringToPrecomputedChunk('$RM=new Map;\n$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=\nd;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,\nt,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("');
    zn = stringToPrecomputedChunk('$RR("');
    Dn = stringToPrecomputedChunk('","');
    Hn = stringToPrecomputedChunk('",');
    Wn = stringToPrecomputedChunk('"');
    Vn = stringToPrecomputedChunk(")<\/script>");
    stringToPrecomputedChunk('<template data-rci="" data-bid="'), stringToPrecomputedChunk('<template data-rri="" data-bid="'), stringToPrecomputedChunk('" data-sid="'), stringToPrecomputedChunk('" data-sty="');
    qn = stringToPrecomputedChunk('$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("');
    Un = stringToPrecomputedChunk('$RX("');
    Kn = stringToPrecomputedChunk('"');
    Gn = stringToPrecomputedChunk(",");
    Jn = stringToPrecomputedChunk(")<\/script>");
    stringToPrecomputedChunk('<template data-rxi="" data-bid="'), stringToPrecomputedChunk('" data-dgst="'), stringToPrecomputedChunk('" data-msg="'), stringToPrecomputedChunk('" data-stck="'), stringToPrecomputedChunk('" data-cstck="');
    Xn = /[<\u2028\u2029]/g;
    __name(escapeJSStringsForInstructionScripts$1, "escapeJSStringsForInstructionScripts$1");
    Qn = /[&><\u2028\u2029]/g;
    __name(escapeJSObjectForInstructionScripts$1, "escapeJSObjectForInstructionScripts$1");
    Yn = stringToPrecomputedChunk('<style media="not all" data-precedence="');
    Zn = stringToPrecomputedChunk('" data-href="');
    eo = stringToPrecomputedChunk('">');
    to = stringToPrecomputedChunk("</style>");
    ro = false;
    no = true;
    __name(flushStyleTagsLateForBoundary$1, "flushStyleTagsLateForBoundary$1");
    __name(hasStylesToHoist$1, "hasStylesToHoist$1");
    __name(writeHoistablesForBoundary$1, "writeHoistablesForBoundary$1");
    __name(flushResource$1, "flushResource$1");
    oo = [];
    __name(flushStyleInPreamble$1, "flushStyleInPreamble$1");
    so = stringToPrecomputedChunk('<style data-precedence="');
    ao = stringToPrecomputedChunk('" data-href="');
    io = stringToPrecomputedChunk(" ");
    lo = stringToPrecomputedChunk('">');
    uo = stringToPrecomputedChunk("</style>");
    __name(flushStylesInPreamble$1, "flushStylesInPreamble$1");
    __name(preloadLateStyle$1, "preloadLateStyle$1");
    __name(preloadLateStyles$1, "preloadLateStyles$1");
    co = stringToPrecomputedChunk("[");
    ho = stringToPrecomputedChunk(",[");
    po = stringToPrecomputedChunk(",");
    fo = stringToPrecomputedChunk("]");
    __name(writeStyleResourceAttributeInJS$1, "writeStyleResourceAttributeInJS$1");
    __name(createHoistableState$1, "createHoistableState$1");
    __name(adoptPreloadCredentials$1, "adoptPreloadCredentials$1");
    __name(getPreloadAsHeader$1, "getPreloadAsHeader$1");
    mo = /[<>\r\n]/g;
    __name(escapeHrefForLinkHeaderURLContextReplacer$1, "escapeHrefForLinkHeaderURLContextReplacer$1");
    go = /["';,\r\n]/g;
    __name(escapeStringForLinkHeaderQuotedParamValueContextReplacer$1, "escapeStringForLinkHeaderQuotedParamValueContextReplacer$1");
    __name(hoistStyleQueueDependency$1, "hoistStyleQueueDependency$1");
    __name(hoistStylesheetDependency$1, "hoistStylesheetDependency$1");
    yo = Function.prototype.bind;
    vo = "function" == typeof AsyncLocalStorage;
    bo = vo ? new AsyncLocalStorage() : null;
    So = Symbol.for("react.client.reference");
    __name(getComponentNameFromType$1, "getComponentNameFromType$1");
    ko = {};
    Co = null;
    __name(popToNearestCommonAncestor$1, "popToNearestCommonAncestor$1");
    __name(popAllPrevious$1, "popAllPrevious$1");
    __name(pushAllNext$1, "pushAllNext$1");
    __name(popPreviousToCommonLevel$1, "popPreviousToCommonLevel$1");
    __name(popNextToCommonLevel$1, "popNextToCommonLevel$1");
    __name(switchContext$1, "switchContext$1");
    wo = { enqueueSetState: /* @__PURE__ */ __name(function(e3, r6) {
      null !== (e3 = e3._reactInternals).queue && e3.queue.push(r6);
    }, "enqueueSetState"), enqueueReplaceState: /* @__PURE__ */ __name(function(e3, r6) {
      (e3 = e3._reactInternals).replace = true, e3.queue = [r6];
    }, "enqueueReplaceState"), enqueueForceUpdate: /* @__PURE__ */ __name(function() {
    }, "enqueueForceUpdate") };
    Po = { id: 1, overflow: "" };
    __name(pushTreeContext$1, "pushTreeContext$1");
    Ro = Math.clz32 ? Math.clz32 : function(e3) {
      return e3 >>>= 0, 0 === e3 ? 32 : 31 - (xo(e3) / $o | 0) | 0;
    };
    xo = Math.log;
    $o = Math.LN2;
    To = Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`.");
    __name(noop$2$1, "noop$2$1");
    Fo = null;
    __name(getSuspendedThenable$1, "getSuspendedThenable$1");
    Eo = "function" == typeof Object.is ? Object.is : function(e3, r6) {
      return e3 === r6 && (0 !== e3 || 1 / e3 == 1 / r6) || e3 != e3 && r6 != r6;
    };
    _o = null;
    Io = null;
    Ao = null;
    Mo = null;
    Oo = null;
    Lo = null;
    jo = false;
    Bo = false;
    No = 0;
    zo = 0;
    Do = -1;
    Ho = 0;
    Wo = null;
    Vo = null;
    qo = 0;
    __name(resolveCurrentlyRenderingComponent$1, "resolveCurrentlyRenderingComponent$1");
    __name(createHook$1, "createHook$1");
    __name(createWorkInProgressHook$1, "createWorkInProgressHook$1");
    __name(getThenableStateAfterSuspending$1, "getThenableStateAfterSuspending$1");
    __name(resetHooksState$1, "resetHooksState$1");
    __name(basicStateReducer$1, "basicStateReducer$1");
    __name(useReducer$1, "useReducer$1");
    __name(useMemo$1, "useMemo$1");
    __name(dispatchAction$1, "dispatchAction$1");
    __name(unsupportedStartTransition$1, "unsupportedStartTransition$1");
    __name(unsupportedSetOptimisticState$1, "unsupportedSetOptimisticState$1");
    __name(useActionState$1, "useActionState$1");
    __name(unwrapThenable$1, "unwrapThenable$1");
    __name(unsupportedRefresh$1, "unsupportedRefresh$1");
    __name(noop$1$1, "noop$1$1");
    Go = { readContext: /* @__PURE__ */ __name(function(e3) {
      return e3._currentValue;
    }, "readContext"), use: /* @__PURE__ */ __name(function(e3) {
      if (null !== e3 && "object" == typeof e3) {
        if ("function" == typeof e3.then) return unwrapThenable$1(e3);
        if (e3.$$typeof === It) return e3._currentValue;
      }
      throw Error("An unsupported type was passed to use(): " + String(e3));
    }, "use"), useContext: /* @__PURE__ */ __name(function(e3) {
      return resolveCurrentlyRenderingComponent$1(), e3._currentValue;
    }, "useContext"), useMemo: useMemo$1, useReducer: useReducer$1, useRef: /* @__PURE__ */ __name(function(e3) {
      _o = resolveCurrentlyRenderingComponent$1();
      var r6 = (Lo = createWorkInProgressHook$1()).memoizedState;
      return null === r6 ? (e3 = { current: e3 }, Lo.memoizedState = e3) : r6;
    }, "useRef"), useState: /* @__PURE__ */ __name(function(e3) {
      return useReducer$1(basicStateReducer$1, e3);
    }, "useState"), useInsertionEffect: noop$1$1, useLayoutEffect: noop$1$1, useCallback: /* @__PURE__ */ __name(function(e3, r6) {
      return useMemo$1(function() {
        return e3;
      }, r6);
    }, "useCallback"), useImperativeHandle: noop$1$1, useEffect: noop$1$1, useDebugValue: noop$1$1, useDeferredValue: /* @__PURE__ */ __name(function(e3, r6) {
      return resolveCurrentlyRenderingComponent$1(), void 0 !== r6 ? r6 : e3;
    }, "useDeferredValue"), useTransition: /* @__PURE__ */ __name(function() {
      return resolveCurrentlyRenderingComponent$1(), [false, unsupportedStartTransition$1];
    }, "useTransition"), useId: /* @__PURE__ */ __name(function() {
      var e3 = Io.treeContext, r6 = e3.overflow;
      e3 = ((e3 = e3.id) & ~(1 << 32 - Ro(e3) - 1)).toString(32) + r6;
      var n5 = Jo;
      if (null === n5) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      return r6 = No++, e3 = "\xAB" + n5.idPrefix + "R" + e3, 0 < r6 && (e3 += "H" + r6.toString(32)), e3 + "\xBB";
    }, "useId"), useSyncExternalStore: /* @__PURE__ */ __name(function(e3, r6, n5) {
      if (void 0 === n5) throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return n5();
    }, "useSyncExternalStore"), useOptimistic: /* @__PURE__ */ __name(function(e3) {
      return resolveCurrentlyRenderingComponent$1(), [e3, unsupportedSetOptimisticState$1];
    }, "useOptimistic"), useActionState: useActionState$1, useFormState: useActionState$1, useHostTransitionStatus: /* @__PURE__ */ __name(function() {
      return resolveCurrentlyRenderingComponent$1(), dr;
    }, "useHostTransitionStatus"), useMemoCache: /* @__PURE__ */ __name(function(e3) {
      for (var r6 = Array(e3), n5 = 0; n5 < e3; n5++) r6[n5] = Dt;
      return r6;
    }, "useMemoCache"), useCacheRefresh: /* @__PURE__ */ __name(function() {
      return unsupportedRefresh$1;
    }, "useCacheRefresh") };
    Jo = null;
    Xo = { getCacheForType: /* @__PURE__ */ __name(function() {
      throw Error("Not implemented.");
    }, "getCacheForType") };
    __name(prepareStackTrace, "prepareStackTrace");
    __name(describeBuiltInComponentFrame$1, "describeBuiltInComponentFrame$1");
    Qo = false;
    __name(describeNativeComponentFrame$1, "describeNativeComponentFrame$1");
    __name(describeComponentStackByType$1, "describeComponentStackByType$1");
    __name(defaultErrorHandler$1, "defaultErrorHandler$1");
    __name(noop$3, "noop$3");
    __name(RequestInstance$1, "RequestInstance$1");
    __name(createRequest$1, "createRequest$1");
    Yo = null;
    __name(resolveRequest, "resolveRequest");
    __name(pingTask$1, "pingTask$1");
    __name(createSuspenseBoundary$1, "createSuspenseBoundary$1");
    __name(createRenderTask$1, "createRenderTask$1");
    __name(createReplayTask$1, "createReplayTask$1");
    __name(createPendingSegment$1, "createPendingSegment$1");
    __name(pushComponentStack$1, "pushComponentStack$1");
    __name(getThrownInfo$1, "getThrownInfo$1");
    __name(logRecoverableError$1, "logRecoverableError$1");
    __name(fatalError$1, "fatalError$1");
    __name(renderWithHooks$1, "renderWithHooks$1");
    __name(finishFunctionComponent$1, "finishFunctionComponent$1");
    __name(renderElement$1, "renderElement$1");
    __name(resumeNode$1, "resumeNode$1");
    __name(renderNodeDestructive$1, "renderNodeDestructive$1");
    __name(retryNode$1, "retryNode$1");
    __name(renderChildrenArray$1, "renderChildrenArray$1");
    __name(untrackBoundary$1, "untrackBoundary$1");
    __name(spawnNewSuspendedReplayTask$1, "spawnNewSuspendedReplayTask$1");
    __name(spawnNewSuspendedRenderTask$1, "spawnNewSuspendedRenderTask$1");
    __name(renderNode$1, "renderNode$1");
    __name(abortTaskSoft$1, "abortTaskSoft$1");
    __name(abortRemainingReplayNodes$1, "abortRemainingReplayNodes$1");
    __name(abortTask$1, "abortTask$1");
    __name(safelyEmitEarlyPreloads$1, "safelyEmitEarlyPreloads$1");
    __name(completeShell$1, "completeShell$1");
    __name(completeAll$1, "completeAll$1");
    __name(queueCompletedSegment$1, "queueCompletedSegment$1");
    __name(finishedTask$1, "finishedTask$1");
    __name(performWork$1, "performWork$1");
    __name(preparePreambleFromSubtree$1, "preparePreambleFromSubtree$1");
    __name(preparePreambleFromSegment$1, "preparePreambleFromSegment$1");
    __name(preparePreamble$1, "preparePreamble$1");
    __name(flushSubtree$1, "flushSubtree$1");
    __name(flushSegment$1, "flushSegment$1");
    __name(flushSegmentContainer$1, "flushSegmentContainer$1");
    __name(flushCompletedBoundary$1, "flushCompletedBoundary$1");
    __name(flushPartiallyCompletedSegment$1, "flushPartiallyCompletedSegment$1");
    __name(flushCompletedQueues$1, "flushCompletedQueues$1");
    __name(startWork, "startWork");
    __name(enqueueEarlyPreloadsAfterInitialWork, "enqueueEarlyPreloadsAfterInitialWork");
    __name(enqueueFlush$1, "enqueueFlush$1");
    __name(startFlowing$1, "startFlowing$1");
    __name(abort$1, "abort$1");
    __name(ensureCorrectIsomorphicReactVersion, "ensureCorrectIsomorphicReactVersion");
    ensureCorrectIsomorphicReactVersion(), ensureCorrectIsomorphicReactVersion(), Ct.prerender = function(e3, r6) {
      return new Promise(function(n5, o3) {
        var s5, a5 = r6 ? r6.onHeaders : void 0;
        a5 && (s5 = /* @__PURE__ */ __name(function(e4) {
          a5(new Headers(e4));
        }, "s"));
        var i6 = createResumableState$1(r6 ? r6.identifierPrefix : void 0, r6 && r6.unstable_externalRuntimeSrc, r6 ? r6.bootstrapScriptContent : void 0, r6 ? r6.bootstrapScripts : void 0, r6 ? r6.bootstrapModules : void 0), l5 = function(e4, r7, n6, o4, s6, a6, i7, l6, u5, c4, h4) {
          return (e4 = createRequest$1(e4, r7, n6, o4, s6, a6, i7, l6, u5, c4, h4, void 0)).trackedPostpones = { workingMap: /* @__PURE__ */ new Map(), rootNodes: [], rootSlots: null }, e4;
        }(e3, i6, createRenderState$1(i6, void 0, r6 ? r6.unstable_externalRuntimeSrc : void 0, r6 ? r6.importMap : void 0, s5, r6 ? r6.maxHeadersLength : void 0), createRootFormatContext(r6 ? r6.namespaceURI : void 0), r6 ? r6.progressiveChunkSize : void 0, r6 ? r6.onError : void 0, function() {
          var e4 = { prelude: new ReadableStream({ type: "bytes", pull: /* @__PURE__ */ __name(function(e5) {
            startFlowing$1(l5, e5);
          }, "pull"), cancel: /* @__PURE__ */ __name(function(e5) {
            l5.destination = null, abort$1(l5, e5);
          }, "cancel") }, { highWaterMark: 0 }) };
          n5(e4);
        }, void 0, void 0, o3, r6 ? r6.onPostpone : void 0);
        if (r6 && r6.signal) {
          var u4 = r6.signal;
          if (u4.aborted) abort$1(l5, u4.reason);
          else {
            var listener = /* @__PURE__ */ __name(function() {
              abort$1(l5, u4.reason), u4.removeEventListener("abort", listener);
            }, "listener");
            u4.addEventListener("abort", listener);
          }
        }
        startWork(l5);
      });
    }, Ct.renderToReadableStream = function(e3, r6) {
      return new Promise(function(n5, o3) {
        var s5, a5, i6, l5 = new Promise(function(e4, r7) {
          a5 = e4, s5 = r7;
        }), u4 = r6 ? r6.onHeaders : void 0;
        u4 && (i6 = /* @__PURE__ */ __name(function(e4) {
          u4(new Headers(e4));
        }, "i"));
        var c4 = createResumableState$1(r6 ? r6.identifierPrefix : void 0, r6 && r6.unstable_externalRuntimeSrc, r6 ? r6.bootstrapScriptContent : void 0, r6 ? r6.bootstrapScripts : void 0, r6 ? r6.bootstrapModules : void 0), h4 = createRequest$1(e3, c4, createRenderState$1(c4, r6 ? r6.nonce : void 0, r6 ? r6.unstable_externalRuntimeSrc : void 0, r6 ? r6.importMap : void 0, i6, r6 ? r6.maxHeadersLength : void 0), createRootFormatContext(r6 ? r6.namespaceURI : void 0), r6 ? r6.progressiveChunkSize : void 0, r6 ? r6.onError : void 0, a5, function() {
          var e4 = new ReadableStream({ type: "bytes", pull: /* @__PURE__ */ __name(function(e5) {
            startFlowing$1(h4, e5);
          }, "pull"), cancel: /* @__PURE__ */ __name(function(e5) {
            h4.destination = null, abort$1(h4, e5);
          }, "cancel") }, { highWaterMark: 0 });
          e4.allReady = l5, n5(e4);
        }, function(e4) {
          l5.catch(function() {
          }), o3(e4);
        }, s5, r6 ? r6.onPostpone : void 0, r6 ? r6.formState : void 0);
        if (r6 && r6.signal) {
          var p4 = r6.signal;
          if (p4.aborted) abort$1(h4, p4.reason);
          else {
            var listener = /* @__PURE__ */ __name(function() {
              abort$1(h4, p4.reason), p4.removeEventListener("abort", listener);
            }, "listener");
            p4.addEventListener("abort", listener);
          }
        }
        startWork(h4);
      });
    }, Ct.version = "19.1.1";
    Zo = {};
    es = xe;
    ts = tt;
    __name(formatProdErrorMessage, "formatProdErrorMessage");
    rs = Symbol.for("react.transitional.element");
    ns = Symbol.for("react.portal");
    os = Symbol.for("react.fragment");
    ss = Symbol.for("react.strict_mode");
    as = Symbol.for("react.profiler");
    is = Symbol.for("react.provider");
    ls = Symbol.for("react.consumer");
    us = Symbol.for("react.context");
    cs = Symbol.for("react.forward_ref");
    ds = Symbol.for("react.suspense");
    hs = Symbol.for("react.suspense_list");
    ps = Symbol.for("react.memo");
    fs = Symbol.for("react.lazy");
    ms = Symbol.for("react.scope");
    gs = Symbol.for("react.activity");
    ys = Symbol.for("react.legacy_hidden");
    vs = Symbol.for("react.memo_cache_sentinel");
    bs = Symbol.for("react.view_transition");
    Ss = Symbol.iterator;
    ks = Array.isArray;
    __name(murmurhash3_32_gc, "murmurhash3_32_gc");
    Cs = Object.assign;
    ws = Object.prototype.hasOwnProperty;
    Ps = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$");
    Rs = {};
    xs = {};
    __name(isAttributeNameSafe, "isAttributeNameSafe");
    $s = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    Ts = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]);
    Fs = /["'&<>]/;
    __name(escapeTextForBrowser, "escapeTextForBrowser");
    Es = /([A-Z])/g;
    _s = /^ms-/;
    Is = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    __name(sanitizeURL, "sanitizeURL");
    As = es.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    Ms = ts.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    Os = { pending: false, data: null, method: null, action: null };
    Ls = Ms.d;
    Ms.d = { f: Ls.f, r: Ls.r, D: /* @__PURE__ */ __name(function(e3) {
      var r6 = Aa || null;
      if (r6) {
        var n5 = r6.resumableState, o3 = r6.renderState;
        if ("string" == typeof e3 && e3) {
          var s5, a5;
          if (!n5.dnsResources.hasOwnProperty(e3)) n5.dnsResources[e3] = null, (a5 = (n5 = o3.headers) && 0 < n5.remainingCapacity) && (s5 = "<" + ("" + e3).replace(Xs, escapeHrefForLinkHeaderURLContextReplacer) + ">; rel=dns-prefetch", a5 = 0 <= (n5.remainingCapacity -= s5.length + 2)), a5 ? (o3.resets.dns[e3] = null, n5.preconnects && (n5.preconnects += ", "), n5.preconnects += s5) : (pushLinkImpl(s5 = [], { href: e3, rel: "dns-prefetch" }), o3.preconnects.add(s5));
          enqueueFlush(r6);
        }
      } else Ls.D(e3);
    }, "D"), C: /* @__PURE__ */ __name(function(e3, r6) {
      var n5 = Aa || null;
      if (n5) {
        var o3 = n5.resumableState, s5 = n5.renderState;
        if ("string" == typeof e3 && e3) {
          var a5 = "use-credentials" === r6 ? "credentials" : "string" == typeof r6 ? "anonymous" : "default";
          if (!o3.connectResources[a5].hasOwnProperty(e3)) {
            var i6, l5;
            if (o3.connectResources[a5][e3] = null, l5 = (o3 = s5.headers) && 0 < o3.remainingCapacity) {
              if (l5 = "<" + ("" + e3).replace(Xs, escapeHrefForLinkHeaderURLContextReplacer) + ">; rel=preconnect", "string" == typeof r6) l5 += '; crossorigin="' + ("" + r6).replace(Qs, escapeStringForLinkHeaderQuotedParamValueContextReplacer) + '"';
              i6 = l5, l5 = 0 <= (o3.remainingCapacity -= i6.length + 2);
            }
            l5 ? (s5.resets.connect[a5][e3] = null, o3.preconnects && (o3.preconnects += ", "), o3.preconnects += i6) : (pushLinkImpl(a5 = [], { rel: "preconnect", href: e3, crossOrigin: r6 }), s5.preconnects.add(a5));
          }
          enqueueFlush(n5);
        }
      } else Ls.C(e3, r6);
    }, "C"), L: /* @__PURE__ */ __name(function(e3, r6, n5) {
      var o3 = Aa || null;
      if (o3) {
        var s5 = o3.resumableState, a5 = o3.renderState;
        if (r6 && e3) {
          switch (r6) {
            case "image":
              if (n5) var i6 = n5.imageSrcSet, l5 = n5.imageSizes, u4 = n5.fetchPriority;
              var c4, h4 = i6 ? i6 + "\n" + (l5 || "") : e3;
              if (s5.imageResources.hasOwnProperty(h4)) return;
              s5.imageResources[h4] = js, (s5 = a5.headers) && 0 < s5.remainingCapacity && "string" != typeof i6 && "high" === u4 && (c4 = getPreloadAsHeader(e3, r6, n5), 0 <= (s5.remainingCapacity -= c4.length + 2)) ? (a5.resets.image[h4] = js, s5.highImagePreloads && (s5.highImagePreloads += ", "), s5.highImagePreloads += c4) : (pushLinkImpl(s5 = [], Cs({ rel: "preload", href: i6 ? void 0 : e3, as: r6 }, n5)), "high" === u4 ? a5.highImagePreloads.add(s5) : (a5.bulkPreloads.add(s5), a5.preloads.images.set(h4, s5)));
              break;
            case "style":
              if (s5.styleResources.hasOwnProperty(e3)) return;
              pushLinkImpl(i6 = [], Cs({ rel: "preload", href: e3, as: r6 }, n5)), s5.styleResources[e3] = !n5 || "string" != typeof n5.crossOrigin && "string" != typeof n5.integrity ? js : [n5.crossOrigin, n5.integrity], a5.preloads.stylesheets.set(e3, i6), a5.bulkPreloads.add(i6);
              break;
            case "script":
              if (s5.scriptResources.hasOwnProperty(e3)) return;
              i6 = [], a5.preloads.scripts.set(e3, i6), a5.bulkPreloads.add(i6), pushLinkImpl(i6, Cs({ rel: "preload", href: e3, as: r6 }, n5)), s5.scriptResources[e3] = !n5 || "string" != typeof n5.crossOrigin && "string" != typeof n5.integrity ? js : [n5.crossOrigin, n5.integrity];
              break;
            default:
              if (s5.unknownResources.hasOwnProperty(r6)) {
                if ((i6 = s5.unknownResources[r6]).hasOwnProperty(e3)) return;
              } else i6 = {}, s5.unknownResources[r6] = i6;
              if (i6[e3] = js, (s5 = a5.headers) && 0 < s5.remainingCapacity && "font" === r6 && (h4 = getPreloadAsHeader(e3, r6, n5), 0 <= (s5.remainingCapacity -= h4.length + 2))) a5.resets.font[e3] = js, s5.fontPreloads && (s5.fontPreloads += ", "), s5.fontPreloads += h4;
              else if ("font" === (pushLinkImpl(s5 = [], e3 = Cs({ rel: "preload", href: e3, as: r6 }, n5)), r6)) a5.fontPreloads.add(s5);
              else a5.bulkPreloads.add(s5);
          }
          enqueueFlush(o3);
        }
      } else Ls.L(e3, r6, n5);
    }, "L"), m: /* @__PURE__ */ __name(function(e3, r6) {
      var n5 = Aa || null;
      if (n5) {
        var o3 = n5.resumableState, s5 = n5.renderState;
        if (e3) {
          var a5 = r6 && "string" == typeof r6.as ? r6.as : "script";
          if ("script" === a5) {
            if (o3.moduleScriptResources.hasOwnProperty(e3)) return;
            a5 = [], o3.moduleScriptResources[e3] = !r6 || "string" != typeof r6.crossOrigin && "string" != typeof r6.integrity ? js : [r6.crossOrigin, r6.integrity], s5.preloads.moduleScripts.set(e3, a5);
          } else {
            if (o3.moduleUnknownResources.hasOwnProperty(a5)) {
              var i6 = o3.unknownResources[a5];
              if (i6.hasOwnProperty(e3)) return;
            } else i6 = {}, o3.moduleUnknownResources[a5] = i6;
            a5 = [], i6[e3] = js;
          }
          pushLinkImpl(a5, Cs({ rel: "modulepreload", href: e3 }, r6)), s5.bulkPreloads.add(a5), enqueueFlush(n5);
        }
      } else Ls.m(e3, r6);
    }, "m"), X: /* @__PURE__ */ __name(function(e3, r6) {
      var n5 = Aa || null;
      if (n5) {
        var o3 = n5.resumableState, s5 = n5.renderState;
        if (e3) {
          var a5 = o3.scriptResources.hasOwnProperty(e3) ? o3.scriptResources[e3] : void 0;
          null !== a5 && (o3.scriptResources[e3] = null, r6 = Cs({ src: e3, async: true }, r6), a5 && (2 === a5.length && adoptPreloadCredentials(r6, a5), e3 = s5.preloads.scripts.get(e3)) && (e3.length = 0), e3 = [], s5.scripts.add(e3), pushScriptImpl(e3, r6), enqueueFlush(n5));
        }
      } else Ls.X(e3, r6);
    }, "X"), S: /* @__PURE__ */ __name(function(e3, r6, n5) {
      var o3 = Aa || null;
      if (o3) {
        var s5 = o3.resumableState, a5 = o3.renderState;
        if (e3) {
          r6 = r6 || "default";
          var i6 = a5.styles.get(r6), l5 = s5.styleResources.hasOwnProperty(e3) ? s5.styleResources[e3] : void 0;
          null !== l5 && (s5.styleResources[e3] = null, i6 || (i6 = { precedence: escapeTextForBrowser(r6), rules: [], hrefs: [], sheets: /* @__PURE__ */ new Map() }, a5.styles.set(r6, i6)), r6 = { state: 0, props: Cs({ rel: "stylesheet", href: e3, "data-precedence": r6 }, n5) }, l5 && (2 === l5.length && adoptPreloadCredentials(r6.props, l5), (a5 = a5.preloads.stylesheets.get(e3)) && 0 < a5.length ? a5.length = 0 : r6.state = 1), i6.sheets.set(e3, r6), enqueueFlush(o3));
        }
      } else Ls.S(e3, r6, n5);
    }, "S"), M: /* @__PURE__ */ __name(function(e3, r6) {
      var n5 = Aa || null;
      if (n5) {
        var o3 = n5.resumableState, s5 = n5.renderState;
        if (e3) {
          var a5 = o3.moduleScriptResources.hasOwnProperty(e3) ? o3.moduleScriptResources[e3] : void 0;
          null !== a5 && (o3.moduleScriptResources[e3] = null, r6 = Cs({ src: e3, type: "module", async: true }, r6), a5 && (2 === a5.length && adoptPreloadCredentials(r6, a5), e3 = s5.preloads.moduleScripts.get(e3)) && (e3.length = 0), e3 = [], s5.scripts.add(e3), pushScriptImpl(e3, r6), enqueueFlush(n5));
        }
      } else Ls.M(e3, r6);
    }, "M") };
    js = [];
    Bs = /(<\/|<)(s)(cript)/gi;
    __name(scriptReplacer, "scriptReplacer");
    __name(createPreambleState, "createPreambleState");
    __name(createFormatContext, "createFormatContext");
    __name(getChildFormatContext, "getChildFormatContext");
    Ns = /* @__PURE__ */ new Map();
    __name(pushStyleAttribute, "pushStyleAttribute");
    __name(pushBooleanAttribute, "pushBooleanAttribute");
    __name(pushStringAttribute, "pushStringAttribute");
    zs = escapeTextForBrowser("javascript:throw new Error('React form unexpectedly submitted.')");
    __name(pushAdditionalFormField, "pushAdditionalFormField");
    __name(validateAdditionalFormField, "validateAdditionalFormField");
    __name(getCustomFormFields, "getCustomFormFields");
    __name(pushFormActionAttribute, "pushFormActionAttribute");
    __name(pushAttribute, "pushAttribute");
    __name(pushInnerHTML, "pushInnerHTML");
    __name(injectFormReplayingRuntime, "injectFormReplayingRuntime");
    __name(pushLinkImpl, "pushLinkImpl");
    Ds = /(<\/|<)(s)(tyle)/gi;
    __name(styleReplacer, "styleReplacer");
    __name(pushSelfClosing, "pushSelfClosing");
    __name(pushTitleImpl, "pushTitleImpl");
    __name(pushScriptImpl, "pushScriptImpl");
    __name(pushStartSingletonElement, "pushStartSingletonElement");
    __name(pushStartGenericElement, "pushStartGenericElement");
    Hs = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
    Ws = /* @__PURE__ */ new Map();
    __name(startChunkForTag, "startChunkForTag");
    __name(pushStartInstance, "pushStartInstance");
    Vs = /* @__PURE__ */ new Map();
    __name(endChunkForTag, "endChunkForTag");
    __name(hoistPreambleState, "hoistPreambleState");
    __name(writeBootstrap, "writeBootstrap");
    __name(writeStartPendingSuspenseBoundary, "writeStartPendingSuspenseBoundary");
    __name(writePreambleContribution, "writePreambleContribution");
    qs = /[<\u2028\u2029]/g;
    __name(escapeJSStringsForInstructionScripts, "escapeJSStringsForInstructionScripts");
    Us = /[&><\u2028\u2029]/g;
    __name(escapeJSObjectForInstructionScripts, "escapeJSObjectForInstructionScripts");
    Ks = false;
    Gs = true;
    __name(flushStyleTagsLateForBoundary, "flushStyleTagsLateForBoundary");
    __name(hasStylesToHoist, "hasStylesToHoist");
    __name(writeHoistablesForBoundary, "writeHoistablesForBoundary");
    __name(flushResource, "flushResource");
    Js = [];
    __name(flushStyleInPreamble, "flushStyleInPreamble");
    __name(flushStylesInPreamble, "flushStylesInPreamble");
    __name(preloadLateStyle, "preloadLateStyle");
    __name(preloadLateStyles, "preloadLateStyles");
    __name(writeStyleResourceAttributeInJS, "writeStyleResourceAttributeInJS");
    __name(createHoistableState, "createHoistableState");
    __name(adoptPreloadCredentials, "adoptPreloadCredentials");
    __name(getPreloadAsHeader, "getPreloadAsHeader");
    Xs = /[<>\r\n]/g;
    __name(escapeHrefForLinkHeaderURLContextReplacer, "escapeHrefForLinkHeaderURLContextReplacer");
    Qs = /["';,\r\n]/g;
    __name(escapeStringForLinkHeaderQuotedParamValueContextReplacer, "escapeStringForLinkHeaderQuotedParamValueContextReplacer");
    __name(hoistStyleQueueDependency, "hoistStyleQueueDependency");
    __name(hoistStylesheetDependency, "hoistStylesheetDependency");
    __name(pushTextInstance, "pushTextInstance");
    __name(pushSegmentFinale, "pushSegmentFinale");
    Ys = Function.prototype.bind;
    Zs = Symbol.for("react.client.reference");
    __name(getComponentNameFromType, "getComponentNameFromType");
    ea = {};
    ta = null;
    __name(popToNearestCommonAncestor, "popToNearestCommonAncestor");
    __name(popAllPrevious, "popAllPrevious");
    __name(pushAllNext, "pushAllNext");
    __name(popPreviousToCommonLevel, "popPreviousToCommonLevel");
    __name(popNextToCommonLevel, "popNextToCommonLevel");
    __name(switchContext, "switchContext");
    ra = { enqueueSetState: /* @__PURE__ */ __name(function(e3, r6) {
      null !== (e3 = e3._reactInternals).queue && e3.queue.push(r6);
    }, "enqueueSetState"), enqueueReplaceState: /* @__PURE__ */ __name(function(e3, r6) {
      (e3 = e3._reactInternals).replace = true, e3.queue = [r6];
    }, "enqueueReplaceState"), enqueueForceUpdate: /* @__PURE__ */ __name(function() {
    }, "enqueueForceUpdate") };
    na = { id: 1, overflow: "" };
    __name(pushTreeContext, "pushTreeContext");
    oa = Math.clz32 ? Math.clz32 : function(e3) {
      return e3 >>>= 0, 0 === e3 ? 32 : 31 - (sa(e3) / aa | 0) | 0;
    };
    sa = Math.log;
    aa = Math.LN2;
    ia = Error(formatProdErrorMessage(460));
    __name(noop$2, "noop$2");
    la = null;
    __name(getSuspendedThenable, "getSuspendedThenable");
    ua = "function" == typeof Object.is ? Object.is : function(e3, r6) {
      return e3 === r6 && (0 !== e3 || 1 / e3 == 1 / r6) || e3 != e3 && r6 != r6;
    };
    ca = null;
    da = null;
    ha = null;
    pa = null;
    fa = null;
    ma = null;
    ga = false;
    ya = false;
    va = 0;
    ba = 0;
    Sa = -1;
    ka = 0;
    Ca = null;
    wa = null;
    Pa = 0;
    __name(resolveCurrentlyRenderingComponent, "resolveCurrentlyRenderingComponent");
    __name(createHook, "createHook");
    __name(createWorkInProgressHook, "createWorkInProgressHook");
    __name(getThenableStateAfterSuspending, "getThenableStateAfterSuspending");
    __name(resetHooksState, "resetHooksState");
    __name(basicStateReducer, "basicStateReducer");
    __name(useReducer, "useReducer");
    __name(useMemo, "useMemo");
    __name(dispatchAction, "dispatchAction");
    __name(unsupportedStartTransition, "unsupportedStartTransition");
    __name(unsupportedSetOptimisticState, "unsupportedSetOptimisticState");
    __name(useActionState, "useActionState");
    __name(unwrapThenable, "unwrapThenable");
    __name(unsupportedRefresh, "unsupportedRefresh");
    __name(noop$1, "noop$1");
    $a = { readContext: /* @__PURE__ */ __name(function(e3) {
      return e3._currentValue2;
    }, "readContext"), use: /* @__PURE__ */ __name(function(e3) {
      if (null !== e3 && "object" == typeof e3) {
        if ("function" == typeof e3.then) return unwrapThenable(e3);
        if (e3.$$typeof === us) return e3._currentValue2;
      }
      throw Error(formatProdErrorMessage(438, String(e3)));
    }, "use"), useContext: /* @__PURE__ */ __name(function(e3) {
      return resolveCurrentlyRenderingComponent(), e3._currentValue2;
    }, "useContext"), useMemo, useReducer, useRef: /* @__PURE__ */ __name(function(e3) {
      ca = resolveCurrentlyRenderingComponent();
      var r6 = (ma = createWorkInProgressHook()).memoizedState;
      return null === r6 ? (e3 = { current: e3 }, ma.memoizedState = e3) : r6;
    }, "useRef"), useState: /* @__PURE__ */ __name(function(e3) {
      return useReducer(basicStateReducer, e3);
    }, "useState"), useInsertionEffect: noop$1, useLayoutEffect: noop$1, useCallback: /* @__PURE__ */ __name(function(e3, r6) {
      return useMemo(function() {
        return e3;
      }, r6);
    }, "useCallback"), useImperativeHandle: noop$1, useEffect: noop$1, useDebugValue: noop$1, useDeferredValue: /* @__PURE__ */ __name(function(e3, r6) {
      return resolveCurrentlyRenderingComponent(), void 0 !== r6 ? r6 : e3;
    }, "useDeferredValue"), useTransition: /* @__PURE__ */ __name(function() {
      return resolveCurrentlyRenderingComponent(), [false, unsupportedStartTransition];
    }, "useTransition"), useId: /* @__PURE__ */ __name(function() {
      var e3 = da.treeContext, r6 = e3.overflow;
      e3 = ((e3 = e3.id) & ~(1 << 32 - oa(e3) - 1)).toString(32) + r6;
      var n5 = Ta;
      if (null === n5) throw Error(formatProdErrorMessage(404));
      return r6 = va++, e3 = "\xAB" + n5.idPrefix + "R" + e3, 0 < r6 && (e3 += "H" + r6.toString(32)), e3 + "\xBB";
    }, "useId"), useSyncExternalStore: /* @__PURE__ */ __name(function(e3, r6, n5) {
      if (void 0 === n5) throw Error(formatProdErrorMessage(407));
      return n5();
    }, "useSyncExternalStore"), useOptimistic: /* @__PURE__ */ __name(function(e3) {
      return resolveCurrentlyRenderingComponent(), [e3, unsupportedSetOptimisticState];
    }, "useOptimistic"), useActionState, useFormState: useActionState, useHostTransitionStatus: /* @__PURE__ */ __name(function() {
      return resolveCurrentlyRenderingComponent(), Os;
    }, "useHostTransitionStatus"), useMemoCache: /* @__PURE__ */ __name(function(e3) {
      for (var r6 = Array(e3), n5 = 0; n5 < e3; n5++) r6[n5] = vs;
      return r6;
    }, "useMemoCache"), useCacheRefresh: /* @__PURE__ */ __name(function() {
      return unsupportedRefresh;
    }, "useCacheRefresh") };
    Ta = null;
    Fa = { getCacheForType: /* @__PURE__ */ __name(function() {
      throw Error(formatProdErrorMessage(248));
    }, "getCacheForType") };
    __name(describeBuiltInComponentFrame, "describeBuiltInComponentFrame");
    Ea = false;
    __name(describeNativeComponentFrame, "describeNativeComponentFrame");
    __name(describeComponentStackByType, "describeComponentStackByType");
    __name(defaultErrorHandler, "defaultErrorHandler");
    __name(noop, "noop");
    __name(RequestInstance, "RequestInstance");
    Aa = null;
    __name(pingTask, "pingTask");
    __name(createSuspenseBoundary, "createSuspenseBoundary");
    __name(createRenderTask, "createRenderTask");
    __name(createReplayTask, "createReplayTask");
    __name(createPendingSegment, "createPendingSegment");
    __name(pushComponentStack, "pushComponentStack");
    __name(getThrownInfo, "getThrownInfo");
    __name(logRecoverableError, "logRecoverableError");
    __name(fatalError, "fatalError");
    __name(renderWithHooks, "renderWithHooks");
    __name(finishFunctionComponent, "finishFunctionComponent");
    __name(renderElement, "renderElement");
    __name(resumeNode, "resumeNode");
    __name(renderNodeDestructive, "renderNodeDestructive");
    __name(retryNode, "retryNode");
    __name(renderChildrenArray, "renderChildrenArray");
    __name(untrackBoundary, "untrackBoundary");
    __name(spawnNewSuspendedReplayTask, "spawnNewSuspendedReplayTask");
    __name(spawnNewSuspendedRenderTask, "spawnNewSuspendedRenderTask");
    __name(renderNode, "renderNode");
    __name(abortTaskSoft, "abortTaskSoft");
    __name(abortRemainingReplayNodes, "abortRemainingReplayNodes");
    __name(abortTask, "abortTask");
    __name(safelyEmitEarlyPreloads, "safelyEmitEarlyPreloads");
    __name(completeShell, "completeShell");
    __name(completeAll, "completeAll");
    __name(queueCompletedSegment, "queueCompletedSegment");
    __name(finishedTask, "finishedTask");
    __name(performWork, "performWork");
    __name(preparePreambleFromSubtree, "preparePreambleFromSubtree");
    __name(preparePreambleFromSegment, "preparePreambleFromSegment");
    __name(preparePreamble, "preparePreamble");
    __name(flushSubtree, "flushSubtree");
    __name(flushSegment, "flushSegment");
    __name(flushSegmentContainer, "flushSegmentContainer");
    __name(flushCompletedBoundary, "flushCompletedBoundary");
    __name(flushPartiallyCompletedSegment, "flushPartiallyCompletedSegment");
    __name(flushCompletedQueues, "flushCompletedQueues");
    __name(enqueueFlush, "enqueueFlush");
    __name(startFlowing, "startFlowing");
    __name(abort2, "abort");
    __name(onError, "onError");
    __name(renderToStringImpl, "renderToStringImpl");
    Zo.renderToStaticMarkup = function(e3, r6) {
      return renderToStringImpl(e3, r6, true, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }, Zo.renderToString = function(e3, r6) {
      return renderToStringImpl(e3, r6, false, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }, Zo.version = "19.1.1", _a = Ct, Ia = Zo, kt.version = _a.version, kt.renderToReadableStream = _a.renderToReadableStream, kt.renderToString = Ia.renderToString, kt.renderToStaticMarkup = Ia.renderToStaticMarkup, _a.resume && (kt.resume = _a.resume);
    Oa = /bot|crawl|http|lighthouse|scan|search|spider/i;
    __name(isbot, "isbot");
    renderRouterToStream = /* @__PURE__ */ __name(async ({ request: e3, router: r6, responseHeaders: n5, children: o3 }) => {
      if ("function" == typeof kt.renderToReadableStream) {
        const s5 = await kt.renderToReadableStream(o3, { signal: e3.signal });
        isbot(e3.headers.get("User-Agent")) && await s5.allReady;
        const a5 = function(e4, r7) {
          return transformStreamWithRouter(e4, r7);
        }(r6, s5);
        return new Response(a5, { status: r6.state.statusCode, headers: n5 });
      }
      if ("function" == typeof kt.renderToPipeableStream) {
        const i6 = new a3();
        try {
          const r7 = kt.renderToPipeableStream(o3, { ...isbot(e3.headers.get("User-Agent")) ? { onAllReady() {
            r7.pipe(i6);
          } } : { onShellReady() {
            r7.pipe(i6);
          } }, onError: /* @__PURE__ */ __name((e4, r8) => {
            console.error("Error in renderToPipeableStream:", e4, r8);
          }, "onError") });
        } catch (e4) {
          console.error("Error in renderToPipeableStream:", e4);
        }
        const l5 = function(e4, r7) {
          return s3.fromWeb(transformStreamWithRouter(e4, s3.toWeb(r7)));
        }(r6, i6);
        return new Response(l5, { status: r6.state.statusCode, headers: n5 });
      }
      throw new Error("No renderToReadableStream or renderToPipeableStream found in react-dom/server. Ensure you are using a version of react-dom that supports streaming.");
    }, "renderRouterToStream");
    __name(StartServer, "StartServer");
    defaultStreamHandler = /* @__PURE__ */ __name(({ request: e3, router: r6, responseHeaders: n5 }) => renderRouterToStream({ request: e3, router: r6, responseHeaders: n5, children: p2.jsx(StartServer, { router: r6 }) }), "defaultStreamHandler");
    La = "__TSR_index";
    __name(assignKeyAndIndex, "assignKeyAndIndex");
    __name(createMemoryHistory, "createMemoryHistory");
    __name(parseHref, "parseHref");
    __name(createRandomKey, "createRandomKey");
    __name(splitSetCookieString, "splitSetCookieString");
    __name(mergeHeaders, "mergeHeaders");
    __name(json, "json");
    __name(invariant, "invariant");
    __name(isPlainObject, "isPlainObject");
    __name(hasObjectPrototype, "hasObjectPrototype");
    __name(joinPaths, "joinPaths");
    __name(cleanPath, "cleanPath");
    __name(trimPathLeft, "trimPathLeft");
    __name(trimPathRight, "trimPathRight");
    parsePathname = /* @__PURE__ */ __name((e3, r6) => {
      if (!e3) return [];
      const n5 = null == r6 ? void 0 : r6.get(e3);
      if (n5) return n5;
      const o3 = function(e4) {
        e4 = cleanPath(e4);
        const r7 = [];
        "/" === e4.slice(0, 1) && (e4 = e4.substring(1), r7.push({ type: 0, value: "/" }));
        if (!e4) return r7;
        const n6 = e4.split("/").filter(Boolean);
        r7.push(...n6.map((e5) => {
          const r8 = e5.match(Da);
          if (r8) {
            return { type: 2, value: "$", prefixSegment: r8[1] || void 0, suffixSegment: r8[2] || void 0 };
          }
          const n7 = e5.match(Na);
          if (n7) {
            const e6 = n7[1];
            return { type: 3, value: n7[2], prefixSegment: e6 || void 0, suffixSegment: n7[3] || void 0 };
          }
          const o4 = e5.match(Ba);
          if (o4) {
            const e6 = o4[1];
            return { type: 1, value: "" + o4[2], prefixSegment: e6 || void 0, suffixSegment: o4[3] || void 0 };
          }
          if (ja.test(e5)) {
            return { type: 1, value: "$" + e5.substring(1), prefixSegment: void 0, suffixSegment: void 0 };
          }
          return za.test(e5) ? { type: 2, value: "$", prefixSegment: void 0, suffixSegment: void 0 } : { type: 0, value: e5.includes("%25") ? e5.split("%25").map((e6) => decodeURI(e6)).join("%25") : decodeURI(e5) };
        })), "/" === e4.slice(-1) && (e4 = e4.substring(1), r7.push({ type: 0, value: "/" }));
        return r7;
      }(e3);
      return null == r6 || r6.set(e3, o3), o3;
    }, "parsePathname");
    ja = /^\$.{1,}$/;
    Ba = /^(.*?)\{(\$[a-zA-Z_$][a-zA-Z0-9_$]*)\}(.*)$/;
    Na = /^(.*?)\{-(\$[a-zA-Z_$][a-zA-Z0-9_$]*)\}(.*)$/;
    za = /^\$$/;
    Da = /^(.*?)\{\$\}(.*)$/;
    __name(matchPathname, "matchPathname");
    __name(removeBasepath, "removeBasepath");
    __name(isNotFound, "isNotFound");
    Ha = "__root__";
    __name(isRedirect, "isRedirect");
    __name(handleParam, "handleParam");
    Wa = { stringify: /* @__PURE__ */ __name((e3) => JSON.stringify(e3, function(e4, r6) {
      const n5 = this[e4], o3 = Va.find((e5) => e5.stringifyCondition(n5));
      return o3 ? o3.stringify(n5) : r6;
    }), "stringify"), parse: /* @__PURE__ */ __name((e3) => JSON.parse(e3, function(e4, r6) {
      const n5 = this[e4];
      if (isPlainObject(n5)) {
        const e5 = Va.find((e6) => e6.parseCondition(n5));
        if (e5) return e5.parse(n5);
      }
      return r6;
    }), "parse"), encode: /* @__PURE__ */ __name((e3) => {
      if (Array.isArray(e3)) return e3.map((e4) => Wa.encode(e4));
      if (isPlainObject(e3)) return Object.fromEntries(Object.entries(e3).map(([e4, r7]) => [e4, Wa.encode(r7)]));
      const r6 = Va.find((r7) => r7.stringifyCondition(e3));
      return r6 ? r6.stringify(e3) : e3;
    }, "encode"), decode: /* @__PURE__ */ __name((e3) => {
      if (isPlainObject(e3)) {
        const r6 = Va.find((r7) => r7.parseCondition(e3));
        if (r6) return r6.parse(e3);
      }
      return Array.isArray(e3) ? e3.map((e4) => Wa.decode(e4)) : isPlainObject(e3) ? Object.fromEntries(Object.entries(e3).map(([e4, r6]) => [e4, Wa.decode(r6)])) : e3;
    }, "decode") };
    createSerializer = /* @__PURE__ */ __name((e3, r6, n5, o3) => ({ key: e3, stringifyCondition: r6, stringify: /* @__PURE__ */ __name((r7) => ({ [`$${e3}`]: n5(r7) }), "stringify"), parseCondition: /* @__PURE__ */ __name((r7) => Object.hasOwn(r7, `$${e3}`), "parseCondition"), parse: /* @__PURE__ */ __name((r7) => o3(r7[`$${e3}`]), "parse") }), "createSerializer");
    Va = [createSerializer("undefined", (e3) => void 0 === e3, () => 0, () => {
    }), createSerializer("date", (e3) => e3 instanceof Date, (e3) => e3.toISOString(), (e3) => new Date(e3)), createSerializer("error", (e3) => e3 instanceof Error, (e3) => ({ ...e3, message: e3.message, stack: void 0, cause: e3.cause }), (e3) => Object.assign(new Error(e3.message), e3)), createSerializer("formData", (e3) => e3 instanceof FormData, (e3) => {
      const r6 = {};
      return e3.forEach((e4, n5) => {
        const o3 = r6[n5];
        void 0 !== o3 ? Array.isArray(o3) ? o3.push(e4) : r6[n5] = [o3, e4] : r6[n5] = e4;
      }), r6;
    }, (e3) => {
      const r6 = new FormData();
      return Object.entries(e3).forEach(([e4, n5]) => {
        Array.isArray(n5) ? n5.forEach((n6) => r6.append(e4, n6)) : r6.append(e4, n5);
      }), r6;
    }), createSerializer("bigint", (e3) => "bigint" == typeof e3, (e3) => e3.toString(), (e3) => BigInt(e3))];
    qa = new AsyncLocalStorage2();
    Ua = [];
    getRouterInstance = /* @__PURE__ */ __name(() => {
      var e3;
      return null == (e3 = function(e4) {
        const r6 = qa.getStore();
        if (!r6 && false !== (null == e4 ? void 0 : e4.throwIfNotFound)) throw new Error("No Start context found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");
        return r6;
      }({ throwIfNotFound: false })) ? void 0 : e3.router;
    }, "getRouterInstance");
    __name(createServerFn, "createServerFn");
    __name(executeMiddleware$1, "executeMiddleware$1");
    __name(flattenMiddlewares, "flattenMiddlewares");
    !function(e3) {
      const r6 = Ka;
      Ka = "function" == typeof e3 ? e3() : e3;
    }(() => {
      const getStaticCacheUrl = /* @__PURE__ */ __name(async (e4, r6) => {
        const n5 = await async function(e5) {
          const r7 = new TextEncoder().encode(e5), n6 = await crypto.subtle.digest("SHA-1", r7), o3 = Array.from(new Uint8Array(n6)).map((e6) => e6.toString(16).padStart(2, "0")).join("");
          return o3;
        }(`${e4.functionId}__${r6}`);
        return `/__tsr/staticServerFnCache/${n5}.json`;
      }, "getStaticCacheUrl"), jsonToFilenameSafeString = /* @__PURE__ */ __name((e4) => JSON.stringify(e4 ?? "", (e5, r6) => r6 && "object" == typeof r6 && !Array.isArray(r6) ? Object.keys(r6).sort().reduce((e6, n5) => (e6[n5] = r6[n5], e6), {}) : r6).replace(/[/\\?%*:|"<>]/g, "-").replace(/\s+/g, "_"), "jsonToFilenameSafeString"), e3 = "undefined" != typeof document ? /* @__PURE__ */ new Map() : null;
      return { getItem: /* @__PURE__ */ __name(async (e4) => {
        if ("undefined" == typeof document) {
          const r6 = jsonToFilenameSafeString(e4.data), n5 = await getStaticCacheUrl(e4, r6), o3 = "/Users/marakim/Documents/code/test/tanstack-start-cloudflare/.output/public", { promises: s5 } = await Promise.resolve().then(() => (init_fs(), fs_exports)), a5 = (await import("node:path")).join(o3, n5), [i6, l5] = await s5.readFile(a5, "utf-8").then((e5) => [Wa.parse(e5), null]).catch((e5) => [null, e5]);
          if (l5 && "ENOENT" !== l5.code) throw l5;
          return i6;
        }
      }, "getItem"), setItem: /* @__PURE__ */ __name(async (e4, r6) => {
        const { promises: n5 } = await Promise.resolve().then(() => (init_fs(), fs_exports)), o3 = await import("node:path"), s5 = jsonToFilenameSafeString(e4.data), a5 = await getStaticCacheUrl(e4, s5), i6 = o3.join("/Users/marakim/Documents/code/test/tanstack-start-cloudflare/.output/public", a5);
        await n5.mkdir(o3.dirname(i6), { recursive: true }), await n5.writeFile(i6, Wa.stringify(r6));
      }, "setItem"), fetchItem: /* @__PURE__ */ __name(async (r6) => {
        const n5 = jsonToFilenameSafeString(r6.data), o3 = await getStaticCacheUrl(r6, n5);
        let s5 = null == e3 ? void 0 : e3.get(o3);
        return s5 || (s5 = await fetch(o3, { method: "GET" }).then((e4) => e4.text()).then((e4) => Wa.parse(e4)), null == e3 || e3.set(o3, s5)), s5;
      }, "fetchItem") };
    });
    applyMiddleware = /* @__PURE__ */ __name(async (e3, r6, n5) => e3({ ...r6, next: /* @__PURE__ */ __name(async (e4 = {}) => n5({ ...r6, ...e4, context: { ...r6.context, ...e4.context }, sendContext: { ...r6.sendContext, ...e4.sendContext ?? {} }, headers: mergeHeaders(r6.headers, e4.headers), result: void 0 !== e4.result ? e4.result : "raw" === r6.response ? e4 : r6.result, error: e4.error ?? r6.error }), "next") }), "applyMiddleware");
    __name(serverFnBaseToMiddleware, "serverFnBaseToMiddleware");
    __name(createMiddleware, "createMiddleware");
    Ja = ((Ga = Ja || {})[Ga.AggregateError = 1] = "AggregateError", Ga[Ga.ArrowFunction = 2] = "ArrowFunction", Ga[Ga.ErrorPrototypeStack = 4] = "ErrorPrototypeStack", Ga[Ga.ObjectAssign = 8] = "ObjectAssign", Ga[Ga.BigIntTypedArray = 16] = "BigIntTypedArray", Ga);
    __name(Nr, "Nr");
    __name(d2, "d");
    Xa = "__SEROVAL_REFS__";
    Qa = "$R";
    Ya = `self.${Qa}`;
    __name(f2, "f");
    Za = /* @__PURE__ */ new Map();
    ei = /* @__PURE__ */ new Map();
    __name(je, "je");
    __name(Hr, "Hr");
    __name(Ye, "Ye");
    __name(m3, "m");
    "undefined" != typeof globalThis ? Object.defineProperty(globalThis, Xa, { value: ei, configurable: true, writable: false, enumerable: false }) : "undefined" != typeof self ? Object.defineProperty(self, Xa, { value: ei, configurable: true, writable: false, enumerable: false }) : void 0 !== ar && Object.defineProperty(ar, Xa, { value: ei, configurable: true, writable: false, enumerable: false });
    ti = { 0: "Symbol.asyncIterator", 1: "Symbol.hasInstance", 2: "Symbol.isConcatSpreadable", 3: "Symbol.iterator", 4: "Symbol.match", 5: "Symbol.matchAll", 6: "Symbol.replace", 7: "Symbol.search", 8: "Symbol.species", 9: "Symbol.split", 10: "Symbol.toPrimitive", 11: "Symbol.toStringTag", 12: "Symbol.unscopables" };
    ri = { [Symbol.asyncIterator]: 0, [Symbol.hasInstance]: 1, [Symbol.isConcatSpreadable]: 2, [Symbol.iterator]: 3, [Symbol.match]: 4, [Symbol.matchAll]: 5, [Symbol.replace]: 6, [Symbol.search]: 7, [Symbol.species]: 8, [Symbol.split]: 9, [Symbol.toPrimitive]: 10, [Symbol.toStringTag]: 11, [Symbol.unscopables]: 12 };
    ni = { 2: "!0", 3: "!1", 1: "void 0", 0: "null", 4: "-0", 5: "1/0", 6: "-1/0", 7: "0/0" };
    oi = { 0: "Error", 1: "EvalError", 2: "RangeError", 3: "ReferenceError", 4: "SyntaxError", 5: "TypeError", 6: "URIError" };
    si = void 0;
    __name(u$1, "u$1");
    __name(x, "x");
    ai = x(2);
    ii = x(3);
    li = x(1);
    ui = x(0);
    ci = x(4);
    di = x(5);
    hi = x(6);
    pi = x(7);
    __name(me, "me");
    __name(j, "j");
    __name(fe, "fe");
    __name(w$1, "w$1");
    __name(nr, "nr");
    __name(_, "_");
    __name(M, "M");
    __name(U2, "U");
    __name(L2, "L");
    ({ toString: fi } = Object.prototype);
    mi = class extends Error {
      static {
        __name(this, "mi");
      }
      constructor(e3, r6) {
        var n5, o3;
        super((n5 = e3, (o3 = r6) instanceof Error ? `Seroval caught an error during the ${n5} process.
  
${o3.name}
${o3.message}

- For more information, please check the "cause" property of this error.
- If you believe this is an error in Seroval, please submit an issue at https://github.com/lxsmnsyc/seroval/issues/new` : `Seroval caught an error during the ${n5} process.

"${fi.call(o3)}"

For more information, please check the "cause" property of this error.`)), this.cause = r6;
      }
    };
    gi = class extends mi {
      static {
        __name(this, "gi");
      }
      constructor(e3) {
        super("parsing", e3);
      }
    };
    yi = class extends mi {
      static {
        __name(this, "yi");
      }
      constructor(e3) {
        super("serialization", e3);
      }
    };
    vi = class extends Error {
      static {
        __name(this, "vi");
      }
      constructor(e3) {
        super(`The value ${fi.call(e3)} of type "${typeof e3}" cannot be parsed/serialized.
      
There are few workarounds for this problem:
- Transform the value in a way that it can be serialized.
- If the reference is present on multiple runtimes (isomorphic), you can use the Reference API to map the references.`), this.value = e3;
      }
    };
    bi = class extends Error {
      static {
        __name(this, "bi");
      }
      constructor(e3) {
        super('Unsupported node type "' + e3.t + '".');
      }
    };
    Si = class extends Error {
      static {
        __name(this, "Si");
      }
      constructor(e3) {
        super('Missing plugin for tag "' + e3 + '".');
      }
    };
    ki = class extends Error {
      static {
        __name(this, "ki");
      }
      constructor(e3) {
        super('Missing reference for the value "' + fi.call(e3) + '" of type "' + typeof e3 + '"'), this.value = e3;
      }
    };
    Ci = class {
      static {
        __name(this, "Ci");
      }
      constructor(e3, r6) {
        this.value = e3, this.replacement = r6;
      }
    };
    __name(z, "z");
    __name(S2, "S");
    wi = {};
    Pi = {};
    Ri = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {} };
    __name(cr, "cr");
    __name(K2, "K");
    __name(J, "J");
    xi = class {
      static {
        __name(this, "xi");
      }
      constructor(e3) {
        this.marked = /* @__PURE__ */ new Set(), this.plugins = e3.plugins, this.features = 31 ^ (e3.disabledFeatures || 0), this.refs = e3.refs || /* @__PURE__ */ new Map();
      }
      markRef(e3) {
        this.marked.add(e3);
      }
      isMarked(e3) {
        return this.marked.has(e3);
      }
      createIndex(e3) {
        let r6 = this.refs.size;
        return this.refs.set(e3, r6), r6;
      }
      getIndexedValue(e3) {
        let r6 = this.refs.get(e3);
        return null != r6 ? (this.markRef(r6), { type: 1, value: (n5 = r6, u$1(4, n5, si, si, si, si, si, si, si, si, si, si)) }) : { type: 0, value: this.createIndex(e3) };
        var n5;
      }
      getReference(e3) {
        let r6 = this.getIndexedValue(e3);
        return 1 === r6.type ? r6 : je(e3) ? { type: 2, value: nr(r6.value, e3) } : r6;
      }
      parseWellKnownSymbol(e3) {
        let r6 = this.getReference(e3);
        return 0 !== r6.type ? r6.value : (f2(e3 in ri, new vi(e3)), function(e4, r7) {
          return u$1(17, e4, ri[r7], si, si, si, si, si, si, si, si, si);
        }(r6.value, e3));
      }
      parseSpecialReference(e3) {
        let r6 = this.getIndexedValue(Ri[e3]);
        return 1 === r6.type ? r6.value : u$1(26, r6.value, e3, si, si, si, si, si, si, si, si, si);
      }
      parseIteratorFactory() {
        let e3 = this.getIndexedValue(wi);
        return 1 === e3.type ? e3.value : u$1(27, e3.value, si, si, si, si, si, si, si, this.parseWellKnownSymbol(Symbol.iterator), si, si);
      }
      parseAsyncIteratorFactory() {
        let e3 = this.getIndexedValue(Pi);
        return 1 === e3.type ? e3.value : u$1(29, e3.value, si, si, si, si, si, si, [this.parseSpecialReference(1), this.parseWellKnownSymbol(Symbol.asyncIterator)], si, si, si);
      }
      createObjectNode(e3, r6, n5, o3) {
        return u$1(n5 ? 11 : 10, e3, si, si, si, si, o3, si, si, si, si, fe(r6));
      }
      createMapNode(e3, r6, n5, o3) {
        return u$1(8, e3, si, si, si, si, si, { k: r6, v: n5, s: o3 }, si, this.parseSpecialReference(0), si, si);
      }
      createPromiseConstructorNode(e3, r6) {
        return u$1(22, e3, r6, si, si, si, si, si, si, this.parseSpecialReference(1), si, si);
      }
    };
    $i = /^[$A-Z_][0-9A-Z_$]*$/i;
    __name(Le, "Le");
    __name(se, "se");
    __name(fr, "fr");
    Ti = { 3: "Object.freeze", 2: "Object.seal", 1: "Object.preventExtensions", 0: si };
    Fi = class {
      static {
        __name(this, "Fi");
      }
      constructor(e3) {
        this.stack = [], this.flags = [], this.assignments = [], this.plugins = e3.plugins, this.features = e3.features, this.marked = new Set(e3.markedRefs);
      }
      createFunction(e3, r6) {
        return z(this.features, e3, r6);
      }
      createEffectfulFunction(e3, r6) {
        return S2(this.features, e3, r6);
      }
      markRef(e3) {
        this.marked.add(e3);
      }
      isMarked(e3) {
        return this.marked.has(e3);
      }
      pushObjectFlag(e3, r6) {
        0 !== e3 && (this.markRef(r6), this.flags.push({ type: e3, value: this.getRefParam(r6) }));
      }
      resolveFlags() {
        let e3 = "";
        for (let r6 = 0, n5 = this.flags, o3 = n5.length; r6 < o3; r6++) {
          let o4 = n5[r6];
          e3 += Ti[o4.type] + "(" + o4.value + "),";
        }
        return e3;
      }
      resolvePatches() {
        let e3 = fr(this.assignments), r6 = this.resolveFlags();
        return e3 ? r6 ? e3 + r6 : e3 : r6;
      }
      createAssignment(e3, r6) {
        this.assignments.push({ t: 0, s: e3, k: si, v: r6 });
      }
      createAddAssignment(e3, r6) {
        this.assignments.push({ t: 1, s: this.getRefParam(e3), k: si, v: r6 });
      }
      createSetAssignment(e3, r6, n5) {
        this.assignments.push({ t: 2, s: this.getRefParam(e3), k: r6, v: n5 });
      }
      createDeleteAssignment(e3, r6) {
        this.assignments.push({ t: 3, s: this.getRefParam(e3), k: r6, v: si });
      }
      createArrayAssign(e3, r6, n5) {
        this.createAssignment(this.getRefParam(e3) + "[" + r6 + "]", n5);
      }
      createObjectAssign(e3, r6, n5) {
        this.createAssignment(this.getRefParam(e3) + "." + r6, n5);
      }
      isIndexedValueInStack(e3) {
        return 4 === e3.t && this.stack.includes(e3.i);
      }
      serializeReference(e3) {
        return this.assignIndexedValue(e3.i, Xa + '.get("' + e3.s + '")');
      }
      serializeArrayItem(e3, r6, n5) {
        return r6 ? this.isIndexedValueInStack(r6) ? (this.markRef(e3), this.createArrayAssign(e3, n5, this.getRefParam(r6.i)), "") : this.serialize(r6) : "";
      }
      serializeArray(e3) {
        let r6 = e3.i;
        if (e3.l) {
          this.stack.push(r6);
          let n5 = e3.a, o3 = this.serializeArrayItem(r6, n5[0], 0), s5 = "" === o3;
          for (let a5, i6 = 1, l5 = e3.l; i6 < l5; i6++) a5 = this.serializeArrayItem(r6, n5[i6], i6), o3 += "," + a5, s5 = "" === a5;
          return this.stack.pop(), this.pushObjectFlag(e3.o, e3.i), this.assignIndexedValue(r6, "[" + o3 + (s5 ? ",]" : "]"));
        }
        return this.assignIndexedValue(r6, "[]");
      }
      serializeProperty(e3, r6, n5) {
        if ("string" == typeof r6) {
          let o3 = Number(r6), s5 = o3 >= 0 && o3.toString() === r6 || Le(r6);
          if (this.isIndexedValueInStack(n5)) {
            let a5 = this.getRefParam(n5.i);
            return this.markRef(e3.i), s5 && o3 != o3 ? this.createObjectAssign(e3.i, r6, a5) : this.createArrayAssign(e3.i, s5 ? r6 : '"' + r6 + '"', a5), "";
          }
          return (s5 ? r6 : '"' + r6 + '"') + ":" + this.serialize(n5);
        }
        return "[" + this.serialize(r6) + "]:" + this.serialize(n5);
      }
      serializeProperties(e3, r6) {
        let n5 = r6.s;
        if (n5) {
          let o3 = r6.k, s5 = r6.v;
          this.stack.push(e3.i);
          let a5 = this.serializeProperty(e3, o3[0], s5[0]);
          for (let r7 = 1, i6 = a5; r7 < n5; r7++) i6 = this.serializeProperty(e3, o3[r7], s5[r7]), a5 += (i6 && a5 && ",") + i6;
          return this.stack.pop(), "{" + a5 + "}";
        }
        return "{}";
      }
      serializeObject(e3) {
        return this.pushObjectFlag(e3.o, e3.i), this.assignIndexedValue(e3.i, this.serializeProperties(e3, e3.p));
      }
      serializeWithObjectAssign(e3, r6, n5) {
        let o3 = this.serializeProperties(e3, r6);
        return "{}" !== o3 ? "Object.assign(" + n5 + "," + o3 + ")" : n5;
      }
      serializeStringKeyAssignment(e3, r6, n5, o3) {
        let s5 = this.serialize(o3), a5 = Number(n5), i6 = a5 >= 0 && a5.toString() === n5 || Le(n5);
        if (this.isIndexedValueInStack(o3)) i6 && a5 != a5 ? this.createObjectAssign(e3.i, n5, s5) : this.createArrayAssign(e3.i, i6 ? n5 : '"' + n5 + '"', s5);
        else {
          let o4 = this.assignments;
          this.assignments = r6, i6 && a5 != a5 ? this.createObjectAssign(e3.i, n5, s5) : this.createArrayAssign(e3.i, i6 ? n5 : '"' + n5 + '"', s5), this.assignments = o4;
        }
      }
      serializeAssignment(e3, r6, n5, o3) {
        if ("string" == typeof n5) this.serializeStringKeyAssignment(e3, r6, n5, o3);
        else {
          let s5 = this.stack;
          this.stack = [];
          let a5 = this.serialize(o3);
          this.stack = s5;
          let i6 = this.assignments;
          this.assignments = r6, this.createArrayAssign(e3.i, this.serialize(n5), a5), this.assignments = i6;
        }
      }
      serializeAssignments(e3, r6) {
        let n5 = r6.s;
        if (n5) {
          let o3 = [], s5 = r6.k, a5 = r6.v;
          this.stack.push(e3.i);
          for (let r7 = 0; r7 < n5; r7++) this.serializeAssignment(e3, o3, s5[r7], a5[r7]);
          return this.stack.pop(), fr(o3);
        }
        return si;
      }
      serializeDictionary(e3, r6) {
        if (e3.p) if (8 & this.features) r6 = this.serializeWithObjectAssign(e3, e3.p, r6);
        else {
          this.markRef(e3.i);
          let n5 = this.serializeAssignments(e3, e3.p);
          if (n5) return "(" + this.assignIndexedValue(e3.i, r6) + "," + n5 + this.getRefParam(e3.i) + ")";
        }
        return this.assignIndexedValue(e3.i, r6);
      }
      serializeNullConstructor(e3) {
        return this.pushObjectFlag(e3.o, e3.i), this.serializeDictionary(e3, "Object.create(null)");
      }
      serializeDate(e3) {
        return this.assignIndexedValue(e3.i, 'new Date("' + e3.s + '")');
      }
      serializeRegExp(e3) {
        return this.assignIndexedValue(e3.i, "/" + e3.c + "/" + e3.m);
      }
      serializeSetItem(e3, r6) {
        return this.isIndexedValueInStack(r6) ? (this.markRef(e3), this.createAddAssignment(e3, this.getRefParam(r6.i)), "") : this.serialize(r6);
      }
      serializeSet(e3) {
        let r6 = "new Set", n5 = e3.l, o3 = e3.i;
        if (n5) {
          let s5 = e3.a;
          this.stack.push(o3);
          let a5 = this.serializeSetItem(o3, s5[0]);
          for (let e4 = 1, r7 = a5; e4 < n5; e4++) r7 = this.serializeSetItem(o3, s5[e4]), a5 += (r7 && a5 && ",") + r7;
          this.stack.pop(), a5 && (r6 += "([" + a5 + "])");
        }
        return this.assignIndexedValue(o3, r6);
      }
      serializeMapEntry(e3, r6, n5, o3) {
        if (this.isIndexedValueInStack(r6)) {
          let s5 = this.getRefParam(r6.i);
          if (this.markRef(e3), this.isIndexedValueInStack(n5)) {
            let r7 = this.getRefParam(n5.i);
            return this.createSetAssignment(e3, s5, r7), "";
          }
          if (4 !== n5.t && null != n5.i && this.isMarked(n5.i)) {
            let r7 = "(" + this.serialize(n5) + ",[" + o3 + "," + o3 + "])";
            return this.createSetAssignment(e3, s5, this.getRefParam(n5.i)), this.createDeleteAssignment(e3, o3), r7;
          }
          let a5 = this.stack;
          return this.stack = [], this.createSetAssignment(e3, s5, this.serialize(n5)), this.stack = a5, "";
        }
        if (this.isIndexedValueInStack(n5)) {
          let s5 = this.getRefParam(n5.i);
          if (this.markRef(e3), 4 !== r6.t && null != r6.i && this.isMarked(r6.i)) {
            let n6 = "(" + this.serialize(r6) + ",[" + o3 + "," + o3 + "])";
            return this.createSetAssignment(e3, this.getRefParam(r6.i), s5), this.createDeleteAssignment(e3, o3), n6;
          }
          let a5 = this.stack;
          return this.stack = [], this.createSetAssignment(e3, this.serialize(r6), s5), this.stack = a5, "";
        }
        return "[" + this.serialize(r6) + "," + this.serialize(n5) + "]";
      }
      serializeMap(e3) {
        let r6 = "new Map", n5 = e3.e.s, o3 = e3.i, s5 = e3.f, a5 = this.getRefParam(s5.i);
        if (n5) {
          let s6 = e3.e.k, i6 = e3.e.v;
          this.stack.push(o3);
          let l5 = this.serializeMapEntry(o3, s6[0], i6[0], a5);
          for (let e4 = 1, r7 = l5; e4 < n5; e4++) r7 = this.serializeMapEntry(o3, s6[e4], i6[e4], a5), l5 += (r7 && l5 && ",") + r7;
          this.stack.pop(), l5 && (r6 += "([" + l5 + "])");
        }
        return 26 === s5.t && (this.markRef(s5.i), r6 = "(" + this.serialize(s5) + "," + r6 + ")"), this.assignIndexedValue(o3, r6);
      }
      serializeArrayBuffer(e3) {
        let r6 = "new Uint8Array(", n5 = e3.s, o3 = n5.length;
        if (o3) {
          r6 += "[" + n5[0];
          for (let e4 = 1; e4 < o3; e4++) r6 += "," + n5[e4];
          r6 += "]";
        }
        return this.assignIndexedValue(e3.i, r6 + ").buffer");
      }
      serializeTypedArray(e3) {
        return this.assignIndexedValue(e3.i, "new " + e3.c + "(" + this.serialize(e3.f) + "," + e3.b + "," + e3.l + ")");
      }
      serializeDataView(e3) {
        return this.assignIndexedValue(e3.i, "new DataView(" + this.serialize(e3.f) + "," + e3.b + "," + e3.l + ")");
      }
      serializeAggregateError(e3) {
        let r6 = e3.i;
        this.stack.push(r6);
        let n5 = this.serializeDictionary(e3, 'new AggregateError([],"' + e3.m + '")');
        return this.stack.pop(), n5;
      }
      serializeError(e3) {
        return this.serializeDictionary(e3, "new " + oi[e3.s] + '("' + e3.m + '")');
      }
      serializePromise(e3) {
        let r6, n5 = e3.f, o3 = e3.i, s5 = e3.s ? "Promise.resolve" : "Promise.reject";
        if (this.isIndexedValueInStack(n5)) {
          let o4 = this.getRefParam(n5.i);
          r6 = s5 + (e3.s ? "().then(" + this.createFunction([], o4) + ")" : "().catch(" + this.createEffectfulFunction([], "throw " + o4) + ")");
        } else {
          this.stack.push(o3);
          let e4 = this.serialize(n5);
          this.stack.pop(), r6 = s5 + "(" + e4 + ")";
        }
        return this.assignIndexedValue(o3, r6);
      }
      serializeWellKnownSymbol(e3) {
        return this.assignIndexedValue(e3.i, ti[e3.s]);
      }
      serializeBoxed(e3) {
        return this.assignIndexedValue(e3.i, "Object(" + this.serialize(e3.f) + ")");
      }
      serializePlugin(e3) {
        let r6 = this.plugins;
        if (r6) for (let n5 = 0, o3 = r6.length; n5 < o3; n5++) {
          let o4 = r6[n5];
          if (o4.tag === e3.c) return this.assignIndexedValue(e3.i, o4.serialize(e3.s, this, { id: e3.i }));
        }
        throw new Si(e3.c);
      }
      getConstructor(e3) {
        let r6 = this.serialize(e3);
        return r6 === this.getRefParam(e3.i) ? r6 : "(" + r6 + ")";
      }
      serializePromiseConstructor(e3) {
        let r6 = this.assignIndexedValue(e3.s, "{p:0,s:0,f:0}");
        return this.assignIndexedValue(e3.i, this.getConstructor(e3.f) + "(" + r6 + ")");
      }
      serializePromiseResolve(e3) {
        return this.getConstructor(e3.a[0]) + "(" + this.getRefParam(e3.i) + "," + this.serialize(e3.a[1]) + ")";
      }
      serializePromiseReject(e3) {
        return this.getConstructor(e3.a[0]) + "(" + this.getRefParam(e3.i) + "," + this.serialize(e3.a[1]) + ")";
      }
      serializeSpecialReference(e3) {
        return this.assignIndexedValue(e3.i, cr(this.features, e3.s));
      }
      serializeIteratorFactory(e3) {
        let r6 = "", n5 = false;
        return 4 !== e3.f.t && (this.markRef(e3.f.i), r6 = "(" + this.serialize(e3.f) + ",", n5 = true), r6 += this.assignIndexedValue(e3.i, this.createFunction(["s"], this.createFunction(["i", "c", "d", "t"], "(i=0,t={[" + this.getRefParam(e3.f.i) + "]:" + this.createFunction([], "t") + ",next:" + this.createEffectfulFunction([], "if(i>s.d)return{done:!0,value:void 0};if(d=s.v[c=i++],c===s.t)throw d;return{done:c===s.d,value:d}") + "})"))), n5 && (r6 += ")"), r6;
      }
      serializeIteratorFactoryInstance(e3) {
        return this.getConstructor(e3.a[0]) + "(" + this.serialize(e3.a[1]) + ")";
      }
      serializeAsyncIteratorFactory(e3) {
        let r6 = e3.a[0], n5 = e3.a[1], o3 = "";
        4 !== r6.t && (this.markRef(r6.i), o3 += "(" + this.serialize(r6)), 4 !== n5.t && (this.markRef(n5.i), o3 += (o3 ? "," : "(") + this.serialize(n5)), o3 && (o3 += ",");
        let s5 = this.assignIndexedValue(e3.i, this.createFunction(["s"], this.createFunction(["b", "c", "p", "d", "e", "t", "f"], "(b=[],c=0,p=[],d=-1,e=!1,f=" + this.createEffectfulFunction(["i", "l"], "for(i=0,l=p.length;i<l;i++)p[i].s({done:!0,value:void 0})") + ",s.on({next:" + this.createEffectfulFunction(["v", "t"], "if(t=p.shift())t.s({done:!1,value:v});b.push(v)") + ",throw:" + this.createEffectfulFunction(["v", "t"], "if(t=p.shift())t.f(v);f(),d=b.length,e=!0,b.push(v)") + ",return:" + this.createEffectfulFunction(["v", "t"], "if(t=p.shift())t.s({done:!0,value:v});f(),d=b.length,b.push(v)") + "}),t={[" + this.getRefParam(n5.i) + "]:" + this.createFunction([], "t.p") + ",next:" + this.createEffectfulFunction(["i", "t", "v"], "if(d===-1){return((i=c++)>=b.length)?(" + this.getRefParam(r6.i) + "(t={p:0,s:0,f:0}),p.push(t),t.p):{done:!1,value:b[i]}}if(c>d)return{done:!0,value:void 0};if(v=b[i=c++],i!==d)return{done:!1,value:v};if(e)throw v;return{done:!0,value:v}") + "})")));
        return o3 ? o3 + s5 + ")" : s5;
      }
      serializeAsyncIteratorFactoryInstance(e3) {
        return this.getConstructor(e3.a[0]) + "(" + this.serialize(e3.a[1]) + ")";
      }
      serializeStreamConstructor(e3) {
        let r6 = this.assignIndexedValue(e3.i, this.getConstructor(e3.f) + "()"), n5 = e3.a.length;
        if (n5) {
          let o3 = this.serialize(e3.a[0]);
          for (let r7 = 1; r7 < n5; r7++) o3 += "," + this.serialize(e3.a[r7]);
          return "(" + r6 + "," + o3 + "," + this.getRefParam(e3.i) + ")";
        }
        return r6;
      }
      serializeStreamNext(e3) {
        return this.getRefParam(e3.i) + ".next(" + this.serialize(e3.f) + ")";
      }
      serializeStreamThrow(e3) {
        return this.getRefParam(e3.i) + ".throw(" + this.serialize(e3.f) + ")";
      }
      serializeStreamReturn(e3) {
        return this.getRefParam(e3.i) + ".return(" + this.serialize(e3.f) + ")";
      }
      serialize(e3) {
        try {
          switch (e3.t) {
            case 2:
              return ni[e3.s];
            case 0:
              return "" + e3.s;
            case 1:
              return '"' + e3.s + '"';
            case 3:
              return e3.s + "n";
            case 4:
              return this.getRefParam(e3.i);
            case 18:
              return this.serializeReference(e3);
            case 9:
              return this.serializeArray(e3);
            case 10:
              return this.serializeObject(e3);
            case 11:
              return this.serializeNullConstructor(e3);
            case 5:
              return this.serializeDate(e3);
            case 6:
              return this.serializeRegExp(e3);
            case 7:
              return this.serializeSet(e3);
            case 8:
              return this.serializeMap(e3);
            case 19:
              return this.serializeArrayBuffer(e3);
            case 16:
            case 15:
              return this.serializeTypedArray(e3);
            case 20:
              return this.serializeDataView(e3);
            case 14:
              return this.serializeAggregateError(e3);
            case 13:
              return this.serializeError(e3);
            case 12:
              return this.serializePromise(e3);
            case 17:
              return this.serializeWellKnownSymbol(e3);
            case 21:
              return this.serializeBoxed(e3);
            case 22:
              return this.serializePromiseConstructor(e3);
            case 23:
              return this.serializePromiseResolve(e3);
            case 24:
              return this.serializePromiseReject(e3);
            case 25:
              return this.serializePlugin(e3);
            case 26:
              return this.serializeSpecialReference(e3);
            case 27:
              return this.serializeIteratorFactory(e3);
            case 28:
              return this.serializeIteratorFactoryInstance(e3);
            case 29:
              return this.serializeAsyncIteratorFactory(e3);
            case 30:
              return this.serializeAsyncIteratorFactoryInstance(e3);
            case 31:
              return this.serializeStreamConstructor(e3);
            case 32:
              return this.serializeStreamNext(e3);
            case 33:
              return this.serializeStreamThrow(e3);
            case 34:
              return this.serializeStreamReturn(e3);
            default:
              throw new bi(e3);
          }
        } catch (e4) {
          throw new yi(e4);
        }
      }
    };
    Ei = class extends Fi {
      static {
        __name(this, "Ei");
      }
      constructor(e3) {
        super(e3), this.mode = "cross", this.scopeId = e3.scopeId;
      }
      getRefParam(e3) {
        return "$R[" + e3 + "]";
      }
      assignIndexedValue(e3, r6) {
        return this.getRefParam(e3) + "=" + r6;
      }
      serializeTop(e3) {
        let r6 = this.serialize(e3), n5 = e3.i;
        if (null == n5) return r6;
        let o3 = this.resolvePatches(), s5 = this.getRefParam(n5), a5 = null == this.scopeId ? "" : Qa, i6 = o3 ? "(" + r6 + "," + o3 + s5 + ")" : r6;
        if ("" === a5) return 10 !== e3.t || o3 ? i6 : "(" + i6 + ")";
        let l5 = null == this.scopeId ? "()" : '($R["' + d2(this.scopeId) + '"])';
        return "(" + this.createFunction([a5], i6) + ")" + l5;
      }
    };
    _i = class extends xi {
      static {
        __name(this, "_i");
      }
      parseItems(e3) {
        let r6 = [];
        for (let n5 = 0, o3 = e3.length; n5 < o3; n5++) n5 in e3 && (r6[n5] = this.parse(e3[n5]));
        return r6;
      }
      parseArray(e3, r6) {
        return function(e4, r7, n5) {
          return u$1(9, e4, si, r7.length, si, si, si, si, n5, si, si, fe(r7));
        }(e3, r6, this.parseItems(r6));
      }
      parseProperties(e3) {
        let r6 = Object.entries(e3), n5 = [], o3 = [];
        for (let e4 = 0, s6 = r6.length; e4 < s6; e4++) n5.push(d2(r6[e4][0])), o3.push(this.parse(r6[e4][1]));
        let s5 = Symbol.iterator;
        return s5 in e3 && (n5.push(this.parseWellKnownSymbol(s5)), o3.push(M(this.parseIteratorFactory(), this.parse(J(e3))))), s5 = Symbol.asyncIterator, s5 in e3 && (n5.push(this.parseWellKnownSymbol(s5)), o3.push(U2(this.parseAsyncIteratorFactory(), this.parse(K2())))), s5 = Symbol.toStringTag, s5 in e3 && (n5.push(this.parseWellKnownSymbol(s5)), o3.push(w$1(e3[s5]))), s5 = Symbol.isConcatSpreadable, s5 in e3 && (n5.push(this.parseWellKnownSymbol(s5)), o3.push(e3[s5] ? ai : ii)), { k: n5, v: o3, s: n5.length };
      }
      parsePlainObject(e3, r6, n5) {
        return this.createObjectNode(e3, r6, n5, this.parseProperties(r6));
      }
      parseBoxed(e3, r6) {
        return function(e4, r7) {
          return u$1(21, e4, si, si, si, si, si, si, si, r7, si, si);
        }(e3, this.parse(r6.valueOf()));
      }
      parseTypedArray(e3, r6) {
        return function(e4, r7, n5) {
          return u$1(15, e4, si, r7.length, r7.constructor.name, si, si, si, si, n5, r7.byteOffset, si);
        }(e3, r6, this.parse(r6.buffer));
      }
      parseBigIntTypedArray(e3, r6) {
        return function(e4, r7, n5) {
          return u$1(16, e4, si, r7.length, r7.constructor.name, si, si, si, si, n5, r7.byteOffset, si);
        }(e3, r6, this.parse(r6.buffer));
      }
      parseDataView(e3, r6) {
        return function(e4, r7, n5) {
          return u$1(20, e4, si, r7.byteLength, si, si, si, si, si, n5, r7.byteOffset, si);
        }(e3, r6, this.parse(r6.buffer));
      }
      parseError(e3, r6) {
        let n5 = j(r6, this.features);
        return function(e4, r7, n6) {
          return u$1(13, e4, me(r7), si, si, d2(r7.message), n6, si, si, si, si, si);
        }(e3, r6, n5 ? this.parseProperties(n5) : si);
      }
      parseAggregateError(e3, r6) {
        let n5 = j(r6, this.features);
        return function(e4, r7, n6) {
          return u$1(14, e4, me(r7), si, si, d2(r7.message), n6, si, si, si, si, si);
        }(e3, r6, n5 ? this.parseProperties(n5) : si);
      }
      parseMap(e3, r6) {
        let n5 = [], o3 = [];
        for (let [e4, s5] of r6.entries()) n5.push(this.parse(e4)), o3.push(this.parse(s5));
        return this.createMapNode(e3, n5, o3, r6.size);
      }
      parseSet(e3, r6) {
        let n5 = [];
        for (let e4 of r6.keys()) n5.push(this.parse(e4));
        return function(e4, r7, n6) {
          return u$1(7, e4, si, r7, si, si, si, si, n6, si, si, si);
        }(e3, r6.size, n5);
      }
      parsePlugin(e3, r6) {
        let n5 = this.plugins;
        if (n5) for (let o3 = 0, s5 = n5.length; o3 < s5; o3++) {
          let s6 = n5[o3];
          if (s6.parse.sync && s6.test(r6)) return _(e3, s6.tag, s6.parse.sync(r6, this, { id: e3 }));
        }
      }
      parseStream(e3, r6) {
        return L2(e3, this.parseSpecialReference(4), []);
      }
      parsePromise(e3, r6) {
        return this.createPromiseConstructorNode(e3, this.createIndex({}));
      }
      parseObject(e3, r6) {
        if (Array.isArray(r6)) return this.parseArray(e3, r6);
        if ("__SEROVAL_STREAM__" in r6) return this.parseStream(e3, r6);
        let n5 = r6.constructor;
        if (n5 === Ci) return this.parse(r6.replacement);
        let o3 = this.parsePlugin(e3, r6);
        if (o3) return o3;
        switch (n5) {
          case Object:
            return this.parsePlainObject(e3, r6, false);
          case void 0:
            return this.parsePlainObject(e3, r6, true);
          case Date:
            return function(e4, r7) {
              let n6 = r7.valueOf();
              return u$1(5, e4, n6 != n6 ? "" : r7.toISOString(), si, si, si, si, si, si, si, si, si);
            }(e3, r6);
          case RegExp:
            return function(e4, r7) {
              return u$1(6, e4, si, si, d2(r7.source), r7.flags, si, si, si, si, si, si);
            }(e3, r6);
          case Error:
          case EvalError:
          case RangeError:
          case ReferenceError:
          case SyntaxError:
          case TypeError:
          case URIError:
            return this.parseError(e3, r6);
          case Number:
          case Boolean:
          case String:
          case BigInt:
            return this.parseBoxed(e3, r6);
          case ArrayBuffer:
            return function(e4, r7) {
              let n6 = new Uint8Array(r7), o4 = n6.length, s6 = new Array(o4);
              for (let e5 = 0; e5 < o4; e5++) s6[e5] = n6[e5];
              return u$1(19, e4, s6, si, si, si, si, si, si, si, si, si);
            }(e3, r6);
          case Int8Array:
          case Int16Array:
          case Int32Array:
          case Uint8Array:
          case Uint16Array:
          case Uint32Array:
          case Uint8ClampedArray:
          case Float32Array:
          case Float64Array:
            return this.parseTypedArray(e3, r6);
          case DataView:
            return this.parseDataView(e3, r6);
          case Map:
            return this.parseMap(e3, r6);
          case Set:
            return this.parseSet(e3, r6);
        }
        if (n5 === Promise || r6 instanceof Promise) return this.parsePromise(e3, r6);
        let s5 = this.features;
        if (16 & s5) switch (n5) {
          case BigInt64Array:
          case BigUint64Array:
            return this.parseBigIntTypedArray(e3, r6);
        }
        if (1 & s5 && "undefined" != typeof AggregateError && (n5 === AggregateError || r6 instanceof AggregateError)) return this.parseAggregateError(e3, r6);
        if (r6 instanceof Error) return this.parseError(e3, r6);
        if (Symbol.iterator in r6 || Symbol.asyncIterator in r6) return this.parsePlainObject(e3, r6, !!n5);
        throw new vi(r6);
      }
      parseFunction(e3) {
        let r6 = this.getReference(e3);
        if (0 !== r6.type) return r6.value;
        let n5 = this.parsePlugin(r6.value, e3);
        if (n5) return n5;
        throw new vi(e3);
      }
      parse(e3) {
        switch (typeof e3) {
          case "boolean":
            return e3 ? ai : ii;
          case "undefined":
            return li;
          case "string":
            return w$1(e3);
          case "number":
            return function(e4) {
              switch (e4) {
                case Number.POSITIVE_INFINITY:
                  return di;
                case Number.NEGATIVE_INFINITY:
                  return hi;
              }
              return e4 != e4 ? pi : Object.is(e4, -0) ? ci : u$1(0, si, e4, si, si, si, si, si, si, si, si, si);
            }(e3);
          case "bigint":
            return u$1(3, si, "" + e3, si, si, si, si, si, si, si, si, si);
          case "object":
            if (e3) {
              let r6 = this.getReference(e3);
              return 0 === r6.type ? this.parseObject(r6.value, e3) : r6.value;
            }
            return ui;
          case "symbol":
            return this.parseWellKnownSymbol(e3);
          case "function":
            return this.parseFunction(e3);
          default:
            throw new vi(e3);
        }
      }
      parseTop(e3) {
        try {
          return this.parse(e3);
        } catch (e4) {
          throw e4 instanceof gi ? e4 : new gi(e4);
        }
      }
    };
    Ii = class extends _i {
      static {
        __name(this, "Ii");
      }
      constructor(e3) {
        super(e3), this.alive = true, this.pending = 0, this.initial = true, this.buffer = [], this.onParseCallback = e3.onParse, this.onErrorCallback = e3.onError, this.onDoneCallback = e3.onDone;
      }
      onParseInternal(e3, r6) {
        try {
          this.onParseCallback(e3, r6);
        } catch (e4) {
          this.onError(e4);
        }
      }
      flush() {
        for (let e3 = 0, r6 = this.buffer.length; e3 < r6; e3++) this.onParseInternal(this.buffer[e3], false);
      }
      onParse(e3) {
        this.initial ? this.buffer.push(e3) : this.onParseInternal(e3, false);
      }
      onError(e3) {
        if (!this.onErrorCallback) throw e3;
        this.onErrorCallback(e3);
      }
      onDone() {
        this.onDoneCallback && this.onDoneCallback();
      }
      pushPendingState() {
        this.pending++;
      }
      popPendingState() {
        --this.pending <= 0 && this.onDone();
      }
      parseProperties(e3) {
        let r6 = Object.entries(e3), n5 = [], o3 = [];
        for (let e4 = 0, s6 = r6.length; e4 < s6; e4++) n5.push(d2(r6[e4][0])), o3.push(this.parse(r6[e4][1]));
        let s5 = Symbol.iterator;
        return s5 in e3 && (n5.push(this.parseWellKnownSymbol(s5)), o3.push(M(this.parseIteratorFactory(), this.parse(J(e3))))), s5 = Symbol.asyncIterator, s5 in e3 && (n5.push(this.parseWellKnownSymbol(s5)), o3.push(U2(this.parseAsyncIteratorFactory(), this.parse(function(e4) {
          let r7 = K2(), n6 = e4[Symbol.asyncIterator]();
          return (/* @__PURE__ */ __name(async function t4() {
            try {
              let e5 = await n6.next();
              e5.done ? r7.return(e5.value) : (r7.next(e5.value), await t4());
            } catch (e5) {
              r7.throw(e5);
            }
          }, "t"))().catch(() => {
          }), r7;
        }(e3))))), s5 = Symbol.toStringTag, s5 in e3 && (n5.push(this.parseWellKnownSymbol(s5)), o3.push(w$1(e3[s5]))), s5 = Symbol.isConcatSpreadable, s5 in e3 && (n5.push(this.parseWellKnownSymbol(s5)), o3.push(e3[s5] ? ai : ii)), { k: n5, v: o3, s: n5.length };
      }
      handlePromiseSuccess(e3, r6) {
        let n5 = this.parseWithError(r6);
        n5 && this.onParse(u$1(23, e3, si, si, si, si, si, si, [this.parseSpecialReference(2), n5], si, si, si)), this.popPendingState();
      }
      handlePromiseFailure(e3, r6) {
        if (this.alive) {
          let n5 = this.parseWithError(r6);
          n5 && this.onParse(u$1(24, e3, si, si, si, si, si, si, [this.parseSpecialReference(3), n5], si, si, si));
        }
        this.popPendingState();
      }
      parsePromise(e3, r6) {
        let n5 = this.createIndex({});
        return r6.then(this.handlePromiseSuccess.bind(this, n5), this.handlePromiseFailure.bind(this, n5)), this.pushPendingState(), this.createPromiseConstructorNode(e3, n5);
      }
      parsePlugin(e3, r6) {
        let n5 = this.plugins;
        if (n5) for (let o3 = 0, s5 = n5.length; o3 < s5; o3++) {
          let s6 = n5[o3];
          if (s6.parse.stream && s6.test(r6)) return _(e3, s6.tag, s6.parse.stream(r6, this, { id: e3 }));
        }
        return si;
      }
      parseStream(e3, r6) {
        let n5 = L2(e3, this.parseSpecialReference(4), []);
        return this.pushPendingState(), r6.on({ next: /* @__PURE__ */ __name((r7) => {
          if (this.alive) {
            let n6 = this.parseWithError(r7);
            n6 && this.onParse(u$1(32, e3, si, si, si, si, si, si, si, n6, si, si));
          }
        }, "next"), throw: /* @__PURE__ */ __name((r7) => {
          if (this.alive) {
            let n6 = this.parseWithError(r7);
            n6 && this.onParse(u$1(33, e3, si, si, si, si, si, si, si, n6, si, si));
          }
          this.popPendingState();
        }, "throw"), return: /* @__PURE__ */ __name((r7) => {
          if (this.alive) {
            let n6 = this.parseWithError(r7);
            n6 && this.onParse(u$1(34, e3, si, si, si, si, si, si, si, n6, si, si));
          }
          this.popPendingState();
        }, "return") }), n5;
      }
      parseWithError(e3) {
        try {
          return this.parse(e3);
        } catch (e4) {
          return this.onError(e4), si;
        }
      }
      start(e3) {
        let r6 = this.parseWithError(e3);
        r6 && (this.onParseInternal(r6, true), this.initial = false, this.flush(), this.pending <= 0 && this.destroy());
      }
      destroy() {
        this.alive && (this.onDone(), this.alive = false);
      }
      isAlive() {
        return this.alive;
      }
    };
    Ai = class extends Ii {
      static {
        __name(this, "Ai");
      }
      constructor() {
        super(...arguments), this.mode = "cross";
      }
    };
    Mi = {};
    __name(w2, "w");
    Oi = { tag: "seroval/plugins/web/ReadableStream", extends: [{ tag: "seroval-plugins/web/ReadableStreamFactory", test: /* @__PURE__ */ __name((e3) => e3 === Mi, "test"), parse: { sync() {
    }, async: /* @__PURE__ */ __name(async () => await Promise.resolve(void 0), "async"), stream() {
    } }, serialize: /* @__PURE__ */ __name((e3, r6) => r6.createFunction(["d"], "new ReadableStream({start:" + r6.createEffectfulFunction(["c"], "d.on({next:" + r6.createEffectfulFunction(["v"], "c.enqueue(v)") + ",throw:" + r6.createEffectfulFunction(["v"], "c.error(v)") + ",return:" + r6.createEffectfulFunction([], "c.close()") + "})") + "})"), "serialize"), deserialize: /* @__PURE__ */ __name(() => Mi, "deserialize") }], test: /* @__PURE__ */ __name((e3) => "undefined" != typeof ReadableStream && e3 instanceof ReadableStream, "test"), parse: { sync: /* @__PURE__ */ __name((e3, r6) => ({ factory: r6.parse(Mi), stream: r6.parse(K2()) }), "sync"), async: /* @__PURE__ */ __name(async (e3, r6) => ({ factory: await r6.parse(Mi), stream: await r6.parse(w2(e3)) }), "async"), stream: /* @__PURE__ */ __name((e3, r6) => ({ factory: r6.parse(Mi), stream: r6.parse(w2(e3)) }), "stream") }, serialize: /* @__PURE__ */ __name((e3, r6) => "(" + r6.serialize(e3.factory) + ")(" + r6.serialize(e3.stream) + ")", "serialize"), deserialize(e3, r6) {
      let n5 = r6.deserialize(e3.stream);
      return new ReadableStream({ start(e4) {
        n5.on({ next(r7) {
          e4.enqueue(r7);
        }, throw(r7) {
          e4.error(r7);
        }, return() {
          e4.close();
        } });
      } });
    } };
    Li = Oi;
    ji = Hr({ tag: "tanstack-start:seroval-plugins/Error", test: /* @__PURE__ */ __name((e3) => e3 instanceof Error, "test"), parse: { sync: /* @__PURE__ */ __name((e3, r6) => ({ message: r6.parse(e3.message) }), "sync"), async: /* @__PURE__ */ __name(async (e3, r6) => ({ message: await r6.parse(e3.message) }), "async"), stream: /* @__PURE__ */ __name((e3, r6) => ({ message: r6.parse(e3.message) }), "stream") }, serialize: /* @__PURE__ */ __name((e3, r6) => "new Error(" + r6.serialize(e3.message) + ")", "serialize"), deserialize: /* @__PURE__ */ __name((e3, r6) => new Error(r6.deserialize(e3.message)), "deserialize") });
    __name(dehydrateMatch, "dehydrateMatch");
    __name(attachRouterServerSsrUtils, "attachRouterServerSsrUtils");
    __name(hasProp, "hasProp");
    Bi = Object.defineProperty;
    __publicField$2 = /* @__PURE__ */ __name((e3, r6, n5) => (((e4, r7, n6) => {
      r7 in e4 ? Bi(e4, r7, { enumerable: true, configurable: true, writable: true, value: n6 }) : e4[r7] = n6;
    })(e3, "symbol" != typeof r6 ? r6 + "" : r6, n5), n5), "__publicField$2");
    H3Error = class extends Error {
      static {
        __name(this, "H3Error");
      }
      constructor(e3, r6 = {}) {
        super(e3, r6), __publicField$2(this, "statusCode", 500), __publicField$2(this, "fatal", false), __publicField$2(this, "unhandled", false), __publicField$2(this, "statusMessage"), __publicField$2(this, "data"), __publicField$2(this, "cause"), r6.cause && !this.cause && (this.cause = r6.cause);
      }
      toJSON() {
        const e3 = { message: this.message, statusCode: sanitizeStatusCode(this.statusCode, 500) };
        return this.statusMessage && (e3.statusMessage = sanitizeStatusMessage(this.statusMessage)), void 0 !== this.data && (e3.data = this.data), e3;
      }
    };
    __name(assertMethod, "assertMethod");
    __name(toWebRequest, "toWebRequest");
    __publicField$2(H3Error, "__h3_error__", true);
    Ni = Symbol.for("h3RawBody");
    zi = ["PATCH", "POST", "PUT", "DELETE"];
    __name(getRequestWebStream, "getRequestWebStream");
    Di = /[^\u0009\u0020-\u007E]/g;
    __name(sanitizeStatusMessage, "sanitizeStatusMessage");
    __name(sanitizeStatusCode, "sanitizeStatusCode");
    __name(splitCookiesString, "splitCookiesString");
    __name(sendWebResponse, "sendWebResponse");
    Hi = Object.defineProperty;
    __publicField = /* @__PURE__ */ __name((e3, r6, n5) => (((e4, r7, n6) => {
      r7 in e4 ? Hi(e4, r7, { enumerable: true, configurable: true, writable: true, value: n6 }) : e4[r7] = n6;
    })(e3, "symbol" != typeof r6 ? r6 + "" : r6, n5), n5), "__publicField");
    H3Event = class {
      static {
        __name(this, "H3Event");
      }
      constructor(e3, r6) {
        __publicField(this, "__is_event__", true), __publicField(this, "node"), __publicField(this, "web"), __publicField(this, "context", {}), __publicField(this, "_method"), __publicField(this, "_path"), __publicField(this, "_headers"), __publicField(this, "_requestBody"), __publicField(this, "_handled", false), __publicField(this, "_onBeforeResponseCalled"), __publicField(this, "_onAfterResponseCalled"), this.node = { req: e3, res: r6 };
      }
      get method() {
        return this._method || (this._method = (this.node.req.method || "GET").toUpperCase()), this._method;
      }
      get path() {
        return this._path || this.node.req.url || "/";
      }
      get headers() {
        return this._headers || (this._headers = function(e3) {
          const r6 = new Headers();
          for (const [n5, o3] of Object.entries(e3)) if (Array.isArray(o3)) for (const e4 of o3) r6.append(n5, e4);
          else o3 && r6.set(n5, o3);
          return r6;
        }(this.node.req.headers)), this._headers;
      }
      get handled() {
        return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
      }
      respondWith(e3) {
        return Promise.resolve(e3).then((e4) => sendWebResponse(this, e4));
      }
      toString() {
        return `[${this.method}] ${this.path}`;
      }
      toJSON() {
        return this.toString();
      }
      get req() {
        return this.node.req;
      }
      get res() {
        return this.node.res;
      }
    };
    __name(_normalizeArray, "_normalizeArray");
    Wi = new AsyncLocalStorage2();
    __name(getEvent, "getEvent");
    Vi = Symbol("$HTTPEvent");
    __name(createWrapperFunction, "createWrapperFunction");
    qi = createWrapperFunction(function(e3) {
      const r6 = {};
      for (const n5 in e3.node.req.headers) {
        const o3 = e3.node.req.headers[n5];
        r6[n5] = Array.isArray(o3) ? o3.filter(Boolean).join(", ") : o3;
      }
      return r6;
    });
    Ui = createWrapperFunction(function(e3) {
      return e3.node.res.statusCode;
    });
    Ki = createWrapperFunction(function(e3) {
      return e3.node.res.getHeaders();
    });
    Gi = "tanstack-start-route-tree:v";
    Ji = "tanstack-start-manifest:v";
    Xi = "tanstack-start-server-fn-manifest:v";
    __name(loadVirtualModule, "loadVirtualModule");
    __name(isNotFoundResponse, "isNotFoundResponse");
    Qi = "X-TSS_SHELL";
    __name(handlerToMiddleware, "handlerToMiddleware");
    __name(handleCtxResult, "handleCtxResult");
    __name(isSpecialResponse, "isSpecialResponse");
    __name(createServerFileRoute, "createServerFileRoute");
    __name(createServerRoute, "createServerRoute");
    Yi = createServerRoute;
    createMethodBuilder = /* @__PURE__ */ __name((e3) => ({ _options: e3 || {}, _types: {}, middleware: /* @__PURE__ */ __name((r6) => createMethodBuilder({ ...e3, middlewares: r6 }), "middleware"), handler: /* @__PURE__ */ __name((r6) => createMethodBuilder({ ...e3, handler: r6 }), "handler") }), "createMethodBuilder");
    Ja.AggregateError, Ja.BigIntTypedArray;
    TanStackRouterDevtools = /* @__PURE__ */ __name(function() {
      return null;
    }, "TanStackRouterDevtools");
    __name(DefaultCatchBoundary, "DefaultCatchBoundary");
    __name(NotFound, "NotFound");
    seo = /* @__PURE__ */ __name(({ title: e3, description: r6, keywords: n5, image: o3 }) => [{ title: e3 }, { name: "description", content: r6 }, { name: "keywords", content: n5 }, { name: "twitter:title", content: e3 }, { name: "twitter:description", content: r6 }, { name: "twitter:creator", content: "@tannerlinsley" }, { name: "twitter:site", content: "@tannerlinsley" }, { name: "og:type", content: "website" }, { name: "og:title", content: e3 }, { name: "og:description", content: r6 }, ...o3 ? [{ name: "twitter:image", content: o3 }, { name: "twitter:card", content: "summary_large_image" }, { name: "og:image", content: o3 }] : []], "seo");
    Zi = new RootRoute({ head: /* @__PURE__ */ __name(() => ({ meta: [{ charSet: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, ...seo({ title: "TanStack Start | Type-Safe, Client-First, Full-Stack React Framework", description: "TanStack Start is a type-safe, client-first, full-stack React framework. " })], links: [{ rel: "stylesheet", href: "/assets/app-DACsPwZv.css" }, { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }, { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }, { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }, { rel: "manifest", href: "/site.webmanifest", color: "#fffff" }, { rel: "icon", href: "/favicon.ico" }], scripts: [{ src: "/customScript.js", type: "text/javascript" }] }), "head"), errorComponent: DefaultCatchBoundary, notFoundComponent: /* @__PURE__ */ __name(() => p2.jsx(NotFound, {}), "notFoundComponent"), shellComponent: /* @__PURE__ */ __name(function({ children: e3 }) {
      return p2.jsxs("html", { children: [p2.jsx("head", { children: p2.jsx(HeadContent, {}) }), p2.jsxs("body", { children: [p2.jsxs("div", { className: "p-2 flex gap-2 text-lg", children: [p2.jsx(ct, { to: "/", activeProps: { className: "font-bold" }, activeOptions: { exact: true }, children: "Home" }), " ", p2.jsx(ct, { to: "/posts", activeProps: { className: "font-bold" }, children: "Posts" }), " ", p2.jsx(ct, { to: "/users", activeProps: { className: "font-bold" }, children: "Users" }), " ", p2.jsx(ct, { to: "/route-a", activeProps: { className: "font-bold" }, children: "Pathless Layout" }), " ", p2.jsx(ct, { to: "/deferred", activeProps: { className: "font-bold" }, children: "Deferred" }), " ", p2.jsx(ct, { to: "/this-route-does-not-exist", activeProps: { className: "font-bold" }, children: "This Route Does Not Exist" })] }), p2.jsx("hr", {}), e3, p2.jsx(TanStackRouterDevtools, { position: "bottom-right" }), p2.jsx(Scripts, {})] })] });
    }, "shellComponent") });
    el = createFileRoute("/users")({ loader: /* @__PURE__ */ __name(async () => {
      const e3 = await fetch("/api/users");
      if (!e3.ok) throw new Error("Unexpected status code");
      return await e3.json();
    }, "loader"), component: lazyRouteComponent(() => Promise.resolve().then(() => (init_users_CeBxWgLB(), users_CeBxWgLB_exports)), "component") });
    tl = createFileRoute("/redirect")({ beforeLoad: /* @__PURE__ */ __name(async () => {
      throw redirect({ to: "/posts" });
    }, "beforeLoad") });
    __name(sanitizeBase, "sanitizeBase");
    createServerRpc = /* @__PURE__ */ __name((e3, r6, n5) => {
      invariant(n5);
      const o3 = sanitizeBase("/"), s5 = `${o3 ? `/${o3}` : ""}/${sanitizeBase(r6)}/${e3}`;
      return Object.assign(n5, { url: s5, functionId: e3 });
    }, "createServerRpc");
    rl = createServerRpc("src_utils_posts_tsx--fetchPost_createServerFn_handler", "/_serverFn", (e3, r6) => nl.__executeServer(e3, r6));
    nl = createServerFn().validator((e3) => e3).handler(rl, async ({ data: e3 }) => {
      console.info(`Fetching post with id ${e3}...`);
      const r6 = await fetch(`https://jsonplaceholder.typicode.com/posts/${e3}`);
      if (!r6.ok) {
        if (404 === r6.status) throw notFound();
        throw new Error("Failed to fetch post");
      }
      return await r6.json();
    });
    ol = createServerRpc("src_utils_posts_tsx--fetchPosts_createServerFn_handler", "/_serverFn", (e3, r6) => sl.__executeServer(e3, r6));
    sl = createServerFn().handler(ol, async () => {
      console.info("Fetching posts...");
      const e3 = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!e3.ok) throw new Error("Failed to fetch posts");
      return (await e3.json()).slice(0, 10);
    });
    al = createFileRoute("/posts")({ loader: /* @__PURE__ */ __name(async () => sl(), "loader"), component: lazyRouteComponent(() => Promise.resolve().then(() => (init_posts_DxVb0XZg(), posts_DxVb0XZg_exports)), "component") });
    il = createServerRpc("src_routes_deferred_tsx--personServerFn_createServerFn_handler", "/_serverFn", (e3, r6) => ll.__executeServer(e3, r6));
    ll = createServerFn({ method: "GET" }).validator((e3) => e3).handler(il, ({ data: e3 }) => ({ name: e3, randomNumber: Math.floor(100 * Math.random()) }));
    ul = createServerRpc("src_routes_deferred_tsx--slowServerFn_createServerFn_handler", "/_serverFn", (e3, r6) => cl.__executeServer(e3, r6));
    cl = createServerFn({ method: "GET" }).validator((e3) => e3).handler(ul, async ({ data: e3 }) => (await new Promise((e4) => setTimeout(e4, 1e3)), { name: e3, randomNumber: Math.floor(100 * Math.random()) }));
    dl = createFileRoute("/deferred")({ loader: /* @__PURE__ */ __name(async () => ({ deferredStuff: new Promise((e3) => setTimeout(() => e3("Hello deferred!"), 2e3)), deferredPerson: cl({ data: "Tanner Linsley" }), person: await ll({ data: "John Doe" }) }), "loader"), component: lazyRouteComponent(() => Promise.resolve().then(() => (init_deferred_sDJaeJCX(), deferred_sDJaeJCX_exports)), "component") });
    hl = createFileRoute("/_pathlessLayout")({ component: lazyRouteComponent(() => Promise.resolve().then(() => (init_pathlessLayout_orBP5_LJ(), pathlessLayout_orBP5_LJ_exports)), "component") });
    pl = createFileRoute("/")({ component: lazyRouteComponent(() => Promise.resolve().then(() => (init_index_CSucwgOv(), index_CSucwgOv_exports)), "component") });
    fl = createFileRoute("/users/")({ component: lazyRouteComponent(() => Promise.resolve().then(() => (init_users_index_BoVPxpKb(), users_index_BoVPxpKb_exports)), "component") });
    ml = createFileRoute("/posts/")({ component: lazyRouteComponent(() => Promise.resolve().then(() => (init_posts_index_8K46EVme(), posts_index_8K46EVme_exports)), "component") });
    gl = createFileRoute("/users/$userId")({ loader: /* @__PURE__ */ __name(async ({ params: { userId: e3 } }) => {
      try {
        const r6 = await fetch("/api/users/" + e3);
        if (!r6.ok) throw new Error("Unexpected status code");
        return await r6.json();
      } catch {
        throw new Error("Failed to fetch user");
      }
    }, "loader"), errorComponent: lazyRouteComponent(() => Promise.resolve().then(() => (init_users_userId_CG2IqJzb(), users_userId_CG2IqJzb_exports)), "errorComponent"), component: lazyRouteComponent(() => Promise.resolve().then(() => (init_users_userId_qnRa20YW(), users_userId_qnRa20YW_exports)), "component"), notFoundComponent: lazyRouteComponent(() => Promise.resolve().then(() => (init_users_userId_DFbR5DAX(), users_userId_DFbR5DAX_exports)), "notFoundComponent") });
    yl = createFileRoute("/posts/$postId")({ loader: /* @__PURE__ */ __name(({ params: { postId: e3 } }) => nl({ data: e3 }), "loader"), errorComponent: lazyRouteComponent(() => Promise.resolve().then(() => (init_posts_postId_C9z5TBp(), posts_postId_C9z5TBp_exports)), "errorComponent"), component: lazyRouteComponent(() => Promise.resolve().then(() => (init_posts_postId_DnvT2Afk(), posts_postId_DnvT2Afk_exports)), "component"), notFoundComponent: lazyRouteComponent(() => Promise.resolve().then(() => (init_posts_postId_Ol83_kAF(), posts_postId_Ol83_kAF_exports)), "notFoundComponent") });
    vl = createFileRoute("/_pathlessLayout/_nested-layout")({ component: lazyRouteComponent(() => Promise.resolve().then(() => (init_nested_layout_BZIh3VuL(), nested_layout_BZIh3VuL_exports)), "component") });
    bl = createFileRoute("/posts_/$postId/deep")({ loader: /* @__PURE__ */ __name(async ({ params: { postId: e3 } }) => nl({ data: e3 }), "loader"), errorComponent: lazyRouteComponent(() => Promise.resolve().then(() => (init_posts_postId_deep_C9z5TBp(), posts_postId_deep_C9z5TBp_exports)), "errorComponent"), component: lazyRouteComponent(() => Promise.resolve().then(() => (init_posts_postId_deep_BJ5P2fE8(), posts_postId_deep_BJ5P2fE8_exports)), "component") });
    Sl = createFileRoute("/_pathlessLayout/_nested-layout/route-b")({ component: lazyRouteComponent(() => Promise.resolve().then(() => (init_route_b_CVm3vQe0(), route_b_CVm3vQe0_exports)), "component") });
    kl = createFileRoute("/_pathlessLayout/_nested-layout/route-a")({ component: lazyRouteComponent(() => Promise.resolve().then(() => (init_route_a_DDIOWP5Y(), route_a_DDIOWP5Y_exports)), "component") });
    Cl = createServerFileRoute().methods({ GET: /* @__PURE__ */ __name(async ({ request: e3 }) => new Response('console.log("Hello from customScript.js!")', { headers: { "Content-Type": "application/javascript" } }), "GET") });
    wl = createMiddleware({ type: "request" }).server(async ({ next: e3, request: r6 }) => {
      console.info("In: /users"), console.info("Request Headers:", qi());
      const n5 = await e3();
      return n5.response.headers.set("x-users", "true"), console.info("Out: /users"), n5;
    });
    Pl = createMiddleware({ type: "request" }).server(async ({ next: e3, request: r6 }) => {
      console.info("In: testParentMiddleware");
      const n5 = await e3();
      return n5.response.headers.set("x-test-parent", "true"), console.info("Out: testParentMiddleware"), n5;
    });
    Rl = createMiddleware({ type: "request" }).middleware([Pl]).server(async ({ next: e3, request: r6 }) => {
      console.info("In: testMiddleware");
      const n5 = await e3();
      return n5.response.headers.set("x-test", "true"), console.info("Out: testMiddleware"), n5;
    });
    xl = createServerFileRoute().middleware([Rl, wl, Pl]).methods({ GET: /* @__PURE__ */ __name(async ({ request: e3 }) => {
      console.info("GET /api/users @", e3.url), console.info("Fetching users... @", e3.url);
      const r6 = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!r6.ok) throw new Error("Failed to fetch users");
      return json((await r6.json()).slice(0, 10).map((e4) => ({ id: e4.id, name: e4.name, email: e4.email })));
    }, "GET") });
    $l = createServerFileRoute().methods({ GET: /* @__PURE__ */ __name(async ({ params: e3, request: r6 }) => {
      console.info(`Fetching users by id=${e3.userId}... @`, r6.url);
      try {
        const r7 = await fetch("https://jsonplaceholder.typicode.com/users/" + e3.userId);
        if (!r7.ok) throw new Error("Failed to fetch user");
        const n5 = await r7.json();
        return json({ id: n5.id, name: n5.name, email: n5.email });
      } catch (e4) {
        return console.error(e4), json({ error: "User not found" }, { status: 404 });
      }
    }, "GET") });
    Tl = Yi();
    Fl = el.update({ id: "/users", path: "/users", getParentRoute: /* @__PURE__ */ __name(() => Zi, "getParentRoute") });
    El = tl.update({ id: "/redirect", path: "/redirect", getParentRoute: /* @__PURE__ */ __name(() => Zi, "getParentRoute") });
    _l = al.update({ id: "/posts", path: "/posts", getParentRoute: /* @__PURE__ */ __name(() => Zi, "getParentRoute") });
    Il = dl.update({ id: "/deferred", path: "/deferred", getParentRoute: /* @__PURE__ */ __name(() => Zi, "getParentRoute") });
    Al = hl.update({ id: "/_pathlessLayout", getParentRoute: /* @__PURE__ */ __name(() => Zi, "getParentRoute") });
    Ml = pl.update({ id: "/", path: "/", getParentRoute: /* @__PURE__ */ __name(() => Zi, "getParentRoute") });
    Ol = fl.update({ id: "/", path: "/", getParentRoute: /* @__PURE__ */ __name(() => Fl, "getParentRoute") });
    Ll = ml.update({ id: "/", path: "/", getParentRoute: /* @__PURE__ */ __name(() => _l, "getParentRoute") });
    jl = gl.update({ id: "/$userId", path: "/$userId", getParentRoute: /* @__PURE__ */ __name(() => Fl, "getParentRoute") });
    Bl = yl.update({ id: "/$postId", path: "/$postId", getParentRoute: /* @__PURE__ */ __name(() => _l, "getParentRoute") });
    Nl = vl.update({ id: "/_nested-layout", getParentRoute: /* @__PURE__ */ __name(() => Al, "getParentRoute") });
    zl = bl.update({ id: "/posts_/$postId/deep", path: "/posts/$postId/deep", getParentRoute: /* @__PURE__ */ __name(() => Zi, "getParentRoute") });
    Dl = Sl.update({ id: "/route-b", path: "/route-b", getParentRoute: /* @__PURE__ */ __name(() => Nl, "getParentRoute") });
    Hl = kl.update({ id: "/route-a", path: "/route-a", getParentRoute: /* @__PURE__ */ __name(() => Nl, "getParentRoute") });
    Wl = Cl.update({ id: "/customScript.js", path: "/customScript.js", getParentRoute: /* @__PURE__ */ __name(() => Tl, "getParentRoute") });
    Vl = xl.update({ id: "/api/users", path: "/api/users", getParentRoute: /* @__PURE__ */ __name(() => Tl, "getParentRoute") });
    ql = $l.update({ id: "/$userId", path: "/$userId", getParentRoute: /* @__PURE__ */ __name(() => Vl, "getParentRoute") });
    Ul = { PathlessLayoutNestedLayoutRouteARoute: Hl, PathlessLayoutNestedLayoutRouteBRoute: Dl };
    Kl = { PathlessLayoutNestedLayoutRoute: Nl._addFileChildren(Ul) };
    Gl = Al._addFileChildren(Kl);
    Jl = { PostsPostIdRoute: Bl, PostsIndexRoute: Ll };
    Xl = _l._addFileChildren(Jl);
    Ql = { UsersUserIdRoute: jl, UsersIndexRoute: Ol };
    Yl = Fl._addFileChildren(Ql);
    Zl = { ApiUsersUserIdServerRoute: ql };
    eu = Vl._addFileChildren(Zl);
    tu = { IndexRoute: Ml, PathlessLayoutRoute: Gl, DeferredRoute: Il, PostsRoute: Xl, RedirectRoute: El, UsersRoute: Yl, PostsPostIdDeepRoute: zl };
    ru = Zi._addFileChildren(tu)._addFileTypes();
    nu = { CustomScriptDotjsServerRoute: Wl, ApiUsersServerRoute: eu };
    ou = Tl._addFileChildren(nu)._addFileTypes();
    su = Object.freeze(Object.defineProperty({ __proto__: null, routeTree: ru, serverRouteTree: ou }, Symbol.toStringTag, { value: "Module" }));
    au = function({ createRouter: r6 }) {
      let n5, o3 = null, s5 = null;
      return (a5) => {
        const i6 = globalThis.fetch, startRequestResolver = /* @__PURE__ */ __name(async ({ request: l5 }) => {
          globalThis.fetch = async function(e3, r7) {
            function resolve(e4, r8) {
              const n6 = new Request(e4, r8);
              return startRequestResolver({ request: n6 });
            }
            __name(resolve, "resolve");
            function getOrigin() {
              return l5.headers.get("Origin") || l5.headers.get("Referer") || "http://localhost";
            }
            __name(getOrigin, "getOrigin");
            if ("string" == typeof e3 && e3.startsWith("/")) {
              return resolve(new URL(e3, getOrigin()), r7);
            }
            if ("object" == typeof e3 && "url" in e3 && "string" == typeof e3.url && e3.url.startsWith("/")) {
              return resolve(new URL(e3.url, getOrigin()), r7);
            }
            return i6(e3, r7);
          };
          const u4 = new URL(l5.url), c4 = decodeURIComponent(u4.href.replace(u4.origin, "")), h4 = await r6(), p4 = createMemoryHistory({ initialEntries: [c4] }), g3 = "true" === g.env.TSS_PRERENDERING;
          let y3 = "true" === g.env.TSS_SHELL;
          g3 && !y3 && (y3 = "true" === l5.headers.get(Qi)), h4.update({ history: p4, isShell: y3, isPrerendering: g3 });
          const v3 = await (async () => {
            try {
              0;
              const r7 = joinPaths(["/", (e3 = "/_serverFn", trimPathRight(trimPathLeft(e3))), "/"]);
              if (c4.startsWith(r7)) return await (async ({ request: e4 }) => {
                const r8 = new AbortController(), n6 = r8.signal, abort3 = /* @__PURE__ */ __name(() => r8.abort(), "abort");
                e4.signal.addEventListener("abort", abort3);
                const o4 = e4.method, s6 = new URL(e4.url, "http://localhost:3000"), a6 = new RegExp(`${i7 = "/_serverFn", i7.replace(/^\/|\/$/g, "")}/([^/?#]+)`);
                var i7;
                const l6 = s6.pathname.match(a6), u5 = l6 ? l6[1] : null, c5 = Object.fromEntries(s6.searchParams.entries()), h5 = "createServerFn" in c5;
                if ("string" != typeof u5) throw new Error("Invalid server action param for serverFnId: " + u5);
                const { default: p5 } = await loadVirtualModule(Xi), g4 = p5[u5];
                if (!g4) throw console.info("serverFnManifest", p5), new Error("Server function info not found for " + u5);
                const y4 = await g4.importer();
                if (!y4) throw console.info("serverFnInfo", g4), new Error("Server function module not resolved for " + u5);
                const v4 = y4[g4.functionName];
                if (!v4) throw console.info("serverFnInfo", g4), console.info("fnModule", y4), new Error(`Server function module export not resolved for serverFn ID: ${u5}`);
                const b4 = ["multipart/form-data", "application/x-www-form-urlencoded"], k4 = await (async () => {
                  try {
                    let r9 = await (async () => {
                      if (e4.headers.get("Content-Type") && b4.some((r11) => {
                        var n7;
                        return null == (n7 = e4.headers.get("Content-Type")) ? void 0 : n7.includes(r11);
                      })) return invariant("get" !== o4.toLowerCase()), await v4(await e4.formData(), n6);
                      if ("get" === o4.toLowerCase()) {
                        let e5 = c5;
                        return h5 && (e5 = c5.payload), e5 = e5 ? Wa.parse(e5) : e5, await v4(e5, n6);
                      }
                      const r10 = await e4.text(), s7 = Wa.parse(r10);
                      return h5 ? await v4(s7, n6) : await v4(...s7, n6);
                    })();
                    return r9.result instanceof Response ? r9.result : !h5 && (r9 = r9.result, r9 instanceof Response) ? r9 : isNotFound(r9) ? isNotFoundResponse(r9) : new Response(void 0 !== r9 ? Wa.stringify(r9) : void 0, { status: Ui(getEvent()), headers: { "Content-Type": "application/json" } });
                  } catch (e5) {
                    return e5 instanceof Response ? e5 : isNotFound(e5) ? isNotFoundResponse(e5) : (console.info(), console.info("Server Fn Error!"), console.info(), console.error(e5), console.info(), new Response(Wa.stringify(e5), { status: 500, headers: { "Content-Type": "application/json" } }));
                  }
                })();
                return e4.signal.removeEventListener("abort", abort3), k4;
              })({ request: l5 });
              if (null === o3) try {
                o3 = await loadVirtualModule(Gi), o3.serverRouteTree && (n5 = function({ routeTree: e4, initRoute: r8 }) {
                  const n6 = {}, o4 = {}, recurseRoutes = /* @__PURE__ */ __name((e5) => {
                    e5.forEach((e6, s7) => {
                      if (null == r8 || r8(e6, s7), invariant(!n6[e6.id], String(e6.id)), n6[e6.id] = e6, !e6.isRoot && e6.path) {
                        const r9 = trimPathRight(e6.fullPath);
                        o4[r9] && !e6.fullPath.endsWith("/") || (o4[r9] = e6);
                      }
                      const a7 = e6.children;
                      (null == a7 ? void 0 : a7.length) && recurseRoutes(a7);
                    });
                  }, "recurseRoutes");
                  recurseRoutes([e4]);
                  const s6 = [];
                  Object.values(n6).forEach((e5, r9) => {
                    var n7;
                    if (e5.isRoot || !e5.path) return;
                    const o5 = trimPathLeft(e5.fullPath);
                    let a7 = parsePathname(o5), i7 = 0;
                    for (; a7.length > i7 + 1 && "/" === (null == (n7 = a7[i7]) ? void 0 : n7.value); ) i7++;
                    i7 > 0 && (a7 = a7.slice(i7));
                    let l6 = 0, u5 = false;
                    const c5 = a7.map((e6, r10) => {
                      if ("/" === e6.value) return 0.75;
                      let n8;
                      if (1 === e6.type ? n8 = 0.5 : 3 === e6.type ? (n8 = 0.4, l6++) : 2 === e6.type && (n8 = 0.25), n8) {
                        for (let o6 = r10 + 1; o6 < a7.length; o6++) {
                          const r11 = a7[o6];
                          if (0 === r11.type && "/" !== r11.value) return u5 = true, handleParam(e6, n8 + 0.2);
                        }
                        return handleParam(e6, n8);
                      }
                      return 1;
                    });
                    s6.push({ child: e5, trimmed: o5, parsed: a7, index: r9, scores: c5, optionalParamCount: l6, hasStaticAfter: u5 });
                  });
                  const a6 = s6.sort((e5, r9) => {
                    const n7 = Math.min(e5.scores.length, r9.scores.length);
                    for (let o5 = 0; o5 < n7; o5++) if (e5.scores[o5] !== r9.scores[o5]) return r9.scores[o5] - e5.scores[o5];
                    if (e5.scores.length !== r9.scores.length) {
                      if (e5.optionalParamCount !== r9.optionalParamCount) {
                        if (e5.hasStaticAfter === r9.hasStaticAfter) return e5.optionalParamCount - r9.optionalParamCount;
                        if (e5.hasStaticAfter && !r9.hasStaticAfter) return -1;
                        if (!e5.hasStaticAfter && r9.hasStaticAfter) return 1;
                      }
                      return r9.scores.length - e5.scores.length;
                    }
                    for (let o5 = 0; o5 < n7; o5++) if (e5.parsed[o5].value !== r9.parsed[o5].value) return e5.parsed[o5].value > r9.parsed[o5].value ? 1 : -1;
                    return e5.index - r9.index;
                  }).map((e5, r9) => (e5.child.rank = r9, e5.child));
                  return { routesById: n6, routesByPath: o4, flatRoutes: a6 };
                }({ routeTree: o3.serverRouteTree, initRoute: /* @__PURE__ */ __name((e4, r8) => {
                  e4.init({ originalIndex: r8 });
                }, "initRoute") }));
              } catch (e4) {
                console.log(e4);
              }
              const executeRouter = /* @__PURE__ */ __name(() => async function(e4, r8) {
                return qa.run(e4, r8);
              }({ router: h4 }, async () => {
                const e4 = (l5.headers.get("Accept") || "*/*").split(",");
                if (!["*/*", "text/html"].some((r9) => e4.some((e5) => e5.trim().startsWith(r9)))) return json({ error: "Only HTML requests are supported here" }, { status: 500 });
                if (null === s5 && (s5 = await async function() {
                  const { tsrStartManifest: e5 } = await loadVirtualModule(Ji), r9 = e5(), n7 = r9.routes[Ha] = r9.routes[Ha] || {};
                  n7.assets = n7.assets || [];
                  let o4 = `import('${r9.clientEntry}')`;
                  return n7.assets.push({ tag: "script", attrs: { type: "module", suppressHydrationWarning: true, async: true }, children: o4 }), { ...r9, routes: Object.fromEntries(Object.entries(r9.routes).map(([e6, r10]) => {
                    const { preloads: n8, assets: o5 } = r10;
                    return [e6, { preloads: n8, assets: o5 }];
                  })) };
                }()), attachRouterServerSsrUtils(h4, s5), await h4.load(), h4.state.redirect) return h4.state.redirect;
                await h4.serverSsr.dehydrate();
                const r8 = (n6 = { router: h4 }, mergeHeaders(Ki(), { "Content-Type": "text/html; charset=UTF-8" }, ...n6.router.state.matches.map((e5) => e5.headers)));
                var n6;
                return await a5({ request: l5, router: h4, responseHeaders: r8 });
              }), "executeRouter");
              if (n5) {
                const [e4, r8] = await async function(e5) {
                  var r9, n6;
                  const o4 = new URL(e5.request.url), s6 = o4.pathname, a6 = function({ pathname: e6, routePathname: r10, basepath: n7, caseSensitive: o5, routesByPath: s7, routesById: a7, flatRoutes: i8, parseCache: l7 }) {
                    let u6 = {};
                    const c5 = trimPathRight(e6), getMatchedParams = /* @__PURE__ */ __name((e7) => {
                      var r11;
                      return matchPathname(n7, c5, { to: e7.fullPath, caseSensitive: (null == (r11 = e7.options) ? void 0 : r11.caseSensitive) ?? o5, fuzzy: true }, l7);
                    }, "getMatchedParams");
                    let h5 = void 0 !== r10 ? s7[r10] : void 0;
                    if (h5) u6 = getMatchedParams(h5);
                    else {
                      let e7;
                      for (const r11 of i8) {
                        const n8 = getMatchedParams(r11);
                        if (n8) {
                          if ("/" === r11.path || !n8["**"]) {
                            h5 = r11, u6 = n8;
                            break;
                          }
                          e7 || (e7 = { foundRoute: r11, routeParams: n8 });
                        }
                      }
                      !h5 && e7 && (h5 = e7.foundRoute, u6 = e7.routeParams);
                    }
                    let p5 = h5 || a7[Ha];
                    const g4 = [p5];
                    for (; p5.parentRoute; ) p5 = p5.parentRoute, g4.push(p5);
                    return g4.reverse(), { matchedRoutes: g4, routeParams: u6, foundRoute: h5 };
                  }({ pathname: s6, basepath: e5.basePath, caseSensitive: true, routesByPath: e5.processedServerRouteTree.routesByPath, routesById: e5.processedServerRouteTree.routesById, flatRoutes: e5.processedServerRouteTree.flatRoutes }), i7 = e5.router.getMatchedRoutes(s6, void 0);
                  let l6, u5 = [];
                  if (u5 = a6.matchedRoutes, i7.foundRoute && a6.matchedRoutes.length < i7.matchedRoutes.length) {
                    const n7 = [...i7.matchedRoutes].reverse().find((r10) => void 0 !== e5.processedServerRouteTree.routesById[r10.id]);
                    if (n7) {
                      let o5 = n7.id;
                      u5 = [];
                      do {
                        const n8 = e5.processedServerRouteTree.routesById[o5];
                        if (!n8) break;
                        u5.push(n8), o5 = null == (r9 = n8.parentRoute) ? void 0 : r9.id;
                      } while (o5);
                      u5.reverse();
                    }
                  }
                  if (u5.length) {
                    const r10 = flattenMiddlewares(u5.flatMap((e6) => e6.options.middleware).filter(Boolean)).map((e6) => e6.options.server);
                    if (null == (n6 = a6.foundRoute) ? void 0 : n6.options.methods) {
                      const n7 = Object.keys(a6.foundRoute.options.methods).find((r11) => r11.toLowerCase() === e5.request.method.toLowerCase());
                      if (n7) {
                        const e6 = a6.foundRoute.options.methods[n7];
                        e6 && ("function" == typeof e6 ? r10.push(handlerToMiddleware(e6)) : (e6._options.middlewares && e6._options.middlewares.length && r10.push(...flattenMiddlewares(e6._options.middlewares).map((e7) => e7.options.server)), e6._options.handler && r10.push(handlerToMiddleware(e6._options.handler))));
                      }
                    }
                    r10.push(handlerToMiddleware(e5.executeRouter));
                    const o5 = await function(e6, r11) {
                      let n7 = -1;
                      const next = /* @__PURE__ */ __name(async (r12) => {
                        n7++;
                        const o6 = e6[n7];
                        if (!o6) return r12;
                        const s7 = await o6({ ...r12, next: /* @__PURE__ */ __name(async (e7) => {
                          const n8 = await next({ ...r12, ...e7, context: { ...r12.context, ...(null == e7 ? void 0 : e7.context) || {} } });
                          return Object.assign(r12, handleCtxResult(n8));
                        }, "next") }).catch((e7) => {
                          if (isSpecialResponse(e7)) return { response: e7 };
                          throw e7;
                        });
                        return Object.assign(r12, handleCtxResult(s7));
                      }, "next");
                      return handleCtxResult(next(r11));
                    }(r10, { request: e5.request, context: {}, params: a6.routeParams, pathname: s6 });
                    l6 = o5.response;
                  }
                  return [u5, l6];
                }({ processedServerRouteTree: n5, router: h4, request: l5, basePath: "/", executeRouter });
                if (r8) return r8;
              }
              return await executeRouter();
            } catch (e4) {
              if (e4 instanceof Response) return e4;
              throw e4;
            }
            var e3;
          })();
          if (isRedirect(v3)) {
            if (isRedirect(b3 = v3) && b3.options.href) return "manual" === l5.headers.get("x-tsr-redirect") ? json({ ...v3.options, isSerializedRedirect: true }, { headers: v3.headers }) : v3;
            if (v3.options.to && "string" == typeof v3.options.to && !v3.options.to.startsWith("/")) throw new Error(`Server side redirects must use absolute paths via the 'href' or 'to' options. Received: ${JSON.stringify(v3.options)}`);
            if (["params", "search", "hash"].some((e4) => "function" == typeof v3.options[e4])) throw new Error(`Server side redirects must use static search, params, and hash values and do not support functional values. Received functional values for: ${Object.keys(v3.options).filter((e4) => "function" == typeof v3.options[e4]).map((e4) => `"${e4}"`).join(", ")}`);
            const e3 = h4.resolveRedirect(v3);
            return "manual" === l5.headers.get("x-tsr-redirect") ? json({ ...v3.options, isSerializedRedirect: true }, { headers: v3.headers }) : e3;
          }
          var b3;
          return v3;
        }, "startRequestResolver");
        return startRequestResolver;
      };
    }({ createRouter: /* @__PURE__ */ __name(function() {
      const e3 = ((e4) => new Router(e4))({ routeTree: ru, defaultPreload: "intent", defaultErrorComponent: DefaultCatchBoundary, defaultNotFoundComponent: /* @__PURE__ */ __name(() => p2.jsx(NotFound, {}), "defaultNotFoundComponent"), scrollRestoration: true });
      return e3;
    }, "createRouter") })(defaultStreamHandler);
    iu = (lu = /* @__PURE__ */ __name(function(e3) {
      const r6 = toWebRequest(e3);
      return au({ request: r6 });
    }, "lu"), function(e3) {
      if ("function" == typeof e3) return e3.__is_handler__ = true, e3;
      const r6 = { onRequest: _normalizeArray(e3.onRequest), onBeforeResponse: _normalizeArray(e3.onBeforeResponse) }, _handler = /* @__PURE__ */ __name((n5) => async function(e4, r7, n6) {
        if (n6.onRequest) {
          for (const r8 of n6.onRequest) if (await r8(e4), e4.handled) return;
        }
        const o3 = { body: await r7(e4) };
        if (n6.onBeforeResponse) for (const r8 of n6.onBeforeResponse) await r8(e4, o3);
        return o3.body;
      }(n5, e3.handler, r6), "_handler");
      return _handler.__is_handler__ = true, _handler.__resolve__ = e3.handler.__resolve__, _handler.__websocket__ = e3.websocket, _handler;
    }((e3) => async function(e4, r6) {
      return Wi.run(e4, r6);
    }(e3, () => lu(e3))));
    uu = Object.freeze(Object.defineProperty({ __proto__: null, N: NotFound, R: el, a: al, b: dl, c: gl, d: yl, default: iu, e: bl, f: createServerRpc, g: createServerFn }, Symbol.toStringTag, { value: "Module" }));
  }
});

// .output/server/chunks/nitro/nitro.mjs
import { env as t3 } from "cloudflare:workers";
import { EventEmitter as r5 } from "node:events";
import { Buffer as s4 } from "node:buffer";
import { setImmediate as a4, clearImmediate as c3 } from "node:timers";
function createNotImplementedError2(e3) {
  return new Error(`[unenv] ${e3} is not implemented yet!`);
}
function notImplemented2(e3) {
  return Object.assign(() => {
    throw createNotImplementedError2(e3);
  }, { __unenv__: true });
}
function jsonParseTransform(e3, t4) {
  if (!("__proto__" === e3 || "constructor" === e3 && t4 && "object" == typeof t4 && "prototype" in t4)) return t4;
  !function(e4) {
    console.warn(`[destr] Dropping "${e4}" key to prevent prototype pollution.`);
  }(e3);
}
function destr(e3, t4 = {}) {
  if ("string" != typeof e3) return e3;
  if ('"' === e3[0] && '"' === e3[e3.length - 1] && -1 === e3.indexOf("\\")) return e3.slice(1, -1);
  const r6 = e3.trim();
  if (r6.length <= 9) switch (r6.toLowerCase()) {
    case "true":
      return true;
    case "false":
      return false;
    case "undefined":
      return;
    case "null":
      return null;
    case "nan":
      return Number.NaN;
    case "infinity":
      return Number.POSITIVE_INFINITY;
    case "-infinity":
      return Number.NEGATIVE_INFINITY;
  }
  if (!kt2.test(e3)) {
    if (t4.strict) throw new SyntaxError("[destr] Invalid JSON");
    return e3;
  }
  try {
    if (_t2.test(e3) || xt2.test(e3)) {
      if (t4.strict) throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(e3, jsonParseTransform);
    }
    return JSON.parse(e3);
  } catch (r7) {
    if (t4.strict) throw r7;
    return e3;
  }
}
function encodeQueryValue(e3) {
  return (t4 = "string" == typeof e3 ? e3 : JSON.stringify(e3), encodeURI("" + t4).replace(Ht2, "|")).replace(Tt2, "%2B").replace(It2, "+").replace(Rt2, "%23").replace(Ct2, "%26").replace(At2, "`").replace(St2, "^").replace(Et2, "%2F");
  var t4;
}
function encodeQueryKey(e3) {
  return encodeQueryValue(e3).replace(jt2, "%3D");
}
function decode(e3 = "") {
  try {
    return decodeURIComponent("" + e3);
  } catch {
    return "" + e3;
  }
}
function decodeQueryKey(e3) {
  return decode(e3.replace(Tt2, " "));
}
function decodeQueryValue(e3) {
  return decode(e3.replace(Tt2, " "));
}
function parseQuery(e3 = "") {
  const t4 = /* @__PURE__ */ Object.create(null);
  "?" === e3[0] && (e3 = e3.slice(1));
  for (const r6 of e3.split("&")) {
    const e4 = r6.match(/([^=]+)=?(.*)/) || [];
    if (e4.length < 2) continue;
    const s5 = decodeQueryKey(e4[1]);
    if ("__proto__" === s5 || "constructor" === s5) continue;
    const a5 = decodeQueryValue(e4[2] || "");
    void 0 === t4[s5] ? t4[s5] = a5 : Array.isArray(t4[s5]) ? t4[s5].push(a5) : t4[s5] = [t4[s5], a5];
  }
  return t4;
}
function stringifyQuery(e3) {
  return Object.keys(e3).filter((t4) => void 0 !== e3[t4]).map((t4) => {
    return r6 = t4, "number" != typeof (s5 = e3[t4]) && "boolean" != typeof s5 || (s5 = String(s5)), s5 ? Array.isArray(s5) ? s5.map((e4) => `${encodeQueryKey(r6)}=${encodeQueryValue(e4)}`).join("&") : `${encodeQueryKey(r6)}=${encodeQueryValue(s5)}` : encodeQueryKey(r6);
    var r6, s5;
  }).filter(Boolean).join("&");
}
function hasProtocol(e3, t4 = {}) {
  return "boolean" == typeof t4 && (t4 = { acceptRelative: t4 }), t4.strict ? Pt2.test(e3) : Mt2.test(e3) || !!t4.acceptRelative && Ot2.test(e3);
}
function withoutTrailingSlash(e3 = "", t4) {
  return (function(e4 = "") {
    return e4.endsWith("/");
  }(e3) ? e3.slice(0, -1) : e3) || "/";
}
function withTrailingSlash(e3 = "", t4) {
  return e3.endsWith("/") ? e3 : e3 + "/";
}
function withoutBase(e3, t4) {
  if (isEmptyURL(t4)) return e3;
  const r6 = withoutTrailingSlash(t4);
  if (!e3.startsWith(r6)) return e3;
  const s5 = e3.slice(r6.length);
  return "/" === s5[0] ? s5 : "/" + s5;
}
function withQuery(e3, t4) {
  const r6 = parseURL(e3), s5 = { ...parseQuery(r6.search), ...t4 };
  return r6.search = stringifyQuery(s5), function(e4) {
    const t5 = e4.pathname || "", r7 = e4.search ? (e4.search.startsWith("?") ? "" : "?") + e4.search : "", s6 = e4.hash || "", a5 = e4.auth ? e4.auth + "@" : "", c4 = e4.host || "", u4 = e4.protocol || e4[Nt2] ? (e4.protocol || "") + "//" : "";
    return u4 + a5 + c4 + t5 + r7 + s6;
  }(r6);
}
function getQuery(e3) {
  return parseQuery(parseURL(e3).search);
}
function isEmptyURL(e3) {
  return !e3 || "/" === e3;
}
function joinURL(e3, ...t4) {
  let r6 = e3 || "";
  for (const e4 of t4.filter((e5) => /* @__PURE__ */ function(e6) {
    return e6 && "/" !== e6;
  }(e5))) if (r6) {
    const t5 = e4.replace(Bt2, "");
    r6 = withTrailingSlash(r6) + t5;
  } else r6 = e4;
  return r6;
}
function parseURL(e3 = "", t4) {
  const r6 = e3.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
  if (r6) {
    const [, e4, t5 = ""] = r6;
    return { protocol: e4.toLowerCase(), pathname: t5, href: e4 + t5, auth: "", host: "", search: "", hash: "" };
  }
  if (!hasProtocol(e3, { acceptRelative: true })) return parsePath(e3);
  const [, s5 = "", a5, c4 = ""] = e3.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, u4 = "", d4 = ""] = c4.match(/([^#/?]*)(.*)?/) || [];
  "file:" === s5 && (d4 = d4.replace(/\/(?=[A-Za-z]:)/, ""));
  const { pathname: h4, search: f4, hash: m5 } = parsePath(d4);
  return { protocol: s5.toLowerCase(), auth: a5 ? a5.slice(0, Math.max(0, a5.length - 1)) : "", host: u4, pathname: h4, search: f4, hash: m5, [Nt2]: !s5 };
}
function parsePath(e3 = "") {
  const [t4 = "", r6 = "", s5 = ""] = (e3.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return { pathname: t4, search: r6, hash: s5 };
}
function createRouter$1(e3 = {}) {
  const t4 = { options: e3, rootNode: createRadixNode(), staticRoutesMap: {} }, normalizeTrailingSlash = /* @__PURE__ */ __name((t5) => e3.strictTrailingSlash ? t5 : t5.replace(/\/$/, "") || "/", "normalizeTrailingSlash");
  if (e3.routes) for (const r6 in e3.routes) insert(t4, normalizeTrailingSlash(r6), e3.routes[r6]);
  return { ctx: t4, lookup: /* @__PURE__ */ __name((e4) => function(e5, t5) {
    const r6 = e5.staticRoutesMap[t5];
    if (r6) return r6.data;
    const s5 = t5.split("/"), a5 = {};
    let c4 = false, u4 = null, d4 = e5.rootNode, h4 = null;
    for (let e6 = 0; e6 < s5.length; e6++) {
      const t6 = s5[e6];
      null !== d4.wildcardChildNode && (u4 = d4.wildcardChildNode, h4 = s5.slice(e6).join("/"));
      const r7 = d4.children.get(t6);
      if (void 0 === r7) {
        if (d4 && d4.placeholderChildren.length > 1) {
          const t7 = s5.length - e6;
          d4 = d4.placeholderChildren.find((e7) => e7.maxDepth === t7) || null;
        } else d4 = d4.placeholderChildren[0] || null;
        if (!d4) break;
        d4.paramName && (a5[d4.paramName] = t6), c4 = true;
      } else d4 = r7;
    }
    null !== d4 && null !== d4.data || null === u4 || (d4 = u4, a5[d4.paramName || "_"] = h4, c4 = true);
    if (!d4) return null;
    if (c4) return { ...d4.data, params: c4 ? a5 : void 0 };
    return d4.data;
  }(t4, normalizeTrailingSlash(e4)), "lookup"), insert: /* @__PURE__ */ __name((e4, r6) => insert(t4, normalizeTrailingSlash(e4), r6), "insert"), remove: /* @__PURE__ */ __name((e4) => function(e5, t5) {
    let r6 = false;
    const s5 = t5.split("/");
    let a5 = e5.rootNode;
    for (const e6 of s5) if (a5 = a5.children.get(e6), !a5) return r6;
    if (a5.data) {
      const e6 = s5.at(-1) || "";
      a5.data = null, 0 === Object.keys(a5.children).length && a5.parent && (a5.parent.children.delete(e6), a5.parent.wildcardChildNode = null, a5.parent.placeholderChildren = []), r6 = true;
    }
    return r6;
  }(t4, normalizeTrailingSlash(e4)), "remove") };
}
function insert(e3, t4, r6) {
  let s5 = true;
  const a5 = t4.split("/");
  let c4 = e3.rootNode, u4 = 0;
  const d4 = [c4];
  for (const e4 of a5) {
    let t5;
    if (t5 = c4.children.get(e4)) c4 = t5;
    else {
      const r7 = getNodeType(e4);
      t5 = createRadixNode({ type: r7, parent: c4 }), c4.children.set(e4, t5), r7 === qt2 ? (t5.paramName = "*" === e4 ? "_" + u4++ : e4.slice(1), c4.placeholderChildren.push(t5), s5 = false) : r7 === Ut2 && (c4.wildcardChildNode = t5, t5.paramName = e4.slice(3) || "_", s5 = false), d4.push(t5), c4 = t5;
    }
  }
  for (const [e4, t5] of d4.entries()) t5.maxDepth = Math.max(d4.length - e4, t5.maxDepth || 0);
  return c4.data = r6, true === s5 && (e3.staticRoutesMap[t4] = c4), c4;
}
function createRadixNode(e3 = {}) {
  return { type: e3.type || zt2, maxDepth: 0, parent: e3.parent || null, children: /* @__PURE__ */ new Map(), data: e3.data || null, paramName: e3.paramName || null, wildcardChildNode: null, placeholderChildren: [] };
}
function getNodeType(e3) {
  return e3.startsWith("**") ? Ut2 : ":" === e3[0] || "*" === e3 ? qt2 : zt2;
}
function toRouteMatcher(e3) {
  return /* @__PURE__ */ function(e4, t4) {
    return { ctx: { table: e4 }, matchAll: /* @__PURE__ */ __name((r6) => _matchRoutes(r6, e4, t4), "matchAll") };
  }(_routerNodeToTable("", e3.ctx.rootNode), e3.ctx.options.strictTrailingSlash);
}
function _matchRoutes(e3, t4, r6) {
  true !== r6 && e3.endsWith("/") && (e3 = e3.slice(0, -1) || "/");
  const s5 = [];
  for (const [r7, a6] of _sortRoutesMap(t4.wildcard)) (e3 === r7 || e3.startsWith(r7 + "/")) && s5.push(a6);
  for (const [r7, a6] of _sortRoutesMap(t4.dynamic)) if (e3.startsWith(r7 + "/")) {
    const t5 = "/" + e3.slice(r7.length).split("/").splice(2).join("/");
    s5.push(..._matchRoutes(t5, a6));
  }
  const a5 = t4.static.get(e3);
  return a5 && s5.push(a5), s5.filter(Boolean);
}
function _sortRoutesMap(e3) {
  return [...e3.entries()].sort((e4, t4) => e4[0].length - t4[0].length);
}
function _routerNodeToTable(e3, t4) {
  const r6 = { static: /* @__PURE__ */ new Map(), wildcard: /* @__PURE__ */ new Map(), dynamic: /* @__PURE__ */ new Map() };
  return (/* @__PURE__ */ __name(function _addNode(e4, t5) {
    if (e4) if (t5.type !== zt2 || e4.includes("*") || e4.includes(":")) {
      if (t5.type === Ut2) r6.wildcard.set(e4.replace("/**", ""), t5.data);
      else if (t5.type === qt2) {
        const s5 = _routerNodeToTable("", t5);
        return t5.data && s5.static.set("/", t5.data), void r6.dynamic.set(e4.replace(/\/\*|\/:\w+/, ""), s5);
      }
    } else t5.data && r6.static.set(e4, t5.data);
    for (const [r7, s5] of t5.children.entries()) _addNode(`${e4}/${r7}`.replace("//", "/"), s5);
  }, "_addNode"))(e3, t4), r6;
}
function isPlainObject2(e3) {
  if (null === e3 || "object" != typeof e3) return false;
  const t4 = Object.getPrototypeOf(e3);
  return (null === t4 || t4 === Object.prototype || null === Object.getPrototypeOf(t4)) && (!(Symbol.iterator in e3) && (!(Symbol.toStringTag in e3) || "[object Module]" === Object.prototype.toString.call(e3)));
}
function _defu(e3, t4, r6 = ".", s5) {
  if (!isPlainObject2(t4)) return _defu(e3, {}, r6, s5);
  const a5 = Object.assign({}, t4);
  for (const t5 in e3) {
    if ("__proto__" === t5 || "constructor" === t5) continue;
    const c4 = e3[t5];
    null != c4 && (s5 && s5(a5, t5, c4, r6) || (Array.isArray(c4) && Array.isArray(a5[t5]) ? a5[t5] = [...c4, ...a5[t5]] : isPlainObject2(c4) && isPlainObject2(a5[t5]) ? a5[t5] = _defu(c4, a5[t5], (r6 ? `${r6}.` : "") + t5.toString(), s5) : a5[t5] = c4));
  }
  return a5;
}
function createDefu(e3) {
  return (...t4) => t4.reduce((t5, r6) => _defu(t5, r6, "", e3), {});
}
function o2(e3) {
  throw new Error(`${e3} is not implemented yet!`);
}
function p3(e3) {
  const t4 = {};
  for (const [r6, s5] of Object.entries(e3)) r6 && (t4[r6] = (Array.isArray(s5) ? s5 : [s5]).filter(Boolean));
  return t4;
}
function v2(e3 = {}) {
  if (e3 instanceof Headers) return e3;
  const t4 = new Headers();
  for (const [r6, s5] of Object.entries(e3)) if (void 0 !== s5) {
    if (Array.isArray(s5)) {
      for (const e4 of s5) t4.append(r6, String(e4));
      continue;
    }
    t4.set(r6, String(s5));
  }
  return t4;
}
async function b2(e3, t4) {
  const r6 = new y2(), s5 = new w3(r6);
  let a5;
  if (r6.url = t4.url?.toString() || "/", !r6.url.startsWith("/")) {
    const e4 = new URL(r6.url);
    a5 = e4.host, r6.url = e4.pathname + e4.search + e4.hash;
  }
  r6.method = t4.method || "GET", r6.headers = function(e4 = {}) {
    const t5 = new Ft2(), r7 = Array.isArray(e4) || function(e5) {
      return "function" == typeof e5?.entries;
    }(e4) ? e4 : Object.entries(e4);
    for (const [e5, s6] of r7) if (s6) {
      if (void 0 === t5[e5]) {
        t5[e5] = s6;
        continue;
      }
      t5[e5] = [...Array.isArray(t5[e5]) ? t5[e5] : [t5[e5]], ...Array.isArray(s6) ? s6 : [s6]];
    }
    return t5;
  }(t4.headers || {}), r6.headers.host || (r6.headers.host = t4.host || a5 || "localhost"), r6.connection.encrypted = r6.connection.encrypted || "https" === t4.protocol, r6.body = t4.body || null, r6.__unenv__ = t4.context, await e3(r6, s5);
  let c4 = s5._data;
  (Zt2.has(s5.statusCode) || "HEAD" === r6.method.toUpperCase()) && (c4 = null, delete s5._headers["content-length"]);
  const u4 = { status: s5.statusCode, statusText: s5.statusMessage, headers: s5._headers, body: c4 };
  return r6.destroy(), s5.destroy(), u4;
}
function hasProp2(e3, t4) {
  try {
    return t4 in e3;
  } catch {
    return false;
  }
}
function createError(e3) {
  if ("string" == typeof e3) return new H3Error2(e3);
  if (isError(e3)) return e3;
  const t4 = new H3Error2(e3.message ?? e3.statusMessage ?? "", { cause: e3.cause || e3 });
  if (hasProp2(e3, "stack")) try {
    Object.defineProperty(t4, "stack", { get: /* @__PURE__ */ __name(() => e3.stack, "get") });
  } catch {
    try {
      t4.stack = e3.stack;
    } catch {
    }
  }
  if (e3.data && (t4.data = e3.data), e3.statusCode ? t4.statusCode = sanitizeStatusCode2(e3.statusCode, t4.statusCode) : e3.status && (t4.statusCode = sanitizeStatusCode2(e3.status, t4.statusCode)), e3.statusMessage ? t4.statusMessage = e3.statusMessage : e3.statusText && (t4.statusMessage = e3.statusText), t4.statusMessage) {
    const e4 = t4.statusMessage;
    sanitizeStatusMessage2(t4.statusMessage) !== e4 && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.");
  }
  return void 0 !== e3.fatal && (t4.fatal = e3.fatal), void 0 !== e3.unhandled && (t4.unhandled = e3.unhandled), t4;
}
function isError(e3) {
  return true === e3?.constructor?.__h3_error__;
}
function readRawBody(e3, t4 = "utf8") {
  !function(e4, t5) {
    if (!function(e5, t6) {
      if ("string" == typeof t6) {
        if (e5.method === t6) return true;
      } else if (t6.includes(e5.method)) return true;
      return false;
    }(e4, t5)) throw createError({ statusCode: 405, statusMessage: "HTTP method is not allowed." });
  }(e3, Vt2);
  const r6 = e3._requestBody || e3.web?.request?.body || e3.node.req[Qt2] || e3.node.req.rawBody || e3.node.req.body;
  if (r6) {
    const e4 = Promise.resolve(r6).then((e5) => s4.isBuffer(e5) ? e5 : "function" == typeof e5.pipeTo ? new Promise((t5, r7) => {
      const a6 = [];
      e5.pipeTo(new WritableStream({ write(e6) {
        a6.push(e6);
      }, close() {
        t5(s4.concat(a6));
      }, abort(e6) {
        r7(e6);
      } })).catch(r7);
    }) : "function" == typeof e5.pipe ? new Promise((t5, r7) => {
      const a6 = [];
      e5.on("data", (e6) => {
        a6.push(e6);
      }).on("end", () => {
        t5(s4.concat(a6));
      }).on("error", r7);
    }) : e5.constructor === Object ? s4.from(JSON.stringify(e5)) : e5 instanceof URLSearchParams ? s4.from(e5.toString()) : e5 instanceof FormData ? new Response(e5).bytes().then((e6) => s4.from(e6)) : s4.from(e5));
    return t4 ? e4.then((e5) => e5.toString(t4)) : e4;
  }
  if (!Number.parseInt(e3.node.req.headers["content-length"] || "") && !String(e3.node.req.headers["transfer-encoding"] ?? "").split(",").map((e4) => e4.trim()).filter(Boolean).includes("chunked")) return Promise.resolve(void 0);
  const a5 = e3.node.req[Qt2] = new Promise((t5, r7) => {
    const a6 = [];
    e3.node.req.on("error", (e4) => {
      r7(e4);
    }).on("data", (e4) => {
      a6.push(e4);
    }).on("end", () => {
      t5(s4.concat(a6));
    });
  });
  return t4 ? a5.then((e4) => e4.toString(t4)) : a5;
}
function handleCacheHeaders(e3, t4) {
  const r6 = ["public", ...t4.cacheControls || []];
  let s5 = false;
  if (void 0 !== t4.maxAge && r6.push("max-age=" + +t4.maxAge, "s-maxage=" + +t4.maxAge), t4.modifiedTime) {
    const r7 = new Date(t4.modifiedTime), a5 = e3.node.req.headers["if-modified-since"];
    e3.node.res.setHeader("last-modified", r7.toUTCString()), a5 && new Date(a5) >= r7 && (s5 = true);
  }
  if (t4.etag) {
    e3.node.res.setHeader("etag", t4.etag);
    e3.node.req.headers["if-none-match"] === t4.etag && (s5 = true);
  }
  return e3.node.res.setHeader("cache-control", r6.join(", ")), !!s5 && (e3.node.res.statusCode = 304, e3.handled || e3.node.res.end(), true);
}
function sanitizeStatusMessage2(e3 = "") {
  return e3.replace(Gt2, "");
}
function sanitizeStatusCode2(e3, t4 = 200) {
  return e3 ? ("string" == typeof e3 && (e3 = Number.parseInt(e3, 10)), e3 < 100 || e3 > 999 ? t4 : e3) : t4;
}
function splitCookiesString2(e3) {
  if (Array.isArray(e3)) return e3.flatMap((e4) => splitCookiesString2(e4));
  if ("string" != typeof e3) return [];
  const t4 = [];
  let r6, s5, a5, c4, u4, d4 = 0;
  const skipWhitespace = /* @__PURE__ */ __name(() => {
    for (; d4 < e3.length && /\s/.test(e3.charAt(d4)); ) d4 += 1;
    return d4 < e3.length;
  }, "skipWhitespace"), notSpecialChar = /* @__PURE__ */ __name(() => (s5 = e3.charAt(d4), "=" !== s5 && ";" !== s5 && "," !== s5), "notSpecialChar");
  for (; d4 < e3.length; ) {
    for (r6 = d4, u4 = false; skipWhitespace(); ) if (s5 = e3.charAt(d4), "," === s5) {
      for (a5 = d4, d4 += 1, skipWhitespace(), c4 = d4; d4 < e3.length && notSpecialChar(); ) d4 += 1;
      d4 < e3.length && "=" === e3.charAt(d4) ? (u4 = true, d4 = c4, t4.push(e3.slice(r6, a5)), r6 = d4) : d4 = a5 + 1;
    } else d4 += 1;
    (!u4 || d4 >= e3.length) && t4.push(e3.slice(r6));
  }
  return t4;
}
function send2(e3, t4, r6) {
  return r6 && function(e4, t5) {
    t5 && 304 !== e4.node.res.statusCode && !e4.node.res.getHeader("content-type") && e4.node.res.setHeader("content-type", t5);
  }(e3, r6), new Promise((r7) => {
    Yt2(() => {
      e3.handled || e3.node.res.end(t4), r7();
    });
  });
}
function setResponseStatus(e3, t4, r6) {
  t4 && (e3.node.res.statusCode = sanitizeStatusCode2(t4, e3.node.res.statusCode)), r6 && (e3.node.res.statusMessage = sanitizeStatusMessage2(r6));
}
function setResponseHeaders(e3, t4) {
  for (const [r6, s5] of Object.entries(t4)) e3.node.res.setHeader(r6, s5);
}
function sendStream(e3, t4) {
  if (!t4 || "object" != typeof t4) throw new Error("[h3] Invalid stream provided.");
  if (e3.node.res._data = t4, !e3.node.res.socket) return e3._handled = true, Promise.resolve();
  if (hasProp2(t4, "pipeTo") && "function" == typeof t4.pipeTo) return t4.pipeTo(new WritableStream({ write(t5) {
    e3.node.res.write(t5);
  } })).then(() => {
    e3.node.res.end();
  });
  if (hasProp2(t4, "pipe") && "function" == typeof t4.pipe) return new Promise((r6, s5) => {
    t4.pipe(e3.node.res), t4.on && (t4.on("end", () => {
      e3.node.res.end(), r6();
    }), t4.on("error", (e4) => {
      s5(e4);
    })), e3.node.res.on("close", () => {
      t4.abort && t4.abort();
    });
  });
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse2(e3, t4) {
  for (const [r6, s5] of t4.headers) "set-cookie" === r6 ? e3.node.res.appendHeader(r6, splitCookiesString2(s5)) : e3.node.res.setHeader(r6, s5);
  if (t4.status && (e3.node.res.statusCode = sanitizeStatusCode2(t4.status, e3.node.res.statusCode)), t4.statusText && (e3.node.res.statusMessage = sanitizeStatusMessage2(t4.statusText)), t4.redirected && e3.node.res.setHeader("location", t4.url), t4.body) return sendStream(e3, t4.body);
  e3.node.res.end();
}
async function proxyRequest(e3, t4, r6 = {}) {
  let s5, a5;
  er2.has(e3.method) && (r6.streamRequest ? (s5 = function(e4) {
    if (!Vt2.includes(e4.method)) return;
    const t5 = e4.web?.request?.body || e4._requestBody;
    return t5 || (Qt2 in e4.node.req || "rawBody" in e4.node.req || "body" in e4.node.req || "__unenv__" in e4.node.req ? new ReadableStream({ async start(t6) {
      const r7 = await readRawBody(e4, false);
      r7 && t6.enqueue(r7), t6.close();
    } }) : new ReadableStream({ start: /* @__PURE__ */ __name((t6) => {
      e4.node.req.on("data", (e5) => {
        t6.enqueue(e5);
      }), e4.node.req.on("end", () => {
        t6.close();
      }), e4.node.req.on("error", (e5) => {
        t6.error(e5);
      });
    }, "start") }));
  }(e3), a5 = "half") : s5 = await readRawBody(e3, false).catch(() => {
  }));
  const c4 = r6.fetchOptions?.method || e3.method, u4 = function(e4, ...t5) {
    const r7 = t5.filter(Boolean);
    if (0 === r7.length) return e4;
    const s6 = new Headers(e4);
    for (const e5 of r7) {
      const t6 = Array.isArray(e5) ? e5 : "function" == typeof e5.entries ? e5.entries() : Object.entries(e5);
      for (const [e6, r8] of t6) void 0 !== r8 && s6.set(e6, r8);
    }
    return s6;
  }(getProxyRequestHeaders(e3, { host: t4.startsWith("/") }), r6.fetchOptions?.headers, r6.headers);
  return async function(e4, t5, r7 = {}) {
    let s6;
    try {
      s6 = await _getFetch(r7.fetch)(t5, { headers: r7.headers, ignoreResponseError: true, ...r7.fetchOptions });
    } catch (e5) {
      throw createError({ status: 502, statusMessage: "Bad Gateway", cause: e5 });
    }
    e4.node.res.statusCode = sanitizeStatusCode2(s6.status, e4.node.res.statusCode), e4.node.res.statusMessage = sanitizeStatusMessage2(s6.statusText);
    const a6 = [];
    for (const [t6, r8] of s6.headers.entries()) "content-encoding" !== t6 && "content-length" !== t6 && ("set-cookie" !== t6 ? e4.node.res.setHeader(t6, r8) : a6.push(...splitCookiesString2(r8)));
    a6.length > 0 && e4.node.res.setHeader("set-cookie", a6.map((e5) => (r7.cookieDomainRewrite && (e5 = rewriteCookieProperty(e5, r7.cookieDomainRewrite, "domain")), r7.cookiePathRewrite && (e5 = rewriteCookieProperty(e5, r7.cookiePathRewrite, "path")), e5)));
    r7.onResponse && await r7.onResponse(e4, s6);
    if (void 0 !== s6._data) return s6._data;
    if (e4.handled) return;
    if (false === r7.sendStream) {
      const t6 = new Uint8Array(await s6.arrayBuffer());
      return e4.node.res.end(t6);
    }
    if (s6.body) for await (const t6 of s6.body) e4.node.res.write(t6);
    return e4.node.res.end();
  }(e3, t4, { ...r6, fetchOptions: { method: c4, body: s5, duplex: a5, ...r6.fetchOptions, headers: u4 } });
}
function getProxyRequestHeaders(e3, t4) {
  const r6 = /* @__PURE__ */ Object.create(null), s5 = function(e4) {
    const t5 = {};
    for (const r7 in e4.node.req.headers) {
      const s6 = e4.node.req.headers[r7];
      t5[r7] = Array.isArray(s6) ? s6.filter(Boolean).join(", ") : s6;
    }
    return t5;
  }(e3);
  for (const e4 in s5) (!tr2.has(e4) || "host" === e4 && t4?.host) && (r6[e4] = s5[e4]);
  return r6;
}
function fetchWithEvent(e3, t4, r6, s5) {
  return _getFetch(s5?.fetch)(t4, { ...r6, context: r6?.context || e3.context, headers: { ...getProxyRequestHeaders(e3, { host: "string" == typeof t4 && t4.startsWith("/") }), ...r6?.headers } });
}
function _getFetch(e3) {
  if (e3) return e3;
  if (globalThis.fetch) return globalThis.fetch;
  throw new Error("fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js.");
}
function rewriteCookieProperty(e3, t4, r6) {
  const s5 = "string" == typeof t4 ? { "*": t4 } : t4;
  return e3.replace(new RegExp(`(;\\s*${r6}=)([^;]+)`, "gi"), (e4, t5, r7) => {
    let a5;
    if (r7 in s5) a5 = s5[r7];
    else {
      if (!("*" in s5)) return e4;
      a5 = s5["*"];
    }
    return a5 ? t5 + a5 : "";
  });
}
function isEvent(e3) {
  return hasProp2(e3, "__is_event__");
}
function createEvent(e3, t4) {
  return new H3Event2(e3, t4);
}
function defineEventHandler(e3) {
  if ("function" == typeof e3) return e3.__is_handler__ = true, e3;
  const t4 = { onRequest: _normalizeArray2(e3.onRequest), onBeforeResponse: _normalizeArray2(e3.onBeforeResponse) }, _handler = /* @__PURE__ */ __name((r6) => async function(e4, t5, r7) {
    if (r7.onRequest) {
      for (const t6 of r7.onRequest) if (await t6(e4), e4.handled) return;
    }
    const s5 = await t5(e4), a5 = { body: s5 };
    if (r7.onBeforeResponse) for (const t6 of r7.onBeforeResponse) await t6(e4, a5);
    return a5.body;
  }(r6, e3.handler, t4), "_handler");
  return _handler.__is_handler__ = true, _handler.__resolve__ = e3.handler.__resolve__, _handler.__websocket__ = e3.websocket, _handler;
}
function _normalizeArray2(e3) {
  return e3 ? Array.isArray(e3) ? e3 : [e3] : void 0;
}
function isEventHandler(e3) {
  return hasProp2(e3, "__is_handler__");
}
function toEventHandler(e3, t4, r6) {
  return isEventHandler(e3) || console.warn("[h3] Implicit event handler conversion is deprecated. Use `eventHandler()` or `fromNodeMiddleware()` to define event handlers.", r6 && "/" !== r6 ? `
     Route: ${r6}` : "", `
     Handler: ${e3}`), e3;
}
function createApp(e3 = {}) {
  const t4 = [], r6 = function(e4, t5) {
    const r7 = t5.debug ? 2 : void 0;
    return rr2(async (s6) => {
      s6.node.req.originalUrl = s6.node.req.originalUrl || s6.node.req.url || "/";
      const a6 = s6._path || s6.node.req.url || "/";
      let c5;
      t5.onRequest && await t5.onRequest(s6);
      for (const u4 of e4) {
        if (u4.route.length > 1) {
          if (!a6.startsWith(u4.route)) continue;
          c5 = a6.slice(u4.route.length) || "/";
        } else c5 = a6;
        if (u4.match && !u4.match(c5, s6)) continue;
        s6._path = c5, s6.node.req.url = c5;
        const e5 = await u4.handler(s6), d4 = void 0 === e5 ? void 0 : await e5;
        if (void 0 !== d4) {
          const e6 = { body: d4 };
          return t5.onBeforeResponse && (s6._onBeforeResponseCalled = true, await t5.onBeforeResponse(s6, e6)), await handleHandlerResponse(s6, e6.body, r7), void (t5.onAfterResponse && (s6._onAfterResponseCalled = true, await t5.onAfterResponse(s6, e6)));
        }
        if (s6.handled) return void (t5.onAfterResponse && (s6._onAfterResponseCalled = true, await t5.onAfterResponse(s6, void 0)));
      }
      if (!s6.handled) throw createError({ statusCode: 404, statusMessage: `Cannot find any path matching ${s6.path || "/"}.` });
      t5.onAfterResponse && (s6._onAfterResponseCalled = true, await t5.onAfterResponse(s6, void 0));
    });
  }(t4, e3), s5 = /* @__PURE__ */ function(e4) {
    return async (t5) => {
      let r7;
      for (const s6 of e4) {
        if ("/" === s6.route && !s6.handler.__resolve__) continue;
        if (!t5.startsWith(s6.route)) continue;
        if (r7 = t5.slice(s6.route.length) || "/", s6.match && !s6.match(r7, void 0)) continue;
        let e5 = { route: s6.route, handler: s6.handler };
        if (e5.handler.__resolve__) {
          const t6 = await e5.handler.__resolve__(r7);
          if (!t6) continue;
          e5 = { ...e5, ...t6, route: joinURL(e5.route || "/", t6.route || "/") };
        }
        return e5;
      }
    };
  }(t4);
  r6.__resolve__ = s5;
  const a5 = /* @__PURE__ */ function(e4) {
    let t5;
    return () => (t5 || (t5 = e4()), t5);
  }(() => {
    return t5 = s5, { ...e3.websocket, async resolve(e4) {
      const r7 = e4.request?.url || e4.url || "/", { pathname: s6 } = "string" == typeof r7 ? parseURL(r7) : r7, a6 = await t5(s6);
      return a6?.handler?.__websocket__ || {};
    } };
    var t5;
  }), c4 = { use: /* @__PURE__ */ __name((e4, t5, r7) => use(c4, e4, t5, r7), "use"), resolve: s5, handler: r6, stack: t4, options: e3, get websocket() {
    return a5();
  } };
  return c4;
}
function use(e3, t4, r6, s5) {
  if (Array.isArray(t4)) for (const a5 of t4) use(e3, a5, r6, s5);
  else if (Array.isArray(r6)) for (const a5 of r6) use(e3, t4, a5, s5);
  else "string" == typeof t4 ? e3.stack.push(normalizeLayer({ ...s5, route: t4, handler: r6 })) : "function" == typeof t4 ? e3.stack.push(normalizeLayer({ ...r6, handler: t4 })) : e3.stack.push(normalizeLayer({ ...t4 }));
  return e3;
}
function normalizeLayer(e3) {
  let t4 = e3.handler;
  return t4.handler && (t4 = t4.handler), e3.lazy ? t4 = lazyEventHandler(t4) : isEventHandler(t4) || (t4 = toEventHandler(t4, 0, e3.route)), { route: withoutTrailingSlash(e3.route), match: e3.match, handler: t4 };
}
function handleHandlerResponse(e3, t4, r6) {
  if (null === t4) return function(e4, t5) {
    if (e4.handled) return;
    t5 || 200 === e4.node.res.statusCode || (t5 = e4.node.res.statusCode);
    const r7 = sanitizeStatusCode2(t5, 204);
    204 === r7 && e4.node.res.removeHeader("content-length"), e4.node.res.writeHead(r7), e4.node.res.end();
  }(e3);
  if (t4) {
    if (a5 = t4, "undefined" != typeof Response && a5 instanceof Response) return sendWebResponse2(e3, t4);
    if (function(e4) {
      if (!e4 || "object" != typeof e4) return false;
      if ("function" == typeof e4.pipe) {
        if ("function" == typeof e4._read) return true;
        if ("function" == typeof e4.abort) return true;
      }
      return "function" == typeof e4.pipeTo;
    }(t4)) return sendStream(e3, t4);
    if (t4.buffer) return send2(e3, t4);
    if (t4.arrayBuffer && "function" == typeof t4.arrayBuffer) return t4.arrayBuffer().then((r7) => send2(e3, s4.from(r7), t4.type));
    if (t4 instanceof Error) throw createError(t4);
    if ("function" == typeof t4.end) return true;
  }
  var a5;
  const c4 = typeof t4;
  if ("string" === c4) return send2(e3, t4, Jt2.html);
  if ("object" === c4 || "boolean" === c4 || "number" === c4) return send2(e3, JSON.stringify(t4, void 0, r6), Jt2.json);
  if ("bigint" === c4) return send2(e3, t4.toString(), Jt2.json);
  throw createError({ statusCode: 500, statusMessage: `[h3] Cannot send ${c4} as response.` });
}
function toNodeListener(e3) {
  return async function(t4, r6) {
    const s5 = createEvent(t4, r6);
    try {
      await e3.handler(s5);
    } catch (t5) {
      const r7 = createError(t5);
      if (isError(t5) || (r7.unhandled = true), setResponseStatus(s5, r7.statusCode, r7.statusMessage), e3.options.onError && await e3.options.onError(r7, s5), s5.handled) return;
      (r7.unhandled || r7.fatal) && console.error("[h3]", r7.fatal ? "[fatal]" : "[unhandled]", r7), e3.options.onBeforeResponse && !s5._onBeforeResponseCalled && await e3.options.onBeforeResponse(s5, { body: r7 }), await function(e4, t6, r8) {
        if (e4.handled) return;
        const s6 = isError(t6) ? t6 : createError(t6), a5 = { statusCode: s6.statusCode, statusMessage: s6.statusMessage, stack: [], data: s6.data };
        if (r8 && (a5.stack = (s6.stack || "").split("\n").map((e5) => e5.trim())), e4.handled) return;
        setResponseStatus(e4, Number.parseInt(s6.statusCode), s6.statusMessage), e4.node.res.setHeader("content-type", Jt2.json), e4.node.res.end(JSON.stringify(a5, void 0, 2));
      }(s5, r7, !!e3.options.debug), e3.options.onAfterResponse && !s5._onAfterResponseCalled && await e3.options.onAfterResponse(s5, { body: r7 });
    }
  };
}
function flatHooks(e3, t4 = {}, r6) {
  for (const s5 in e3) {
    const a5 = e3[s5], c4 = r6 ? `${r6}:${s5}` : s5;
    "object" == typeof a5 && null !== a5 ? flatHooks(a5, t4, c4) : "function" == typeof a5 && (t4[c4] = a5);
  }
  return t4;
}
function serialTaskCaller(e3, t4) {
  const r6 = t4.shift(), s5 = nr2(r6);
  return e3.reduce((e4, r7) => e4.then(() => s5.run(() => r7(...t4))), Promise.resolve());
}
function parallelTaskCaller(e3, t4) {
  const r6 = t4.shift(), s5 = nr2(r6);
  return Promise.all(e3.map((e4) => s5.run(() => e4(...t4))));
}
function callEachWith(e3, t4) {
  for (const r6 of [...e3]) r6(t4);
}
function isPayloadMethod(e3 = "GET") {
  return ir2.has(e3.toUpperCase());
}
function resolveFetchOptions(e3, t4, r6, s5) {
  const a5 = function(e4, t5, r7) {
    if (!t5) return new r7(e4);
    const s6 = new r7(t5);
    if (e4) for (const [t6, a6] of Symbol.iterator in e4 || Array.isArray(e4) ? e4 : new r7(e4)) s6.set(t6, a6);
    return s6;
  }(t4?.headers ?? e3?.headers, r6?.headers, s5);
  let c4;
  return (r6?.query || r6?.params || t4?.params || t4?.query) && (c4 = { ...r6?.params, ...r6?.query, ...t4?.params, ...t4?.query }), { ...r6, ...t4, query: c4, params: c4, headers: a5 };
}
async function callHooks(e3, t4) {
  if (t4) if (Array.isArray(t4)) for (const r6 of t4) await r6(e3);
  else await t4(e3);
}
function createFetch(e3 = {}) {
  const { fetch: t4 = globalThis.fetch, Headers: r6 = globalThis.Headers, AbortController: s5 = globalThis.AbortController } = e3;
  async function onError2(e4) {
    const t5 = e4.error && "AbortError" === e4.error.name && !e4.options.timeout || false;
    if (false !== e4.options.retry && !t5) {
      let t6;
      t6 = "number" == typeof e4.options.retry ? e4.options.retry : isPayloadMethod(e4.options.method) ? 0 : 1;
      const r8 = e4.response && e4.response.status || 500;
      if (t6 > 0 && (Array.isArray(e4.options.retryStatusCodes) ? e4.options.retryStatusCodes.includes(r8) : lr2.has(r8))) {
        const r9 = "function" == typeof e4.options.retryDelay ? e4.options.retryDelay(e4) : e4.options.retryDelay || 0;
        return r9 > 0 && await new Promise((e5) => setTimeout(e5, r9)), $fetchRaw(e4.request, { ...e4.options, retry: t6 - 1 });
      }
    }
    const r7 = function(e5) {
      const t6 = e5.error?.message || e5.error?.toString() || "", r8 = e5.request?.method || e5.options?.method || "GET", s6 = e5.request?.url || String(e5.request) || "/", a5 = `[${r8}] ${JSON.stringify(s6)}`, c4 = e5.response ? `${e5.response.status} ${e5.response.statusText}` : "<no response>", u4 = new FetchError(`${a5}: ${c4}${t6 ? ` ${t6}` : ""}`, e5.error ? { cause: e5.error } : void 0);
      for (const t7 of ["request", "options", "response"]) Object.defineProperty(u4, t7, { get: /* @__PURE__ */ __name(() => e5[t7], "get") });
      for (const [t7, r9] of [["data", "_data"], ["status", "status"], ["statusCode", "status"], ["statusText", "statusText"], ["statusMessage", "statusText"]]) Object.defineProperty(u4, t7, { get: /* @__PURE__ */ __name(() => e5.response && e5.response[r9], "get") });
      return u4;
    }(e4);
    throw Error.captureStackTrace && Error.captureStackTrace(r7, $fetchRaw), r7;
  }
  __name(onError2, "onError");
  const $fetchRaw = /* @__PURE__ */ __name(async function(a5, c4 = {}) {
    const u4 = { request: a5, options: resolveFetchOptions(a5, c4, e3.defaults, r6), response: void 0, error: void 0 };
    let d4;
    if (u4.options.method && (u4.options.method = u4.options.method.toUpperCase()), u4.options.onRequest && await callHooks(u4, u4.options.onRequest), "string" == typeof u4.request && (u4.options.baseURL && (u4.request = function(e4, t5) {
      if (isEmptyURL(t5) || hasProtocol(e4)) return e4;
      const r7 = withoutTrailingSlash(t5);
      return e4.startsWith(r7) ? e4 : joinURL(r7, e4);
    }(u4.request, u4.options.baseURL)), u4.options.query && (u4.request = withQuery(u4.request, u4.options.query), delete u4.options.query), "query" in u4.options && delete u4.options.query, "params" in u4.options && delete u4.options.params), u4.options.body && isPayloadMethod(u4.options.method) && (!function(e4) {
      if (void 0 === e4) return false;
      const t5 = typeof e4;
      return "string" === t5 || "number" === t5 || "boolean" === t5 || null === t5 || "object" === t5 && (!!Array.isArray(e4) || !e4.buffer && (e4.constructor && "Object" === e4.constructor.name || "function" == typeof e4.toJSON));
    }(u4.options.body) ? ("pipeTo" in u4.options.body && "function" == typeof u4.options.body.pipeTo || "function" == typeof u4.options.body.pipe) && ("duplex" in u4.options || (u4.options.duplex = "half")) : (u4.options.body = "string" == typeof u4.options.body ? u4.options.body : JSON.stringify(u4.options.body), u4.options.headers = new r6(u4.options.headers || {}), u4.options.headers.has("content-type") || u4.options.headers.set("content-type", "application/json"), u4.options.headers.has("accept") || u4.options.headers.set("accept", "application/json"))), !u4.options.signal && u4.options.timeout) {
      const e4 = new s5();
      d4 = setTimeout(() => {
        const t5 = new Error("[TimeoutError]: The operation was aborted due to timeout");
        t5.name = "TimeoutError", t5.code = 23, e4.abort(t5);
      }, u4.options.timeout), u4.options.signal = e4.signal;
    }
    try {
      u4.response = await t4(u4.request, u4.options);
    } catch (e4) {
      return u4.error = e4, u4.options.onRequestError && await callHooks(u4, u4.options.onRequestError), await onError2(u4);
    } finally {
      d4 && clearTimeout(d4);
    }
    if ((u4.response.body || u4.response._bodyInit) && !dr2.has(u4.response.status) && "HEAD" !== u4.options.method) {
      const e4 = (u4.options.parseResponse ? "json" : u4.options.responseType) || function(e5 = "") {
        if (!e5) return "json";
        const t5 = e5.split(";").shift() || "";
        return ur2.test(t5) ? "json" : cr2.has(t5) || t5.startsWith("text/") ? "text" : "blob";
      }(u4.response.headers.get("content-type") || "");
      switch (e4) {
        case "json": {
          const e5 = await u4.response.text(), t5 = u4.options.parseResponse || destr;
          u4.response._data = t5(e5);
          break;
        }
        case "stream":
          u4.response._data = u4.response.body || u4.response._bodyInit;
          break;
        default:
          u4.response._data = await u4.response[e4]();
      }
    }
    return u4.options.onResponse && await callHooks(u4, u4.options.onResponse), !u4.options.ignoreResponseError && u4.response.status >= 400 && u4.response.status < 600 ? (u4.options.onResponseError && await callHooks(u4, u4.options.onResponseError), await onError2(u4)) : u4.response;
  }, "$fetchRaw"), $fetch = /* @__PURE__ */ __name(async function(e4, t5) {
    return (await $fetchRaw(e4, t5))._data;
  }, "$fetch");
  return $fetch.raw = $fetchRaw, $fetch.native = (...e4) => t4(...e4), $fetch.create = (t5 = {}, r7 = {}) => createFetch({ ...e3, ...r7, defaults: { ...e3.defaults, ...r7.defaults, ...t5 } }), $fetch;
}
function asyncCall(e3, ...t4) {
  try {
    return (r6 = e3(...t4)) && "function" == typeof r6.then ? r6 : Promise.resolve(r6);
  } catch (e4) {
    return Promise.reject(e4);
  }
  var r6;
}
function stringify(e3) {
  if (/* @__PURE__ */ function(e4) {
    const t4 = typeof e4;
    return null === e4 || "object" !== t4 && "function" !== t4;
  }(e3)) return String(e3);
  if (function(e4) {
    const t4 = Object.getPrototypeOf(e4);
    return !t4 || t4.isPrototypeOf(Object);
  }(e3) || Array.isArray(e3)) return JSON.stringify(e3);
  if ("function" == typeof e3.toJSON) return stringify(e3.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
function serializeRaw(e3) {
  return "string" == typeof e3 ? e3 : yr2 + function(e4) {
    if (globalThis.Buffer) return s4.from(e4).toString("base64");
    return globalThis.btoa(String.fromCodePoint(...e4));
  }(e3);
}
function deserializeRaw(e3) {
  return "string" != typeof e3 ? e3 : e3.startsWith(yr2) ? function(e4) {
    if (globalThis.Buffer) return s4.from(e4, "base64");
    return Uint8Array.from(globalThis.atob(e4), (e5) => e5.codePointAt(0));
  }(e3.slice(7)) : e3;
}
function normalizeKey$1(e3) {
  return e3 && e3.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
}
function joinKeys(...e3) {
  return normalizeKey$1(e3.join(":"));
}
function normalizeBaseKey(e3) {
  return (e3 = normalizeKey$1(e3)) ? e3 + ":" : "";
}
function watch(e3, t4, r6) {
  return e3.watch ? e3.watch((e4, s5) => t4(e4, r6 + s5)) : () => {
  };
}
async function dispose(e3) {
  "function" == typeof e3.dispose && await asyncCall(e3.dispose);
}
function useStorage(e3 = "") {
  return e3 ? function(e4, t4) {
    if (!(t4 = normalizeBaseKey(t4))) return e4;
    const r6 = { ...e4 };
    for (const s5 of gr2) r6[s5] = (r7 = "", ...a5) => e4[s5](t4 + r7, ...a5);
    return r6.getKeys = (r7 = "", ...s5) => e4.getKeys(t4 + r7, ...s5).then((e5) => e5.map((e6) => e6.slice(t4.length))), r6.getItems = async (r7, s5) => {
      const a5 = r7.map((e5) => "string" == typeof e5 ? t4 + e5 : { ...e5, key: t4 + e5.key });
      return (await e4.getItems(a5, s5)).map((e5) => ({ key: e5.key.slice(t4.length), value: e5.value }));
    }, r6.setItems = async (r7, s5) => {
      const a5 = r7.map((e5) => ({ key: t4 + e5.key, value: e5.value, options: e5.options }));
      return e4.setItems(a5, s5);
    }, r6;
  }(br2, e3) : br2;
}
function hash(e3) {
  return function(e4) {
    return new k3().finalize(e4).toBase64();
  }("string" == typeof e3 ? e3 : function(e4) {
    const t4 = new Rr2();
    return t4.dispatch(e4), t4.buff;
  }(e3)).replace(/[-_]/g, "").slice(0, 10);
}
function defineCachedFunction(e3, t4 = {}) {
  t4 = { name: "_", base: "/cache", swr: true, maxAge: 1, ...t4 };
  const r6 = {}, s5 = t4.group || "nitro/functions", a5 = t4.name || e3.name || "_", c4 = t4.integrity || hash([e3, t4]), u4 = t4.validate || ((e4) => void 0 !== e4.value);
  return async (...d4) => {
    if (await t4.shouldBypassCache?.(...d4)) return e3(...d4);
    const h4 = await (t4.getKey || getKey)(...d4), f4 = await t4.shouldInvalidateCache?.(...d4), m5 = await async function(e4, d5, h5, f5) {
      const m6 = [t4.base, s5, a5, e4 + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
      let g4 = await useStorage().getItem(m6).catch((e5) => {
        console.error("[cache] Cache read error.", e5), useNitroApp().captureError(e5, { event: f5, tags: ["cache"] });
      }) || {};
      if ("object" != typeof g4) {
        g4 = {};
        const e5 = new Error("Malformed data read from cache.");
        console.error("[cache]", e5), useNitroApp().captureError(e5, { event: f5, tags: ["cache"] });
      }
      const _3 = 1e3 * (t4.maxAge ?? 0);
      _3 && (g4.expires = Date.now() + _3);
      const x3 = h5 || g4.integrity !== c4 || _3 && Date.now() - (g4.mtime || 0) > _3 || false === u4(g4), R4 = x3 ? (async () => {
        const s6 = r6[e4];
        s6 || (void 0 !== g4.value && (t4.staleMaxAge || 0) >= 0 && false === t4.swr && (g4.value = void 0, g4.integrity = void 0, g4.mtime = void 0, g4.expires = void 0), r6[e4] = Promise.resolve(d5()));
        try {
          g4.value = await r6[e4];
        } catch (t5) {
          throw s6 || delete r6[e4], t5;
        }
        if (!s6 && (g4.mtime = Date.now(), g4.integrity = c4, delete r6[e4], false !== u4(g4))) {
          let e5;
          t4.maxAge && !t4.swr && (e5 = { ttl: t4.maxAge });
          const r7 = useStorage().setItem(m6, g4, e5).catch((e6) => {
            console.error("[cache] Cache write error.", e6), useNitroApp().captureError(e6, { event: f5, tags: ["cache"] });
          });
          f5?.waitUntil && f5.waitUntil(r7);
        }
      })() : Promise.resolve();
      return void 0 === g4.value ? await R4 : x3 && f5 && f5.waitUntil && f5.waitUntil(R4), t4.swr && false !== u4(g4) ? (R4.catch((e5) => {
        console.error("[cache] SWR handler error.", e5), useNitroApp().captureError(e5, { event: f5, tags: ["cache"] });
      }), g4) : R4.then(() => g4);
    }(h4, () => e3(...d4), f4, d4[0] && isEvent(d4[0]) ? d4[0] : void 0);
    let g3 = m5.value;
    return t4.transform && (g3 = await t4.transform(m5, ...d4) || g3), g3;
  };
}
function getKey(...e3) {
  return e3.length > 0 ? hash(e3) : "";
}
function escapeKey(e3) {
  return String(e3).replace(/\W/g, "");
}
function cloneWithProxy(e3, t4) {
  return new Proxy(e3, { get: /* @__PURE__ */ __name((e4, r6, s5) => r6 in t4 ? t4[r6] : Reflect.get(e4, r6, s5), "get"), set: /* @__PURE__ */ __name((e4, r6, s5, a5) => r6 in t4 ? (t4[r6] = s5, true) : Reflect.set(e4, r6, s5, a5), "set") });
}
function klona(e3) {
  if ("object" != typeof e3) return e3;
  var t4, r6, s5 = Object.prototype.toString.call(e3);
  if ("[object Object]" === s5) {
    if (e3.constructor !== Object && "function" == typeof e3.constructor) for (t4 in r6 = new e3.constructor(), e3) e3.hasOwnProperty(t4) && r6[t4] !== e3[t4] && (r6[t4] = klona(e3[t4]));
    else for (t4 in r6 = {}, e3) "__proto__" === t4 ? Object.defineProperty(r6, t4, { value: klona(e3[t4]), configurable: true, enumerable: true, writable: true }) : r6[t4] = klona(e3[t4]);
    return r6;
  }
  if ("[object Array]" === s5) {
    for (t4 = e3.length, r6 = Array(t4); t4--; ) r6[t4] = klona(e3[t4]);
    return r6;
  }
  return "[object Set]" === s5 ? (r6 = /* @__PURE__ */ new Set(), e3.forEach(function(e4) {
    r6.add(klona(e4));
  }), r6) : "[object Map]" === s5 ? (r6 = /* @__PURE__ */ new Map(), e3.forEach(function(e4, t5) {
    r6.set(klona(t5), klona(e4));
  }), r6) : "[object Date]" === s5 ? /* @__PURE__ */ new Date(+e3) : "[object RegExp]" === s5 ? ((r6 = new RegExp(e3.source, e3.flags)).lastIndex = e3.lastIndex, r6) : "[object DataView]" === s5 ? new e3.constructor(klona(e3.buffer)) : "[object ArrayBuffer]" === s5 ? e3.slice(0) : "Array]" === s5.slice(-6) ? new e3.constructor(e3) : e3;
}
function isUppercase(e3 = "") {
  if (!Er2.test(e3)) return e3 !== e3.toLowerCase();
}
function kebabCase(e3, t4) {
  return e3 ? (Array.isArray(e3) ? e3 : function(e4) {
    const t5 = jr2, r6 = [];
    if (!e4 || "string" != typeof e4) return r6;
    let s5, a5, c4 = "";
    for (const u4 of e4) {
      const e5 = t5.includes(u4);
      if (true === e5) {
        r6.push(c4), c4 = "", s5 = void 0;
        continue;
      }
      const d4 = isUppercase(u4);
      if (false === a5) {
        if (false === s5 && true === d4) {
          r6.push(c4), c4 = u4, s5 = d4;
          continue;
        }
        if (true === s5 && false === d4 && c4.length > 1) {
          const e6 = c4.at(-1);
          r6.push(c4.slice(0, Math.max(0, c4.length - 1))), c4 = e6 + u4, s5 = d4;
          continue;
        }
      }
      c4 += u4, s5 = d4, a5 = e5;
    }
    return r6.push(c4), r6;
  }(e3)).map((e4) => e4.toLowerCase()).join(t4) : "";
}
function getEnv(e3, t4) {
  const r6 = (s5 = e3, kebabCase(s5 || "", "_")).toUpperCase();
  var s5;
  return destr(g.env[t4.prefix + r6] ?? g.env[t4.altPrefix + r6]);
}
function _isObject(e3) {
  return "object" == typeof e3 && !Array.isArray(e3);
}
function _expandFromEnv(e3) {
  return e3.replace(Tr2, (e4, t4) => g.env[t4] || e4);
}
function useRuntimeConfig(e3) {
  return Hr2;
}
function _deepFreeze(e3) {
  const t4 = Object.getOwnPropertyNames(e3);
  for (const r6 of t4) {
    const t5 = e3[r6];
    t5 && "object" == typeof t5 && _deepFreeze(t5);
  }
  return Object.freeze(e3);
}
function createRouteRulesHandler(e3) {
  return rr2((t4) => {
    const r6 = function(e4) {
      e4.context._nitro = e4.context._nitro || {}, e4.context._nitro.routeRules || (e4.context._nitro.routeRules = getRouteRulesForPath(withoutBase(e4.path.split("?")[0], useRuntimeConfig().app.baseURL)));
      return e4.context._nitro.routeRules;
    }(t4);
    if (r6.headers && Xt2(t4, r6.headers), r6.redirect) {
      let e4 = r6.redirect.to;
      if (e4.endsWith("/**")) {
        let s5 = t4.path;
        const a5 = r6.redirect._redirectStripBase;
        a5 && (s5 = withoutBase(s5, a5)), e4 = joinURL(e4.slice(0, -3), s5);
      } else if (t4.path.includes("?")) {
        e4 = withQuery(e4, getQuery(t4.path));
      }
      return function(e5, t5, r7 = 302) {
        return e5.node.res.statusCode = sanitizeStatusCode2(r7, e5.node.res.statusCode), e5.node.res.setHeader("location", t5), send2(e5, `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${t5.replace(/"/g, "%22")}"></head></html>`, Jt2.html);
      }(t4, e4, r6.redirect.statusCode);
    }
    if (r6.proxy) {
      let s5 = r6.proxy.to;
      if (s5.endsWith("/**")) {
        let e4 = t4.path;
        const a5 = r6.proxy._proxyStripBase;
        a5 && (e4 = withoutBase(e4, a5)), s5 = joinURL(s5.slice(0, -3), e4);
      } else if (t4.path.includes("?")) {
        s5 = withQuery(s5, getQuery(t4.path));
      }
      return proxyRequest(t4, s5, { fetch: e3.localFetch, ...r6.proxy });
    }
  });
}
function getRouteRulesForPath(e3) {
  return Dt2({}, ...Nr2.matchAll(e3).reverse());
}
function joinHeaders(e3) {
  return Array.isArray(e3) ? e3.join(", ") : String(e3);
}
function normalizeCookieHeader(e3 = "") {
  return splitCookiesString2(joinHeaders(e3));
}
function normalizeCookieHeaders(e3) {
  const t4 = new Headers();
  for (const [r6, s5] of e3) if ("set-cookie" === r6) for (const e4 of normalizeCookieHeader(s5)) t4.append("set-cookie", e4);
  else t4.set(r6, joinHeaders(s5));
  return t4;
}
function defaultHandler(e3, t4, r6) {
  const s5 = e3.unhandled || e3.fatal, a5 = e3.statusCode || 500, c4 = e3.statusMessage || "Server Error", u4 = function(e4, t5 = {}) {
    const r7 = function(e5, t6 = {}) {
      if (t6.xForwardedHost) {
        const t7 = e5.node.req.headers["x-forwarded-host"], r8 = (t7 || "").split(",").shift()?.trim();
        if (r8) return r8;
      }
      return e5.node.req.headers.host || "localhost";
    }(e4, t5), s6 = function(e5, t6 = {}) {
      return false !== t6.xForwardedProto && "https" === e5.node.req.headers["x-forwarded-proto"] || e5.node.req.connection?.encrypted ? "https" : "http";
    }(e4, t5), a6 = (e4.node.req.originalUrl || e4.path).replace(/^[/\\]+/g, "/");
    return new URL(a6, `${s6}://${r7}`);
  }(t4, { xForwardedHost: true, xForwardedProto: true });
  if (404 === a5) {
    const e4 = "/";
    if (/^\/[^/]/.test(e4) && !u4.pathname.startsWith(e4)) {
      return { status: 302, statusText: "Found", headers: { location: `${e4}${u4.pathname.slice(1)}${u4.search}` }, body: "Redirecting..." };
    }
  }
  if (s5 && !r6?.silent) {
    const r7 = [e3.unhandled && "[unhandled]", e3.fatal && "[fatal]"].filter(Boolean).join(" ");
    console.error(`[request error] ${r7} [${t4.method}] ${u4}
`, e3);
  }
  const d4 = { "content-type": "application/json", "x-content-type-options": "nosniff", "x-frame-options": "DENY", "referrer-policy": "no-referrer", "content-security-policy": "script-src 'none'; frame-ancestors 'none';" };
  setResponseStatus(t4, a5, c4), 404 !== a5 && function(e4, t5) {
    return e4.node.res.getHeader(t5);
  }(t4, "cache-control") || (d4["cache-control"] = "no-cache");
  return { status: a5, statusText: c4, headers: d4, body: { error: true, url: u4.href, statusCode: a5, statusMessage: c4, message: s5 ? "Server Error" : e3.message, data: s5 ? void 0 : e3.data } };
}
function useNitroApp() {
  return Lr2;
}
var WriteStream2, ReadStream2, u3, Process2, d3, h3, _getEnv, f3, m4, g, _2, x2, R3, C3, E3, j2, T3, S3, H2, I3, P3, M2, O3, B2, N3, z2, U3, q2, D3, L3, $2, K3, W3, F3, Z2, Q2, V3, J2, G2, Y3, X3, ee2, te2, re2, se2, oe2, ne2, ae2, ie2, ce2, ue2, le2, de2, he2, pe2, fe2, me2, ye2, ge2, we2, ve2, be2, _e2, xe2, ke2, Re2, Ce2, Ee2, je2, Te2, Se2, Ae2, He2, Ie2, Pe2, Me2, Oe2, Be2, Ne2, ze2, Ue2, qe2, De2, Le2, $e2, Ke2, We2, Fe2, Ze2, Qe2, Ve2, Je2, Ge2, Ye2, Xe2, et2, tt2, rt2, st2, ot2, nt2, at2, it2, ct2, ut2, lt2, dt2, ht2, pt2, ft2, mt2, yt2, gt2, wt2, vt2, bt2, _t2, xt2, kt2, Rt2, Ct2, Et2, jt2, Tt2, St2, At2, Ht2, It2, Pt2, Mt2, Ot2, Bt2, Nt2, zt2, Ut2, qt2, Dt2, Lt2, i5, $t2, Kt2, Wt2, A3, y2, w3, Ft2, Zt2, H3Error2, Qt2, Vt2, Jt2, Gt2, Yt2, Xt2, er2, tr2, H3Event2, rr2, lazyEventHandler, sr2, or2, nr2, Hookable, ar, FetchError, ir2, cr2, ur2, lr2, dr2, hr2, pr2, fr2, mr2, yr2, gr2, memory, wr2, normalizeKey, vr2, br2, _r2, xr2, kr2, k3, l4, Rr2, cachedEventHandler, Cr2, Er2, jr2, Tr2, Sr2, Ar2, Hr2, Ir2, Pr2, Mr2, Or2, Br2, Nr2, zr2, Ur2, qr2, Dr2, Lr2, $r2, Kr2, Wr2;
var init_nitro = __esm({
  ".output/server/chunks/nitro/nitro.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_process2();
    "global" in globalThis || (globalThis.global = globalThis);
    WriteStream2 = class {
      static {
        __name(this, "WriteStream");
      }
      fd;
      columns = 80;
      rows = 24;
      isTTY = false;
      constructor(e3) {
        this.fd = e3;
      }
      clearLine(e3, t4) {
        return t4 && t4(), false;
      }
      clearScreenDown(e3) {
        return e3 && e3(), false;
      }
      cursorTo(e3, t4, r6) {
        return r6 && "function" == typeof r6 && r6(), false;
      }
      moveCursor(e3, t4, r6) {
        return r6 && r6(), false;
      }
      getColorDepth(e3) {
        return 1;
      }
      hasColors(e3, t4) {
        return false;
      }
      getWindowSize() {
        return [this.columns, this.rows];
      }
      write(e3, t4, r6) {
        e3 instanceof Uint8Array && (e3 = new TextDecoder().decode(e3));
        try {
          console.log(e3);
        } catch {
        }
        return r6 && "function" == typeof r6 && r6(), false;
      }
    };
    ReadStream2 = class {
      static {
        __name(this, "ReadStream");
      }
      fd;
      isRaw = false;
      isTTY = false;
      constructor(e3) {
        this.fd = e3;
      }
      setRawMode(e3) {
        return this.isRaw = e3, this;
      }
    };
    __name(createNotImplementedError2, "createNotImplementedError");
    __name(notImplemented2, "notImplemented");
    u3 = "22.14.0";
    Process2 = class _Process extends r5 {
      static {
        __name(this, "Process");
      }
      env;
      hrtime;
      nextTick;
      constructor(e3) {
        super(), this.env = e3.env, this.hrtime = e3.hrtime, this.nextTick = e3.nextTick;
        for (const e4 of [...Object.getOwnPropertyNames(_Process.prototype), ...Object.getOwnPropertyNames(r5.prototype)]) {
          const t4 = this[e4];
          "function" == typeof t4 && (this[e4] = t4.bind(this));
        }
      }
      emitWarning(e3, t4, r6) {
        console.warn(`${r6 ? `[${r6}] ` : ""}${t4 ? `${t4}: ` : ""}${e3}`);
      }
      emit(...e3) {
        return super.emit(...e3);
      }
      listeners(e3) {
        return super.listeners(e3);
      }
      #e;
      #t;
      #r;
      get stdin() {
        return this.#e ??= new ReadStream2(0);
      }
      get stdout() {
        return this.#t ??= new WriteStream2(1);
      }
      get stderr() {
        return this.#r ??= new WriteStream2(2);
      }
      #s = "/";
      chdir(e3) {
        this.#s = e3;
      }
      cwd() {
        return this.#s;
      }
      arch = "";
      platform = "";
      argv = [];
      argv0 = "";
      execArgv = [];
      execPath = "";
      title = "";
      pid = 200;
      ppid = 100;
      get version() {
        return `v${u3}`;
      }
      get versions() {
        return { node: u3 };
      }
      get allowedNodeEnvironmentFlags() {
        return /* @__PURE__ */ new Set();
      }
      get sourceMapsEnabled() {
        return false;
      }
      get debugPort() {
        return 0;
      }
      get throwDeprecation() {
        return false;
      }
      get traceDeprecation() {
        return false;
      }
      get features() {
        return {};
      }
      get release() {
        return {};
      }
      get connected() {
        return false;
      }
      get config() {
        return {};
      }
      get moduleLoadList() {
        return [];
      }
      constrainedMemory() {
        return 0;
      }
      availableMemory() {
        return 0;
      }
      uptime() {
        return 0;
      }
      resourceUsage() {
        return {};
      }
      ref() {
      }
      unref() {
      }
      umask() {
        throw createNotImplementedError2("process.umask");
      }
      getBuiltinModule() {
      }
      getActiveResourcesInfo() {
        throw createNotImplementedError2("process.getActiveResourcesInfo");
      }
      exit() {
        throw createNotImplementedError2("process.exit");
      }
      reallyExit() {
        throw createNotImplementedError2("process.reallyExit");
      }
      kill() {
        throw createNotImplementedError2("process.kill");
      }
      abort() {
        throw createNotImplementedError2("process.abort");
      }
      dlopen() {
        throw createNotImplementedError2("process.dlopen");
      }
      setSourceMapsEnabled() {
        throw createNotImplementedError2("process.setSourceMapsEnabled");
      }
      loadEnvFile() {
        throw createNotImplementedError2("process.loadEnvFile");
      }
      disconnect() {
        throw createNotImplementedError2("process.disconnect");
      }
      cpuUsage() {
        throw createNotImplementedError2("process.cpuUsage");
      }
      setUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError2("process.setUncaughtExceptionCaptureCallback");
      }
      hasUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError2("process.hasUncaughtExceptionCaptureCallback");
      }
      initgroups() {
        throw createNotImplementedError2("process.initgroups");
      }
      openStdin() {
        throw createNotImplementedError2("process.openStdin");
      }
      assert() {
        throw createNotImplementedError2("process.assert");
      }
      binding() {
        throw createNotImplementedError2("process.binding");
      }
      permission = { has: notImplemented2("process.permission.has") };
      report = { directory: "", filename: "", signal: "SIGUSR2", compact: false, reportOnFatalError: false, reportOnSignal: false, reportOnUncaughtException: false, getReport: notImplemented2("process.report.getReport"), writeReport: notImplemented2("process.report.writeReport") };
      finalization = { register: notImplemented2("process.finalization.register"), unregister: notImplemented2("process.finalization.unregister"), registerBeforeExit: notImplemented2("process.finalization.registerBeforeExit") };
      memoryUsage = Object.assign(() => ({ arrayBuffers: 0, rss: 0, external: 0, heapTotal: 0, heapUsed: 0 }), { rss: /* @__PURE__ */ __name(() => 0, "rss") });
      mainModule = void 0;
      domain = void 0;
      send = void 0;
      exitCode = void 0;
      channel = void 0;
      getegid = void 0;
      geteuid = void 0;
      getgid = void 0;
      getgroups = void 0;
      getuid = void 0;
      setegid = void 0;
      seteuid = void 0;
      setgid = void 0;
      setgroups = void 0;
      setuid = void 0;
      _events = void 0;
      _eventsCount = void 0;
      _exiting = void 0;
      _maxListeners = void 0;
      _debugEnd = void 0;
      _debugProcess = void 0;
      _fatalException = void 0;
      _getActiveHandles = void 0;
      _getActiveRequests = void 0;
      _kill = void 0;
      _preload_modules = void 0;
      _rawDebug = void 0;
      _startProfilerIdleNotifier = void 0;
      _stopProfilerIdleNotifier = void 0;
      _tickCallback = void 0;
      _disconnect = void 0;
      _handleQueue = void 0;
      _pendingMessage = void 0;
      _channel = void 0;
      _send = void 0;
      _linkedBinding = void 0;
    };
    d3 = /* @__PURE__ */ Object.create(null);
    h3 = globalThis.process;
    _getEnv = /* @__PURE__ */ __name((e3) => globalThis.__env__ || h3?.env || (e3 ? d3 : globalThis), "_getEnv");
    f3 = new Proxy(d3, { get: /* @__PURE__ */ __name((e3, t4) => _getEnv()[t4] ?? d3[t4], "get"), has: /* @__PURE__ */ __name((e3, t4) => t4 in _getEnv() || t4 in d3, "has"), set: /* @__PURE__ */ __name((e3, t4, r6) => (_getEnv(true)[t4] = r6, true), "set"), deleteProperty: /* @__PURE__ */ __name((e3, t4) => (delete _getEnv(true)[t4], true), "deleteProperty"), ownKeys() {
      const e3 = _getEnv();
      return Object.keys(e3);
    }, getOwnPropertyDescriptor(e3, t4) {
      const r6 = _getEnv();
      if (t4 in r6) return { value: r6[t4], writable: true, enumerable: true, configurable: true };
    } });
    m4 = Object.assign(function(e3) {
      const t4 = Date.now(), r6 = Math.trunc(t4 / 1e3), s5 = t4 % 1e3 * 1e6;
      if (e3) {
        let t5 = r6 - e3[0], a5 = s5 - e3[0];
        return a5 < 0 && (t5 -= 1, a5 = 1e9 + a5), [t5, a5];
      }
      return [r6, s5];
    }, { bigint: /* @__PURE__ */ __name(function() {
      return BigInt(1e6 * Date.now());
    }, "bigint") });
    globalThis.__env__ = t3;
    g = new Process2({ env: f3, hrtime: m4, nextTick: process_default.nextTick });
    for (const t4 of ["exit", "getBuiltinModule", "platform"]) t4 in process_default && (g[t4] = process_default[t4]);
    process_default.features && Object.defineProperty(g, "features", { get: /* @__PURE__ */ __name(() => process_default.features, "get") });
    ({ abort: _2, addListener: x2, allowedNodeEnvironmentFlags: R3, hasUncaughtExceptionCaptureCallback: C3, setUncaughtExceptionCaptureCallback: E3, loadEnvFile: j2, sourceMapsEnabled: T3, arch: S3, argv: H2, argv0: I3, chdir: P3, config: M2, connected: O3, constrainedMemory: B2, availableMemory: N3, cpuUsage: z2, cwd: U3, debugPort: q2, dlopen: D3, disconnect: L3, emit: $2, emitWarning: K3, env: W3, eventNames: F3, execArgv: Z2, execPath: Q2, exit: V3, finalization: J2, features: G2, getBuiltinModule: Y3, getActiveResourcesInfo: X3, getMaxListeners: ee2, hrtime: te2, kill: re2, listeners: se2, listenerCount: oe2, memoryUsage: ne2, nextTick: ae2, on: ie2, off: ce2, once: ue2, pid: le2, platform: de2, ppid: he2, prependListener: pe2, prependOnceListener: fe2, rawListeners: me2, release: ye2, removeAllListeners: ge2, removeListener: we2, report: ve2, resourceUsage: be2, setMaxListeners: _e2, setSourceMapsEnabled: xe2, stderr: ke2, stdin: Re2, stdout: Ce2, title: Ee2, umask: je2, uptime: Te2, version: Se2, versions: Ae2, domain: He2, initgroups: Ie2, moduleLoadList: Pe2, reallyExit: Me2, openStdin: Oe2, assert: Be2, binding: Ne2, send: ze2, exitCode: Ue2, channel: qe2, getegid: De2, geteuid: Le2, getgid: $e2, getgroups: Ke2, getuid: We2, setegid: Fe2, seteuid: Ze2, setgid: Qe2, setgroups: Ve2, setuid: Je2, permission: Ge2, mainModule: Ye2, _events: Xe2, _eventsCount: et2, _exiting: tt2, _maxListeners: rt2, _debugEnd: st2, _debugProcess: ot2, _fatalException: nt2, _getActiveHandles: at2, _getActiveRequests: it2, _kill: ct2, _preload_modules: ut2, _rawDebug: lt2, _startProfilerIdleNotifier: dt2, _stopProfilerIdleNotifier: ht2, _tickCallback: pt2, _disconnect: ft2, _handleQueue: mt2, _pendingMessage: yt2, _channel: gt2, _send: wt2, _linkedBinding: vt2 } = g);
    bt2 = globalThis.process;
    globalThis.process = bt2 ? new Proxy(bt2, { get: /* @__PURE__ */ __name((e3, t4, r6) => Reflect.has(e3, t4) ? Reflect.get(e3, t4, r6) : Reflect.get(g, t4, r6), "get") }) : g, globalThis.Buffer || (globalThis.Buffer = s4), globalThis.setImmediate || (globalThis.setImmediate = a4), globalThis.clearImmediate || (globalThis.clearImmediate = c3);
    _t2 = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
    xt2 = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
    kt2 = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
    __name(jsonParseTransform, "jsonParseTransform");
    __name(destr, "destr");
    Rt2 = /#/g;
    Ct2 = /&/g;
    Et2 = /\//g;
    jt2 = /=/g;
    Tt2 = /\+/g;
    St2 = /%5e/gi;
    At2 = /%60/gi;
    Ht2 = /%7c/gi;
    It2 = /%20/gi;
    __name(encodeQueryValue, "encodeQueryValue");
    __name(encodeQueryKey, "encodeQueryKey");
    __name(decode, "decode");
    __name(decodeQueryKey, "decodeQueryKey");
    __name(decodeQueryValue, "decodeQueryValue");
    __name(parseQuery, "parseQuery");
    __name(stringifyQuery, "stringifyQuery");
    Pt2 = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
    Mt2 = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
    Ot2 = /^([/\\]\s*){2,}[^/\\]/;
    Bt2 = /^\.?\//;
    __name(hasProtocol, "hasProtocol");
    __name(withoutTrailingSlash, "withoutTrailingSlash");
    __name(withTrailingSlash, "withTrailingSlash");
    __name(withoutBase, "withoutBase");
    __name(withQuery, "withQuery");
    __name(getQuery, "getQuery");
    __name(isEmptyURL, "isEmptyURL");
    __name(joinURL, "joinURL");
    Nt2 = Symbol.for("ufo:protocolRelative");
    __name(parseURL, "parseURL");
    __name(parsePath, "parsePath");
    zt2 = 0;
    Ut2 = 1;
    qt2 = 2;
    __name(createRouter$1, "createRouter$1");
    __name(insert, "insert");
    __name(createRadixNode, "createRadixNode");
    __name(getNodeType, "getNodeType");
    __name(toRouteMatcher, "toRouteMatcher");
    __name(_matchRoutes, "_matchRoutes");
    __name(_sortRoutesMap, "_sortRoutesMap");
    __name(_routerNodeToTable, "_routerNodeToTable");
    __name(isPlainObject2, "isPlainObject");
    __name(_defu, "_defu");
    __name(createDefu, "createDefu");
    Dt2 = createDefu();
    Lt2 = createDefu((e3, t4, r6) => {
      if (void 0 !== e3[t4] && "function" == typeof r6) return e3[t4] = r6(e3[t4]), true;
    });
    __name(o2, "o");
    i5 = class _i2 extends r5 {
      static {
        __name(this, "i");
      }
      __unenv__ = {};
      readableEncoding = null;
      readableEnded = true;
      readableFlowing = false;
      readableHighWaterMark = 0;
      readableLength = 0;
      readableObjectMode = false;
      readableAborted = false;
      readableDidRead = false;
      closed = false;
      errored = null;
      readable = false;
      destroyed = false;
      static from(e3, t4) {
        return new _i2(t4);
      }
      constructor(e3) {
        super();
      }
      _read(e3) {
      }
      read(e3) {
      }
      setEncoding(e3) {
        return this;
      }
      pause() {
        return this;
      }
      resume() {
        return this;
      }
      isPaused() {
        return true;
      }
      unpipe(e3) {
        return this;
      }
      unshift(e3, t4) {
      }
      wrap(e3) {
        return this;
      }
      push(e3, t4) {
        return false;
      }
      _destroy(e3, t4) {
        this.removeAllListeners();
      }
      destroy(e3) {
        return this.destroyed = true, this._destroy(e3), this;
      }
      pipe(e3, t4) {
        return {};
      }
      compose(e3, t4) {
        throw new Error("Method not implemented.");
      }
      [Symbol.asyncDispose]() {
        return this.destroy(), Promise.resolve();
      }
      async *[Symbol.asyncIterator]() {
        throw o2("Readable.asyncIterator");
      }
      iterator(e3) {
        throw o2("Readable.iterator");
      }
      map(e3, t4) {
        throw o2("Readable.map");
      }
      filter(e3, t4) {
        throw o2("Readable.filter");
      }
      forEach(e3, t4) {
        throw o2("Readable.forEach");
      }
      reduce(e3, t4, r6) {
        throw o2("Readable.reduce");
      }
      find(e3, t4) {
        throw o2("Readable.find");
      }
      findIndex(e3, t4) {
        throw o2("Readable.findIndex");
      }
      some(e3, t4) {
        throw o2("Readable.some");
      }
      toArray(e3) {
        throw o2("Readable.toArray");
      }
      every(e3, t4) {
        throw o2("Readable.every");
      }
      flatMap(e3, t4) {
        throw o2("Readable.flatMap");
      }
      drop(e3, t4) {
        throw o2("Readable.drop");
      }
      take(e3, t4) {
        throw o2("Readable.take");
      }
      asIndexedPairs(e3) {
        throw o2("Readable.asIndexedPairs");
      }
    };
    $t2 = class extends r5 {
      static {
        __name(this, "$t");
      }
      __unenv__ = {};
      writable = true;
      writableEnded = false;
      writableFinished = false;
      writableHighWaterMark = 0;
      writableLength = 0;
      writableObjectMode = false;
      writableCorked = 0;
      closed = false;
      errored = null;
      writableNeedDrain = false;
      writableAborted = false;
      destroyed = false;
      _data;
      _encoding = "utf8";
      constructor(e3) {
        super();
      }
      pipe(e3, t4) {
        return {};
      }
      _write(e3, t4, r6) {
        if (this.writableEnded) r6 && r6();
        else {
          if (void 0 === this._data) this._data = e3;
          else {
            const r7 = "string" == typeof this._data ? s4.from(this._data, this._encoding || t4 || "utf8") : this._data, a5 = "string" == typeof e3 ? s4.from(e3, t4 || this._encoding || "utf8") : e3;
            this._data = s4.concat([r7, a5]);
          }
          this._encoding = t4, r6 && r6();
        }
      }
      _writev(e3, t4) {
      }
      _destroy(e3, t4) {
      }
      _final(e3) {
      }
      write(e3, t4, r6) {
        const s5 = "string" == typeof t4 ? this._encoding : "utf8", a5 = "function" == typeof t4 ? t4 : "function" == typeof r6 ? r6 : void 0;
        return this._write(e3, s5, a5), true;
      }
      setDefaultEncoding(e3) {
        return this;
      }
      end(e3, t4, r6) {
        const s5 = "function" == typeof e3 ? e3 : "function" == typeof t4 ? t4 : "function" == typeof r6 ? r6 : void 0;
        if (this.writableEnded) return s5 && s5(), this;
        const a5 = e3 === s5 ? void 0 : e3;
        if (a5) {
          const e4 = t4 === s5 ? void 0 : t4;
          this.write(a5, e4, s5);
        }
        return this.writableEnded = true, this.writableFinished = true, this.emit("close"), this.emit("finish"), this;
      }
      cork() {
      }
      uncork() {
      }
      destroy(e3) {
        return this.destroyed = true, delete this._data, this.removeAllListeners(), this;
      }
      compose(e3, t4) {
        throw new Error("Method not implemented.");
      }
    };
    Kt2 = class {
      static {
        __name(this, "Kt");
      }
      allowHalfOpen = true;
      _destroy;
      constructor(e3 = new i5(), t4 = new $t2()) {
        Object.assign(this, e3), Object.assign(this, t4), this._destroy = /* @__PURE__ */ function(...e4) {
          return function(...t5) {
            for (const r6 of e4) r6(...t5);
          };
        }(e3._destroy, t4._destroy);
      }
    };
    Wt2 = (Object.assign(Kt2.prototype, i5.prototype), Object.assign(Kt2.prototype, $t2.prototype), Kt2);
    A3 = class extends Wt2 {
      static {
        __name(this, "A");
      }
      __unenv__ = {};
      bufferSize = 0;
      bytesRead = 0;
      bytesWritten = 0;
      connecting = false;
      destroyed = false;
      pending = false;
      localAddress = "";
      localPort = 0;
      remoteAddress = "";
      remoteFamily = "";
      remotePort = 0;
      autoSelectFamilyAttemptedAddresses = [];
      readyState = "readOnly";
      constructor(e3) {
        super();
      }
      write(e3, t4, r6) {
        return false;
      }
      connect(e3, t4, r6) {
        return this;
      }
      end(e3, t4, r6) {
        return this;
      }
      setEncoding(e3) {
        return this;
      }
      pause() {
        return this;
      }
      resume() {
        return this;
      }
      setTimeout(e3, t4) {
        return this;
      }
      setNoDelay(e3) {
        return this;
      }
      setKeepAlive(e3, t4) {
        return this;
      }
      address() {
        return {};
      }
      unref() {
        return this;
      }
      ref() {
        return this;
      }
      destroySoon() {
        this.destroy();
      }
      resetAndDestroy() {
        const e3 = new Error("ERR_SOCKET_CLOSED");
        return e3.code = "ERR_SOCKET_CLOSED", this.destroy(e3), this;
      }
    };
    y2 = class extends i5 {
      static {
        __name(this, "y");
      }
      aborted = false;
      httpVersion = "1.1";
      httpVersionMajor = 1;
      httpVersionMinor = 1;
      complete = true;
      connection;
      socket;
      headers = {};
      trailers = {};
      method = "GET";
      url = "/";
      statusCode = 200;
      statusMessage = "";
      closed = false;
      errored = null;
      readable = false;
      constructor(e3) {
        super(), this.socket = this.connection = e3 || new A3();
      }
      get rawHeaders() {
        const e3 = this.headers, t4 = [];
        for (const r6 in e3) if (Array.isArray(e3[r6])) for (const s5 of e3[r6]) t4.push(r6, s5);
        else t4.push(r6, e3[r6]);
        return t4;
      }
      get rawTrailers() {
        return [];
      }
      setTimeout(e3, t4) {
        return this;
      }
      get headersDistinct() {
        return p3(this.headers);
      }
      get trailersDistinct() {
        return p3(this.trailers);
      }
    };
    __name(p3, "p");
    w3 = class extends $t2 {
      static {
        __name(this, "w");
      }
      statusCode = 200;
      statusMessage = "";
      upgrading = false;
      chunkedEncoding = false;
      shouldKeepAlive = false;
      useChunkedEncodingByDefault = false;
      sendDate = false;
      finished = false;
      headersSent = false;
      strictContentLength = false;
      connection = null;
      socket = null;
      req;
      _headers = {};
      constructor(e3) {
        super(), this.req = e3;
      }
      assignSocket(e3) {
        e3._httpMessage = this, this.socket = e3, this.connection = e3, this.emit("socket", e3), this._flush();
      }
      _flush() {
        this.flushHeaders();
      }
      detachSocket(e3) {
      }
      writeContinue(e3) {
      }
      writeHead(e3, t4, r6) {
        e3 && (this.statusCode = e3), "string" == typeof t4 && (this.statusMessage = t4, t4 = void 0);
        const s5 = r6 || t4;
        if (s5 && !Array.isArray(s5)) for (const e4 in s5) this.setHeader(e4, s5[e4]);
        return this.headersSent = true, this;
      }
      writeProcessing() {
      }
      setTimeout(e3, t4) {
        return this;
      }
      appendHeader(e3, t4) {
        e3 = e3.toLowerCase();
        const r6 = this._headers[e3], s5 = [...Array.isArray(r6) ? r6 : [r6], ...Array.isArray(t4) ? t4 : [t4]].filter(Boolean);
        return this._headers[e3] = s5.length > 1 ? s5 : s5[0], this;
      }
      setHeader(e3, t4) {
        return this._headers[e3.toLowerCase()] = t4, this;
      }
      setHeaders(e3) {
        for (const [t4, r6] of Object.entries(e3)) this.setHeader(t4, r6);
        return this;
      }
      getHeader(e3) {
        return this._headers[e3.toLowerCase()];
      }
      getHeaders() {
        return this._headers;
      }
      getHeaderNames() {
        return Object.keys(this._headers);
      }
      hasHeader(e3) {
        return e3.toLowerCase() in this._headers;
      }
      removeHeader(e3) {
        delete this._headers[e3.toLowerCase()];
      }
      addTrailers(e3) {
      }
      flushHeaders() {
      }
      writeEarlyHints(e3, t4) {
        "function" == typeof t4 && t4();
      }
    };
    Ft2 = (() => {
      const n5 = /* @__PURE__ */ __name(function() {
      }, "n");
      return n5.prototype = /* @__PURE__ */ Object.create(null), n5;
    })();
    __name(v2, "v");
    Zt2 = /* @__PURE__ */ new Set([101, 204, 205, 304]);
    __name(b2, "b");
    __name(hasProp2, "hasProp");
    H3Error2 = class extends Error {
      static {
        __name(this, "H3Error");
      }
      static __h3_error__ = true;
      statusCode = 500;
      fatal = false;
      unhandled = false;
      statusMessage;
      data;
      cause;
      constructor(e3, t4 = {}) {
        super(e3, t4), t4.cause && !this.cause && (this.cause = t4.cause);
      }
      toJSON() {
        const e3 = { message: this.message, statusCode: sanitizeStatusCode2(this.statusCode, 500) };
        return this.statusMessage && (e3.statusMessage = sanitizeStatusMessage2(this.statusMessage)), void 0 !== this.data && (e3.data = this.data), e3;
      }
    };
    __name(createError, "createError");
    __name(isError, "isError");
    Qt2 = Symbol.for("h3RawBody");
    Vt2 = ["PATCH", "POST", "PUT", "DELETE"];
    __name(readRawBody, "readRawBody");
    __name(handleCacheHeaders, "handleCacheHeaders");
    Jt2 = { html: "text/html", json: "application/json" };
    Gt2 = /[^\u0009\u0020-\u007E]/g;
    __name(sanitizeStatusMessage2, "sanitizeStatusMessage");
    __name(sanitizeStatusCode2, "sanitizeStatusCode");
    __name(splitCookiesString2, "splitCookiesString");
    Yt2 = void 0 === a4 ? (e3) => e3() : a4;
    __name(send2, "send");
    __name(setResponseStatus, "setResponseStatus");
    __name(setResponseHeaders, "setResponseHeaders");
    Xt2 = setResponseHeaders;
    __name(sendStream, "sendStream");
    __name(sendWebResponse2, "sendWebResponse");
    er2 = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
    tr2 = /* @__PURE__ */ new Set(["transfer-encoding", "accept-encoding", "connection", "keep-alive", "upgrade", "expect", "host", "accept"]);
    __name(proxyRequest, "proxyRequest");
    __name(getProxyRequestHeaders, "getProxyRequestHeaders");
    __name(fetchWithEvent, "fetchWithEvent");
    __name(_getFetch, "_getFetch");
    __name(rewriteCookieProperty, "rewriteCookieProperty");
    H3Event2 = class {
      static {
        __name(this, "H3Event");
      }
      __is_event__ = true;
      node;
      web;
      context = {};
      _method;
      _path;
      _headers;
      _requestBody;
      _handled = false;
      _onBeforeResponseCalled;
      _onAfterResponseCalled;
      constructor(e3, t4) {
        this.node = { req: e3, res: t4 };
      }
      get method() {
        return this._method || (this._method = (this.node.req.method || "GET").toUpperCase()), this._method;
      }
      get path() {
        return this._path || this.node.req.url || "/";
      }
      get headers() {
        return this._headers || (this._headers = function(e3) {
          const t4 = new Headers();
          for (const [r6, s5] of Object.entries(e3)) if (Array.isArray(s5)) for (const e4 of s5) t4.append(r6, e4);
          else s5 && t4.set(r6, s5);
          return t4;
        }(this.node.req.headers)), this._headers;
      }
      get handled() {
        return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
      }
      respondWith(e3) {
        return Promise.resolve(e3).then((e4) => sendWebResponse2(this, e4));
      }
      toString() {
        return `[${this.method}] ${this.path}`;
      }
      toJSON() {
        return this.toString();
      }
      get req() {
        return this.node.req;
      }
      get res() {
        return this.node.res;
      }
    };
    __name(isEvent, "isEvent");
    __name(createEvent, "createEvent");
    __name(defineEventHandler, "defineEventHandler");
    __name(_normalizeArray2, "_normalizeArray");
    rr2 = defineEventHandler;
    __name(isEventHandler, "isEventHandler");
    __name(toEventHandler, "toEventHandler");
    lazyEventHandler = /* @__PURE__ */ __name(function(e3) {
      let t4, r6;
      const resolveHandler = /* @__PURE__ */ __name(() => r6 ? Promise.resolve(r6) : (t4 || (t4 = Promise.resolve(e3()).then((e4) => {
        const t5 = e4.default || e4;
        if ("function" != typeof t5) throw new TypeError("Invalid lazy handler result. It should be a function:", t5);
        return r6 = { handler: toEventHandler(e4.default || e4) }, r6;
      })), t4), "resolveHandler"), s5 = rr2((e4) => r6 ? r6.handler(e4) : resolveHandler().then((t5) => t5.handler(e4)));
      return s5.__resolve__ = resolveHandler, s5;
    }, "lazyEventHandler");
    __name(createApp, "createApp");
    __name(use, "use");
    __name(normalizeLayer, "normalizeLayer");
    __name(handleHandlerResponse, "handleHandlerResponse");
    sr2 = ["connect", "delete", "get", "head", "options", "post", "put", "trace", "patch"];
    __name(toNodeListener, "toNodeListener");
    __name(flatHooks, "flatHooks");
    or2 = { run: /* @__PURE__ */ __name((e3) => e3(), "run") };
    nr2 = void 0 !== console.createTask ? console.createTask : () => or2;
    __name(serialTaskCaller, "serialTaskCaller");
    __name(parallelTaskCaller, "parallelTaskCaller");
    __name(callEachWith, "callEachWith");
    Hookable = class {
      static {
        __name(this, "Hookable");
      }
      constructor() {
        this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this);
      }
      hook(e3, t4, r6 = {}) {
        if (!e3 || "function" != typeof t4) return () => {
        };
        const s5 = e3;
        let a5;
        for (; this._deprecatedHooks[e3]; ) a5 = this._deprecatedHooks[e3], e3 = a5.to;
        if (a5 && !r6.allowDeprecated) {
          let e4 = a5.message;
          e4 || (e4 = `${s5} hook has been deprecated` + (a5.to ? `, please use ${a5.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = /* @__PURE__ */ new Set()), this._deprecatedMessages.has(e4) || (console.warn(e4), this._deprecatedMessages.add(e4));
        }
        if (!t4.name) try {
          Object.defineProperty(t4, "name", { get: /* @__PURE__ */ __name(() => "_" + e3.replace(/\W+/g, "_") + "_hook_cb", "get"), configurable: true });
        } catch {
        }
        return this._hooks[e3] = this._hooks[e3] || [], this._hooks[e3].push(t4), () => {
          t4 && (this.removeHook(e3, t4), t4 = void 0);
        };
      }
      hookOnce(e3, t4) {
        let r6, _function = /* @__PURE__ */ __name((...e4) => ("function" == typeof r6 && r6(), r6 = void 0, _function = void 0, t4(...e4)), "_function");
        return r6 = this.hook(e3, _function), r6;
      }
      removeHook(e3, t4) {
        if (this._hooks[e3]) {
          const r6 = this._hooks[e3].indexOf(t4);
          -1 !== r6 && this._hooks[e3].splice(r6, 1), 0 === this._hooks[e3].length && delete this._hooks[e3];
        }
      }
      deprecateHook(e3, t4) {
        this._deprecatedHooks[e3] = "string" == typeof t4 ? { to: t4 } : t4;
        const r6 = this._hooks[e3] || [];
        delete this._hooks[e3];
        for (const t5 of r6) this.hook(e3, t5);
      }
      deprecateHooks(e3) {
        Object.assign(this._deprecatedHooks, e3);
        for (const t4 in e3) this.deprecateHook(t4, e3[t4]);
      }
      addHooks(e3) {
        const t4 = flatHooks(e3), r6 = Object.keys(t4).map((e4) => this.hook(e4, t4[e4]));
        return () => {
          for (const e4 of r6.splice(0, r6.length)) e4();
        };
      }
      removeHooks(e3) {
        const t4 = flatHooks(e3);
        for (const e4 in t4) this.removeHook(e4, t4[e4]);
      }
      removeAllHooks() {
        for (const e3 in this._hooks) delete this._hooks[e3];
      }
      callHook(e3, ...t4) {
        return t4.unshift(e3), this.callHookWith(serialTaskCaller, e3, ...t4);
      }
      callHookParallel(e3, ...t4) {
        return t4.unshift(e3), this.callHookWith(parallelTaskCaller, e3, ...t4);
      }
      callHookWith(e3, t4, ...r6) {
        const s5 = this._before || this._after ? { name: t4, args: r6, context: {} } : void 0;
        this._before && callEachWith(this._before, s5);
        const a5 = e3(t4 in this._hooks ? [...this._hooks[t4]] : [], r6);
        return a5 instanceof Promise ? a5.finally(() => {
          this._after && s5 && callEachWith(this._after, s5);
        }) : (this._after && s5 && callEachWith(this._after, s5), a5);
      }
      beforeEach(e3) {
        return this._before = this._before || [], this._before.push(e3), () => {
          if (void 0 !== this._before) {
            const t4 = this._before.indexOf(e3);
            -1 !== t4 && this._before.splice(t4, 1);
          }
        };
      }
      afterEach(e3) {
        return this._after = this._after || [], this._after.push(e3), () => {
          if (void 0 !== this._after) {
            const t4 = this._after.indexOf(e3);
            -1 !== t4 && this._after.splice(t4, 1);
          }
        };
      }
    };
    ar = globalThis;
    FetchError = class extends Error {
      static {
        __name(this, "FetchError");
      }
      constructor(e3, t4) {
        super(e3, t4), this.name = "FetchError", t4?.cause && !this.cause && (this.cause = t4.cause);
      }
    };
    ir2 = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
    __name(isPayloadMethod, "isPayloadMethod");
    cr2 = /* @__PURE__ */ new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]);
    ur2 = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
    __name(resolveFetchOptions, "resolveFetchOptions");
    __name(callHooks, "callHooks");
    lr2 = /* @__PURE__ */ new Set([408, 409, 425, 429, 500, 502, 503, 504]);
    dr2 = /* @__PURE__ */ new Set([101, 204, 205, 304]);
    __name(createFetch, "createFetch");
    hr2 = function() {
      if ("undefined" != typeof globalThis) return globalThis;
      if ("undefined" != typeof self) return self;
      if (void 0 !== ar) return ar;
      throw new Error("unable to locate global object");
    }();
    pr2 = hr2.fetch ? (...e3) => hr2.fetch(...e3) : () => Promise.reject(new Error("[ofetch] global.fetch is not supported!"));
    fr2 = hr2.Headers;
    mr2 = hr2.AbortController;
    __name(asyncCall, "asyncCall");
    __name(stringify, "stringify");
    createFetch({ fetch: pr2, Headers: fr2, AbortController: mr2 });
    yr2 = "base64:";
    __name(serializeRaw, "serializeRaw");
    __name(deserializeRaw, "deserializeRaw");
    gr2 = ["has", "hasItem", "get", "getItem", "getItemRaw", "set", "setItem", "setItemRaw", "del", "remove", "removeItem", "getMeta", "setMeta", "removeMeta", "getKeys", "clear", "mount", "unmount"];
    __name(normalizeKey$1, "normalizeKey$1");
    __name(joinKeys, "joinKeys");
    __name(normalizeBaseKey, "normalizeBaseKey");
    memory = /* @__PURE__ */ __name(() => {
      const e3 = /* @__PURE__ */ new Map();
      return { name: "memory", getInstance: /* @__PURE__ */ __name(() => e3, "getInstance"), hasItem: /* @__PURE__ */ __name((t4) => e3.has(t4), "hasItem"), getItem: /* @__PURE__ */ __name((t4) => e3.get(t4) ?? null, "getItem"), getItemRaw: /* @__PURE__ */ __name((t4) => e3.get(t4) ?? null, "getItemRaw"), setItem(t4, r6) {
        e3.set(t4, r6);
      }, setItemRaw(t4, r6) {
        e3.set(t4, r6);
      }, removeItem(t4) {
        e3.delete(t4);
      }, getKeys: /* @__PURE__ */ __name(() => [...e3.keys()], "getKeys"), clear() {
        e3.clear();
      }, dispose() {
        e3.clear();
      } };
    }, "memory");
    __name(watch, "watch");
    __name(dispose, "dispose");
    wr2 = {};
    normalizeKey = /* @__PURE__ */ __name(function(e3) {
      return e3 && e3.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
    }, "normalizeKey");
    vr2 = { getKeys: /* @__PURE__ */ __name(() => Promise.resolve(Object.keys(wr2)), "getKeys"), hasItem: /* @__PURE__ */ __name((e3) => (e3 = normalizeKey(e3), Promise.resolve(e3 in wr2)), "hasItem"), getItem: /* @__PURE__ */ __name((e3) => (e3 = normalizeKey(e3), Promise.resolve(wr2[e3] ? wr2[e3].import() : null)), "getItem"), getMeta: /* @__PURE__ */ __name((e3) => (e3 = normalizeKey(e3), Promise.resolve(wr2[e3] ? wr2[e3].meta : {})), "getMeta") };
    br2 = function(e3 = {}) {
      const t4 = { mounts: { "": e3.driver || memory() }, mountpoints: [""], watching: false, watchListeners: [], unwatch: {} }, getMount = /* @__PURE__ */ __name((e4) => {
        for (const r7 of t4.mountpoints) if (e4.startsWith(r7)) return { base: r7, relativeKey: e4.slice(r7.length), driver: t4.mounts[r7] };
        return { base: "", relativeKey: e4, driver: t4.mounts[""] };
      }, "getMount"), getMounts = /* @__PURE__ */ __name((e4, r7) => t4.mountpoints.filter((t5) => t5.startsWith(e4) || r7 && e4.startsWith(t5)).map((r8) => ({ relativeBase: e4.length > r8.length ? e4.slice(r8.length) : void 0, mountpoint: r8, driver: t4.mounts[r8] })), "getMounts"), onChange = /* @__PURE__ */ __name((e4, r7) => {
        if (t4.watching) {
          r7 = normalizeKey$1(r7);
          for (const s5 of t4.watchListeners) s5(e4, r7);
        }
      }, "onChange"), stopWatch = /* @__PURE__ */ __name(async () => {
        if (t4.watching) {
          for (const e4 in t4.unwatch) await t4.unwatch[e4]();
          t4.unwatch = {}, t4.watching = false;
        }
      }, "stopWatch"), runBatch = /* @__PURE__ */ __name((e4, t5, r7) => {
        const s5 = /* @__PURE__ */ new Map(), getBatch = /* @__PURE__ */ __name((e5) => {
          let t6 = s5.get(e5.base);
          return t6 || (t6 = { driver: e5.driver, base: e5.base, items: [] }, s5.set(e5.base, t6)), t6;
        }, "getBatch");
        for (const r8 of e4) {
          const e5 = "string" == typeof r8, s6 = normalizeKey$1(e5 ? r8 : r8.key), a5 = e5 ? void 0 : r8.value, c4 = e5 || !r8.options ? t5 : { ...t5, ...r8.options }, u4 = getMount(s6);
          getBatch(u4).items.push({ key: s6, value: a5, relativeKey: u4.relativeKey, options: c4 });
        }
        return Promise.all([...s5.values()].map((e5) => r7(e5))).then((e5) => e5.flat());
      }, "runBatch"), r6 = { hasItem(e4, t5 = {}) {
        e4 = normalizeKey$1(e4);
        const { relativeKey: r7, driver: s5 } = getMount(e4);
        return asyncCall(s5.hasItem, r7, t5);
      }, getItem(e4, t5 = {}) {
        e4 = normalizeKey$1(e4);
        const { relativeKey: r7, driver: s5 } = getMount(e4);
        return asyncCall(s5.getItem, r7, t5).then((e5) => destr(e5));
      }, getItems: /* @__PURE__ */ __name((e4, t5 = {}) => runBatch(e4, t5, (e5) => e5.driver.getItems ? asyncCall(e5.driver.getItems, e5.items.map((e6) => ({ key: e6.relativeKey, options: e6.options })), t5).then((t6) => t6.map((t7) => ({ key: joinKeys(e5.base, t7.key), value: destr(t7.value) }))) : Promise.all(e5.items.map((t6) => asyncCall(e5.driver.getItem, t6.relativeKey, t6.options).then((e6) => ({ key: t6.key, value: destr(e6) }))))), "getItems"), getItemRaw(e4, t5 = {}) {
        e4 = normalizeKey$1(e4);
        const { relativeKey: r7, driver: s5 } = getMount(e4);
        return s5.getItemRaw ? asyncCall(s5.getItemRaw, r7, t5) : asyncCall(s5.getItem, r7, t5).then((e5) => deserializeRaw(e5));
      }, async setItem(e4, t5, s5 = {}) {
        if (void 0 === t5) return r6.removeItem(e4);
        e4 = normalizeKey$1(e4);
        const { relativeKey: a5, driver: c4 } = getMount(e4);
        c4.setItem && (await asyncCall(c4.setItem, a5, stringify(t5), s5), c4.watch || onChange("update", e4));
      }, async setItems(e4, t5) {
        await runBatch(e4, t5, async (e5) => {
          if (e5.driver.setItems) return asyncCall(e5.driver.setItems, e5.items.map((e6) => ({ key: e6.relativeKey, value: stringify(e6.value), options: e6.options })), t5);
          e5.driver.setItem && await Promise.all(e5.items.map((t6) => asyncCall(e5.driver.setItem, t6.relativeKey, stringify(t6.value), t6.options)));
        });
      }, async setItemRaw(e4, t5, s5 = {}) {
        if (void 0 === t5) return r6.removeItem(e4, s5);
        e4 = normalizeKey$1(e4);
        const { relativeKey: a5, driver: c4 } = getMount(e4);
        if (c4.setItemRaw) await asyncCall(c4.setItemRaw, a5, t5, s5);
        else {
          if (!c4.setItem) return;
          await asyncCall(c4.setItem, a5, serializeRaw(t5), s5);
        }
        c4.watch || onChange("update", e4);
      }, async removeItem(e4, t5 = {}) {
        "boolean" == typeof t5 && (t5 = { removeMeta: t5 }), e4 = normalizeKey$1(e4);
        const { relativeKey: r7, driver: s5 } = getMount(e4);
        s5.removeItem && (await asyncCall(s5.removeItem, r7, t5), (t5.removeMeta || t5.removeMata) && await asyncCall(s5.removeItem, r7 + "$", t5), s5.watch || onChange("remove", e4));
      }, async getMeta(e4, t5 = {}) {
        "boolean" == typeof t5 && (t5 = { nativeOnly: t5 }), e4 = normalizeKey$1(e4);
        const { relativeKey: r7, driver: s5 } = getMount(e4), a5 = /* @__PURE__ */ Object.create(null);
        if (s5.getMeta && Object.assign(a5, await asyncCall(s5.getMeta, r7, t5)), !t5.nativeOnly) {
          const e5 = await asyncCall(s5.getItem, r7 + "$", t5).then((e6) => destr(e6));
          e5 && "object" == typeof e5 && ("string" == typeof e5.atime && (e5.atime = new Date(e5.atime)), "string" == typeof e5.mtime && (e5.mtime = new Date(e5.mtime)), Object.assign(a5, e5));
        }
        return a5;
      }, setMeta(e4, t5, r7 = {}) {
        return this.setItem(e4 + "$", t5, r7);
      }, removeMeta(e4, t5 = {}) {
        return this.removeItem(e4 + "$", t5);
      }, async getKeys(e4, t5 = {}) {
        e4 = normalizeBaseKey(e4);
        const r7 = getMounts(e4, true);
        let s5 = [];
        const a5 = [];
        let c4 = true;
        for (const e5 of r7) {
          e5.driver.flags?.maxDepth || (c4 = false);
          const r8 = await asyncCall(e5.driver.getKeys, e5.relativeBase, t5);
          for (const t6 of r8) {
            const r9 = e5.mountpoint + normalizeKey$1(t6);
            s5.some((e6) => r9.startsWith(e6)) || a5.push(r9);
          }
          s5 = [e5.mountpoint, ...s5.filter((t6) => !t6.startsWith(e5.mountpoint))];
        }
        const u4 = void 0 !== t5.maxDepth && !c4;
        return a5.filter((r8) => (!u4 || function(e5, t6) {
          if (void 0 === t6) return true;
          let r9 = 0, s6 = e5.indexOf(":");
          for (; s6 > -1; ) r9++, s6 = e5.indexOf(":", s6 + 1);
          return r9 <= t6;
        }(r8, t5.maxDepth)) && function(e5, t6) {
          return t6 ? e5.startsWith(t6) && "$" !== e5[e5.length - 1] : "$" !== e5[e5.length - 1];
        }(r8, e4));
      }, async clear(e4, t5 = {}) {
        e4 = normalizeBaseKey(e4), await Promise.all(getMounts(e4, false).map(async (e5) => {
          if (e5.driver.clear) return asyncCall(e5.driver.clear, e5.relativeBase, t5);
          if (e5.driver.removeItem) {
            const r7 = await e5.driver.getKeys(e5.relativeBase || "", t5);
            return Promise.all(r7.map((r8) => e5.driver.removeItem(r8, t5)));
          }
        }));
      }, async dispose() {
        await Promise.all(Object.values(t4.mounts).map((e4) => dispose(e4)));
      }, watch: /* @__PURE__ */ __name(async (e4) => (await (async () => {
        if (!t4.watching) {
          t4.watching = true;
          for (const e5 in t4.mounts) t4.unwatch[e5] = await watch(t4.mounts[e5], onChange, e5);
        }
      })(), t4.watchListeners.push(e4), async () => {
        t4.watchListeners = t4.watchListeners.filter((t5) => t5 !== e4), 0 === t4.watchListeners.length && await stopWatch();
      }), "watch"), async unwatch() {
        t4.watchListeners = [], await stopWatch();
      }, mount(e4, s5) {
        if ((e4 = normalizeBaseKey(e4)) && t4.mounts[e4]) throw new Error(`already mounted at ${e4}`);
        return e4 && (t4.mountpoints.push(e4), t4.mountpoints.sort((e5, t5) => t5.length - e5.length)), t4.mounts[e4] = s5, t4.watching && Promise.resolve(watch(s5, onChange, e4)).then((r7) => {
          t4.unwatch[e4] = r7;
        }).catch(console.error), r6;
      }, async unmount(e4, r7 = true) {
        (e4 = normalizeBaseKey(e4)) && t4.mounts[e4] && (t4.watching && e4 in t4.unwatch && (t4.unwatch[e4]?.(), delete t4.unwatch[e4]), r7 && await dispose(t4.mounts[e4]), t4.mountpoints = t4.mountpoints.filter((t5) => t5 !== e4), delete t4.mounts[e4]);
      }, getMount(e4 = "") {
        e4 = normalizeKey$1(e4) + ":";
        const t5 = getMount(e4);
        return { driver: t5.driver, base: t5.base };
      }, getMounts(e4 = "", t5 = {}) {
        e4 = normalizeKey$1(e4);
        return getMounts(e4, t5.parents).map((e5) => ({ driver: e5.driver, base: e5.mountpoint }));
      }, keys: /* @__PURE__ */ __name((e4, t5 = {}) => r6.getKeys(e4, t5), "keys"), get: /* @__PURE__ */ __name((e4, t5 = {}) => r6.getItem(e4, t5), "get"), set: /* @__PURE__ */ __name((e4, t5, s5 = {}) => r6.setItem(e4, t5, s5), "set"), has: /* @__PURE__ */ __name((e4, t5 = {}) => r6.hasItem(e4, t5), "has"), del: /* @__PURE__ */ __name((e4, t5 = {}) => r6.removeItem(e4, t5), "del"), remove: /* @__PURE__ */ __name((e4, t5 = {}) => r6.removeItem(e4, t5), "remove") };
      return r6;
    }({});
    __name(useStorage, "useStorage");
    br2.mount("/assets", vr2);
    _r2 = [1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225];
    xr2 = [1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998];
    kr2 = [];
    k3 = class {
      static {
        __name(this, "k");
      }
      _data = new l4();
      _hash = new l4([..._r2]);
      _nDataBytes = 0;
      _minBufferSize = 0;
      finalize(e3) {
        e3 && this._append(e3);
        const t4 = 8 * this._nDataBytes, r6 = 8 * this._data.sigBytes;
        return this._data.words[r6 >>> 5] |= 128 << 24 - r6 % 32, this._data.words[14 + (r6 + 64 >>> 9 << 4)] = Math.floor(t4 / 4294967296), this._data.words[15 + (r6 + 64 >>> 9 << 4)] = t4, this._data.sigBytes = 4 * this._data.words.length, this._process(), this._hash;
      }
      _doProcessBlock(e3, t4) {
        const r6 = this._hash.words;
        let s5 = r6[0], a5 = r6[1], c4 = r6[2], u4 = r6[3], d4 = r6[4], h4 = r6[5], f4 = r6[6], m5 = r6[7];
        for (let r7 = 0; r7 < 64; r7++) {
          if (r7 < 16) kr2[r7] = 0 | e3[t4 + r7];
          else {
            const e4 = kr2[r7 - 15], t5 = (e4 << 25 | e4 >>> 7) ^ (e4 << 14 | e4 >>> 18) ^ e4 >>> 3, s6 = kr2[r7 - 2], a6 = (s6 << 15 | s6 >>> 17) ^ (s6 << 13 | s6 >>> 19) ^ s6 >>> 10;
            kr2[r7] = t5 + kr2[r7 - 7] + a6 + kr2[r7 - 16];
          }
          const g3 = s5 & a5 ^ s5 & c4 ^ a5 & c4, _3 = (s5 << 30 | s5 >>> 2) ^ (s5 << 19 | s5 >>> 13) ^ (s5 << 10 | s5 >>> 22), x3 = m5 + ((d4 << 26 | d4 >>> 6) ^ (d4 << 21 | d4 >>> 11) ^ (d4 << 7 | d4 >>> 25)) + (d4 & h4 ^ ~d4 & f4) + xr2[r7] + kr2[r7];
          m5 = f4, f4 = h4, h4 = d4, d4 = u4 + x3 | 0, u4 = c4, c4 = a5, a5 = s5, s5 = x3 + (_3 + g3) | 0;
        }
        r6[0] = r6[0] + s5 | 0, r6[1] = r6[1] + a5 | 0, r6[2] = r6[2] + c4 | 0, r6[3] = r6[3] + u4 | 0, r6[4] = r6[4] + d4 | 0, r6[5] = r6[5] + h4 | 0, r6[6] = r6[6] + f4 | 0, r6[7] = r6[7] + m5 | 0;
      }
      _append(e3) {
        "string" == typeof e3 && (e3 = l4.fromUtf8(e3)), this._data.concat(e3), this._nDataBytes += e3.sigBytes;
      }
      _process(e3) {
        let t4, r6 = this._data.sigBytes / 64;
        r6 = e3 ? Math.ceil(r6) : Math.max((0 | r6) - this._minBufferSize, 0);
        const s5 = 16 * r6, a5 = Math.min(4 * s5, this._data.sigBytes);
        if (s5) {
          for (let e4 = 0; e4 < s5; e4 += 16) this._doProcessBlock(this._data.words, e4);
          t4 = this._data.words.splice(0, s5), this._data.sigBytes -= a5;
        }
        return new l4(t4, a5);
      }
    };
    l4 = class _l2 {
      static {
        __name(this, "l");
      }
      words;
      sigBytes;
      constructor(e3, t4) {
        e3 = this.words = e3 || [], this.sigBytes = void 0 === t4 ? 4 * e3.length : t4;
      }
      static fromUtf8(e3) {
        const t4 = unescape(encodeURIComponent(e3)), r6 = t4.length, s5 = [];
        for (let e4 = 0; e4 < r6; e4++) s5[e4 >>> 2] |= (255 & t4.charCodeAt(e4)) << 24 - e4 % 4 * 8;
        return new _l2(s5, r6);
      }
      toBase64() {
        const e3 = [];
        for (let t4 = 0; t4 < this.sigBytes; t4 += 3) {
          const r6 = (this.words[t4 >>> 2] >>> 24 - t4 % 4 * 8 & 255) << 16 | (this.words[t4 + 1 >>> 2] >>> 24 - (t4 + 1) % 4 * 8 & 255) << 8 | this.words[t4 + 2 >>> 2] >>> 24 - (t4 + 2) % 4 * 8 & 255;
          for (let s5 = 0; s5 < 4 && 8 * t4 + 6 * s5 < 8 * this.sigBytes; s5++) e3.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(r6 >>> 6 * (3 - s5) & 63));
        }
        return e3.join("");
      }
      concat(e3) {
        if (this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8, this.words.length = Math.ceil(this.sigBytes / 4), this.sigBytes % 4) for (let t4 = 0; t4 < e3.sigBytes; t4++) {
          const r6 = e3.words[t4 >>> 2] >>> 24 - t4 % 4 * 8 & 255;
          this.words[this.sigBytes + t4 >>> 2] |= r6 << 24 - (this.sigBytes + t4) % 4 * 8;
        }
        else for (let t4 = 0; t4 < e3.sigBytes; t4 += 4) this.words[this.sigBytes + t4 >>> 2] = e3.words[t4 >>> 2];
        this.sigBytes += e3.sigBytes;
      }
    };
    Rr2 = (() => {
      class Hasher2 {
        static {
          __name(this, "Hasher2");
        }
        buff = "";
        #o = /* @__PURE__ */ new Map();
        write(e3) {
          this.buff += e3;
        }
        dispatch(e3) {
          return this[null === e3 ? "null" : typeof e3](e3);
        }
        object(e3) {
          if (e3 && "function" == typeof e3.toJSON) return this.object(e3.toJSON());
          const t4 = Object.prototype.toString.call(e3);
          let r6 = "";
          const a5 = t4.length;
          r6 = a5 < 10 ? "unknown:[" + t4 + "]" : t4.slice(8, a5 - 1), r6 = r6.toLowerCase();
          let c4 = null;
          if (void 0 !== (c4 = this.#o.get(e3))) return this.dispatch("[CIRCULAR:" + c4 + "]");
          if (this.#o.set(e3, this.#o.size), void 0 !== s4 && s4.isBuffer && s4.isBuffer(e3)) return this.write("buffer:"), this.write(e3.toString("utf8"));
          if ("object" !== r6 && "function" !== r6 && "asyncfunction" !== r6) this[r6] ? this[r6](e3) : this.unknown(e3, r6);
          else {
            const t5 = Object.keys(e3).sort(), r7 = [];
            this.write("object:" + (t5.length + r7.length) + ":");
            const dispatchForKey = /* @__PURE__ */ __name((t6) => {
              this.dispatch(t6), this.write(":"), this.dispatch(e3[t6]), this.write(",");
            }, "dispatchForKey");
            for (const e4 of t5) dispatchForKey(e4);
            for (const e4 of r7) dispatchForKey(e4);
          }
        }
        array(e3, t4) {
          if (t4 = void 0 !== t4 && t4, this.write("array:" + e3.length + ":"), !t4 || e3.length <= 1) {
            for (const t5 of e3) this.dispatch(t5);
            return;
          }
          const r6 = /* @__PURE__ */ new Map(), s5 = e3.map((e4) => {
            const t5 = new Hasher2();
            t5.dispatch(e4);
            for (const [e5, s6] of t5.#o) r6.set(e5, s6);
            return t5.toString();
          });
          return this.#o = r6, s5.sort(), this.array(s5, false);
        }
        date(e3) {
          return this.write("date:" + e3.toJSON());
        }
        symbol(e3) {
          return this.write("symbol:" + e3.toString());
        }
        unknown(e3, t4) {
          if (this.write(t4), e3) return this.write(":"), e3 && "function" == typeof e3.entries ? this.array([...e3.entries()], true) : void 0;
        }
        error(e3) {
          return this.write("error:" + e3.toString());
        }
        boolean(e3) {
          return this.write("bool:" + e3);
        }
        string(e3) {
          this.write("string:" + e3.length + ":"), this.write(e3);
        }
        function(e3) {
          this.write("fn:"), !function(e4) {
            if ("function" != typeof e4) return false;
            return "[native code] }" === Function.prototype.toString.call(e4).slice(-15);
          }(e3) ? this.dispatch(e3.toString()) : this.dispatch("[native]");
        }
        number(e3) {
          return this.write("number:" + e3);
        }
        null() {
          return this.write("Null");
        }
        undefined() {
          return this.write("Undefined");
        }
        regexp(e3) {
          return this.write("regex:" + e3.toString());
        }
        arraybuffer(e3) {
          return this.write("arraybuffer:"), this.dispatch(new Uint8Array(e3));
        }
        url(e3) {
          return this.write("url:" + e3.toString());
        }
        map(e3) {
          this.write("map:");
          const t4 = [...e3];
          return this.array(t4, false);
        }
        set(e3) {
          this.write("set:");
          const t4 = [...e3];
          return this.array(t4, false);
        }
        bigint(e3) {
          return this.write("bigint:" + e3.toString());
        }
      }
      for (const e3 of ["uint8array", "uint8clampedarray", "unt8array", "uint16array", "unt16array", "uint32array", "unt32array", "float32array", "float64array"]) Hasher2.prototype[e3] = function(t4) {
        return this.write(e3 + ":"), this.array([...t4], false);
      };
      return Hasher2;
    })();
    __name(hash, "hash");
    __name(defineCachedFunction, "defineCachedFunction");
    __name(getKey, "getKey");
    __name(escapeKey, "escapeKey");
    __name(cloneWithProxy, "cloneWithProxy");
    cachedEventHandler = /* @__PURE__ */ __name(function(e3, t4 = { name: "_", base: "/cache", swr: true, maxAge: 1 }) {
      const r6 = (t4.varies || []).filter(Boolean).map((e4) => e4.toLowerCase()).sort(), s5 = { ...t4, getKey: /* @__PURE__ */ __name(async (e4) => {
        const s6 = await t4.getKey?.(e4);
        if (s6) return escapeKey(s6);
        const a6 = e4.node.req.originalUrl || e4.node.req.url || e4.path;
        let c4;
        try {
          c4 = escapeKey(decodeURI(parseURL(a6).pathname)).slice(0, 16) || "index";
        } catch {
          c4 = "-";
        }
        return [`${c4}.${hash(a6)}`, ...r6.map((t5) => [t5, e4.node.req.headers[t5]]).map(([e5, t5]) => `${escapeKey(e5)}.${hash(t5)}`)].join(":");
      }, "getKey"), validate: /* @__PURE__ */ __name((e4) => !!e4.value && (!(e4.value.code >= 400) && (void 0 !== e4.value.body && ("undefined" !== e4.value.headers.etag && "undefined" !== e4.value.headers["last-modified"]))), "validate"), group: t4.group || "nitro/handlers", integrity: t4.integrity || hash([e3, t4]) }, a5 = function(e4, t5 = {}) {
        return defineCachedFunction(e4, t5);
      }(async (a6) => {
        const c4 = {};
        for (const e4 of r6) {
          const t5 = a6.node.req.headers[e4];
          void 0 !== t5 && (c4[e4] = t5);
        }
        const u4 = cloneWithProxy(a6.node.req, { headers: c4 }), d4 = {};
        let h4;
        const f4 = createEvent(u4, cloneWithProxy(a6.node.res, { statusCode: 200, writableEnded: false, writableFinished: false, headersSent: false, closed: false, getHeader: /* @__PURE__ */ __name((e4) => d4[e4], "getHeader"), setHeader(e4, t5) {
          return d4[e4] = t5, this;
        }, getHeaderNames: /* @__PURE__ */ __name(() => Object.keys(d4), "getHeaderNames"), hasHeader: /* @__PURE__ */ __name((e4) => e4 in d4, "hasHeader"), removeHeader(e4) {
          delete d4[e4];
        }, getHeaders: /* @__PURE__ */ __name(() => d4, "getHeaders"), end(e4, t5, r7) {
          return "string" == typeof e4 && (h4 = e4), "function" == typeof t5 && t5(), "function" == typeof r7 && r7(), this;
        }, write: /* @__PURE__ */ __name((e4, t5, r7) => ("string" == typeof e4 && (h4 = e4), "function" == typeof t5 && t5(void 0), "function" == typeof r7 && r7(), true), "write"), writeHead(e4, t5) {
          if (this.statusCode = e4, t5) {
            if (Array.isArray(t5) || "string" == typeof t5) throw new TypeError("Raw headers  is not supported.");
            for (const e5 in t5) {
              const r7 = t5[e5];
              void 0 !== r7 && this.setHeader(e5, r7);
            }
          }
          return this;
        } }));
        f4.fetch = (e4, t5) => fetchWithEvent(f4, e4, t5, { fetch: useNitroApp().localFetch }), f4.$fetch = (e4, t5) => fetchWithEvent(f4, e4, t5, { fetch: globalThis.$fetch }), f4.waitUntil = a6.waitUntil, f4.context = a6.context, f4.context.cache = { options: s5 };
        const m5 = await e3(f4) || h4, g3 = f4.node.res.getHeaders();
        g3.etag = String(g3.Etag || g3.etag || `W/"${hash(m5)}"`), g3["last-modified"] = String(g3["Last-Modified"] || g3["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString());
        const _3 = [];
        t4.swr ? (t4.maxAge && _3.push(`s-maxage=${t4.maxAge}`), t4.staleMaxAge ? _3.push(`stale-while-revalidate=${t4.staleMaxAge}`) : _3.push("stale-while-revalidate")) : t4.maxAge && _3.push(`max-age=${t4.maxAge}`), _3.length > 0 && (g3["cache-control"] = _3.join(", "));
        return { code: f4.node.res.statusCode, headers: g3, body: m5 };
      }, s5);
      return defineEventHandler(async (r7) => {
        if (t4.headersOnly) {
          if (handleCacheHeaders(r7, { maxAge: t4.maxAge })) return;
          return e3(r7);
        }
        const s6 = await a5(r7);
        if (r7.node.res.headersSent || r7.node.res.writableEnded) return s6.body;
        if (!handleCacheHeaders(r7, { modifiedTime: new Date(s6.headers["last-modified"]), etag: s6.headers.etag, maxAge: t4.maxAge })) {
          r7.node.res.statusCode = s6.code;
          for (const e4 in s6.headers) {
            const t5 = s6.headers[e4];
            "set-cookie" === e4 ? r7.node.res.appendHeader(e4, splitCookiesString2(t5)) : void 0 !== t5 && r7.node.res.setHeader(e4, t5);
          }
          return s6.body;
        }
      });
    }, "cachedEventHandler");
    __name(klona, "klona");
    Cr2 = Lt2({});
    Er2 = /\d/;
    jr2 = ["-", "_", "/", "."];
    __name(isUppercase, "isUppercase");
    __name(kebabCase, "kebabCase");
    __name(getEnv, "getEnv");
    __name(_isObject, "_isObject");
    Tr2 = /\{\{([^{}]*)\}\}/g;
    __name(_expandFromEnv, "_expandFromEnv");
    Sr2 = { app: { baseURL: "/" }, nitro: { routeRules: {} } };
    Ar2 = { prefix: "NITRO_", altPrefix: Sr2.nitro.envPrefix ?? g.env.NITRO_ENV_PREFIX ?? "_", envExpansion: Sr2.nitro.envExpansion ?? g.env.NITRO_ENV_EXPANSION ?? false };
    Hr2 = _deepFreeze((/* @__PURE__ */ __name(function applyEnv(e3, t4, r6 = "") {
      for (const s5 in e3) {
        const a5 = r6 ? `${r6}_${s5}` : s5, c4 = getEnv(a5, t4);
        _isObject(e3[s5]) ? _isObject(c4) ? (e3[s5] = { ...e3[s5], ...c4 }, applyEnv(e3[s5], t4, a5)) : void 0 === c4 ? applyEnv(e3[s5], t4, a5) : e3[s5] = c4 ?? e3[s5] : e3[s5] = c4 ?? e3[s5], t4.envExpansion && "string" == typeof e3[s5] && (e3[s5] = _expandFromEnv(e3[s5]));
      }
      return e3;
    }, "applyEnv"))(klona(Sr2), Ar2));
    __name(useRuntimeConfig, "useRuntimeConfig");
    __name(_deepFreeze, "_deepFreeze");
    _deepFreeze(klona(Cr2)), new Proxy(/* @__PURE__ */ Object.create(null), { get: /* @__PURE__ */ __name((e3, t4) => {
      console.warn("Please use `useRuntimeConfig()` instead of accessing config directly.");
      const r6 = useRuntimeConfig();
      if (t4 in r6) return r6[t4];
    }, "get") });
    Ir2 = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : void 0 !== ar ? ar : {};
    Pr2 = "__unctx__";
    Mr2 = Ir2[Pr2] || (Ir2[Pr2] = /* @__PURE__ */ function(e3 = {}) {
      const t4 = {};
      return { get: /* @__PURE__ */ __name((r6, s5 = {}) => (t4[r6] || (t4[r6] = function(e4 = {}) {
        let t5, r7 = false;
        const checkConflict = /* @__PURE__ */ __name((e5) => {
          if (t5 && t5 !== e5) throw new Error("Context conflict");
        }, "checkConflict");
        let s6;
        if (e4.asyncContext) {
          const t6 = e4.AsyncLocalStorage || globalThis.AsyncLocalStorage;
          t6 ? s6 = new t6() : console.warn("[unctx] `AsyncLocalStorage` is not provided.");
        }
        const _getCurrentInstance = /* @__PURE__ */ __name(() => {
          if (s6) {
            const e5 = s6.getStore();
            if (void 0 !== e5) return e5;
          }
          return t5;
        }, "_getCurrentInstance");
        return { use: /* @__PURE__ */ __name(() => {
          const e5 = _getCurrentInstance();
          if (void 0 === e5) throw new Error("Context is not available");
          return e5;
        }, "use"), tryUse: /* @__PURE__ */ __name(() => _getCurrentInstance(), "tryUse"), set: /* @__PURE__ */ __name((e5, s7) => {
          s7 || checkConflict(e5), t5 = e5, r7 = true;
        }, "set"), unset: /* @__PURE__ */ __name(() => {
          t5 = void 0, r7 = false;
        }, "unset"), call: /* @__PURE__ */ __name((e5, a5) => {
          checkConflict(e5), t5 = e5;
          try {
            return s6 ? s6.run(e5, a5) : a5();
          } finally {
            r7 || (t5 = void 0);
          }
        }, "call"), async callAsync(e5, a5) {
          t5 = e5;
          const onRestore = /* @__PURE__ */ __name(() => {
            t5 = e5;
          }, "onRestore"), onLeave = /* @__PURE__ */ __name(() => t5 === e5 ? onRestore : void 0, "onLeave");
          Br2.add(onLeave);
          try {
            const c4 = s6 ? s6.run(e5, a5) : a5();
            return r7 || (t5 = void 0), await c4;
          } finally {
            Br2.delete(onLeave);
          }
        } };
      }({ ...e3, ...s5 })), t4[r6]), "get") };
    }());
    Or2 = "__unctx_async_handlers__";
    Br2 = Ir2[Or2] || (Ir2[Or2] = /* @__PURE__ */ new Set());
    ((e3, t4 = {}) => {
      Mr2.get(e3, t4);
    })("nitro-app", { asyncContext: void 0, AsyncLocalStorage: void 0 });
    Nr2 = toRouteMatcher(createRouter$1({ routes: useRuntimeConfig().nitro.routeRules }));
    __name(createRouteRulesHandler, "createRouteRulesHandler");
    __name(getRouteRulesForPath, "getRouteRulesForPath");
    zr2 = /post|put|patch/i;
    __name(joinHeaders, "joinHeaders");
    __name(normalizeCookieHeader, "normalizeCookieHeader");
    __name(normalizeCookieHeaders, "normalizeCookieHeaders");
    __name(defaultHandler, "defaultHandler");
    Ur2 = [function(e3, t4) {
      const r6 = defaultHandler(e3, t4);
      return setResponseHeaders(t4, r6.headers), setResponseStatus(t4, r6.status, r6.statusText), send2(t4, JSON.stringify(r6.body, null, 2));
    }];
    qr2 = [];
    Dr2 = [{ route: "/**", handler: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_ssr(), ssr_exports)).then(function(e3) {
      return e3.s;
    }), "handler"), lazy: true, middleware: false, method: void 0 }];
    Lr2 = function() {
      const e3 = useRuntimeConfig(), t4 = new Hookable(), captureError = /* @__PURE__ */ __name((e4, r7 = {}) => {
        const s6 = t4.callHookParallel("error", e4, r7).catch((e5) => {
          console.error("Error while capturing another error", e5);
        });
        if (r7.event && isEvent(r7.event)) {
          const t5 = r7.event.context.nitro?.errors;
          t5 && t5.push({ error: e4, context: r7 }), r7.event.waitUntil && r7.event.waitUntil(s6);
        }
      }, "captureError"), r6 = createApp({ debug: destr(false), onError: /* @__PURE__ */ __name((e4, t5) => (captureError(e4, { event: t5, tags: ["request"] }), async function(e5, t6) {
        for (const r7 of Ur2) try {
          if (await r7(e5, t6, { defaultHandler }), t6.handled) return;
        } catch (e6) {
          console.error(e6);
        }
      }(e4, t5)), "onError"), onRequest: /* @__PURE__ */ __name(async (e4) => {
        e4.context.nitro = e4.context.nitro || { errors: [] };
        const t5 = e4.node.req?.__unenv__;
        t5?._platform && (e4.context = { _platform: t5?._platform, ...t5._platform, ...e4.context }), !e4.context.waitUntil && t5?.waitUntil && (e4.context.waitUntil = t5.waitUntil), e4.fetch = (t6, r7) => fetchWithEvent(e4, t6, r7, { fetch: localFetch }), e4.$fetch = (t6, r7) => fetchWithEvent(e4, t6, r7, { fetch: c4 }), e4.waitUntil = (t6) => {
          e4.context.nitro._waitUntilPromises || (e4.context.nitro._waitUntilPromises = []), e4.context.nitro._waitUntilPromises.push(t6), e4.context.waitUntil && e4.context.waitUntil(t6);
        }, e4.captureError = (t6, r7) => {
          captureError(t6, { event: e4, ...r7 });
        }, await Lr2.hooks.callHook("request", e4).catch((t6) => {
          captureError(t6, { event: e4, tags: ["request"] });
        });
      }, "onRequest"), onBeforeResponse: /* @__PURE__ */ __name(async (e4, t5) => {
        await Lr2.hooks.callHook("beforeResponse", e4, t5).catch((t6) => {
          captureError(t6, { event: e4, tags: ["request", "response"] });
        });
      }, "onBeforeResponse"), onAfterResponse: /* @__PURE__ */ __name(async (e4, t5) => {
        await Lr2.hooks.callHook("afterResponse", e4, t5).catch((t6) => {
          captureError(t6, { event: e4, tags: ["request", "response"] });
        });
      }, "onAfterResponse") }), s5 = function(e4 = {}) {
        const t5 = createRouter$1({}), r7 = {};
        let s6;
        const a6 = {}, addRoute = /* @__PURE__ */ __name((e5, s7, c6) => {
          let u4 = r7[e5];
          if (u4 || (r7[e5] = u4 = { path: e5, handlers: {} }, t5.insert(e5, u4)), Array.isArray(c6)) for (const t6 of c6) addRoute(e5, s7, t6);
          else u4.handlers[c6] = toEventHandler(s7, 0, e5);
          return a6;
        }, "addRoute");
        a6.use = a6.add = (e5, t6, r8) => addRoute(e5, t6, r8 || "all");
        for (const e5 of sr2) a6[e5] = (t6, r8) => a6.add(t6, r8, e5);
        const matchHandler = /* @__PURE__ */ __name((e5 = "/", r8 = "get") => {
          const a7 = e5.indexOf("?");
          -1 !== a7 && (e5 = e5.slice(0, Math.max(0, a7)));
          const c6 = t5.lookup(e5);
          if (!c6 || !c6.handlers) return { error: createError({ statusCode: 404, name: "Not Found", statusMessage: `Cannot find any route matching ${e5 || "/"}.` }) };
          let u4 = c6.handlers[r8] || c6.handlers.all;
          if (!u4) {
            s6 || (s6 = toRouteMatcher(t5));
            const a8 = s6.matchAll(e5).reverse();
            for (const e6 of a8) {
              if (e6.handlers[r8]) {
                u4 = e6.handlers[r8], c6.handlers[r8] = c6.handlers[r8] || u4;
                break;
              }
              if (e6.handlers.all) {
                u4 = e6.handlers.all, c6.handlers.all = c6.handlers.all || u4;
                break;
              }
            }
          }
          return u4 ? { matched: c6, handler: u4 } : { error: createError({ statusCode: 405, name: "Method Not Allowed", statusMessage: `Method ${r8} is not allowed on this route.` }) };
        }, "matchHandler"), c5 = e4.preemptive || e4.preemtive;
        return a6.handler = rr2((e5) => {
          const t6 = matchHandler(e5.path, e5.method.toLowerCase());
          if ("error" in t6) {
            if (c5) throw t6.error;
            return;
          }
          e5.context.matchedRoute = t6.matched;
          const r8 = t6.matched.params || {};
          return e5.context.params = r8, Promise.resolve(t6.handler(e5)).then((e6) => void 0 === e6 && c5 ? null : e6);
        }), a6.handler.__resolve__ = async (e5) => {
          e5 = function(e6 = "") {
            return function(e7 = "") {
              return e7.startsWith("/");
            }(e6) ? e6 : "/" + e6;
          }(e5);
          const t6 = matchHandler(e5);
          if ("error" in t6) return;
          let r8 = { route: t6.matched.path, handler: t6.handler };
          if (t6.handler.__resolve__) {
            const s7 = await t6.handler.__resolve__(e5);
            if (!s7) return;
            r8 = { ...r8, ...s7 };
          }
          return r8;
        }, a6;
      }({ preemptive: true }), a5 = toNodeListener(r6), localFetch = /* @__PURE__ */ __name((e4, t5) => e4.toString().startsWith("/") ? async function(e5, t6, r7 = {}) {
        try {
          const s6 = await b2(e5, { url: t6, ...r7 });
          return new Response(s6.body, { status: s6.status, statusText: s6.statusText, headers: v2(s6.headers) });
        } catch (e6) {
          return new Response(e6.toString(), { status: Number.parseInt(e6.statusCode || e6.code) || 500, statusText: e6.statusText });
        }
      }(a5, e4, t5).then((e5) => function(e6) {
        return e6.headers.has("set-cookie") ? new Response(e6.body, { status: e6.status, statusText: e6.statusText, headers: normalizeCookieHeaders(e6.headers) }) : e6;
      }(e5)) : globalThis.fetch(e4, t5), "localFetch"), c4 = createFetch({ fetch: localFetch, Headers: fr2, defaults: { baseURL: e3.app.baseURL } });
      globalThis.$fetch = c4, r6.use(createRouteRulesHandler({ localFetch }));
      for (const t5 of Dr2) {
        let a6 = t5.lazy ? lazyEventHandler(t5.handler) : t5.handler;
        if (t5.middleware || !t5.route) {
          const s6 = (e3.app.baseURL + (t5.route || "/")).replace(/\/+/g, "/");
          r6.use(s6, a6);
        } else {
          const e4 = getRouteRulesForPath(t5.route.replace(/:\w+|\*\*/g, "_"));
          e4.cache && (a6 = cachedEventHandler(a6, { group: "nitro/routes", ...e4.cache })), s5.use(t5.route, a6, t5.method);
        }
      }
      return r6.use(e3.app.baseURL, s5.handler), { hooks: t4, h3App: r6, router: s5, localCall: /* @__PURE__ */ __name((e4) => b2(a5, e4), "localCall"), localFetch, captureError };
    }();
    __name(useNitroApp, "useNitroApp");
    !function(e3) {
      for (const t4 of qr2) try {
        t4(e3);
      } catch (t5) {
        throw e3.captureError(t5, { tags: ["plugin"] }), t5;
      }
    }(Lr2);
    $r2 = { "/android-chrome-192x192.png": { type: "image/png", etag: '"750c-oU2mem0jjZ8XbVMelLzRr7WdVPI"', mtime: "2025-08-01T07:15:14.088Z", size: 29964, path: "../public/android-chrome-192x192.png" }, "/android-chrome-512x512.png": { type: "image/png", etag: '"1aad7-TxqzM3JFMTytpE8GX+/4lMPNyzQ"', mtime: "2025-08-01T07:15:14.088Z", size: 109271, path: "../public/android-chrome-512x512.png" }, "/apple-touch-icon.png": { type: "image/png", etag: '"6a6e-DDBGYLGi+sElNLs2+1QICHz5lS4"', mtime: "2025-08-01T07:15:14.088Z", size: 27246, path: "../public/apple-touch-icon.png" }, "/favicon-16x16.png": { type: "image/png", etag: '"340-GSBMkU3R13NnICO2UG+wPm8sJhM"', mtime: "2025-08-01T07:15:14.088Z", size: 832, path: "../public/favicon-16x16.png" }, "/favicon-32x32.png": { type: "image/png", etag: '"843-o7V/FkCz36zCpGs0pydBZ+gbsCw"', mtime: "2025-08-01T07:15:14.088Z", size: 2115, path: "../public/favicon-32x32.png" }, "/favicon.ico": { type: "image/vnd.microsoft.icon", etag: '"3c2e-R2UvDwRFCsnzRE8fcnOLMp5+Svo"', mtime: "2025-08-01T07:15:14.088Z", size: 15406, path: "../public/favicon.ico" }, "/favicon.png": { type: "image/png", etag: '"5e3-23JXQ+bzISswdmRT9DhqqHtr9xM"', mtime: "2025-08-01T07:15:14.088Z", size: 1507, path: "../public/favicon.png" }, "/site.webmanifest": { type: "application/manifest+json", etag: '"168-OLZYaPbcgi7SF/odatSUJ7DocfI"', mtime: "2025-08-01T07:15:14.088Z", size: 360, path: "../public/site.webmanifest" }, "/.vite/manifest.json": { type: "application/json", etag: '"1d8e-DgJCVhN9UxBStwXabQem9p//3a8"', mtime: "2025-08-01T07:15:14.087Z", size: 7566, path: "../public/.vite/manifest.json" }, "/assets/PostError-CHWNsPkm.js": { type: "text/javascript; charset=utf-8", etag: '"6e-UIyfKF3UzBEvzf22/wVygnpBWVk"', mtime: "2025-08-01T07:15:14.087Z", size: 110, path: "../public/assets/PostError-CHWNsPkm.js" }, "/assets/_nested-layout-CVq09jQi.js": { type: "text/javascript; charset=utf-8", etag: '"1bc-X31YIPPm8OydhiwsdH3d1yxGO+4"', mtime: "2025-08-01T07:15:14.087Z", size: 444, path: "../public/assets/_nested-layout-CVq09jQi.js" }, "/assets/_pathlessLayout-C1BBDC7j.js": { type: "text/javascript; charset=utf-8", etag: '"ec-IMu5YxurkpVHExeSeUabSQCVce8"', mtime: "2025-08-01T07:15:14.087Z", size: 236, path: "../public/assets/_pathlessLayout-C1BBDC7j.js" }, "/assets/app-DACsPwZv.css": { type: "text/css; charset=utf-8", etag: '"1ca6-90ODHoCNkSQIBlHB8QkQZGKLOro"', mtime: "2025-08-01T07:15:14.087Z", size: 7334, path: "../public/assets/app-DACsPwZv.css" }, "/assets/deferred-CToh1yyv.js": { type: "text/javascript; charset=utf-8", etag: '"32f-cZz+HkERlmBQ0O49yB0SF/ZmiGo"', mtime: "2025-08-01T07:15:14.087Z", size: 815, path: "../public/assets/deferred-CToh1yyv.js" }, "/assets/index-Dinu5Yc9.js": { type: "text/javascript; charset=utf-8", etag: '"ab-NrtbZlTASx20uYvhp2P0XT840ns"', mtime: "2025-08-01T07:15:14.087Z", size: 171, path: "../public/assets/index-Dinu5Yc9.js" }, "/assets/main-DCuhvEql.js": { type: "text/javascript; charset=utf-8", etag: '"45ceb-eZ0cqNkSirBrtvDvJdmQyzQHNA4"', mtime: "2025-08-01T07:15:14.087Z", size: 285931, path: "../public/assets/main-DCuhvEql.js" }, "/assets/posts-OEAhklig.js": { type: "text/javascript; charset=utf-8", etag: '"25a-31t5+iurT3CkgvN2weXggb8xk8Q"', mtime: "2025-08-01T07:15:14.087Z", size: 602, path: "../public/assets/posts-OEAhklig.js" }, "/assets/posts._postId-CPPrfU7Y.js": { type: "text/javascript; charset=utf-8", etag: '"1ea-hpicZq+DnWHJ+PMK2qAqPDcWA/c"', mtime: "2025-08-01T07:15:14.087Z", size: 490, path: "../public/assets/posts._postId-CPPrfU7Y.js" }, "/assets/posts._postId-D0PZwTR9.js": { type: "text/javascript; charset=utf-8", etag: '"7f-Jh/RQgnKNrqGZOj4JG5RmNltPBg"', mtime: "2025-08-01T07:15:14.087Z", size: 127, path: "../public/assets/posts._postId-D0PZwTR9.js" }, "/assets/posts._postId-DLFQe-b1.js": { type: "text/javascript; charset=utf-8", etag: '"6e-RVni2ywxRwQb6BS+mlTHl1ZyAvc"', mtime: "2025-08-01T07:15:14.087Z", size: 110, path: "../public/assets/posts._postId-DLFQe-b1.js" }, "/assets/posts.index-jMj5uDvy.js": { type: "text/javascript; charset=utf-8", etag: '"83-TI3od8zG+HpJoH60bkX2tjg3vSE"', mtime: "2025-08-01T07:15:14.087Z", size: 131, path: "../public/assets/posts.index-jMj5uDvy.js" }, "/assets/posts_._postId.deep-C6sVB0kz.js": { type: "text/javascript; charset=utf-8", etag: '"6e-RVni2ywxRwQb6BS+mlTHl1ZyAvc"', mtime: "2025-08-01T07:15:14.087Z", size: 110, path: "../public/assets/posts_._postId.deep-C6sVB0kz.js" }, "/assets/posts_._postId.deep-Dfs7n1WQ.js": { type: "text/javascript; charset=utf-8", etag: '"19a-TlZVmEknvmWgtTkhVye9woltnUQ"', mtime: "2025-08-01T07:15:14.087Z", size: 410, path: "../public/assets/posts_._postId.deep-Dfs7n1WQ.js" }, "/assets/route-a-BZe4ChTW.js": { type: "text/javascript; charset=utf-8", etag: '"7b-BUrZVEKJtBVU8MWpSkod6HRnCDQ"', mtime: "2025-08-01T07:15:14.087Z", size: 123, path: "../public/assets/route-a-BZe4ChTW.js" }, "/assets/route-b-DY0yHOmW.js": { type: "text/javascript; charset=utf-8", etag: '"7b-Byv6Gk0Aeo0u8im+X9p2dHpvCzA"', mtime: "2025-08-01T07:15:14.087Z", size: 123, path: "../public/assets/route-b-DY0yHOmW.js" }, "/assets/users-iIv9iFVw.js": { type: "text/javascript; charset=utf-8", etag: '"259-NrDilKsb3KcX3ycJw8JzBMFteSo"', mtime: "2025-08-01T07:15:14.087Z", size: 601, path: "../public/assets/users-iIv9iFVw.js" }, "/assets/users._userId-BW3pwhKM.js": { type: "text/javascript; charset=utf-8", etag: '"85-xydpGjWF+ka5s3YacjZNc/u+/9w"', mtime: "2025-08-01T07:15:14.087Z", size: 133, path: "../public/assets/users._userId-BW3pwhKM.js" }, "/assets/users._userId-CEGizjh1.js": { type: "text/javascript; charset=utf-8", etag: '"7f-PY1zsjUrjGzuNZJHt3LaK5NbVYA"', mtime: "2025-08-01T07:15:14.087Z", size: 127, path: "../public/assets/users._userId-CEGizjh1.js" }, "/assets/users._userId-DknbiUyQ.js": { type: "text/javascript; charset=utf-8", etag: '"1b5-2hUZzKDQHXqDuGhA6hWMiHeT6+4"', mtime: "2025-08-01T07:15:14.087Z", size: 437, path: "../public/assets/users._userId-DknbiUyQ.js" }, "/assets/users.index-nCFcKKa_.js": { type: "text/javascript; charset=utf-8", etag: '"fb-44Uy3/dYK4U9PWCxvBrjPBl/EAM"', mtime: "2025-08-01T07:15:14.087Z", size: 251, path: "../public/assets/users.index-nCFcKKa_.js" } };
    Kr2 = {};
    Wr2 = function(e3) {
      const t4 = useNitroApp();
      return { async fetch(r6, a5, c4) {
        const u4 = {}, d4 = new URL(r6.url);
        if (e3.fetch) {
          const t5 = await e3.fetch(r6, a5, c4, d4, u4);
          if (t5) return t5;
        }
        return async function(e4, t5, r7, a6 = new URL(e4.url), c5 = useNitroApp(), u5) {
          let d5;
          (function(e5) {
            return zr2.test(e5.method);
          })(e4) && (d5 = s4.from(await e4.arrayBuffer()));
          return globalThis.__env__ = t5, c5.localFetch(a6.pathname + a6.search, { context: { waitUntil: /* @__PURE__ */ __name((e5) => r7.waitUntil(e5), "waitUntil"), _platform: { cf: e4.cf, cloudflare: { request: e4, env: t5, context: r7, url: a6, ...u5 } } }, host: a6.hostname, protocol: a6.protocol, method: e4.method, headers: e4.headers, body: d5 });
        }(r6, a5, c4, d4, t4, u4);
      }, scheduled(e4, r6, s5) {
        globalThis.__env__ = r6, s5.waitUntil(t4.hooks.callHook("cloudflare:scheduled", { controller: e4, env: r6, context: s5 }));
      }, email(e4, r6, s5) {
        globalThis.__env__ = r6, s5.waitUntil(t4.hooks.callHook("cloudflare:email", { message: e4, event: e4, env: r6, context: s5 }));
      }, queue(e4, r6, s5) {
        globalThis.__env__ = r6, s5.waitUntil(t4.hooks.callHook("cloudflare:queue", { batch: e4, event: e4, env: r6, context: s5 }));
      }, tail(e4, r6, s5) {
        globalThis.__env__ = r6, s5.waitUntil(t4.hooks.callHook("cloudflare:tail", { traces: e4, env: r6, context: s5 }));
      }, trace(e4, r6, s5) {
        globalThis.__env__ = r6, s5.waitUntil(t4.hooks.callHook("cloudflare:trace", { traces: e4, env: r6, context: s5 }));
      } };
    }({ fetch(e3, t4, r6, s5) {
      if (t4.ASSETS && function(e4 = "") {
        if ($r2[e4]) return true;
        for (const t5 in Kr2) if (e4.startsWith(t5)) return true;
        return false;
      }(s5.pathname)) return t4.ASSETS.fetch(e3);
    } });
  }
});

// .wrangler/tmp/bundle-6aIDjt/middleware-loader.entry.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// .wrangler/tmp/bundle-6aIDjt/middleware-insertion-facade.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// .output/server/index.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_nitro();
import "cloudflare:workers";
import "node:events";
import "node:buffer";
import "node:timers";
globalThis._importMeta_ = { url: "file:///_entry.js", env: {} };

// node_modules/.pnpm/wrangler@4.27.0/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var drainBody = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e3) {
      console.error("Failed to drain the unused request body.", e3);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/.pnpm/wrangler@4.27.0/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function reduceError(e3) {
  return {
    name: e3?.name,
    message: e3?.message ?? String(e3),
    stack: e3?.stack,
    cause: e3?.cause === void 0 ? void 0 : reduceError(e3.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } catch (e3) {
    const error3 = reduceError(e3);
    return Response.json(error3, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-6aIDjt/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = Wr2;

// node_modules/.pnpm/wrangler@4.27.0/node_modules/wrangler/templates/middleware/common.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env2, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env2, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env2, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env2, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-6aIDjt/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env2, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env2, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env2, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env2, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env2, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env2, ctx) => {
      this.env = env2;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=index.js.map
